import { Module } from '@nestjs/common';
import { ToolsService } from './tools.service';
import { ToolsController } from './tools.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tool } from './tool.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tool])],
  controllers: [ToolsController],
  providers: [ToolsService],
  exports: [TypeOrmModule],
})
export class ToolsModule {}
