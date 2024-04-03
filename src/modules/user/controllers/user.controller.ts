/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { UserService } from '../services/user.service';
import mongoose from 'mongoose';
import { UpdateUserDto } from '../dto/UpdateUser.dto';

@ApiTags('user')
@Controller('user')
export class UserController {

    constructor(
        private userService: UserService
    ) { }

    @Get()
    getAll() {
        return this.userService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid User ID', 404);
        const findUser = await this.userService.getUserById(id);
        if (!findUser) throw new HttpException('User not found', 404);

        return findUser
    }

    @Post()
    @UsePipes(new ValidationPipe())
    @ApiBody({
        type: CreateUserDto,
        examples: {
            body: {
                summary: "Empty Body",
                description: "Description for when an empty body is used",
                value: {} as CreateUserDto
            },
        }
    })
    CreateUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto)
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    @ApiBody({
        type: UpdateUserDto,
        examples: {
            body: {
                summary: "Empty Body",
                description: "Description for when an empty body is used",
                value: {} as UpdateUserDto
            },
        }
    })
    async updateUser(
        @Param('id') id: string,
        @Body() updateUserDto: UpdateUserDto
    ) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid User ID', 404);
        const updated = await this.userService.updateUser(id, updateUserDto)

        if (!updated) throw new HttpException('User not found', 404);

        return updated
    }

    @Delete(':id')
    async deleteUser(
        @Param('id') id: string,
    ) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid User ID', 404);

        const deleted = await this.userService.deleteUser(id)
        if (!deleted) throw new HttpException('User not found', 404);
        return;
    }
}
