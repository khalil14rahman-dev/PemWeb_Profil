import { IsNotEmpty, IsString } from 'class-validator';

export class CreateJadwalDto {
  @IsString()
  @IsNotEmpty({ message: 'hari wajib diisi' })
  hari: string;

  @IsString()
  @IsNotEmpty({ message: 'matakuliah wajib diisi' })
  matakuliah: string;

  @IsString()
  @IsNotEmpty({ message: 'jam wajib diisi' })
  jam: string;
}