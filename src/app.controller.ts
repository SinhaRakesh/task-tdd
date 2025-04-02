import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/getsum/:numbers')
  getSum(@Param('numbers') numbers: string): number {
    return this.appService.getSum(numbers);
  }
}
