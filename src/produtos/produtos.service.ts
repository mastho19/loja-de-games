import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ProdutosService {

  constructor(@Inject('PRODUTO_REPOSITORY')
  private produtoRepository: Repository<Produto>
  ){}

  async listar(): Promise<Produto[]>{
    return this.produtoRepository.find()
  }

  private produtos: Produto[] = [];
  create(createProdutoDto: CreateProdutoDto) {
    const idMaxAtual = this.produtos[this.produtos.length - 1]?.id || 0;
    const id = idMaxAtual + 1

    const produto = {
      id,
      ...createProdutoDto
    };
    this.produtos.push(produto)
    return this.produtos;
    
  }

  findAll() {
    return this.produtos;
  }

  findOne(id: number) {
    const index = this.produtos.findIndex((produto) => produto.id === id)
    //return `This action returns a #${id} user`;
    return this.produtos[index];
    
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    const produto = this.findOne(id)
    
    const newProduto = {
      ...produto,
      ...updateProdutoDto,
    }
    
    const index = this.produtos.findIndex((produto) => produto.id === id)
    this.produtos[index] = newProduto

    return newProduto;
  }


  remove(id: number) {
    const index = this.produtos.findIndex((produto) => produto.id === id)

    if (index === -1){
      throw new NotFoundException(`Usuário com o id ${id} não foi encontrado.`) // Exceção quando não for encontrado.
    }


    this.produtos.splice(index, 1)


    return `This action removes a #${id} produto`;
  }

}
