import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './database/database.module';
import { CustomerModule } from './customer/customer.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, CustomerModule, HealthModule],
})
export class AppModule {}
