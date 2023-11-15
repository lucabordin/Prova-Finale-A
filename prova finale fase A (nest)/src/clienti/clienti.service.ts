import { Injectable } from '@nestjs/common';
import { CreateClientiDto } from './dto/create-clienti.dto';
import { UpdateClientiDto } from './dto/update-clienti.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteEntity } from './entities/clienti.entity';
import { Repository } from 'typeorm';
import { LoginClientiDto } from './dto/login-clienti.dto';

@Injectable()
export class ClientiService {
  jwtService: any;
  constructor(
    @InjectRepository(ClienteEntity)
    private clientiRepository: Repository<ClienteEntity>,
  ) {}

  async create(createClientiDto: CreateClientiDto): Promise<boolean | never> {
    try {
      if (!createClientiDto)
        throw new Error('il cliente inserito non è valido');
      const nuovoCliente: CreateClientiDto =
        await this.clientiRepository.create(createClientiDto);
      await this.clientiRepository.save(nuovoCliente);
      return true;
    } catch (error) {
      throw error;
    }
  }

  async login(loginClientiDto: LoginClientiDto) {
    try {
      console.log(loginClientiDto);
      const cliente = await this.clientiRepository.findOneBy({
        Email: loginClientiDto.Email,
      });
      if (!cliente) return false;
      if (loginClientiDto.Password != cliente?.Password) return false;
      const payload = {
        sub: cliente.CodiceCliente,
      };
      console.log(payload);
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const cliente: CreateClientiDto | null =
        await this.clientiRepository.findOneBy({ CodiceCliente: id });
      if (cliente) {
        const clienteDto: UpdateClientiDto = {
          CodiceCliente: cliente.CodiceCliente,
          Nome: cliente.Nome,
          Cognome: cliente.Cognome,
          DataDiNascita: cliente.DataDiNascita,
          Email: cliente.Email,
        };
        return clienteDto;
      } else
        throw new Error(
          `nessun prodotto che corrisponde all'id: ${id} trovato`,
        );
    } catch (error) {
      throw error;
    }
  }
}
