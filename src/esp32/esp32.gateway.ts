import {
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(3000, {
  transports: ['websocket'],
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})
export class Esp32Gateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(client: any) {
    console.log('Client connected:', client.id);
  }

  handleDisconnect(client: any) {
    console.log('Client disconnected:', client.id);
  }

  handleSend(data) {
    this.server.emit('broadcast', data);
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: string): string {
    this.server.emit('broadcast', data);
    return 'Message received';
  }
}
