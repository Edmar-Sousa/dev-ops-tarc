import { Controller, Get, Response } from '@nestjs/common';

import { Response as Res } from 'express';


@Controller('healtcheck')
export class HealtCheckController {
  
  @Get()
  async healt(@Response() response: Res) {
    const error = false;

    if (error) {
      return response
      .status(500)
      .json({
          message: 'Erro interno',
        })
    }

    return response
      .status(200)
      .json({
          status: 'up',
        });
  }
}
