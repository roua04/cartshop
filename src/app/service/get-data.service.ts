import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor() {}

  // Données des sous-catégories
  subCategorisFilterData = [
    { id: 1, categories: 'pc', subcategories: 'hp' },
    { id: 2, categories: 'pc', subcategories: 'lenovo' },
    { id: 3, categories: 'pc', subcategories: 'dell' },
    { id: 4, categories: 'pc', subcategories: 'asus' },
    { id: 5, categories: 'smartphones', subcategories: 'apple' },
    { id: 6, categories: 'smartphones', subcategories: 'samsung' },
    { id: 7, categories: 'gaming', subcategories: 'consoles' },
    { id: 8, categories: 'gaming', subcategories: 'xbox' },
    { id: 9, categories: 'gaming', subcategories: 'Nintendo Switch' },
    { id: 10, categories: 'accessoires', subcategories: 'casque' },
    { id: 11, categories: 'accessoires', subcategories: 'Wireless' },
    { id: 12, categories: 'accessoires', subcategories: 'watch' },
  ];

  // Données des catégories
  categoriesData = [
    {
      id: 1,
      name: 'pc',
      img: 'https://i.pinimg.com/236x/18/ef/4c/18ef4c890d2e8e0fab84e6a57fc580ee.jpg',
      code: 'pc',
    },
    {
      id: 2,
      name: 'smartphones',
      img: 'https://i.pinimg.com/236x/8f/06/81/8f0681ca228e5186a1fc0bd034b4b6c2.jpg',
      code: 'smartphones',
    },
    {
      id: 3,
      name: 'gaming',
      img: 'https://i.pinimg.com/236x/54/68/a3/5468a33bc43e258995f15ad01e5ad7cc.jpg',
      code: 'gaming',
    },
    {
      id: 4,
      name: 'accessoires',
      img: 'https://i.pinimg.com/236x/d2/c3/f9/d2c3f976dc70c3dd84642d30fb5b87de.jpg',
      code: 'accessoires',
    },
  ];

  // Données des produits
  productData = [
    {
      pdId: 8565,
      pdName: 'HP All-in-One Desktop Computer',
      pdDesc: 'Increase productivity with this HP all-in-one desktop computer. The 10th Generation Intel Core i7 processor and 16GB of DDR4 RAM.',
      pdPrice: 11499,
      pdCategory: 'pc',
      pdSubCategory: 'hp',
      pdImg: 'https://i.pinimg.com/564x/43/e8/5b/43e85b91359dc50fd44f174dcac943d1.jpg',
    },
    {
      pdId: 8566,
      pdName: 'Lenovo IdeaPad 330',
      pdDesc: 'Pc Portable Lenovo IdeaPad 330 / Dual Core / 8 Go / Chocolat + SIM Orange 30 Go',
      pdPrice: 79900,
      pdCategory: 'pc',
      pdSubCategory: 'lenovo',
      pdImg: 'https://i.pinimg.com/564x/35/f6/c0/35f6c0a1eac5327cbbf3e37de647cc43.jpg',
    },
{
      pdId: 8567,
      pdName: "PC Portable Asus ",
      pdDesc: "PC Portable Asus Vivobook 14 E410MA-BV2431WS - Intel N4020  - 4 Go - 128 Go eMMC- windows 11s",
      pdPrice: 7450,
      pdCategory: "pc",
      pdSubCategory: "asus",
      pdImg: "https://i.pinimg.com/564x/c6/10/62/c610623cee62cf36a05870a9e37c674d.jpg"
    },

    {
      pdId: 8568,
      pdName: "Dell 11-3120", 
      pdDesc: "About this item Intel Celeron N2840 2.16GHz; 16GB SSD; 4GB DDR3 11.6in LCD display; 1366 x 768; Intel HD Graphics 802.11A,802.11B,802.11G,802.11N",
      pdPrice: 74000,
      pdCategory:"pc",
      pdSubCategory: "dell",
      pdImg: "https://i.pinimg.com/564x/b4/67/9e/b4679e00fcac70d33c05fdf78d639480.jpg"
    },
    {
      pdId: 8569,
      pdName: "iPhone 13 Pro Max.",
      pdDesc: "The biggest Pro camera system upgrade ever. Super Retina XDR display with ProMotion for a faster, more responsive feel",
      pdPrice: 44990,
      pdCategory: "smartphones",
      pdSubCategory: "apple",
      pdImg: "https://i.pinimg.com/564x/51/b7/3e/51b73ec9bd81acd93e06d7c56eb760b0.jpg"
    },
    {
      pdId: 8570,
      pdName: "samsung galaxy s23 ultra",
      pdDesc: "Factory Unlocked Android Smartphone, 512GB Storage, 200MP Camera, Night Mode, Long Battery Life, S Pen, US Version, 2023, Lavender",
      pdPrice: 2199,
      pdCategory: "smartphones",
      pdSubCategory: "samsung",
      pdImg: "https://i.pinimg.com/736x/b3/59/50/b35950b0643d6758362c8839d1465207.jpg"
    },
    {
      pdId: 8571,
      pdName: "console playstation 5",
      pdDesc: " Playstation®5 digital edition (model group - slim) play like never before ® playstation ® 5 digital edition",
      pdPrice: 200,
      pdCategory: "gaming",
      pdSubCategory: "consoles",
      pdImg: "https://i.pinimg.com/564x/10/44/75/1044752ce069e808917d627f153822cd.jpg",
      
    },
    {
      pdId: 8572,
      pdName: "Xbox",
      pdDesc: "Unleash Your Gaming Potential with the Xbox One S 500GB: The Ultimate Gaming Console!",
      pdPrice: 500,
      pdCategory: "gaming",
      pdSubCategory: "xbox",
      pdImg: "https://i.pinimg.com/564x/20/f1/1a/20f11ab557497325dc484db63fdadc46.jpg",
    

    },
    {
      pdId: 8573,
      pdName: "Nintendo Switch",
      pdDesc: "Obtenez la console de jeu qui vous permet de jouer aux jeux que vous voulez, n'importe où, comme vous le voulez!",
      pdPrice: 800,
      pdCategory: "gaming",
      pdSubCategory: "nintro switch",
      pdImg: "https://i.pinimg.com/564x/59/92/da/5992da7e10b00b186ce18c3d0431a3e2.jpg",
      
    },
  
    {
      pdId: 8582,
      pdName: "casque P9 Bluetooth",
      pdDesc: "Le casque P9 Bluetooth est bien plus qu'un simple accessoire audio voiture il offre une performance exceptionnelle",
      pdPrice: 25000,
      pdCategory: "accessoires",
      pdSubCategory: "casque",
      pdImg: "https://i.pinimg.com/564x/ae/0a/d6/ae0ad63a126f555f445010480e15eb1e.jpg",
    },
    {
      pdId: 8583,
      pdName: "Wireless Gaming",
      pdDesc: "Wireless Gaming Headset Compatible With Bluetooth- Wireless Earbuds",
      pdPrice: 700,
      pdCategory: "accessoires",
      pdSubCategory: "Wireless",
      pdImg: "https://i.pinimg.com/564x/8b/66/ee/8b66eed72a490328ff0d06c2f02df8fe.jpg",
    },
    {
      pdId: 8584,
      pdName: "apple watch s9",
      pdDesc: "Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display WHY APPLE WATCH SERIES 9 ",
      pdPrice: 500,
      pdCategory: "accessoires",
      pdSubCategory: "watch",
      pdImg: "https://i.pinimg.com/236x/9a/5f/26/9a5f26e0e84180d10605e87bd20c5a06.jpg",
    },];
  }
