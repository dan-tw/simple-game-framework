// Original file: proto/game.proto

import type { Game as _game_Game, Game__Output as _game_Game__Output } from '../game/Game';
import type { Error as _game_Error, Error__Output as _game_Error__Output } from '../game/Error';

export interface GameList {
  'games'?: (_game_Game)[];
  'error'?: (_game_Error | null);
}

export interface GameList__Output {
  'games': (_game_Game__Output)[];
  'error': (_game_Error__Output | null);
}
