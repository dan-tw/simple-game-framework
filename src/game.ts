import { ticTacToeServer } from "./server";
import { Player } from "./player";
import { GameMap } from "./gamemap";

class Game {
    
    // The unique ID of this game
    private id : string

    // The name of this game
    private name : string

    // The current active player. This represents which player is currently having a 'turn'
    private activePlayer : Player

    // The players currently playing this game
    private players : [Player, Player]

    // The currently active game map (this could be tic toc toe, or this could be checkers, chess, etc)
    private gameMap : GameMap

    constructor() {
        
    }
}