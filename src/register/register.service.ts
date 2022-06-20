import { Injectable } from '@nestjs/common';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRegisterDto } from './dto/create-register.dto';

@Injectable()
export class RegisterService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateRegisterDto) {
    return await this.prisma.register.create({
      data:{
        name: data.name,
        description: data.description,
        year: data.year,
        genre:{
          connectOrCreate:{
            where:{
              name: data.genreName
            },
            create:{
              name: data.genreName
            }
          }
        },
        type:{
          connectOrCreate:{
            where:{
              name: data.typeName
            },
            create:{
              name: data.typeName
            }
          }
        }
      },
      
    })
  }
 

  async findAll() {

    const registers = await this.prisma.register.findMany({
      include: {
        genre: true,
        type: true,
      }
    });
    return registers;
  }

  async findOne(id: number) {
    return await this.prisma.register.findUnique({
      where: {
        id: id,
      }
    })
  }

  async update(id: number, data: UpdateRegisterDto) {
    return await this.prisma.register.update({
      where: {
        id: id,
      },
      data: {
        name: data.name,
        description: data.description,
        year: data.year,
        genre:{
          connectOrCreate:{
            where:{
              name: data.genreName
            },
            create:{
              name: data.genreName
            }
          }
        },
        type:{
          connectOrCreate:{
            where:{
              name: data.typeName
            },
            create:{
              name: data.typeName
            }
          }
        }
      }
    })
  }

 async remove(id: number) {
    return await this.prisma.register.delete({
      where: {
        id: id,
      }
    })
  }
}
