import WebSocket from "ws";

export class Player {

    private _name : string

    //private ws : WebSocket

    constructor(name : string, ws? : WebSocket) {
        this._name = name;
        //this.ws = ws;
    }

    public set name(name : string) {
        this._name = name;
    }

    public get name() : string {
        return this._name;
    }
}

export type ActivePlayer = Player | undefined