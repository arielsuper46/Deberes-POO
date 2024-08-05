
import { IsString, IsInt, IsEmail, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateKidDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  
  fullname?: string;

  @IsInt()
  @IsOptional()
  @ApiProperty()
  age?: number;

  @IsEmail()
  @IsOptional()
  @ApiProperty()
  email?: string;

  @IsOptional()
  @ApiProperty()
  score?: number;
}
