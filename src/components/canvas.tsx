/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { createRef } from "react";
import type { Beeper, ICanvasProps } from "../interfaces/interfaces";
import styles from "../styles/canvas.module.css";

export default class Canvas extends React.Component<ICanvasProps> {
    canvasRef
    blockSize = 1
    clientWidth = 300
    walls: Array<Array<number>>
    beepers: Array<Beeper>
    yCount
    xCount
    teiler
    canvasHeight
    karel

    constructor(props) {
        super(props);
        this.canvasRef = createRef<HTMLCanvasElement>();
        this.state = {}
    }

    componentDidUpdate(): void {
        console.log('update');
        this.draw()
    }

    componentDidMount(): void {
        console.log('mount');
        this.draw()
    }

    draw() {
        console.log('draw');
        this.walls = this.props.walls
        this.karel = this.props.karel
        this.beepers = this.props.beepers
        this.yCount = this.walls.length
        this.xCount = this.walls[0].length
        this.teiler = this.yCount
        this.canvasHeight = this.clientWidth / (this.xCount / this.yCount)
        if (typeof window !== "undefined") this.clientWidth = window.innerWidth * 0.33
        if (this.walls.length != this.walls[0].length) {
            this.canvasHeight = this.clientWidth / (8 / this.yCount)
        }
        if (this.yCount < this.xCount) this.teiler = this.xCount
        this.blockSize = this.clientWidth / this.teiler

        const canvas = this.canvasRef.current
        const context = canvas.getContext("2d")

        canvas.width = this.clientWidth
        canvas.height = this.canvasHeight

        // walls
        for (let y = 0; y < this.walls.length; y++) {
            for (let x = 0; x < this.walls[y].length; x++) {
                context.fillStyle = "white"
                context.fillRect(x * this.blockSize + this.blockSize * 0.5, y * this.blockSize + this.blockSize * 0.5, 2, 2)
                this.drawWall(x, y, this.walls[y][x])
            }
        }

        // beepers
        for (let i = 0; i < this.beepers.length; i++) {
            const beeper = this.beepers[i]
            this.drawBeeper(beeper.x, beeper.y, beeper.count)
        }
        this.drawKarel();
        this.render();
    }

    drawWall(x: number, y: number, side: number) {
        const canvas = this.canvasRef.current
        const minX = x * this.blockSize
        const minY = y * this.blockSize
        const maxX = minX + this.blockSize
        const maxY = minY + this.blockSize
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

    drawBeeper(x: number, y: number, count: number) {
        const canvas = this.canvasRef.current
        const minX = x * this.blockSize
        const minY = y * this.blockSize
        const midX = minX + this.blockSize * 0.5
        const midY = minY + this.blockSize * 0.5
        const maxX = minX + this.blockSize
        const maxY = minY + this.blockSize

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

    drawKarel() {
        const canvas = this.canvasRef.current
        const karelImage = document.getElementById('img')
        const context = canvas.getContext("2d");
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
        return <div className={styles.canvasContainer}><img className={styles.hide} id="img" src="/karel.png"></img><canvas ref={this.canvasRef} /></div>;
    }
}