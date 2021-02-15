import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DbModule } from './db/db.module';
import { CustomerModule } from './customer/customer.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [ConfigModule.forRoot(), DbModule, CustomerModule, HealthModule],
})
export class AppModule {}
