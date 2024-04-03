import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateStadiumDto } from '../dto/CreateStadium.dto';
import { StadiumService } from '../services/stadium.service';
import mongoose from 'mongoose';
import { UpdateStadiumDto } from '../dto/UpdateStadium.dto';

@ApiTags('stadium')
@Controller('stadium')
export class StadiumController {

    constructor(
        private stadiumService: StadiumService
    ) { }

    @Get()
    getAll() {
        return this.stadiumService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Stadium ID', 404);
        const findStadium = await this.stadiumService.getStadiumById(id);
        if (!findStadium) throw new HttpException('Stadium not found', 404);

        return findStadium
    }

    @Post()
    @UsePipes(new ValidationPipe())
    @ApiBody({
        type: CreateStadiumDto,
        examples: {
            body: {
                summary: "Empty Body",
                description: "Description for when an empty body is used",
                value: {} as CreateStadiumDto
            },
        }
    })
    CreateStadium(@Body() createStadiumDto: CreateStadiumDto) {
        return this.stadiumService.createStadium(createStadiumDto)
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    @ApiBody({
        type: UpdateStadiumDto,
        examples: {
            body: {
                summary: "Empty Body",
                description: "Description for when an empty body is used",
                value: {} as UpdateStadiumDto
            },
        }
    })
    async updateStadium(
        @Param('id') id: string,
        @Body() updateStadiumDto: UpdateStadiumDto
    ) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Stadium ID', 404);
        const updated = await this.stadiumService.updateStadium(id, updateStadiumDto)

        if (!updated) throw new HttpException('Stadium not found', 404);

        return updated
    }

    @Delete(':id')
    async deleteStadium(
        @Param('id') id: string,
    ) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Stadium ID', 404);

        const deleted = await this.stadiumService.deleteStadium(id)
        if (!deleted) throw new HttpException('Stadium not found', 404);
        return;
    }
}
