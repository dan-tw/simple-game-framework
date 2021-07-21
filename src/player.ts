import WebSocket from "ws";

export class Player {

    private name : string

    //private ws : WebSocket

    constructor(name : string, ws? : WebSocket) {
        this.name = name;
        //this.ws = ws;
    }

    public setName(name : string) {
        this.name = name;
    }

    public getName() : string {
        return this.name;
    }
}

export type ActivePlayer = Player | undefined