import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSum(numbers: string): number {
    console.log(numbers);
    if (!numbers) return 0; // return 0 if empty string

    return 0;
  }
}
