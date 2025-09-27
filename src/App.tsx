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
    loader.setConditionalLineMaterial( LDrawConditionalLineMaterial );
    
    loader.setPartsLibraryPath("/LDraw/");

    // Create the conditional line material
    // const conditionalMaterial = new ConditionalLineMaterial();
    // loader.setConditionalLineMaterial(conditionalMaterial);

    loader.load(
      "/LDraw/3001.dat",
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
  }, []);

  return (
    <div>
      <div ref={mountRef} style={{ width: "100vw", height: "100vh" }}></div>
      <input type="file" id="textureInput" accept="image/*" />
      <button
        onClick={() => {
          if (uvMapDataURL) {
            const link = document.createElement("a");
            link.href = uvMapDataURL;
            link.download = "uvmap.png";
            link.click();
          }
        }}
      >
        Download UV Map
      </button>
    </div>
  );
};

export default App;
