// Original file: proto/test.proto

import type { Game as _tictactoe_Game, Game__Output as _tictactoe_Game__Output } from '../tictactoe/Game';
import type { Error as _tictactoe_Error, Error__Output as _tictactoe_Error__Output } from '../tictactoe/Error';

export interface GameList {
  'games'?: (_tictactoe_Game)[];
  'error'?: (_tictactoe_Error | null);
}

export interface GameList__Output {
  'games': (_tictactoe_Game__Output)[];
  'error': (_tictactoe_Error__Output | null);
}
