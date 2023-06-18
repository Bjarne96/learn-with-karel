import React, { useEffect, useState, useRef, useCallback } from "react"
import type { ICanvasProps } from "../types/karel"

const Canvas: React.FC<ICanvasProps> = (props) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const parentRef = useRef<HTMLDivElement>(null)

    const [canvasWidth, setCanvasWidth] = useState(100);

    const draw = useCallback(() => {
        // Exceptions if the ref is not correctly set
        if (props.walls === undefined || props.walls.length === 0 || props.walls[0] === undefined) return
        if (canvasRef.current == null) return
        const context: CanvasRenderingContext2D = canvasRef.current.getContext("2d")
        if (context == null) return

        // Setup sizes
        const sizeBasedOnWidth = parentRef.current.clientWidth - 100
        const sizeBasedOnHeight = window.innerHeight - 220
        if (sizeBasedOnWidth < sizeBasedOnHeight) setCanvasWidth(sizeBasedOnWidth)
        else setCanvasWidth(sizeBasedOnHeight)

        // Field size
        const yCount = props.walls.length
        const xCount = props.walls[0].length
        let teiler = yCount
        const canvasHeight = canvasWidth / (xCount / yCount)
        if (yCount < xCount) teiler = xCount
        const currentBlockSize = canvasWidth / teiler
        // Canavs size
        canvasRef.current.width = canvasWidth
        canvasRef.current.height = canvasHeight

        // Draw all walls
        for (let y = 0; y < props.walls.length; y++) {
            if (props.walls == null && props.walls[y] == null) return
            for (let x = 0; x < props.walls[y].length; x++) {
                if (props.walls[y][x] == null) break
                context.fillStyle = "white"
                context.fillRect(x * currentBlockSize + currentBlockSize * 0.5, y * currentBlockSize + currentBlockSize * 0.5, 2, 2)
                drawWall(x, y, props.walls[y][x], currentBlockSize, context)
            }
        }
        // Draw all beepers
        if (props.beepers) {
            for (let i = 0; i < props.beepers.length; i++) {
                const beeper = props.beepers[i]
                if (beeper == null) return
                let solved = false
                for (let i = 0; i < props.solutions.length; i++) {
                    const solution = props.solutions[i]
                    if (solution.x === beeper.x && solution.y === beeper.y && solution.count === beeper.count) {
                        solved = true
                        break
                    }
                }
                drawBeeper(beeper.x, beeper.y, beeper.count, solved, currentBlockSize, context)
            }
        }
        // Draw all solution fields
        if (props.solutions) {
            for (let i = 0; i < props.solutions.length; i++) {
                const solution = props.solutions[i]
                if (solution == null) return
                drawSolutions(solution.x, solution.y, solution.count, currentBlockSize, context)
            }
        }

        // Draw karel
        if (props.karel) drawKarel(props.karel, currentBlockSize, context)
    }, [canvasWidth, props.beepers, props.karel, props.solutions, props.walls])

    const drawWall = (x: number, y: number, side: number, currentBlockSize: number, context: CanvasRenderingContext2D) => {
        const minX = x * currentBlockSize
        const minY = y * currentBlockSize
        const maxX = minX + currentBlockSize
        const maxY = minY + currentBlockSize

        context.save()
        context.beginPath()

        if (side & 8) {
            // Top
            context.moveTo(minX, minY)
            context.lineTo(maxX, minY)
        }

        if (side & 4) {
            // Right
            context.moveTo(maxX, minY)
            context.lineTo(maxX, maxY)
        }

        if (side & 2) {
            // Bottom
            context.moveTo(minX, maxY)
            context.lineTo(maxX, maxY)
        }

        if (side & 1) {
            // Left
            context.moveTo(minX, minY)
            context.lineTo(minX, maxY)
        }

        context.lineWidth = 4
        context.strokeStyle = "white"
        context.stroke()
        context.restore()
    }

    const drawBeeper = (x: number, y: number, count: number, solved: boolean, currentBlockSize: number, context: CanvasRenderingContext2D) => {

        const minX = x * currentBlockSize
        const minY = y * currentBlockSize
        const midX = minX + currentBlockSize * 0.5
        const midY = minY + currentBlockSize * 0.5
        const maxX = minX + currentBlockSize
        const maxY = minY + currentBlockSize

        context.save()
        context.beginPath()
        context.moveTo(midX, minY + 10) // top point
        context.lineTo(maxX - 10, midY) // right point
        context.lineTo(midX, maxY - 10) // bottom point
        context.lineTo(minX + 10, midY) // left point

        context.lineWidth = 2
        context.fillStyle = solved ? "hsl(90, 80%, 40%)" : "hsl(0, 100%, 40%)"
        context.strokeStyle = "white"
        context.closePath()
        context.fill()
        context.stroke()
        context.restore()

        if (count && count !== 1) {
            context.save()
            context.textAlign = "center"
            context.textBaseline = "middle"
            context.fillText(String(count), midX, midY)
            context.restore()
        }
    }

    const drawSolutions = (x: number, y: number, count: number, currentBlockSize: number, context: CanvasRenderingContext2D) => {
        const minX = x * currentBlockSize
        const minY = y * currentBlockSize
        const midX = minX + currentBlockSize * 0.5
        const midY = minY + currentBlockSize * 0.5
        const maxX = minX + currentBlockSize
        const maxY = minY + currentBlockSize

        context.save()
        context.beginPath()
        context.moveTo(midX, minY + 10) // top point
        context.lineTo(maxX - 10, midY) // right point
        context.lineTo(midX, maxY - 10) // bottom point
        context.lineTo(minX + 10, midY) // left point

        context.lineWidth = 2
        context.strokeStyle = "white"
        context.closePath()
        context.stroke()
        context.restore()

        if (count && count !== 1) {
            context.save()
            context.textAlign = "center"
            context.textBaseline = "middle"
            context.fillText(String(count), midX, midY)
            context.restore()
        }
    }

    const drawKarel = (karel: { x: number; y: number; direction: number }, currentBlockSize: number, context: CanvasRenderingContext2D) => {
        const karelImage = document.getElementById("img") as CanvasImageSource
        const minX = karel.x * currentBlockSize
        const minY = karel.y * currentBlockSize
        const midX = currentBlockSize * 0.5
        const midY = currentBlockSize * 0.5
        context.save()
        context.translate(minX, minY)
        context.translate(midX, midY)
        context.rotate(-90 * karel.direction * (Math.PI / 180))
        context.drawImage(karelImage, midX, midY, -currentBlockSize, -currentBlockSize)
        context.restore()
    }

    useEffect(() => draw(), [props.walls, props.beepers, props.solutions, props.activeTab, props.displayHelper, draw])

    return (
        <div ref={parentRef} className="w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="hidden" id="img" src="/karel.png" alt="" />
            <canvas className="mx-auto" ref={canvasRef} />
        </div>
    )
}

export default Canvas