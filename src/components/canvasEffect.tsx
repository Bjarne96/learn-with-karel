import React, { useRef, useEffect } from 'react'
import type World from './worldClass';
import styles from "../styles/learnwithkarel.module.css";

interface ICanvasProps {
    world: World
}

const Canvas = (props: ICanvasProps) => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    let blockSize = 1

    const drawWall = (x: number, y: number, side: number) => {
        const canvas = canvasRef.current
        const minX = x * blockSize
        const minY = y * blockSize
        const maxX = minX + blockSize
        const maxY = minY + blockSize
        const context = canvas.getContext("2d")

        context.save()
        context.beginPath()

        if (side & 8) { // Top
            context.moveTo(minX, minY)
            context.lineTo(maxX, minY)
        }

        if (side & 4) { // Right
            context.moveTo(maxX, minY)
            context.lineTo(maxX, maxY)
        }

        if (side & 2) { // Bottom
            context.moveTo(minX, maxY)
            context.lineTo(maxX, maxY)
        }

        if (side & 1) { // Left
            context.moveTo(minX, minY)
            context.lineTo(minX, maxY)
        }

        context.lineWidth = 4
        context.strokeStyle = "white"
        context.stroke()
        context.restore()
    }

    const drawBeeper = (x: number, y: number, count: number) => {
        const canvas = canvasRef.current
        const minX = x * blockSize
        const minY = y * blockSize
        const midX = minX + blockSize * 0.5
        const midY = minY + blockSize * 0.5
        const maxX = minX + blockSize
        const maxY = minY + blockSize

        const context = canvas.getContext("2d");
        context.save()
        context.beginPath()
        context.moveTo(midX, minY + 10) // top point
        context.lineTo(maxX - 10, midY) // right point
        context.lineTo(midX, maxY - 10) // bottom point
        context.lineTo(minX + 10, midY) // left point

        context.lineWidth = 2
        context.fillStyle = "hsl(90, 80%, 40%)"
        context.strokeStyle = "white"

        context.closePath()
        context.fill()
        context.stroke()
        context.restore()

        if (count && count != 1) {
            context.save()
            context.textAlign = "center"
            context.textBaseline = "middle"
            context.fillText(String(count), midX, midY)
            context.restore()
        }
    }

    const drawKarel = function () {
        const canvas = canvasRef.current
        const karelImage = document.createElement('img')
        karelImage.src = "/karel.png"
        const karel = props.world.karel
        const context = canvas.getContext("2d");
        const minX = karel.x * blockSize
        const minY = karel.y * blockSize
        const midX = blockSize * 0.5
        const midY = blockSize * 0.5
        context.save()
        context.translate(minX, minY)
        context.translate(midX, midY)
        context.rotate(-90 * karel.direction * (Math.PI / 180))
        context.drawImage(karelImage, midX, midY, -blockSize, -blockSize)
        context.restore()
    }

    useEffect(() => {
        const clientWidth = (window.innerWidth * 0.33)
        const walls = props.world.walls
        const beepers = props.world.beepers
        const yCount = walls.length
        const xCount = walls[0].length
        let teiler = yCount
        let canvasHeight = clientWidth / (xCount / yCount)
        if (walls.length != walls[0].length) {
            canvasHeight = clientWidth / (8 / yCount)
        }
        if (yCount < xCount) teiler = xCount
        blockSize = clientWidth / teiler
        const canvas = canvasRef.current


        //Our draw came here
        const render = () => {
            console.log('render');
            const context = canvas.getContext("2d")

            canvas.width = clientWidth
            canvas.height = canvasHeight

            // walls
            for (let y = 0; y < walls.length; y++) {
                for (let x = 0; x < walls[y].length; x++) {
                    context.fillStyle = "white"
                    context.fillRect(x * blockSize + blockSize * 0.5, y * blockSize + blockSize * 0.5, 2, 2)
                    drawWall(x, y, walls[y][x])
                }
            }

            // beepers
            for (let i = 0; i < beepers.length; i++) {
                const beeper = beepers[i]
                drawBeeper(beeper.x, beeper.y, beeper.count)
            }
            drawKarel()
            window.requestAnimationFrame(render)
        }
        render()
    })

    return <div className={styles.canvasContainer}><canvas ref={canvasRef} /></div>
}

export default Canvas