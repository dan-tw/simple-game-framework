import { GameMap } from "../gamemap";
import { IGameMap } from "../igamemap";

export class TicTacToeMap extends GameMap implements IGameMap {

    getClassName() : string {
        return "";
    }

    ClassName : string = "TicTacToeMap";
}