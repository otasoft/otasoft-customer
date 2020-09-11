import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { CustomerModule } from './customer/customer.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DbModule,
    CustomerModule
  ],
})
export class AppModule {}
