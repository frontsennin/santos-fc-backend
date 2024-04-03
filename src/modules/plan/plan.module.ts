import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlanModel, PlanSchema } from '../../models/plan.model';
import { PlanService } from './services/plan.service';
import { PlanController } from './controllers/plan.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: PlanModel.name,
                schema: PlanSchema
            }
        ])
    ],
    controllers: [
        PlanController
    ],
    providers: [
        PlanService
    ],
})
export class PlanModule { }
