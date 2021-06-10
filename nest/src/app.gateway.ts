import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { decycle, encycle } from 'json-cyclic';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { UsersService } from './users/users.service';

interface User {
  name: string;
  id: string;
  age: number;
  game: string;
  sex: number;
}

@WebSocketGateway()
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly usersService: UsersService) {}
  @WebSocketServer() server: Server;

  private logger: Logger = new Logger('AppGateway');
  private user: User;
  private serverInfo: Server;

  afterInit(server: Server) {
    this.serverInfo = server;
    this.logger.log('Init');
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: string): void {
    this.server.emit('msgToClient', payload);
    this.logger.log(decycle(this.serverInfo.clients().connected));
    this.user.name = 'hello';
    this.user.age = 15;
    this.user.id = client.id;

    this.usersService.create(this.user);
    this.server.emit('msgToUser', decycle(this.serverInfo.clients().connected));
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  listAllProperties(o) {
    let objectToInspect;
    let result = [];

    for (
      objectToInspect = o;
      objectToInspect !== null;
      objectToInspect = Object.getPrototypeOf(objectToInspect)
    ) {
      result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    }

    return result;
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }
}
