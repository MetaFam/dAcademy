import React, { Suspense } from 'react'
import { Canvas, PrimitiveProps } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Maybe } from './types'
import LoggingErrorBoundary from './LoggingErrorBoundary'

export const Model = (
  { model, group: groupProps, ...props }:
  {
    model: string
    group: Record<string, (() => void)>
    props?: PrimitiveProps
  }
) => {
  const { scene } = useGLTF(model)

  return (
    <group {...groupProps}>
      <primitive {...props} object={scene} />
    </group>
  )
}

export const ThreeDScene = (
  { model, className = null, bg = null }:
  { model: string; className?: string | null, bg?: string | null }
) => {
  const [paused, setPaused] = React.useState(false)

  let args: Maybe<[r: number, g: number, b: number]> = null
  if(bg) {
    args = (
      bg.match(/../g)
      ?.map((num) => Number(`0x${num}`) / 255)
      .slice(0, 3)
    ) as [r: number, g: number, b: number]
  }

  return (
    <Suspense fallback={null}>
      <LoggingErrorBoundary>
        <section className={className ?? undefined} >
          <Canvas>
            {args?.length === 3 && (
              <color attach="background" {...{ args }}/>
            )}
            <ambientLight intensity={0.2} />
            <directionalLight
              intensity={0.75}
              position={[0, 0, 5]}
            />
            <Model
              {...{ model }}
              group={{
                onPointerEnter: () => setPaused(true),
                onPointerLeave: () => setPaused(false),
              }}
            />
            <OrbitControls
              autoRotate={!paused}
              autoRotateSpeed={3.5}
              makeDefault
            />
          </Canvas>
        </section>
      </LoggingErrorBoundary>
    </Suspense>
  )
}