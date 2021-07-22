import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { GameServiceClient as _game_GameServiceClient, GameServiceDefinition as _game_GameServiceDefinition } from './game/GameService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  game: {
    Error: MessageTypeDefinition
    Game: MessageTypeDefinition
    GameList: MessageTypeDefinition
    GameService: SubtypeConstructor<typeof grpc.Client, _game_GameServiceClient> & { service: _game_GameServiceDefinition }
    Player: MessageTypeDefinition
    State: MessageTypeDefinition
    Turn: MessageTypeDefinition
  }
}

