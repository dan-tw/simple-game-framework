import { GameState, GameStateType } from "./gamestate"

// The GameMap class represents the base level of a map that can be played
// It holds common attributes and methods that don't change across maps
// It is used in combination with the IGameMap interface, which defines the methods that are subclass specific
export class GameMap {

    // The name of the game map that is currently being played
    protected name : string;

    // The current gamestate of this game map
    protected gameState : GameStateType = null;

    // The size of the game map (all game maps are a grid of n, n squares)
    protected mapSize : [number, number];

    // Constructor
    constructor(name : string, mapSize : [number, number]) {
        this.name = name;
        this.mapSize = mapSize;
    }
    
    // Get the name of the current map
    public getName() : string {
        return this.name;
    }

    // Get the current state of the map that is being played
    public getGameState() : GameStateType {
        return this.gameState;
    }

    // Get the size of the current map (all maps are a grid of n, n squares)
    public getMapSize() : [number, number] {
        return this.mapSize;
    }
    
}
