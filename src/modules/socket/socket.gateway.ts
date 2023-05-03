import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class SocketGateway {
  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: string): void {
    client.emit(
      'response',
      `Hello from WebSocket Server! You sent: ${payload}`,
    );
  }
}
