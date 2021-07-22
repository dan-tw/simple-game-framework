import { gameServer } from "../server";
import { Player } from "./player";
import { BaseGameMap, BaseGamePiece } from "./gamemap";
import { GameStateType } from "./gamestate";

// This type is used to define an active player (meaning the player whos current turn it is)
// As it is possible that at some point, a game may not have an active player
// hence why we allow this value to be undefined
export type ActivePlayer = GamePlayer | undefined


// The game class represents an active game that is currently being played
// or that has been played previously. The game itself can be played on more than one 
// GameMap, so the main logic in this class should be one level of abstraction up from
// the specific business logic of how a game actually plays out (scoring, win/lose condition etc)
export class Game {
    
    // The unique ID of this game
    private _id : string;

    // The name of this game
    private _name : string;

    // The current active player. This represents which player is currently having a 'turn'
    private _activePlayer : ActivePlayer;

    // The players currently playing this game
    private _players : GamePlayer[];

    // The currently active game map (this could be tic toc toe, or this could be checkers, chess, etc)
    private _gameMap : BaseGameMap

    // An array of used ids for this instance of the game server
    private static ids : string[] = [];

    // Constructor
    constructor(name : string, map : BaseGameMap) {
        this._id = Game.uuid();
        this._name = name;
        this._gameMap = map;
        this._gameMap.game = this;
        this._players = [];
    }

    // Add a player to the current game
    public addPlayer(player : GamePlayer) {
        this._players.push(player);
    }

    // Gets a list of all GamePlayers
    public get players() : GamePlayer[] {
        return this._players;
    }

    // Sets the active player for the current game. The active player defines
    // which players 'turn' it is
    public set activePlayer(player : ActivePlayer) {
        this._activePlayer = player;
    }

    // Gets the active player
    public get activePlayer() : ActivePlayer {
        return this._activePlayer;
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

// GamePlayer represents an active participant on a GameMap. We separate this from 'Player' as
// different maps may have different requirements as to what a player should and should not know
export class GamePlayer {

    // The unique ID of this GamePlayer
    private _id : string;

    // The Player that this GamePlayer will be based upon
    protected _player : Player;

    // A list of GamePiece that have been assigned to this GamePlayer
    protected _gamePieces : BaseGamePiece[];

    // Constructor
    constructor(player : Player) {

        this._id = Game.uuid();
        this._player = player;
        this._gamePieces = [];
    }

    // Return the instance of player that this GamePlayer is based upon
    public get player() : Player {
        return this._player;
    }

    // Return the list of GamePieces currently assigned to this player
    public get gamePeices() : BaseGamePiece[] {
        return this._gamePieces;
    }

    // Assign a GamePiece to the current GamePlayer
    public assignGamePiece(piece : BaseGamePiece) {
        this._gamePieces.push(piece);
    }
}