import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { LDrawLoader } from "three/examples/jsm/loaders/LDrawLoader.js";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { LDrawConditionalLineMaterial } from "three/examples/jsm/materials/LDrawConditionalLineMaterial.js";
import { assignUVsAndGenerateTemplate } from "../utils/UVUtils";
import type { Status } from "../models/Status";

interface ViewerProps {
  modelPath: string;
  color: string;
  background: string;
  transparent: boolean;
  texture?: string;
  onMeshReady: (mesh: THREE.Mesh, uvMapDataURL: string) => void;
  onStatus: (status:Status) => void;
}

const Viewer: React.FC<ViewerProps> = ({
  modelPath,
  color,
  background,
  transparent,
  texture,
  onMeshReady,
  onStatus
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const rendererRef = useRef<THREE.WebGLRenderer>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  // scene setup (run once)
  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(background);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(150, 150, 150);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    // lights
    scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1.2));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(100, 200, 100).normalize();
    scene.add(dirLight);

    // animation loop
    function animate() {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    function onResize() {
      if (!mountRef.current || !rendererRef.current || !cameraRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    }
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []); // run once only

  // load model when modelPath changes
  useEffect(() => {
    if (!sceneRef.current) return;

    // remove old mesh if exists
    if (meshRef.current) {
      sceneRef.current.remove(meshRef.current);
      meshRef.current.geometry.dispose();
      (meshRef.current.material as THREE.Material).dispose();
    }

    const loader = new LDrawLoader();
    loader.setConditionalLineMaterial(LDrawConditionalLineMaterial);
    loader.setPartsLibraryPath("LDraw/");

    loader.load(
      modelPath,
      (group) => {
        const geometries: THREE.BufferGeometry[] = [];
        group.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.updateMatrix();
            geometries.push(child.geometry.clone().applyMatrix4(child.matrix));
          }
        });

        const mergedGeometry = mergeGeometries(geometries, true);
        const material = new THREE.MeshStandardMaterial();

        // Patch shader
        material.onBeforeCompile = (shader) => {
          shader.fragmentShader = shader.fragmentShader.replace(
            '#include <map_fragment>',
            `
              #ifdef USE_MAP
                vec4 texelColor = texture2D( map, vMapUv );

                // If texture pixel is visible, use it
                // If texture pixel is transparent, fall back to base color
                diffuseColor.rgb = mix( diffuseColor.rgb, texelColor.rgb, texelColor.a );
              #endif
            `
          );
        };

        updateMaterial(material, color, transparent, texture);

        const mesh = new THREE.Mesh(mergedGeometry, material);
        mesh.rotation.x = Math.PI;
        sceneRef.current!.add(mesh);
        meshRef.current = mesh;

        assignUVsAndGenerateTemplate(mesh, (uvMapDataURL) =>
          onMeshReady(mesh, uvMapDataURL)
        );
      },
      undefined,
      (error) => onStatus({
        message: `Error loading part: ${error}`,
        type: "error"
      })
    );
  }, [modelPath]);

  // update material when color / transparency / texture change
  useEffect(() => {
    if (!meshRef.current) return;
    const material = meshRef.current.material as THREE.MeshStandardMaterial;

    updateMaterial(material, color, transparent, texture);
  }, [color, transparent, texture]);

  // update background
  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.background = new THREE.Color(background);
    }
  }, [background]);

  return <div ref={mountRef} style={{ flex: 1 }} />;
};

export function updateMaterial(
  material: THREE.MeshStandardMaterial,
  color: string,
  transparent: boolean,
  texture?: string
) {
  // Base color & transparency
  material.color.set(color);
  material.opacity = transparent ? 0.5 : 1;
  material.transparent = transparent;
  material.side = transparent ? THREE.DoubleSide : THREE.FrontSide;

  // Texture handling
  if (texture) {
    const textureLoader = new THREE.TextureLoader();
    material.map = textureLoader.load((texture), (tex) => {
      tex.flipY = false;
      tex.minFilter = THREE.NearestFilter;
      tex.generateMipmaps = false;
    });
  } else {
    material.map = null;
  }

  material.needsUpdate = true; // 👈 important, forces recompile
}

export default Viewer;
