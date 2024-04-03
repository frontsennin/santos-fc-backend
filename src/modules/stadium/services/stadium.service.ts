import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StadiumModel } from '../../../models/stadium.model';
import { CreateStadiumDto } from '../dto/CreateStadium.dto';
import { UpdateStadiumDto } from '../dto/UpdateStadium.dto';

@Injectable()
export class StadiumService {

    constructor(
        @InjectModel(StadiumModel.name) private stadiumModel: Model<StadiumModel>
    ) { }

    createStadium(createStadiumDto: CreateStadiumDto) {
        const newStadium = new this.stadiumModel(createStadiumDto);

        return newStadium.save();
    }

    getAll() {
        return this.stadiumModel.find()
    }

    getStadiumById(id: string) {
        return this.stadiumModel.findById(id)
    }

    updateStadium(id: string, updateStadiumDto: UpdateStadiumDto) {
        return this.stadiumModel.findByIdAndUpdate(id, updateStadiumDto, { new: true })
    }

    deleteStadium(id: string) {
        return this.stadiumModel.findByIdAndDelete(id)
    }
}
