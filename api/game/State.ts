// Original file: proto/test.proto

import type { Error as _game_Error, Error__Output as _game_Error__Output } from '../game/Error';

// Original file: proto/test.proto

export enum _game_State_Turn {
  PLAYER_1 = 0,
  PLAYER_2 = 1,
}

export interface State {
  'playerTurn'?: (_game_State_Turn | keyof typeof _game_State_Turn);
  'board'?: (string);
  'error'?: (_game_Error | null);
}

export interface State__Output {
  'playerTurn': (keyof typeof _game_State_Turn);
  'board': (string);
  'error': (_game_Error__Output | null);
}
