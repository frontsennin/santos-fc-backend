/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from '../../../models/user.model';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { UpdateUserDto } from '../dto/UpdateUser.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectModel(UserModel.name) private userModel: Model<UserModel>
    ) { }

    createUser(createUserDto: CreateUserDto) {
        const newUser = new this.userModel(createUserDto);

        return newUser.save();
    }

    getAll() {
        return this.userModel.find()
    }

    getUserById(id: string) {
        return this.userModel.findById(id)
    }

    updateUser(id: string, updateUserDto: UpdateUserDto) {
        return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true })
    }

    deleteUser(id: string) {
        return this.userModel.findByIdAndDelete(id)
    }
}
