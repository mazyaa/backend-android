import { prisma } from '../utils/prisma/client'

export const findAllMahasiswa = async () => {
  return prisma.mahasiswa.findMany({
    orderBy: { id: 'asc' },
  })
}

export const findMahasiswaByNama = async (nama: string) => {
  return prisma.mahasiswa.findMany({
    where: {
      nama: {
        contains: nama, 
        mode: 'insensitive',
      },
    },
    orderBy: { id: 'asc' },
  })
}