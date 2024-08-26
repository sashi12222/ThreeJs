import { Canvas } from "@react-three/fiber";
import React from "react";
import "./sytle.css";
import { Cylinder, OrbitControls, useTexture } from "@react-three/drei";
import Scene from "./Scene";
import { EffectComposer } from "@react-three/postprocessing";
import { Bloom } from "@react-three/postprocessing";
const App = () => {
  return (
    <>
      <Canvas camera={{ fov: 80 }}>
        <OrbitControls />
        <ambientLight />
        <Scene />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={12.0}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
        </EffectComposer>
      </Canvas>

      <div className="w-full bg-black py-32">
        <h1 className="text-white text-center text-5xl font-mono">
          Welcome to my portfolio
        </h1>
      </div>
    </>
  );
};

export default App;
