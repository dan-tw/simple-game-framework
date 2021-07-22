import { BaseGameMap } from "../internal/gamemap";
import { GameMapTile, GamePiece, IGamePiece } from "../internal/gamemap";


export class GameMap extends BaseGameMap {

    constructor() {

        let mapSize : [number, number] = [3, 3];
        let mapName = "Tic Tac Toe";

        super(mapName, mapSize);
    }

    public haveTurn() : void {
        console.log("Turn has been had.");
    }

    public begin() : void {
        this.setupGamePeices();
    }

    private setupGamePeices() : void {
        // the max number of moves a single player can make in tic tac toe is 8
        // so we assign each player 8 game peices
        let maxPieces = 8;

        // TODO: determine a way to assign a specific player to naughts over crosses e.g.
        if(this.game !== undefined) {
            for(var i = 0; i < this.game.players.length; i++) {
                for(var j = 0; j < maxPieces; j++) {
                    if(i == 0) {
                        this.game.players[i].assignGamePiece(new Cross("Cross", this.game));
                    } else {
                        this.game.players[i].assignGamePiece(new Naught("Naught", this.game));
                    }
                }
            }
        } else {
            console.log("game was undefined");
        }
    }

    public gameHasEnded() : boolean {
        // TODO: here we will check if there is a winner and if so, the game has ended
        return false;
    }
}

// BasePiece defined to share common game peice traits for the Tic Tac Toe game
// in this case, we know that the allowedTiles that a game piece can exist is shared for all game peices
// in that they can only occupy un-occupied space.
class BasePiece extends GamePiece implements IGamePiece {

    public move() : void {

    }

    public allowedTiles() : GameMapTile[] {

        let allowedTiles : GameMapTile[] = [];

        for(var i = 0; i < this.game.gameMap.mapSize[0]; i++) {
            for(var j = 0; j < this.game.gameMap.mapSize[1]; j++) {
                let gameMapTile : GameMapTile = this.game.gameMap.gameTiles[i][j];
                if(gameMapTile.owner === undefined)
                    allowedTiles.push(gameMapTile);
            }
        }

        return allowedTiles;
    }
}
// Define our Cross and Naught game pieces
class Cross extends BasePiece {}
class Naught extends BasePiece {}
