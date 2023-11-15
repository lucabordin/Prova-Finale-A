import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class CustomValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (this.isNumber(value)) return Number(value);
    else throw new BadRequestException('Non è un numero');
  }

  private isNumber(value?: string | number): boolean {
    return value != null && value !== '' && !isNaN(Number(value.toString()));
  }
}
