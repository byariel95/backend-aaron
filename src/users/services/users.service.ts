import { User } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { SharedService } from 'src/shared/services/shared.service';
import { CreateUserDto, UpdateUserDto } from '../dtos';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: SharedService){}

    async getUsers() : Promise<User[]>
    {
        return this.prisma.user.findMany();

    }

    async createUser(createUserDto: CreateUserDto): Promise<User> 
    {
        return this.prisma.user.create({
          data: createUserDto
        });
    }

    async udpateUser(idUser : number, updateUserDto: UpdateUserDto): Promise<User> 
    {
        return this.prisma.user.update({
          where : { id: idUser },
          data: updateUserDto
        });
    }

    async deleteUser(idUser : number): Promise<{message: string}> 
    {
       this.prisma.user.delete({
          where : { id: idUser }
        });

        return { message : 'user deleted successfully'}
    }
}
