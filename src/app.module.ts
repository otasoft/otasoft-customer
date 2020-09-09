import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    DbModule,
    CustomerModule
  ],
})
export class AppModule {}
