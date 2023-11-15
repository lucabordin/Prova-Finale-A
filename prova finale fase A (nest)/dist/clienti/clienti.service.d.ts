import { CreateClientiDto } from './dto/create-clienti.dto';
import { UpdateClientiDto } from './dto/update-clienti.dto';
import { ClienteEntity } from './entities/clienti.entity';
import { Repository } from 'typeorm';
import { LoginClientiDto } from './dto/login-clienti.dto';
export declare class ClientiService {
    private clientiRepository;
    jwtService: any;
    constructor(clientiRepository: Repository<ClienteEntity>);
    create(createClientiDto: CreateClientiDto): Promise<boolean | never>;
    login(loginClientiDto: LoginClientiDto): Promise<false | {
        access_token: any;
    }>;
    findOne(id: string): Promise<UpdateClientiDto>;
}
