/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { createRef } from "react";
import type { ICanvasProps } from "../types/karel";

export default class Canvas extends React.Component<ICanvasProps> {
    canvasRef
    blockSize = 1
    clientWidth = 300

    constructor(props: ICanvasProps) {
        super(props);
        this.canvasRef = createRef<HTMLCanvasElement>();
        this.state = {}
    }

    componentDidUpdate(): void {
        this.draw()
    }

    componentDidMount(): void {
        this.draw()
    }

    draw() {
        if (this.props.walls == undefined || this.props.walls.length == 0 || this.props.walls[0] == undefined) return
        const yCount = this.props.walls.length
        const xCount = this.props.walls[0].length
        let teiler = yCount
        if (typeof window !== "undefined") this.clientWidth = window.innerWidth * 0.33
        let canvasHeight = this.clientWidth / (xCount / yCount)
        if (this.props.walls.length != this.props.walls[0].length) {
            canvasHeight = this.clientWidth / (8 / yCount)
        }
        if (yCount < xCount) teiler = xCount
        this.blockSize = this.clientWidth / teiler

        const canvas = this.canvasRef.current
        if (canvas == null) return
        const context = canvas.getContext("2d")
        if (context == null) return

        canvas.width = this.clientWidth
        canvas.height = canvasHeight

        // walls
        for (let y = 0; y < this.props.walls.length; y++) {
            if (this.props.walls == null && this.props.walls[y] == null) return
            for (let x = 0; x < this.props.walls[y].length; x++) {
                if (this.props.walls[y][x] == null) break
                context.fillStyle = "white"
                context.fillRect(x * this.blockSize + this.blockSize * 0.5, y * this.blockSize + this.blockSize * 0.5, 2, 2)
                this.drawWall(x, y, this.props.walls[y][x])
            }
        }

        // beepers
        for (let i = 0; i < this.props.beepers.length; i++) {
            const beeper = this.props.beepers[i]
            if (beeper == null) return
            let solved = false
            for (let i = 0; i < this.props.solutions.length; i++) {
                const solution = this.props.solutions[i]
                if (solution.x == beeper.x && solution.y == beeper.y && solution.count == beeper.count) {
                    solved = true
                    break;
                }
            }
            this.drawBeeper(beeper.x, beeper.y, beeper.count, solved)
        }
        for (let i = 0; i < this.props.solutions.length; i++) {
            const solution = this.props.solutions[i]
            if (solution == null) return
            this.drawSolutions(solution.x, solution.y, solution.count)
        }
        this.drawKarel();
        this.render();
    }

    drawWall(x: number, y: number, side: number) {
        const canvas = this.canvasRef.current
        if (canvas == null) return
        const context = canvas.getContext("2d")
        if (context == null) return
        const minX = x * this.blockSize
        const minY = y * this.blockSize
        const maxX = minX + this.blockSize
        const maxY = minY + this.blockSize

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

    drawBeeper(x: number, y: number, count: number, solved: boolean) {
        const canvas = this.canvasRef.current
        if (canvas == null) return
        const context = canvas.getContext("2d")
        if (context == null) return
        const minX = x * this.blockSize
        const minY = y * this.blockSize
        const midX = minX + this.blockSize * 0.5
        const midY = minY + this.blockSize * 0.5
        const maxX = minX + this.blockSize
        const maxY = minY + this.blockSize
        context.save()
        context.beginPath()
        context.moveTo(midX, minY + 10) // top point
        context.lineTo(maxX - 10, midY) // right point
        context.lineTo(midX, maxY - 10) // bottom point
        context.lineTo(minX + 10, midY) // left point

        context.lineWidth = 2
        if (solved) {
            context.fillStyle = "hsl(90, 80%, 40%)"
        } else {
            context.fillStyle = "hsl(0, 100%, 40%)"
        }
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

    drawSolutions(x: number, y: number, count: number) {
        const canvas = this.canvasRef.current
        if (canvas == null) return
        const context = canvas.getContext("2d")
        if (context == null) return
        const minX = x * this.blockSize
        const minY = y * this.blockSize
        const midX = minX + this.blockSize * 0.5
        const midY = minY + this.blockSize * 0.5
        const maxX = minX + this.blockSize
        const maxY = minY + this.blockSize
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
        if (count && count != 1) {
            context.save()
            context.textAlign = "center"
            context.textBaseline = "middle"
            context.fillText(String(count), midX, midY)
            context.restore()
        }
    }

    drawKarel() {
        const canvas = this.canvasRef.current
        if (canvas == null) return
        const context = canvas.getContext("2d")
        if (context == null) return
        const karelImage = document.getElementById('img') as CanvasImageSource
        const minX = this.props.karel.x * this.blockSize
        const minY = this.props.karel.y * this.blockSize
        const midX = this.blockSize * 0.5
        const midY = this.blockSize * 0.5
        context.save()
        context.translate(minX, minY)
        context.translate(midX, midY)
        context.rotate(-90 * this.props.karel.direction * (Math.PI / 180))
        context.drawImage(karelImage, midX, midY, -this.blockSize, -this.blockSize)
        context.restore()
    }

    render() {
        return <div className="block rounded bg-code-grey"><img className="hidden" id="img" src="/karel.png"></img><canvas ref={this.canvasRef} /></div>;
    }
}