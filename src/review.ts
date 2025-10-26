export type Review = {
  id: number;
  productId: number;
  user: string;
  rating: number;
  comment: string;
  images?: string[];
  date: string;
};

export const productReviews: Review[] = [
  // Produk 1 - Kaos Polos Premium
  {
    id: 1,
    productId: 1,
    user: "Andi Pratama",
    rating: 5,
    comment: "Kualitas kaosnya sangat bagus! Bahannya lembut, adem, dan tidak mudah melar. Warna tetap cerah meski sudah dicuci berkali-kali.",
    images: [
      "https://images.unsplash.com/photo-1520975918318-3e58a1b4a8f0?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=300&fit=crop"
    ],
    date: "2025-10-20",
  },
  {
    id: 2,
    productId: 1,
    user: "Siti Nurhaliza",
    rating: 5,
    comment: "Bahan cotton-nya premium banget, lembut di kulit dan tidak panas. Ukurannya pas sesuai size chart. Puas!",
    date: "2025-10-18",
  },
  {
    id: 3,
    productId: 1,
    user: "Budi Santoso",
    rating: 4,
    comment: "Kaos berkualitas dengan harga terjangkau. Jahitannya rapi, cuma warna sedikit berbeda dari foto.",
    date: "2025-10-15",
  },

  // Produk 2 - Hoodie Urban Black
  {
    id: 4,
    productId: 2,
    user: "Dimas Saputra",
    rating: 5,
    comment: "Hoodienya keren banget! Desainnya modern dan bahan dalamnya lembut. Cocok dipakai malam hari atau nongkrong.",
    images: [
      "https://images.unsplash.com/photo-1556906781-9d9ae7e2c248?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1603782924478-241cebd1a3c5?w=400&h=300&fit=crop"
    ],
    date: "2025-10-21",
  },
  {
    id: 5,
    productId: 2,
    user: "Maya Putri",
    rating: 5,
    comment: "Hoodie favorit! Bahannya tebal tapi tidak gerah. Kantong depannya luas dan praktis. Recommended!",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a9032c12d37?w=400&h=300&fit=crop"
    ],
    date: "2025-10-19",
  },
  {
    id: 6,
    productId: 2,
    user: "Reza Fahmi",
    rating: 4,
    comment: "Bagus dan nyaman, tapi size L agak kekecilan. Mungkin next order bakal ambil XL.",
    date: "2025-10-16",
  },

  // Produk 3 - Celana Jeans Denim
  {
    id: 7,
    productId: 3,
    user: "Rizky Maulana",
    rating: 4,
    comment: "Celananya nyaman dan potongan slim fit-nya pas banget di badan. Kainnya kuat dan tidak panas dipakai seharian.",
    images: [
      "https://images.unsplash.com/photo-1585241645927-c7f2b9b6cdd9?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=300&fit=crop"
    ],
    date: "2025-10-22",
  },
  {
    id: 8,
    productId: 3,
    user: "Ahmad Wijaya",
    rating: 5,
    comment: "Jeans berkualitas! Bahan denim-nya tebal dan tidak mudah robek. Potongannya juga modern dan stylish.",
    date: "2025-10-20",
  },
  {
    id: 9,
    productId: 3,
    user: "Linda Sari",
    rating: 5,
    comment: "Suka banget sama celana ini! Nyaman dipakai seharian, tidak panas, dan modelnya pas di badan.",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop"
    ],
    date: "2025-10-17",
  },

  // Produk 4 - Sepatu Sneakers Modern
  {
    id: 10,
    productId: 4,
    user: "Lukman Hakim",
    rating: 5,
    comment: "Sneakers-nya ringan dan empuk banget di kaki. Sudah dipakai jalan seharian tetap nyaman, recommended!",
    images: [
      "https://images.unsplash.com/photo-1600180758890-6b94519d4a59?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop"
    ],
    date: "2025-10-23",
  },
  {
    id: 11,
    productId: 4,
    user: "Dewi Lestari",
    rating: 5,
    comment: "Sepatu keren dan nyaman! Sol-nya empuk, cocok buat jalan jauh. Desainnya juga minimalis dan mudah dipadukan.",
    date: "2025-10-21",
  },
  {
    id: 12,
    productId: 4,
    user: "Hendra Gunawan",
    rating: 4,
    comment: "Kualitas oke, cuma pengiriman agak lama. Overall puas dengan produknya.",
    date: "2025-10-19",
  },

  // Produk 5 - Topi Bucket Style
  {
    id: 13,
    productId: 5,
    user: "Nanda Putri",
    rating: 4,
    comment: "Topinya lucu dan stylish, cocok banget buat foto-foto di luar. Bahan halus dan ringan, tapi pengiriman agak lama.",
    images: [
      "https://images.unsplash.com/photo-1556229010-aa3f7e6c8b72?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=400&h=300&fit=crop"
    ],
    date: "2025-10-23",
  },
  {
    id: 14,
    productId: 5,
    user: "Yoga Pratama",
    rating: 5,
    comment: "Topi bucket-nya keren! Bahan adem dan tidak bikin kepala panas. Cocok buat hangout atau ke pantai.",
    date: "2025-10-20",
  },
  {
    id: 15,
    productId: 5,
    user: "Fitri Handayani",
    rating: 5,
    comment: "Bagus banget! Warna sesuai gambar dan bahannya berkualitas. Jadi pengen beli warna lain.",
    date: "2025-10-18",
  },

  // Produk 6 - Jaket Bomber
  {
    id: 16,
    productId: 6,
    user: "Eka Ramadhan",
    rating: 5,
    comment: "Jaket bomber-nya keren banget! Bahan luar halus dan bagian dalamnya hangat. Pas banget buat cuaca dingin.",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a9032c12d37?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=300&fit=crop"
    ],
    date: "2025-10-24",
  },
  {
    id: 17,
    productId: 6,
    user: "Angga Mahendra",
    rating: 5,
    comment: "Jaket favorit! Desain vintage-nya timeless dan bahan premium. Worth it banget!",
    date: "2025-10-22",
  },
  {
    id: 18,
    productId: 6,
    user: "Ratna Sari",
    rating: 4,
    comment: "Bagus dan hangat, cuma agak berat. Tapi overall puas dengan kualitasnya.",
    date: "2025-10-20",
  },

  // Produk 7 - Kemeja Flannel
  {
    id: 19,
    productId: 7,
    user: "Fajar Rahman",
    rating: 5,
    comment: "Motif flannel-nya bagus, warnanya tidak luntur. Jahitannya rapi dan bahan tebal tapi tetap nyaman dipakai.",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400&h=300&fit=crop"
    ],
    date: "2025-10-25",
  },
  {
    id: 20,
    productId: 7,
    user: "Dian Pertiwi",
    rating: 5,
    comment: "Kemeja flannel kualitas premium! Nyaman dipakai dan motifnya classic. Cocok untuk berbagai acara.",
    date: "2025-10-23",
  },
  {
    id: 21,
    productId: 7,
    user: "Irfan Hakim",
    rating: 4,
    comment: "Bagus tapi agak panas kalau siang hari. Lebih cocok untuk cuaca sejuk atau malam hari.",
    date: "2025-10-21",
  },

]