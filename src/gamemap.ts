import { Game } from "./game";
import { GameState, GameStateType } from "./gamestate"

// The GameMap class represents the base level of a map that can be played
// It holds common attributes and methods that don't change across maps
// It is used in combination with the IGameMap interface, which defines the methods that are subclass specific
export class GameMap {

    // The unique id for this GameMap
    private _id : string = Game.uuid();

    // The name of the game map that is currently being played
    protected _name : string;

    // The current gamestate of this game map
    protected gameState : GameStateType = null;

    // The size of the game map (all game maps are a grid of n, n squares)
    protected _mapSize : [number, number];

    // The individual tiles that make up the 'playing field' of the GameMap
    // A GameMapTile can be owned by an object (usually a Player)
    protected _gameTiles : GameMapTile[][]

    // Constructor
    constructor(name : string, mapSize : [number, number]) {
        this._name = name;
        this._mapSize = mapSize;
        this._gameTiles = this.createGameMapTiles();
    }

    // Creates a grid of GameMapTile based on the mapSize of the map
    // mapSize is dependant on what map is being loaded in for the current game
    // gameTiles for a GameMap will be a grid of GameMapTile
    protected createGameMapTiles() : GameMapTile[][] {
        let num=1;
        this._gameTiles = [];
        for(let i = 0; i < this._mapSize[0]; i++) {

            this._gameTiles[i] = []; 

            for(let j = 0; j < this._mapSize[1]; j++) {
                this._gameTiles[i][j] = new GameMapTile();
            }
        }

        return this._gameTiles;
    }

    // Get the current state of the map that is being played
    public getGameState() : GameStateType {
        return this.gameState;
    }

    // Get the unique id of this object
    public get id() : string {
        return this._id;
    }

    // Get the name of this object
    public get name() : string {
        return this._name;
    }

    // Set the name of this object
    public set name(name : string) {
        this._name = name;
    }

    // Get the size of the current map (all maps are a grid of n, n squares)
    public get mapSize() : [number, number] {
        return this._mapSize;
    }

    public get gameTiles() : GameMapTile[][] {
        return this._gameTiles;
    }
}


// GamePiece class represents a single item that a player can 
// control throughout a game. Players may have more than once
// GamePiece or even have multiple copies of the same GamePiece 
// The id of a GamePiece is what makes them differ
export abstract class GamePiece {

    private _id : string = Game.uuid();

    protected name : string;

    constructor(name : string) {
        this.name = name;
    }

    public get id() : string {
        return this._id;
    }
}


// IGamePiece interface defines methods that should be implemented for all GamePiece
// instances. As the GamePiece class itself is abstract it should never be used
export interface IGamePiece {

    // Implement the logic responsible for moving the game piece
    move() : void;

    // Returns an array of GameMapTile that contains all allowable tiles the
    // game piece can move to
    allowedTiles() : GameMapTile[];
}

class GameMapTile {

    protected owner : GameTileOwner;
    //x: number;
    //y: number;
    //num:number;

    constructor(owner? : GameTileOwner) {
        this.owner = owner
    }
}

type GameTileOwner = string | undefined

