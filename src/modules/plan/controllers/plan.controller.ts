import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreatePlanDto } from '../dto/CreatePlan.dto';
import { PlanService } from '../services/plan.service';
import mongoose from 'mongoose';
import { UpdatePlanDto } from '../dto/UpdatePlan.dto';

@ApiTags('plan')
@Controller('plan')
export class PlanController {

    constructor(
        private planService: PlanService
    ) { }

    @Get()
    getAll() {
        return this.planService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Plan ID', 404);
        const findPlan = await this.planService.getPlanById(id);
        if (!findPlan) throw new HttpException('Plan not found', 404);

        return findPlan
    }

    @Post()
    @UsePipes(new ValidationPipe())
    @ApiBody({
        type: CreatePlanDto,
        examples: {
            body: {
                summary: "Empty Body",
                description: "Description for when an empty body is used",
                value: {} as CreatePlanDto
            },
        }
    })
    CreatePlan(@Body() createPlanDto: CreatePlanDto) {
        return this.planService.createPlan(createPlanDto)
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    @ApiBody({
        type: UpdatePlanDto,
        examples: {
            body: {
                summary: "Empty Body",
                description: "Description for when an empty body is used",
                value: {} as UpdatePlanDto
            },
        }
    })
    async updatePlan(
        @Param('id') id: string,
        @Body() updatePlanDto: UpdatePlanDto
    ) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Plan ID', 404);
        const updated = await this.planService.updatePlan(id, updatePlanDto)

        if (!updated) throw new HttpException('Plan not found', 404);

        return updated
    }

    @Delete(':id')
    async deletePlan(
        @Param('id') id: string,
    ) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Plan ID', 404);

        const deleted = await this.planService.deletePlan(id)
        if (!deleted) throw new HttpException('Plan not found', 404);
        return;
    }
}
