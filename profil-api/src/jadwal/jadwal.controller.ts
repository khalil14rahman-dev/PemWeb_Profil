import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateJadwalDto } from './dto/create-jadwal.dto';
import { JadwalService } from './jadwal.service';

@Controller('api/jadwal')
export class JadwalController {
  constructor(private readonly jadwalService: JadwalService) {}

  @Get()
  getAll() {
    return this.jadwalService.findAll();
  }

  @Get(':hari')
  getByHari(@Param('hari') hari: string) {
    return this.jadwalService.findByHari(hari);
  }

  @Post()
  create(@Body() createJadwalDto: CreateJadwalDto) {
    return this.jadwalService.create(createJadwalDto);
  }
}