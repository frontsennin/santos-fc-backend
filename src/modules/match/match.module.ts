import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MatchModel, MatchSchema } from '../../models/match.model';
import { MatchService } from './services/match.service';
import { MatchController } from './controllers/match.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: MatchModel.name,
                schema: MatchSchema
            }
        ])
    ],
    controllers: [
        MatchController
    ],
    providers: [
        MatchService
    ],
})
export class MatchModule { }
