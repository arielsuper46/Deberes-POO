// kid.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateKidDto } from './dto/create-kid.dto'; // Asegúrate de que este DTO está definido
import { UpdateKidDto } from './dto/update-kid.dto'; // Asegúrate de que este DTO está definido
import { kid } from '@prisma/client';

@Injectable()
export class KidsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<kid[]> {
    return this.prisma.kid.findMany();
  }

  async findOne(id: number): Promise<kid | null> {
    return this.prisma.kid.findUnique({
      where: { id },
    });
  }

  async create(data: CreateKidDto): Promise<kid> {
    return this.prisma.kid.create({
      data: {
        fullname: data.fullname, 
        age: data.age,           
        email: data.email,       
        score: data.score,       
      },
    });
  }

  async update(id: number, data: UpdateKidDto): Promise<kid | null> {
    const existingKid = await this.prisma.kid.findUnique({ where: { id } });
    if (!existingKid) {
      throw new NotFoundException(`Kid with ID ${id} not found`);
    }

    return this.prisma.kid.update({
      where: { id },
      data: {
        fullname: data.fullname,
        age: data.age,
        email: data.email,
        score: data.score,
      },
    });
  }

  async deleteKid(id: number): Promise<kid | null> {
    return this.prisma.kid.delete({
      where: { id },
    });
  }
}
