import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dtos';
import { UsersService } from './services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('all')
  getAllUsers() 
  {
      return  this.usersService.getUsers();
  }

  @Post('add')
   createUser(@Body() createUserDto: CreateUserDto) 
  {
      return  this.usersService.createUser(createUserDto);
  }

  @Patch('edit/:id')
   updateUser(@Param('id',ParseIntPipe) id : number ,@Body() updateUserDto: UpdateUserDto) 
  {
      return  this.usersService.udpateUser(id, updateUserDto);
  }

  @Delete('delete/:id')
   deleteUser(@Param('id',ParseIntPipe) id :number)
  {
      return this.usersService.deleteUser(id);
  }
}
