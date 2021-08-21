import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import { Tool } from './tool.entity';

@Injectable()
export class ToolsService {
  constructor(
    @InjectRepository(Tool)
    private toolsRepository: Repository<Tool>,
  ) {}

  async create(createToolDto: CreateToolDto) {
    const tool = await this.toolsRepository.save(createToolDto);
    return this.toolsRepository.create(tool);
  }

  findAll() {
    return this.toolsRepository.find();
  }

  findOne(id: number) {
    return this.toolsRepository.findOne(id);
  }

  update(id: number, updateToolDto: UpdateToolDto) {
    return this.toolsRepository.update(id, updateToolDto);
  }

  remove(id: number) {
    return this.toolsRepository.delete(id);
  }
}
