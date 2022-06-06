import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { GoogleModule } from './google/google.module'

@Module({
  imports: [GoogleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
