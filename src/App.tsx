import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { LDrawLoader } from "three/examples/jsm/loaders/LDrawLoader.js";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { LDrawConditionalLineMaterial } from "three/examples/jsm/materials/LDrawConditionalLineMaterial.js";
import { assignUVsAndGenerateTemplate } from "./uvUtils";

const App: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [uvMapDataURL, setUvMapDataURL] = useState<string>("");
  const [mesh, setMesh] = useState<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(150, 150, 150);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
    hemiLight.position.set(0, 200, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(100, 200, 100).normalize();
    scene.add(dirLight);

    const loader = new LDrawLoader();
    loader.setConditionalLineMaterial(LDrawConditionalLineMaterial);
    loader.setPartsLibraryPath("LDraw/");

    loader.load(
      "LDraw/3001.dat",
      (group) => {
        const geometries: THREE.BufferGeometry[] = [];
        group.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.updateMatrix();
            geometries.push(child.geometry.clone().applyMatrix4(child.matrix));
          }
        });

        const mergedGeometry = mergeGeometries(geometries, true);
        const mergedMesh = new THREE.Mesh(
          mergedGeometry,
          new THREE.MeshStandardMaterial({
            color: 0xffffff,
            opacity: 0.5,
            transparent: true,
          })
        );
        mergedMesh.rotation.x = Math.PI;
        scene.add(mergedMesh);

        setMesh(mergedMesh); // store mesh reference
        assignUVsAndGenerateTemplate(mergedMesh, setUvMapDataURL);
      },
      undefined,
      (error) => console.error("Error loading part:", error)
    );

    function animate() {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  const handleTextureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !mesh) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load(event.target?.result as string, () => {
        if (mesh) {
          mesh.material = new THREE.MeshStandardMaterial({
            map: texture,
            color: 0xffffff,
          });
          mesh.material.needsUpdate = true;
        }
      });
      texture.flipY = false;
      texture.minFilter = THREE.NearestFilter;
      texture.generateMipmaps = false;
    };
    reader.readAsDataURL(file);
  };

  const handleDownloadUV = () => {
    if (uvMapDataURL) {
      const link = document.createElement("a");
      link.href = uvMapDataURL;
      link.download = "uvmap.png";
      link.click();
    }
  };

  return (
    <div>
      <div ref={mountRef} style={{ width: "100vw", height: "100vh" }}></div>
      <div style={{ position: "absolute", top: 10, left: 10, zIndex: 10 }}>
        <input
          type="file"
          accept="image/*"
          onChange={handleTextureUpload}
        />
        <button onClick={handleDownloadUV}>Download UV Map</button>
      </div>
    </div>
  );
};

export default App;
