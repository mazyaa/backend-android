import { Request, Response } from "express";
import { getMahasiswa } from "../services/mahasiswaServices";

export const getMahasiswaHandler = async (req: Request, res: Response) => {
  try {
    const { nama } = req.query;

    const data = await getMahasiswa(nama as string);

    return res.status(200).json({
        message: "Berhasil mengambil data mahasiswa",
        data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Gagal mengambil data mahasiswa",
    });
  }
};
