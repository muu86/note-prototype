import Delaunator from "delaunator"

type Circle = {
  x: number
  y: number
  translateX: number
  translateY: number
  size: number
  alpha: number
  targetAlpha: number
  dx: number
  dy: number
  magnetism: number
}

export function createDelaunator(
  count: number,
  canvasSize: { w: number; h: number },
  size: number,
) {
  const points: Circle[] = Array.from({ length: count }, () => {
    const x = Math.floor(Math.random() * canvasSize.w)
    const y = Math.floor(Math.random() * canvasSize.h)
    const translateX = 0
    const translateY = 0
    const pSize = Math.floor(Math.random() * 2) + size
    const alpha = 0
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1))
    const dx = (Math.random() - 0.5) * 0.1
    const dy = (Math.random() - 0.5) * 0.1
    const magnetism = 0.1 + Math.random() * 4

    return {
      x,
      y,
      translateX,
      translateY,
      size: pSize,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    }
  })

  const delaunay = new Delaunator(points.flatMap((p) => [p.x, p.y]))

  

  return delaunay
}
