import React, { useRef, useEffect } from 'react'

interface ICanvasProps {
    world: any,
    // solution: boolean
}

const Canvas = (props: ICanvasProps) => {

    const canvasRef: any = useRef(null);

    var blockSize = 1

    const drawWall = (x: number, y: number, side: number) => {
        const canvas = canvasRef.current
        var minX = x * blockSize;
        var minY = y * blockSize;
        var midX = minX + blockSize * 0.5;
        var midY = minY + blockSize * 0.5;
        var maxX = minX + blockSize;
        var maxY = minY + blockSize;
        var context: any = canvas.getContext("2d");

        context.save();
        context.beginPath();

        if (side & 8) { // Top
            context.moveTo(minX, minY);
            context.lineTo(maxX, minY);
        }

        if (side & 4) { // Right
            context.moveTo(maxX, minY);
            context.lineTo(maxX, maxY);
        }

        if (side & 2) { // Bottom
            context.moveTo(minX, maxY);
            context.lineTo(maxX, maxY);
        }

        if (side & 1) { // Left
            context.moveTo(minX, minY);
            context.lineTo(minX, maxY);
        }

        context.lineWidth = 4;
        context.stroke();
        context.restore();
    };
    const drawBeeper = (x: number, y: number, count: number) => {
        const canvas = canvasRef.current
        var minX = x * blockSize;
        var minY = y * blockSize;
        var midX = minX + blockSize * 0.5;
        var midY = minY + blockSize * 0.5;
        var maxX = minX + blockSize;
        var maxY = minY + blockSize;

        var context: CanvasRenderingContext2D = canvas.getContext("2d")!;
        context.save();
        context.beginPath();
        context.moveTo(midX, minY + 10); // top point
        context.lineTo(maxX - 10, midY); // right point
        context.lineTo(midX, maxY - 10); // bottom point
        context.lineTo(minX + 10, midY); // left point

        context.lineWidth = 2;
        context.fillStyle = "rgb(102, 204, 0)";
        context.strokeStyle = "rgb(0, 50, 200)";

        context.closePath();
        context.fill();
        context.stroke();
        context.restore();

        if (count && count != 1) {
            context.save();
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillText(String(count), midX, midY);
            context.restore();
        }
    };

    const drawKarel = function () {
        const canvas = canvasRef.current
        const karelImage = document.createElement('img');
        karelImage.src = "/karel.png";
        const karel = props.world.karel
        var context = canvas.getContext("2d");
        var minX = karel.x * blockSize;
        var minY = karel.y * blockSize;
        var midX = blockSize * 0.5;
        var midY = blockSize * 0.5;
        context.save();
        context.translate(minX, minY);
        context.translate(midX, midY);
        context.rotate(-90 * karel.direction * (Math.PI / 180));
        context.drawImage(karelImage, midX, midY, -blockSize, -blockSize);
        context.restore();
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let frameCount: any = 0
        let animationFrameId: any

        //Our draw came here
        const render = () => {
            const clientWidth = (window.innerWidth * 0.33);
            var context: any = canvas.getContext("2d");
            let walls = props.world.walls;
            var beepers = props.world.beepers;
            // if (props.solution) beepers = props.world.solution
            blockSize = clientWidth / props.world.walls[0].length;
            canvas.width = clientWidth;
            canvas.height = clientWidth;

            // walls
            for (var y = 0; y < walls.length; y++) {
                for (var x = 0; x < walls[y].length; x++) {
                    context.fillRect(x * blockSize + blockSize * 0.5, y * blockSize + blockSize * 0.5, 2, 2);
                    drawWall(x, y, walls[y][x]);
                }
            }
            // beepers
            for (var i = 0; i < beepers.length; i++) {
                var beeper = beepers[i];
                drawBeeper(beeper.x, beeper.y, beeper.count);
            }
            //Karel
            drawKarel();
            frameCount++
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [drawBeeper, drawWall])

    return <canvas ref={canvasRef} {...props} />
}

export default Canvas