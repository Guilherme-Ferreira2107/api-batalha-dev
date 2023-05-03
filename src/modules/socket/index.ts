import { Module } from '@nestjs/common';
import { SocketModule } from './socket.module';
import { SocketGateway } from './socket.gateway';

@Module({
  imports: [SocketModule],
  providers: [SocketGateway],
  exports: [SocketModule, SocketGateway],
})
export class SocketIndex {}
