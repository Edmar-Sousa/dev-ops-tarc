import { Controller, Get, } from '@nestjs/common';



@Controller('healtcheck')
export class HealtCheckController {
  
  @Get()
  async healt() {
    return {
      status: 'up',
    };
  }
}
