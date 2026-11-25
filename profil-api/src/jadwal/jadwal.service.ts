import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJadwalDto } from './dto/create-jadwal.dto';

export interface JadwalItem {
  id: number;
  hari: string;
  matakuliah: string;
  jam: string;
}

@Injectable()
export class JadwalService {
  private nextId = 12;

  private jadwalList: JadwalItem[] = [
    { id: 1, hari: 'Senin', matakuliah: 'Penjaminan Mutu Perangkat Lunak', jam: '07.30 - 10.30' },
    { id: 2, hari: 'Senin', matakuliah: 'Manajemen Proyek', jam: '10.30 - 13.30' },
    { id: 3, hari: 'Senin', matakuliah: 'Perancangan Pemrograman Web', jam: '15.30 - 18.30' },
    { id: 4, hari: 'Selasa', matakuliah: 'Mobile Programming', jam: '10.30 - 13.30' },
    { id: 5, hari: 'Selasa', matakuliah: 'Pemrograman Web', jam: '14.30 - 17.30' },
    { id: 6, hari: 'Rabu', matakuliah: 'Wawasan Global TIK', jam: '08.30 - 10.30' },
    { id: 7, hari: 'Rabu', matakuliah: 'Kewirausahaan', jam: '15.30 - 17.30' },
    { id: 8, hari: 'Kamis', matakuliah: 'Pengalaman Pengguna', jam: '07.30 - 10.30' },
    { id: 9, hari: 'Kamis', matakuliah: 'Mobile Programming', jam: '12.30 - 15.30' },
    { id: 10, hari: 'Kamis', matakuliah: 'TPLM', jam: '15.30 - 17.30' },
    { id: 11, hari: 'Jumat', matakuliah: 'Kewarganegaraan', jam: '09.30 - 11.30' },
  ];

  findAll(): JadwalItem[] {
    return this.jadwalList;
  }

  findByHari(hari: string): JadwalItem[] {
    const hasil = this.jadwalList.filter(
      (item) => item.hari.toLowerCase() === hari.toLowerCase(),
    );

    if (hasil.length === 0) {
      throw new NotFoundException(`Jadwal untuk hari "${hari}" tidak ditemukan`);
    }

    return hasil;
  }

  create(createJadwalDto: CreateJadwalDto): JadwalItem {
    const baru: JadwalItem = {
      id: this.nextId++,
      ...createJadwalDto,
    };
    this.jadwalList.push(baru);
    return baru;
  }
}