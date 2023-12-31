import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { WorkOrdersService } from './work_orders.service';
import { CreateWorkOrderDto } from './dto/create-work_order.dto';
import { UpdateWorkOrderDto } from './dto/update-work_order.dto';
// import { from } from 'rxjs';

@Controller('hr/work-orders')
export class WorkOrdersController {
  constructor(private readonly workOrdersService: WorkOrdersService) {}

  @Post()
  create(@Body() createWorkOrderDto: CreateWorkOrderDto) {
    return this.workOrdersService.create(createWorkOrderDto);
  }

  @Get()
  async findAll(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('from') from: Date,
    @Query('to') to: Date,
    @Query('status') status: string,
  ) {
    return this.workOrdersService.findAll(page, limit, from, to, status);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateWorkOrderDto: UpdateWorkOrderDto,
  ) {
    return this.workOrdersService.update(+id, updateWorkOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workOrdersService.remove(+id);
  }
}
