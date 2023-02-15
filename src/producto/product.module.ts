import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductMongo } from 'src/utils/productMongo.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [ProductService, ProductMongo],
  controllers: [ProductController],
})
export class ProductModule {}
