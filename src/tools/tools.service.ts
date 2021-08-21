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
  tools: UpdateToolDto[] = [
    {
      id: 1,
      title: 'title one',
      description: 'description one',
      link: 'link one',
      tags: ['tag one'],
    },
    {
      id: 2,
      title: 'title two',
      description: 'description two',
      link: 'link two',
      tags: ['tag two'],
    },
    {
      id: 3,
      title: 'title three',
      description: 'description three',
      link: 'link three',
      tags: ['tag three'],
    },
  ];

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
