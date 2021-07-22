import * as jspb from 'google-protobuf'



export class Game extends jspb.Message {
  getId(): string;
  setId(value: string): Game;

  getPlayersList(): Array<Player>;
  setPlayersList(value: Array<Player>): Game;
  clearPlayersList(): Game;
  addPlayers(value?: Player, index?: number): Player;

  getState(): State | undefined;
  setState(value?: State): Game;
  hasState(): boolean;
  clearState(): Game;

  getError(): Error | undefined;
  setError(value?: Error): Game;
  hasError(): boolean;
  clearError(): Game;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Game.AsObject;
  static toObject(includeInstance: boolean, msg: Game): Game.AsObject;
  static serializeBinaryToWriter(message: Game, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Game;
  static deserializeBinaryFromReader(message: Game, reader: jspb.BinaryReader): Game;
}

export namespace Game {
  export type AsObject = {
    id: string,
    playersList: Array<Player.AsObject>,
    state?: State.AsObject,
    error?: Error.AsObject,
  }
}

export class GameList extends jspb.Message {
  getGamesList(): Array<Game>;
  setGamesList(value: Array<Game>): GameList;
  clearGamesList(): GameList;
  addGames(value?: Game, index?: number): Game;

  getError(): Error | undefined;
  setError(value?: Error): GameList;
  hasError(): boolean;
  clearError(): GameList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameList.AsObject;
  static toObject(includeInstance: boolean, msg: GameList): GameList.AsObject;
  static serializeBinaryToWriter(message: GameList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameList;
  static deserializeBinaryFromReader(message: GameList, reader: jspb.BinaryReader): GameList;
}

export namespace GameList {
  export type AsObject = {
    gamesList: Array<Game.AsObject>,
    error?: Error.AsObject,
  }
}

export class Player extends jspb.Message {
  getName(): string;
  setName(value: string): Player;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Player.AsObject;
  static toObject(includeInstance: boolean, msg: Player): Player.AsObject;
  static serializeBinaryToWriter(message: Player, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Player;
  static deserializeBinaryFromReader(message: Player, reader: jspb.BinaryReader): Player;
}

export namespace Player {
  export type AsObject = {
    name: string,
  }
}

export class Turn extends jspb.Message {
  getPlayer(): Player | undefined;
  setPlayer(value?: Player): Turn;
  hasPlayer(): boolean;
  clearPlayer(): Turn;

  getError(): Error | undefined;
  setError(value?: Error): Turn;
  hasError(): boolean;
  clearError(): Turn;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Turn.AsObject;
  static toObject(includeInstance: boolean, msg: Turn): Turn.AsObject;
  static serializeBinaryToWriter(message: Turn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Turn;
  static deserializeBinaryFromReader(message: Turn, reader: jspb.BinaryReader): Turn;
}

export namespace Turn {
  export type AsObject = {
    player?: Player.AsObject,
    error?: Error.AsObject,
  }
}

export class State extends jspb.Message {
  getPlayerturn(): State.Turn;
  setPlayerturn(value: State.Turn): State;

  getBoard(): string;
  setBoard(value: string): State;

  getError(): Error | undefined;
  setError(value?: Error): State;
  hasError(): boolean;
  clearError(): State;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): State.AsObject;
  static toObject(includeInstance: boolean, msg: State): State.AsObject;
  static serializeBinaryToWriter(message: State, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): State;
  static deserializeBinaryFromReader(message: State, reader: jspb.BinaryReader): State;
}

export namespace State {
  export type AsObject = {
    playerturn: State.Turn,
    board: string,
    error?: Error.AsObject,
  }

  export enum Turn { 
    PLAYER_1 = 0,
    PLAYER_2 = 1,
  }
}

export class Error extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): Error;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Error.AsObject;
  static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
  static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Error;
  static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
  export type AsObject = {
    message: string,
  }

  export enum ErrorType { 
    INVALID_GAME = 0,
    INVALID_REQUEST = 1,
    ERROR = 2,
  }
}

