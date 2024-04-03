import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StadiumModel, StadiumSchema } from '../../models/stadium.model';
import { StadiumService } from './services/stadium.service';
import { StadiumController } from './controllers/stadium.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: StadiumModel.name,
                schema: StadiumSchema
            }
        ])
    ],
    controllers: [
        StadiumController
    ],
    providers: [
        StadiumService
    ],
})
export class StadiumModule { }
