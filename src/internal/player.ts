import WebSocket from "ws";
import { Game } from "./game";

// PlayerWebSocket is used to primarily get communication from the server
// we allow it to be unidentified as there may be times where a player instance exists
// outside of the scope of being connected directly to the game server
type PlayerWebSocket = WebSocket | undefined

// Player represents an active player on a game server. This top level player represenation is abstracted
// from a active game participant, rather, this player is more of a 'profile' or 'account' representation
// TODO: rename this to player account?
export class Player {

    // The unique id that represents this player
    private _id : string;

    // The name of this player
    private _name : string

    // The websocket that this player connects with that we use to send messages
    // back from the server to tell the player to update their game state, etc
    private _ws : PlayerWebSocket

    // Constructor
    constructor(name : string, ws? : WebSocket, id? : string) {
        
        this._id = id ? id : Game.uuid();
        this._name = name;
        this._ws = ws;
    }

    // Get the players name
    public get name() : string {
        return this._name;
    }

    // Set the players name
    public set name(name : string) {
        this._name = name;
    }

    // Get the websocket that this player will use to communicate with the server
    public get ws() : PlayerWebSocket {
        return this._ws;
    }

    // Set the websocket that this player will use to communicate with the server
    public set ws(ws : PlayerWebSocket) {
        this._ws = ws;
    }

    // Get the unique id of this player
    public get id() : string {
        return this._id;
    }

    // Set the unique id of this player
    public set id(id : string) {
        this._id = id;
    }
}
