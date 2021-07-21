// Original file: proto/test.proto

import type { Error as _tictactoe_Error, Error__Output as _tictactoe_Error__Output } from '../tictactoe/Error';

// Original file: proto/test.proto

export enum _tictactoe_State_Turn {
  PLAYER_1 = 0,
  PLAYER_2 = 1,
}

export interface State {
  'playerTurn'?: (_tictactoe_State_Turn | keyof typeof _tictactoe_State_Turn);
  'board'?: (string);
  'error'?: (_tictactoe_Error | null);
}

export interface State__Output {
  'playerTurn': (keyof typeof _tictactoe_State_Turn);
  'board': (string);
  'error': (_tictactoe_Error__Output | null);
}
