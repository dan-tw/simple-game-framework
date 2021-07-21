import { GameMap } from "../gamemap";
import { IGameMap } from "../igamemap";

export class TicTacToeMap extends GameMap implements IGameMap {

    constructor() {
        super("", [3, 3])
    }

    public haveTurn() {
        console.log("Turn has been had.");
    }
}