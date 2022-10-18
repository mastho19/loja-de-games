import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [ProdutosModule, CategoriasModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
