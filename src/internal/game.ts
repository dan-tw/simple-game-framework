import { gameServer } from "../server";
import { Player, ActivePlayer } from "./player";
import { BaseGameMap } from "./gamemap";
import { GameStateType } from "./gamestate";

// The game class represents an active game that is currently being played
// or that has been played previously. The game itself can be played on more than one 
// GameMap, so the main logic in this class should be one level of abstraction up from
// the specific business logic of how a game actually plays out (scoring, win/lose condition etc)
export class Game {
    
    // The unique ID of this game
    private _id : string = Game.uuid();

    // The name of this game
    private _name : string;

    // The current active player. This represents which player is currently having a 'turn'
    private _activePlayer : ActivePlayer;

    // The players currently playing this game
    private _players : Player[] = [];

    // The currently active game map (this could be tic toc toe, or this could be checkers, chess, etc)
    private _gameMap : BaseGameMap

    // An array of used ids for this instance of the game server
    private static ids : string[] = [];

    // Constructor
    constructor(name : string, map : BaseGameMap) {
        this._name = name;
        this._gameMap = map;
    }

    // Add a player to the current game
    public addPlayer(player : Player) {
        this._players.push(player);
    }

    public get players() : Player[] {
        return this._players;
    }

    // Sets the active player for the current game. The active player defines
    // which players 'turn' it is
    public set activePlayer(player : ActivePlayer) {
        this._activePlayer = player;
    }

    public get activePlayer() : ActivePlayer {
        return this._activePlayer;
    }

    // Returns the current game map that has been configured for this game
    // Takes a type <T> as it is assumed when using the interface it is known which 
    // GameMap will have been used and this allows us to access specific IGameMap interface
    // methods on our GameMap instance
    public getGameMap<T>() : T {
        return (this._gameMap as unknown) as T;
    }

    // Gets the game map instance
    public get gameMap() : BaseGameMap {
        return this._gameMap;
    }

    // Returns the current state of the game based on the map being played for this game
    public getGameState() : GameStateType {
        return this._gameMap.getGameState();
    }

    // Returns a uuid whenever we need a unique id for an object within the game
    public static uuid() : string {
        // generate uuid
        let id = '_' + Math.random().toString(36).substr(2, 9);

        // while it's still in the thing, do the thing again :)
        while(this.ids.includes(id)) {
            id = '_' + Math.random().toString(36).substr(2, 9);
        }
        
        // add the thing to the thing and return thing :(
        this.ids.push(id);
        return id;
    }
}