import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
//crea il decorator @Public() che imposta a true il valore di IS_PUBLIC_KEY
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
