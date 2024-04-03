import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserSchema } from '../../models/user.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: UserModel.name,
                schema: UserSchema
            }
        ])
    ],
    controllers: [
        UserController
    ],
    providers: [
        UserService
    ],
})
export class UserModule { }
