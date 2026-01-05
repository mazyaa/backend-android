import { prisma } from "./client";

async function main() {
  await prisma.mahasiswa.deleteMany();

  const data = [
    { nama: "Andi Saputra", nim: "2021001", jurusan: "Informatika" },
    { nama: "Budi Santoso", nim: "2021002", jurusan: "Sistem Informasi" },
    { nama: "Citra Lestari", nim: "2021003", jurusan: "Teknik Komputer" },
    { nama: "Dewi Anggraini", nim: "2021004", jurusan: "Informatika" },
    { nama: "Eko Prasetyo", nim: "2021005", jurusan: "Sistem Informasi" },
    { nama: "Fajar Nugroho", nim: "2021006", jurusan: "Teknik Komputer" },
    { nama: "Gita Maharani", nim: "2021007", jurusan: "Informatika" },
    { nama: "Hadi Wijaya", nim: "2021008", jurusan: "Sistem Informasi" },
    { nama: "Intan Permata", nim: "2021009", jurusan: "Teknik Komputer" },
    { nama: "Joko Susilo", nim: "2021010", jurusan: "Informatika" },

    { nama: "Kurniawan Putra", nim: "2021011", jurusan: "Sistem Informasi" },
    { nama: "Lia Oktaviani", nim: "2021012", jurusan: "Teknik Komputer" },
    { nama: "Muhammad Rizki", nim: "2021013", jurusan: "Informatika" },
    { nama: "Nanda Pratama", nim: "2021014", jurusan: "Sistem Informasi" },
    { nama: "Oktavia Sari", nim: "2021015", jurusan: "Teknik Komputer" },
    { nama: "Putri Ayu", nim: "2021016", jurusan: "Informatika" },
    { nama: "Qori Annisa", nim: "2021017", jurusan: "Sistem Informasi" },
    { nama: "Rama Hidayat", nim: "2021018", jurusan: "Teknik Komputer" },
    { nama: "Salsa Nurhaliza", nim: "2021019", jurusan: "Informatika" },
    { nama: "Taufik Hidayah", nim: "2021020", jurusan: "Sistem Informasi" },

    { nama: "Umar Faruq", nim: "2021021", jurusan: "Teknik Komputer" },
    { nama: "Vina Amelia", nim: "2021022", jurusan: "Informatika" },
    { nama: "Wahyu Setiawan", nim: "2021023", jurusan: "Sistem Informasi" },
    { nama: "Xenia Putri", nim: "2021024", jurusan: "Teknik Komputer" },
    { nama: "Yoga Prakoso", nim: "2021025", jurusan: "Informatika" },
    { nama: "Zahra Aulia", nim: "2021026", jurusan: "Sistem Informasi" },

    { nama: "Ahmad Fauzi", nim: "2021027", jurusan: "Teknik Komputer" },
    { nama: "Bella Kartika", nim: "2021028", jurusan: "Informatika" },
    { nama: "Chandra Gunawan", nim: "2021029", jurusan: "Sistem Informasi" },
    { nama: "Dimas Arya", nim: "2021030", jurusan: "Teknik Komputer" },
    { nama: "Erika Putri", nim: "2021031", jurusan: "Informatika" },
    { nama: "Fikri Ramadhan", nim: "2021032", jurusan: "Sistem Informasi" },
    { nama: "Gilang Saputra", nim: "2021033", jurusan: "Teknik Komputer" },
    { nama: "Hana Lestari", nim: "2021034", jurusan: "Informatika" },
    { nama: "Irfan Maulana", nim: "2021035", jurusan: "Sistem Informasi" },
    { nama: "Jessica Putri", nim: "2021036", jurusan: "Teknik Komputer" },

    { nama: "Kevin Pratama", nim: "2021037", jurusan: "Informatika" },
    { nama: "Lukman Hakim", nim: "2021038", jurusan: "Sistem Informasi" },
    { nama: "Maya Sari", nim: "2021039", jurusan: "Teknik Komputer" },
    { nama: "Niko Aditya", nim: "2021040", jurusan: "Informatika" },
    { nama: "Olivia Rahma", nim: "2021041", jurusan: "Sistem Informasi" },
    { nama: "Putra Wicaksono", nim: "2021042", jurusan: "Teknik Komputer" },
    { nama: "Queen Ananda", nim: "2021043", jurusan: "Informatika" },
    { nama: "Rizal Akbar", nim: "2021044", jurusan: "Sistem Informasi" },
    { nama: "Sinta Mahardika", nim: "2021045", jurusan: "Teknik Komputer" },
    { nama: "Tania Kusuma", nim: "2021046", jurusan: "Informatika" },
    { nama: "Ubay Pratama", nim: "2021047", jurusan: "Sistem Informasi" },
    { nama: "Vicky Ramadhan", nim: "2021048", jurusan: "Teknik Komputer" },
    { nama: "Wildan Fajar", nim: "2021049", jurusan: "Informatika" },
    { nama: "Yuni Kartika", nim: "2021050", jurusan: "Sistem Informasi" },
  ];

  await prisma.mahasiswa.createMany({ data });

  console.log("✅ 50 data mahasiswa berhasil di-seed");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
