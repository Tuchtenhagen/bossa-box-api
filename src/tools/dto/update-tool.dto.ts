import { PartialType } from '@nestjs/mapped-types';
import { CreateToolDto } from './create-tool.dto';

export class UpdateToolDto extends PartialType(CreateToolDto) {
  title: string;
  link: string;
  description: string;
}
