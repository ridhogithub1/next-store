export type Product = {
  id: number;
  name: string;
  price: number;
  images: string[];
  description?: string;
};

export const staticProducts: Product[] = [
  { 
    id: 1, 
    name: "Kaos Polos Premium", 
    price: 75000, 
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=300&fit=crop"
    ],
    description: "Kaos polos berkualitas premium dengan bahan cotton combed 30s yang nyaman dan tidak mudah luntur."
  },
  { 
    id: 2, 
    name: "Hoodie Urban Black", 
    price: 150000, 
    images: [
      "https://images.unsplash.com/photo-1556821840-3a9032c12d37?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=400&h=300&fit=crop"
    ],
    description: "Hoodie stylish dengan desain urban modern, dilengkapi kantong depan dan hood yang adjustable."
  },
  { 
    id: 3, 
    name: "Celana Jeans Denim", 
    price: 200000, 
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=300&fit=crop"
    ],
    description: "Celana jeans premium dengan cut slim fit dan bahan denim berkualitas tinggi yang tahan lama."
  },
  { 
    id: 4, 
    name: "Sepatu Sneakers Modern", 
    price: 300000, 
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop"
    ],
    description: "Sneakers dengan teknologi cushioning terbaru untuk kenyamanan maksimal sepanjang hari."
  },
  { 
    id: 5, 
    name: "Topi Bucket Style", 
    price: 50000, 
    images: [
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1514327605112-b887c0e61c4a?w=400&h=300&fit=crop"
    ],
    description: "Topi bucket trendy dengan berbagai pilihan warna untuk melengkapi gaya kasual Anda."
  },
  { 
    id: 6, 
    name: "Jaket Bomber", 
    price: 180000, 
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=400&h=300&fit=crop"
    ],
    description: "Jaket bomber klasik dengan desain vintage dan bahan berkualitas premium untuk tampilan yang stylish."
  },
  { 
    id: 7, 
    name: "Kemeja Flannel", 
    price: 120000, 
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400&h=300&fit=crop"
    ],
    description: "Kemeja flannel dengan motif kotak-kotak klasik, cocok untuk gaya kasual maupun semi formal."
  },
  { 
    id: 8, 
    name: "Tas Ransel Urban", 
    price: 250000, 
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=400&h=300&fit=crop"
    ],
    description: "Tas ransel multifungsi dengan kompartemen laptop dan desain ergonomis untuk aktivitas sehari-hari."
  },
  { 
    id: 9, 
    name: "Sweater Rajut Knit", 
    price: 135000, 
    images: [
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=300&fit=crop"
    ],
    description: "Sweater rajut dengan desain minimalis yang hangat dan nyaman untuk cuaca dingin."
  },
  { 
    id: 10, 
    name: "Celana Chino Slim", 
    price: 165000, 
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=300&fit=crop"
    ],
    description: "Celana chino dengan potongan slim fit yang elegan, cocok untuk acara formal maupun kasual."
  },
  { 
    id: 11, 
    name: "Kaos Stripe Nautical", 
    price: 85000, 
    images: [
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=300&fit=crop"
    ],
    description: "Kaos bergaris dengan sentuhan nautical yang fresh dan cocok untuk aktivitas santai."
  },
  { 
    id: 12, 
    name: "Sandal Slide Comfort", 
    price: 95000, 
    images: [
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1520256788229-d4640c632e4b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1560769680-ba4c5b632b6c?w=400&h=300&fit=crop"
    ],
    description: "Sandal slide dengan bantalan empuk yang nyaman untuk santai di rumah atau ke pantai."
  },
  { 
    id: 13, 
    name: "Kacamata Aviator Classic", 
    price: 125000, 
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop"
    ],
    description: "Kacamata aviator dengan lensa UV protection untuk melindungi mata dari sinar matahari."
  },
  { 
    id: 14, 
    name: "Jaket Denim Wash", 
    price: 195000, 
    images: [
      "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1601333144130-8cbb312386b6?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=400&h=300&fit=crop"
    ],
    description: "Jaket denim dengan efek wash yang stylish, cocok untuk berbagai gaya berpakaian."
  },
  { 
    id: 15, 
    name: "Kemeja Oxford Formal", 
    price: 140000, 
    images: [
      "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=300&fit=crop"
    ],
    description: "Kemeja oxford dengan bahan premium untuk tampilan formal yang elegan dan profesional."
  },
  { 
    id: 16, 
    name: "Celana Jogger Sporty", 
    price: 145000, 
    images: [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?w=400&h=300&fit=crop"
    ],
    description: "Celana jogger dengan bahan stretch yang nyaman untuk aktivitas olahraga atau santai."
  },
  { 
    id: 17, 
    name: "Tas Selempang Canvas", 
    price: 110000, 
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&h=300&fit=crop"
    ],
    description: "Tas selempang canvas praktis dengan banyak kantong untuk barang-barang essensial."
  },
  { 
    id: 18, 
    name: "Kaos Henley Vintage", 
    price: 90000, 
    images: [
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=300&fit=crop"
    ],
    description: "Kaos henley dengan desain vintage yang timeless dan bahan cotton yang breathable."
  },
  { 
    id: 19, 
    name: "Sepatu Loafer Leather", 
    price: 275000, 
    images: [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1582897085656-c823e5d2410f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=400&h=300&fit=crop"
    ],
    description: "Sepatu loafer berbahan kulit asli dengan desain klasik yang cocok untuk acara formal."
  },
  { 
    id: 20, 
    name: "Topi Baseball Cap", 
    price: 65000, 
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=300&fit=crop"
    ],
    description: "Topi baseball cap dengan bordir premium, cocok untuk melindungi dari sinar matahari."
  }
];