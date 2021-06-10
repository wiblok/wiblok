import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  HttpException,
  HttpStatus,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { ValidationPipe } from '../pipe/validation.pipe';
import { get } from 'http';
import { ForbiddenException } from '../exception/forbidden.exception';
import { LoggingInterceptor } from '../interceptor/logging.interceptor';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@UseInterceptors(LoggingInterceptor)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUser(): string {
    return this.usersService.getUser();
  }
  /*
    @Get(':id')
    getIdUser(@Param('id', ParseIntPipe) id: number): number{
        return id;
    }
  */
  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto)
    this.usersService.create(createUserDto);
    return "成功";
  }
  @Get(':id')
  getNameUser(@Param('id', ValidationPipe) id: number): number {
    return id;
  }
  @Get('throw')
  getException(): string {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
  @Get('override')
  getOverRideException(): string {
    throw new HttpException(
      { status: HttpStatus.FORBIDDEN, error: 'override custom' },
      HttpStatus.FORBIDDEN,
    );
  }
  @Get('custom')
  getCustomException(): string {
    throw new ForbiddenException();
  }
}
