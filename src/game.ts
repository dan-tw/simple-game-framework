import { ticTacToeServer } from "./server";
import { Player } from "./player";
import { GameMap } from "./gamemap";
import { GameStateType } from "./gamestate";

// The game class represents an active game that is currently being played
// or that has been played previously. The game itself can be played on more than one 
// GameMap, so the main logic in this class should be one level of abstraction up from
// the specific business logic of how a game actually plays out (scoring, win/lose condition etc)
class Game {
    
    // The unique ID of this game
    private id : string = Game.uuid();

    // The name of this game
    private name : string;

    // The current active player. This represents which player is currently having a 'turn'
    private activePlayer : Player | null = null;

    // The players currently playing this game
    private players : Player[] = [];

    // The currently active game map (this could be tic toc toe, or this could be checkers, chess, etc)
    private gameMap : GameMap

    // An array of used ids for this instance of the game server
    private static ids : string[] = [];

    // Constructor
    constructor(name : string, map : GameMap) {
        this.name = name;
        this.gameMap = map;
    }

    // Add a player to the current game
    public addPlayer(player : Player) {
        this.players.push(player);
    }

    // Sets the active player for the current game. The active player defines
    // which players 'turn' it is
    public setActivePlayer(player : Player) {
        this.activePlayer = player;
    }

    // Returns the current state of the game based on the map being played for this game
    public getGameState() : GameStateType {
        return this.gameMap.getGameState();
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