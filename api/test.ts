import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { TiacTacToeClient as _TiacTacToeClient, TiacTacToeDefinition as _TiacTacToeDefinition } from './TiacTacToe';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  AddPlayerRequest: MessageTypeDefinition
  AddPlayerResponse: MessageTypeDefinition
  TiacTacToe: SubtypeConstructor<typeof grpc.Client, _TiacTacToeClient> & { service: _TiacTacToeDefinition }
}

