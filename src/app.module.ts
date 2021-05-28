import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [UsersModule, SharedModule],
  controllers: [AppController],
})
export class AppModule {}
