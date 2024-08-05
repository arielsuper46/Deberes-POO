import { Module } from '@nestjs/common';
import { KidsController } from './kid/kid.controller';
import { KidsService } from './kid/kid.service';
import { PrismaService } from './prisma/prisma.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

@Module({
  imports: [],
  controllers: [KidsController],
  providers: [KidsService, PrismaService],
})
export class AppModule {
  configureSwagger(app) {
    const options = new DocumentBuilder()
      .setTitle('Mikasa Ball API')
      .setDescription('API to manage Mikasa ball products')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
  }
}
