import React from "react";
import Canvas from "./canvas";


interface IGameProps {
    height: number,
    width: number,
    world: any
}

class Game extends React.Component<IGameProps> {
    blockSize: number;
    canvas: any;

    constructor(props: IGameProps) {
        super(props);
        // this.canvas = new HTMLCanvasElement();//document.createElement('canvas');
        this.canvas = <Canvas />;
        this.blockSize = this.props.width / this.props.world.walls[0].length;
        // this.state = { counter: 0 };
        // this.handleClick = this.handleClick.bind(this);
    }

    render() {
        var context: any = this.canvas.getContext("2d");
        let walls = this.props.world.walls;
        let beepers = this.props.world.solution;
        var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) * 0.33;
        this.canvas.width = width;
        this.canvas.height = walls.length * this.blockSize;
        //this.setContainerHeight(this.canvas.height);

        // walls
        for (var y = 0; y < walls.length; y++) {
            for (var x = 0; x < walls[y].length; x++) {
                context.fillRect(x * this.blockSize + this.blockSize * 0.5, y * this.blockSize + this.blockSize * 0.5, 2, 2);
                this.drawWall(x, y, walls[y][x]);
            }
        }
        // beepers
        for (var i = 0; i < beepers.length; i++) {
            var beeper = beepers[i];
            this.drawBeeper(beeper.x, beeper.y, beeper.count);
        }

        return <>
            <h1>Game {this.props.height}</h1>

        </>;
    }
};
export default Game;