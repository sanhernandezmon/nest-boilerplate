import { Module } from '@nestjs/common';
// Modules
import { ConfigModule } from '@nestjs/config';

// Controllers
import { AppController } from './app.controller';

// Services
import { AppService } from './app.service';

// Configs
import appConfig from './config/app.config';
import { CommonModule } from './common/common.module';
import { TodosModule } from './todos/todos.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
      envFilePath: '.env',
    }),
    InfrastructureModule,
    CommonModule,
    TodosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
