// src/kids/dto/create-kid.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsEmail, IsOptional } from 'class-validator';

export class CreateKidDto {
  @IsString()
  @ApiProperty()
  fullname: string;

  @IsInt()
  @ApiProperty()
  age: number;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsOptional()
  @ApiProperty()
  score?: number;
}
