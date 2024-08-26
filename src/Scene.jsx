import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { CylinderGeometry } from "three";
import * as THREE from "three";
const Scene = () => {
  let tex = useTexture("./project.png");
  tex.needsUpdate = true;
  let cyl = useRef(null);
  useFrame((state, delta) => {
    cyl.current.rotation.y += delta;
  });
  return (
    <group rotation={[0, 1.4, 0.5]}>
      <mesh ref={cyl}>
        <cylinderGeometry args={[2, 2, 2, 40, 40, true]} />
        <meshStandardMaterial map={tex} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Scene;
