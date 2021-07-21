import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { TicTacToeClient as _tictactoe_TicTacToeClient, TicTacToeDefinition as _tictactoe_TicTacToeDefinition } from './tictactoe/TicTacToe';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  tictactoe: {
    AddPlayerRequest: MessageTypeDefinition
    AddPlayerResponse: MessageTypeDefinition
    TicTacToe: SubtypeConstructor<typeof grpc.Client, _tictactoe_TicTacToeClient> & { service: _tictactoe_TicTacToeDefinition }
  }
}

