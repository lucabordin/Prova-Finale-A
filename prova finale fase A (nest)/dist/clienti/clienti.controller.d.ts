import { ClientiService } from './clienti.service';
import { CreateClientiDto } from './dto/create-clienti.dto';
import { UpdateClientiDto } from './dto/update-clienti.dto';
import { LoginClientiDto } from './dto/login-clienti.dto';
export declare class ClientiController {
    private readonly clientiService;
    constructor(clientiService: ClientiService);
    create(createClientiDto: CreateClientiDto): Promise<string | never>;
    login(loginClientiDto: LoginClientiDto): Promise<false | {
        access_token: any;
    }>;
    findOne(id: string): Promise<UpdateClientiDto>;
}
