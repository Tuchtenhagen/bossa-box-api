import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToolsController } from './tools/tools.controller';
import { ToolsModule } from './tools/tools.module';
import { ToolsService } from './tools/tools.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ToolsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', //process.env.DATABASE_HOST,
      port: 5432, //parseInt(process.env.DATABASE_PORT),
      username: 'tuchtenhagen', //process.env.DATABASE_USER,
      password: 'password', //process.env.DATABASE_PASS,
      database: 'bossa-box', //process.env.DATABASE_NAME,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController, ToolsController],
  providers: [AppService, ToolsService, ConfigService],
})
export class AppModule {}
