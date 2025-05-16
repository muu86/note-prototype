"use client"

import fragmentShader from "@/assets/leaves_fragment.glsl"
import blackholeFragmentShader from "@/assets/blackhole_fragment.glsl"

import vertexShader from "@/assets/leaves_vertex.glsl"
import texture from "@/assets/texture.png"
// import maskTexture from "@/assets/mask_texture.jpg"
// import maskTexture from "@/assets/mask_texture_2.png"
// import maskTexture from "@/assets/grungy-rough-weathered-distressed-wall-overlay-black-white-texture_867643-3471.avif"
// import maskTexture from "@/assets/modern-dark-black-watercolor-brush-stroke-white-background_1035-29339.avif"
// import maskTexture from "@/assets/ramas-de-árbol-la-caída-en-el-fondo-del-cielo-blanco-y-negro-130597438.webp"
import maskTexture from "@/assets/silhouette-leaf-on-backdrop-white-260nw-698449234.webp"
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber"
import { useEffect, useMemo, useRef } from "react"
import {
  ClampToEdgeWrapping,
  LinearFilter,
  RepeatWrapping,
  ShaderMaterial,
  TextureLoader,
  Vector2,
} from "three"

export function Leaves() {
  return (
    // <div className="relative flex h-[1000px] flex-col items-center justify-center">
    <div className="relative flex h-svh flex-col items-center justify-center">
      <div className="absolute inset-0">
        <Canvas orthographic camera={{ position: [0.0, 0.0, 5.0] }}>
          <LeavesShader />
        </Canvas>
      </div>

      <h1 className="z-10 text-center text-8xl leading-none font-semibold whitespace-pre-wrap">
        SAAS 프로토타입
      </h1>
      {/* <p className="text-muted-foreground text-center">
        노트 테이킹 앱 프론트엔드
      </p> */}
    </div>
  )
}

function LeavesShader() {
  const shaderRef = useRef<ShaderMaterial | null>(null)
  const leavesChannel = useLoader(TextureLoader, texture.src)
  const maskChannel = useLoader(TextureLoader, maskTexture.src)
  leavesChannel.wrapS = RepeatWrapping
  leavesChannel.wrapT = RepeatWrapping

  maskChannel.wrapS = ClampToEdgeWrapping
  maskChannel.wrapT = ClampToEdgeWrapping
  maskChannel.minFilter = LinearFilter

  const { size, camera } = useThree()

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new Vector2() },
      u_texture: { value: leavesChannel },
      u_mask_texture: { value: maskChannel },
    }),
    [leavesChannel],
  )

  useEffect(() => {
    camera.zoom = size.height / 2
  }, [size, camera])

  useFrame(({ clock, size }) => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.u_time.value = clock.getElapsedTime()
      shaderRef.current.uniforms.u_resolution.value.set(size.width, size.height)
    }
  })

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={shaderRef}
        fragmentShader={fragmentShader}
        // fragmentShader={blackholeFragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}
