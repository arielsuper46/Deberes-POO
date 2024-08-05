import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { KidsService } from '../kid/kid.service'; // Asegúrate de que este es el nombre correcto del servicio
import { kid } from '@prisma/client'; // Importa el tipo Kid de Prisma
import { CreateKidDto } from './dto/create-kid.dto'; // Asegúrate de que el DTO está definido
import { UpdateKidDto } from './dto/update-kid.dto'; // Asegúrate de que el DTO está definido
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';

@Controller('kids') // Cambiado a 'kids'
@ApiTags('Kids')
export class KidsController {
  constructor(private readonly kidsService: KidsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all kids' })
  @ApiResponse({ status: 200, description: 'List of kids', isArray: true })
  async findAll(): Promise<kid[]> {
    return this.kidsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a kid by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'ID of the kid' })
  @ApiResponse({ status: 200, description: 'Kid found' })
  @ApiResponse({ status: 404, description: 'Kid not found' })
  async findOne(@Param('id') id: string): Promise<kid | null> {
    return this.kidsService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new kid' })
  @ApiBody({ type: CreateKidDto })
  @ApiResponse({ status: 201, description: 'Kid created' })
  async create(@Body() createKidDto: CreateKidDto): Promise<kid> {
    return this.kidsService.create(createKidDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a kid by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'ID of the kid' })
  @ApiBody({ type: UpdateKidDto })
  @ApiResponse({ status: 200, description: 'Kid updated' })
  @ApiResponse({ status: 404, description: 'Kid not found' })
  async update(@Param('id') id: string, @Body() updateKidDto: UpdateKidDto): Promise<kid> {
    return this.kidsService.update(+id, updateKidDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a kid by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'ID of the kid' })
  @ApiResponse({ status: 200, description: 'Kid deleted' })
  @ApiResponse({ status: 404, description: 'Kid not found' })
  async remove(@Param('id') id: string): Promise<kid> {
    return this.kidsService.deleteKid(+id);
  }
}
