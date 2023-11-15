import { Module } from '@nestjs/common';
import { ProdottiService } from './prodotti.service';
import { ProdottiController } from './prodotti.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdottoEntity } from './entities/prodotti.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProdottoEntity])],
  controllers: [ProdottiController],
  providers: [ProdottiService],
})
export class ProdottiModule {}
