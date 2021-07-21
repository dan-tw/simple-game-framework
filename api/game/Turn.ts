// Original file: proto/test.proto

import type { Player as _game_Player, Player__Output as _game_Player__Output } from '../game/Player';
import type { Error as _game_Error, Error__Output as _game_Error__Output } from '../game/Error';

export interface Turn {
  'player'?: (_game_Player | null);
  'error'?: (_game_Error | null);
}

export interface Turn__Output {
  'player': (_game_Player__Output | null);
  'error': (_game_Error__Output | null);
}
