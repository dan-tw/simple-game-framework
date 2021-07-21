// Original file: proto/test.proto

import type { Player as _tictactoe_Player, Player__Output as _tictactoe_Player__Output } from '../tictactoe/Player';
import type { Error as _tictactoe_Error, Error__Output as _tictactoe_Error__Output } from '../tictactoe/Error';

export interface Turn {
  'player'?: (_tictactoe_Player | null);
  'error'?: (_tictactoe_Error | null);
}

export interface Turn__Output {
  'player': (_tictactoe_Player__Output | null);
  'error': (_tictactoe_Error__Output | null);
}
