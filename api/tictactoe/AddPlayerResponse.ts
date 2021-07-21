// Original file: proto/test.proto


// Original file: proto/test.proto

export enum _tictactoe_AddPlayerResponse_Outcome {
  SUCCESS = 0,
  FAILED = 1,
}

export interface AddPlayerResponse {
  'outcome'?: (_tictactoe_AddPlayerResponse_Outcome | keyof typeof _tictactoe_AddPlayerResponse_Outcome);
  'message'?: (string);
}

export interface AddPlayerResponse__Output {
  'outcome': (keyof typeof _tictactoe_AddPlayerResponse_Outcome);
  'message': (string);
}
