import * as jspb from 'google-protobuf'



export class AddPlayerRequest extends jspb.Message {
  getName(): string;
  setName(value: string): AddPlayerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPlayerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddPlayerRequest): AddPlayerRequest.AsObject;
  static serializeBinaryToWriter(message: AddPlayerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPlayerRequest;
  static deserializeBinaryFromReader(message: AddPlayerRequest, reader: jspb.BinaryReader): AddPlayerRequest;
}

export namespace AddPlayerRequest {
  export type AsObject = {
    name: string,
  }
}

export class AddPlayerResponse extends jspb.Message {
  getOutcome(): AddPlayerResponse.Outcome;
  setOutcome(value: AddPlayerResponse.Outcome): AddPlayerResponse;

  getMessage(): string;
  setMessage(value: string): AddPlayerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPlayerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddPlayerResponse): AddPlayerResponse.AsObject;
  static serializeBinaryToWriter(message: AddPlayerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPlayerResponse;
  static deserializeBinaryFromReader(message: AddPlayerResponse, reader: jspb.BinaryReader): AddPlayerResponse;
}

export namespace AddPlayerResponse {
  export type AsObject = {
    outcome: AddPlayerResponse.Outcome,
    message: string,
  }

  export enum Outcome { 
    SUCCESS = 0,
    FAILED = 1,
  }
}

