import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ProdottiService } from './prodotti.service';
import { CreateProdottiDto } from './dto/create-prodotti.dto';
import { UpdateProdottiDto } from './dto/update-prodotti.dto';
import { CustomValidationPipe } from 'src/CustomPipes/idNumeric.pipe';

@Controller('prodotti')
export class ProdottiController {
  constructor(private readonly prodottiService: ProdottiService) {}

  @Post()
  async create(@Body() createProdottiDto: CreateProdottiDto) {
    try {
      if (await this.prodottiService.create(createProdottiDto))
        return 'inserimento avvenuto con successo';
      else
        throw new BadRequestException(
          "errore durante l'elaborazione della richiesta",
        );
    } catch (error) {
      throw new BadRequestException(error);
    }
    return this.prodottiService.create(createProdottiDto);
  }

  @Get('/ordinare/:id')
  async ordinare(
    @Param('id', CustomValidationPipe) id: number,
    @Body() quantita: UpdateProdottiDto,
  ): Promise<string | never> {
    try {
      if (!(await this.prodottiService.ordinare(id, quantita)))
        throw new BadRequestException(
          "errore durante l'elaborazione della richiesta",
        );
      else return 'operazione effettuata con successo';
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Get('/vendere/:id')
  async vendere(
    @Param('id', CustomValidationPipe) id: number,
    @Body() quantita: UpdateProdottiDto,
  ): Promise<string | never> {
    try {
      const successo = await this.prodottiService.vendere(id, quantita);
      // console.log(successo);
      if (!successo)
        throw new BadRequestException(
          "errore durante l'elaborazione della richieta",
        );
      else return 'operazione effettuata con successo';
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
