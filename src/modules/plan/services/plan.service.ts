import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PlanModel } from '../../../models/plan.model';
import { CreatePlanDto } from '../dto/CreatePlan.dto';
import { UpdatePlanDto } from '../dto/UpdatePlan.dto';

@Injectable()
export class PlanService {

    constructor(
        @InjectModel(PlanModel.name) private planModel: Model<PlanModel>
    ) { }

    createPlan(createPlanDto: CreatePlanDto) {
        const newPlan = new this.planModel(createPlanDto);

        return newPlan.save();
    }

    getAll() {
        return this.planModel.find()
    }

    getPlanById(id: string) {
        return this.planModel.findById(id)
    }

    updatePlan(id: string, updatePlanDto: UpdatePlanDto) {
        return this.planModel.findByIdAndUpdate(id, updatePlanDto, { new: true })
    }

    deletePlan(id: string) {
        return this.planModel.findByIdAndDelete(id)
    }
}
