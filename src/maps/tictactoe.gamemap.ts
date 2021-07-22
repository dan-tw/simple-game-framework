import { BaseGameMap, IGameMap } from "../internal/gamemap";
import { GameMapTile, GamePiece, IGamePiece } from "../internal/gamemap";


export class GameMap extends BaseGameMap implements IGameMap {

    constructor() {
        let mapSize : [number, number] = [3, 3];
        let mapName = "";

        super(mapName, mapSize)
    }

    public haveTurn() : void {
        console.log("Turn has been had.");
    }

    public begin() : void {

    }

    public setupGamePeices() : void {
        // the max number of moves a single player can make in tic tac toe is 8
        // so we assign each player 8 game peices
    }

    public gameHasEnded() : boolean {
        // TODO: here we will check if there is a winner and if so, the game has ended
        return false;
    }
}


class BasePiece extends GamePiece implements IGamePiece {

    public move() : void {

    }

    public allowedTiles() : GameMapTile[] {

        let allowedTiles : GameMapTile[] = [];

        for(var i = 0; i < this.game.getGameMap<GameMap>().mapSize[0]; i++) {
            for(var j = 0; j < this.game.getGameMap<GameMap>().mapSize[1]; j++) {
                let gameMapTile : GameMapTile = this.game.getGameMap<GameMap>().gameTiles[i][j];
                if(gameMapTile.owner === undefined)
                    allowedTiles.push(gameMapTile);
            }
        }

        return allowedTiles;
    }
}
class Cross extends BasePiece {}
class Naught extends BasePiece {}