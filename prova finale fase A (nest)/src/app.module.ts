import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdottiModule } from './prodotti/prodotti.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientiModule } from './clienti/clienti.module';

@Module({
  imports: [
    ProdottiModule,
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +(process.env.POSTGRES_PORT ?? 5432),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      // entities: ['**/*.entity{.ts,.js}'],
      autoLoadEntities: true, //risolve automaticamente i percorsi delle entities
      synchronize: true, //crea automaticamente lo schema(tabelle)
      migrationsTableName: 'migration',
      migrations: ['src/migration/*.ts'],
    }),
    ClientiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
