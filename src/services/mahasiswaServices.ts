import {
  findAllMahasiswa,
  findMahasiswaByNama,
} from '../repositories/mahasiswaRepository'

export const getMahasiswa = async (nama?: string) => {
  if (nama && nama.trim() !== '') { // use trim to avoid spaces-only input
    return findMahasiswaByNama(nama)
  }

  return findAllMahasiswa();
}
