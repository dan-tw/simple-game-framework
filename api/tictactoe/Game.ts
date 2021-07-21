// Original file: proto/test.proto

import type { Player as _tictactoe_Player, Player__Output as _tictactoe_Player__Output } from '../tictactoe/Player';
import type { State as _tictactoe_State, State__Output as _tictactoe_State__Output } from '../tictactoe/State';
import type { Error as _tictactoe_Error, Error__Output as _tictactoe_Error__Output } from '../tictactoe/Error';

export interface Game {
  'id'?: (string);
  'players'?: (_tictactoe_Player)[];
  'state'?: (_tictactoe_State | null);
  'error'?: (_tictactoe_Error | null);
}

export interface Game__Output {
  'id': (string);
  'players': (_tictactoe_Player__Output)[];
  'state': (_tictactoe_State__Output | null);
  'error': (_tictactoe_Error__Output | null);
}
