// Original file: proto/test.proto

import type { Player as _game_Player, Player__Output as _game_Player__Output } from '../game/Player';
import type { State as _game_State, State__Output as _game_State__Output } from '../game/State';
import type { Error as _game_Error, Error__Output as _game_Error__Output } from '../game/Error';

export interface Game {
  'id'?: (string);
  'players'?: (_game_Player)[];
  'state'?: (_game_State | null);
  'error'?: (_game_Error | null);
}

export interface Game__Output {
  'id': (string);
  'players': (_game_Player__Output)[];
  'state': (_game_State__Output | null);
  'error': (_game_Error__Output | null);
}
