// Original file: proto/test.proto


// Original file: proto/test.proto

export enum _game_Error_ErrorType {
  INVALID_GAME = 0,
  INVALID_REQUEST = 1,
  ERROR = 2,
}

export interface Error {
  'message'?: (string);
}

export interface Error__Output {
  'message': (string);
}
