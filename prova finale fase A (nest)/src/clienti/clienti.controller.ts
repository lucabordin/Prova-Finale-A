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
  UseGuards,
} from '@nestjs/common';
import { ClientiService } from './clienti.service';
import { CreateClientiDto } from './dto/create-clienti.dto';
import { UpdateClientiDto } from './dto/update-clienti.dto';
import { LoginClientiDto } from './dto/login-clienti.dto';
import { Public } from 'src/decoratorsCustom/public.decorator';
import { AuthGuard } from 'src/guards/authToken.guards';

@Controller('clienti')
export class ClientiController {
  constructor(private readonly clientiService: ClientiService) {}

  @Post()
  async create(
    @Body() createClientiDto: CreateClientiDto,
  ): Promise<string | never> {
    try {
      if (await this.clientiService.create(createClientiDto))
        return 'inserimento effettuato con successo';
      else
        throw new BadRequestException(
          "errore durante l'ealborazione della richiesta",
        );
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Post('/login')
  async login(@Body() loginClientiDto: LoginClientiDto) {
    try {
      console.log(loginClientiDto);
      const token = await this.clientiService.login(loginClientiDto);
      console.log(token);
      return token;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async findOne(@Param('id') id: string) {
    return await this.clientiService.findOne(id);
  }
}
