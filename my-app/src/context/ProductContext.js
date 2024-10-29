import React, { createContext, useContext } from 'react';

// Sample Product Data
const products = [
    {
        id: 1,
        name: 'Samsung Galaxy S21 5G',
        price: 164.00,
        description: 'SAMSUNG Galaxy S21 5G 128GB - Unlocked smartphone with 6.2" screen and 8GB RAM',
        department: 'electronics',
        category: 'Smartphone',
        image: 'https://i5.walmartimages.com/seo/USED-Samsung-Galaxy-S21-5G-Xfinity-Only-128GB-Gray-6-2-in_fe0d20e8-4216-4cc8-8c07-34021252ea06.99c756a71ffb2ef58f5310fa4f7f0956.jpeg',
        details: {
            provider: 'Samsung',
            screenSize: '6.2"',
            storage: '128 GB',
            ram: '8 GB',
            features: ['Wireless Charging', 'Water-Resistant'],
            weight: '0.38 lbs'
        },
        customerRating: 4
    },
    {
        id: 2, // Incrementing the ID for each product
        name: 'iPhone 16',
        price: 799.00,
        description: 'By Apple',
        department: 'electronics',
        category: 'mobile',
        image: 'https://i5.walmartimages.com/seo/Verizon-iPhone-16-Pro-Max-256GB-Desert-Titanium-Apple-Intelligence_2a3b7743-c254-4ea6-807e-173340f9184b.24f9f58f9c3d33fa07c0d1921bca65a1.jpeg',
        details: {
            provider: 'AT&T',
            screenSize: "6.7\"",
            storage: '512 GB',
            ram: '8 GB',
            features: ['Super Retina XDR Display'],
            weight: '7.81 oz',
        },
        customerRating: 3
    },
    {
        id: 3,
        name: 'Sony Wireless Headphones',
        price: 289.00,
        description: 'Sony Wireless Headphones with built-in microphone and Bluetooth connectivity',
        department: 'electronics',
        category: 'Headphones',
        image: 'https://i5.walmartimages.com/seo/Sony-WH-1000XM5-The-Best-Wireless-Noise-Canceling-Headphones-Black_7384c879-1d54-47e8-9876-1d7adadcf0a5.542c245c25d295b30fa5820eacea4450.jpeg',
        details: {
            provider: 'Sony',
            screenSize: null, // Not applicable for headphones
            storage: null,    // Not applicable for headphones
            ram: null,        // Not applicable for headphones
            features: ['Built-in Microphone', 'Bluetooth', 'Wireless', 'Noise-Canceling'],
            weight: null      // Not specified in the HTML
        },
        customerRating: 5
    },
    {
        id: 4, // Assuming an ID for the product
        name: "Apple 15-Inch MacBook Air Laptop 2023",
        price: 1149.99,
        description: "By Apple",
        department: "electronics",
        category: "Laptop",
        image: "https://i5.walmartimages.com/seo/Apple-MacBook-Pro-MVVM2LL-A-16-32GB-1TB-SSD-Core-i9-9880H-2-3GHz-macOS-Space-Gray-Used-Good_ee1e08c0-e3b1-47c1-afab-312530485f04.11680c93ae2176f0cc5befac1e8b7a00.jpeg",
        details: {
            provider: "Apple",
            screenSize: "13.3 in",
            storage: "256 GB",
            ram: "8 GB",
            features: "Apple M1, Battery life: 15 h",
            weight: "2.8 lb"
        },
        customerRating: 2 // Assuming a rating scale of 1 to 5
    },
    {
        id: 5,
        name: 'Dell XPS 13 7390 2-in-1 Touchscreen Intel Core i7-1065G7',
        price: 1099.00,
        description: '2-in-1 touchscreen laptop with Intel Core i7 processor',
        department: 'electronics',
        category: 'Laptop',
        image: 'https://i5.walmartimages.com/seo/Pre-Owned-Dell-XPS-13-9300-Touchscreen-Laptop-Intel-Core-i7-1065G7-1-30GHz-RAM-8-GB-256-GB-SSD-GPU-Intel-R-Iris-R-Plus-Graphics-Refurbished-Good_5d5837c2-b75a-4ee9-9258-aaf7c138d184.e11c2573236cc980f4fbc9ba8cab1d2d.jpeg',
        details: {
            provider: 'Dell',
            screenSize: '13.3 in',
            storage: '256 GB SSD',
            ram: '8 GB',
            features: 'Touchscreen, Windows 11 Home',
            weight: 'Approx. 2.7 lbs' // You can modify this based on actual weight if available
        },
        customerRating: 3, // Assuming a 5-star rating based on the filled stars
    },
    {
        id: 6,
        name: "LG 70” 4K UHD Smart TV 2160p webOS, 70UQ7070ZU",
        price: 598.00,
        description: "By LG",
        department: "electronics",
        category: "Smart TV",
        image: "https://i5.walmartimages.com/seo/LG-70-4K-UHD-Smart-TV-2160p-webOS-70UQ7070ZUD_8f08cf49-277d-4d76-bc10-0bec3177948e.5aa7d7271979c7fe4c85fb92d8ce0fbf.jpeg",
        details: {
            provider: "LG",
            screenSize: "70 in",
            storage: null, // Storage not applicable for TV
            ram: null,     // RAM not applicable for TV
            features: [
                "Platform: WebOS",
                "Display: LED",
                "Refresh rate: 60 Hz",
                "Aspect: 16:9",
                "Backlight type: Direct Lit"
            ],
            weight: null // Weight not provided
        },
        customerRating: 4,
    },
    {
        id: 7,
        name: 'Crew Neck Men Sweatshirt',
        price: 20.00,
        description: 'GENTS BLISS Crew Neck Sweatshirts for Men - Henley Long Sleeve Tops, Casual Pullover Sweatshirt with Pocket, Comfort Fit, Cooling, and Easy Care.',
        department: 'fashion',
        category: 'Sweatshirt',
        image: 'https://i5.walmartimages.com/seo/GENTS-BLISS-Crew-Neck-Sweatshirts-for-Men-Henley-Long-Sleeve-Tops-Casual-Pullover-Sweatshirts-with-Pocket_4a9d9561-a956-460d-a5cf-62208d41add6.8202859f293adff004bbc278fabdfed7.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
        details: {
            provider: 'GENTS BLISS',
            clothingSize: 'L',
            fabricContent: '95% Polyester',
            features: ['Breathable', 'Comfort Fit', 'Cooling', 'Easy Care'],
            weight: 'N/A'
        },
        customerRating: 5
    },
    {
        id: 8, // Unique identifier for the product
        name: "Boys T-Shirt & Pants",
        price: 22.00,
        description: "A stylish T-shirt and pants set featuring The Avengers theme, perfect for active boys.",
        department: "fashion",
        category: "Clothing",
        image: "https://i5.walmartimages.com/seo/Marvel-Superheroes-Avengers-and-Spider-Man-2-Piece-Set-Boys-Long-Sleeve-Active-Mesh-T-Shirt-Pants-2-Pack-Bundle-Set_5d341e81-a778-4fd7-8f04-41681fff69b7.c82e56384775818016fd8a03e49b789e.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
            provider: "The Avengers",
            color: "Blue/Orange",
            fabricContent: "100% Cotton",
            brand: "The Avengers",
            features: ["Washable"],
            weight: "200g"
        },
        customerRating: 5
    },
    {
        id: 9, // Unique identifier for the product
        name: "Boys T-Shirt & Pants",
        price: 22.00,
        description: "A stylish T-shirt and pants set featuring The Avengers theme, perfect for active boys.",
        department: "fashion",
        category: "Clothing",
        image: "https://i5.walmartimages.com/seo/Marvel-Superheroes-Avengers-and-Spider-Man-2-Piece-Set-Boys-Long-Sleeve-Active-Mesh-T-Shirt-Pants-2-Pack-Bundle-Set_5d341e81-a778-4fd7-8f04-41681fff69b7.c82e56384775818016fd8a03e49b789e.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "The Avengers",
          color: "Blue/Orange",
          fabricContent: "100% Cotton",
          brand: "The Avengers",
          features: ["Washable"],
          weight: "200g"
        },
        customerRating: 5
      },
      {
        id: 10, // Unique identifier for the product
        name: "Boys T-Shirt & Pants",
        price: 22.00,
        description: "A stylish T-shirt and pants set featuring The Avengers theme, perfect for active boys.",
        department: "fashion",
        category: "Clothing",
        image: "https://i5.walmartimages.com/seo/Marvel-Superheroes-Avengers-and-Spider-Man-2-Piece-Set-Boys-Long-Sleeve-Active-Mesh-T-Shirt-Pants-2-Pack-Bundle-Set_5d341e81-a778-4fd7-8f04-41681fff69b7.c82e56384775818016fd8a03e49b789e.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "The Avengers",
          color: "Blue/Orange",
          fabricContent: "100% Cotton",
          brand: "The Avengers",
          features: ["Washable"],
          weight: "200g"
        },
        customerRating: 5
    },
    {
        id: 11, // Unique identifier for the product
        name: "Women Dress",
        price: 50.00,
        description: "By Jessica Simpson",
        department: "fashion",
        category: "Clothing",
        image: "https://i5.walmartimages.com/seo/Jessica-Simpson-Women-s-Phoebe-Maxi-Dress_3b4ffe56-d026-485d-bc12-73499e8118ae.67ce070dc09d9958306bce23908ad1b3.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "Jessica Simpson",
          color: "Anthracite-Autumn Patchwork",
          fabricContent: "Viscose",
          brand: "Jessica Simpson",
          features: ["Washable"]
        },
        customerRating: 5
    },      
    {
        id: 12, // Unique identifier for the product
        name: "Womens SweatShirt",
        price: 20.00,
        description: "By GENTS BLISS",
        department: "fashion",
        category: "Clothing",
        image: "https://i5.walmartimages.com/seo/Patlollav-Women-s-Cardigan-Zipper-Tops-Long-Sleeve-Sweatshirt-Pockets-Hoodies_783097ce-633c-4c09-80fc-04775c2af36b.7b07143b8e8a720bbbca9652f4e23cef.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "GENTS BLISS",
          color: "Blue/Orange",
          fabricContent: "95% Polyester",
          brand: "GENTS BLISS",
          features: ["Breathable", "Comfort Fit", "Cooling", "Easy Care"],
        },
        customerRating: 5
    },
    {
        id: 13, // Unique identifier for the product
        name: "Eureka Stylus Elite Anti-Tangle Cordless Stick Vacuum Cleaner",
        price: 198.00,
        description: "By Eureka",
        department: "homeAppliances",
        category: "Vaccum Cleaners",
        image: "https://i5.walmartimages.com/seo/Stylus-Elite-Anti-Tangle-Cordless-Stick-Vacuum-with-Auto-Emptying-Dust-Station_edbc87ed-ed1e-45a2-bfe6-ebc492386dca.c9855cea783812e9647ba6fdc963f508.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "Eureka",
          watts: "350 W",
          model: "NEC490SE",
          brand: "GENTS BLISS",
          color: "Black",
        },
        customerRating: 4
    },
    {
        id: 14, // Unique identifier for the product
        name: "Crock-Pot® 4-Quart Classic Slow Cooker",
        price: 20.00,
        description: "By Crock-Pot",
        department: "homeAppliances",
        category: "Cookers",
        image: "https://i5.walmartimages.com/seo/Crock-Pot-4-Quart-Classic-Slow-Cooker-Black_e49da9ba-70eb-44d8-9397-f5a28251d5fd_1.e1bb1c626406ce17ec33c8488dd480f1.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
        details: {
          provider: "Crock-Pot",
          watts: "200 W",
          model: "SCV400-SS",
          brand: "Crock-Pot",
          color: "Black",
        },
        customerRating: 4
    },
    {
        id: 15, // Unique identifier for the product
        name: "Eureka Stylus Elite Anti-Tangle Cordless Stick Vacuum Cleaner",
        price: 198.00,
        description: "Hamilton Beach",
        department: "homeAppliances",
        category: "Grinders",
        image: "https://i5.walmartimages.com/seo/Hamilton-Beach-Wave-Crusher-Multi-Function-Blender-40-oz-Glass-Jar-Black-58165_c8788304-2749-4048-af5c-78963e82a221_1.c5fdc640d0e2df1e3de677d241bc90e4.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
        details: {
          provider: "Hamilton Beach",
          watts: "700 W",
          model: "NEC490SE",
          brand: "Hamilton Beach",
          color: "Black",
        },
        customerRating: 4
    },
    {
        id: 16, // Unique identifier for the product
        name: "Magic Bullet 4 Piece Personal Blender",
        price: 20.00,
        description: "By Magic Bullet",
        department: "homeAppliances",
        category: "Blenders",
        image: "https://i5.walmartimages.com/seo/Magic-Bullet-4-Piece-Personal-Blender-MBR-0401WM-Black_216ad3f3-94a3-4b96-8c71-1850a5c99b61.bf0a179a1d0c72192d5cde9f33f00d56.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "Magic Bullet",
          watts: "250 W",
          model: "MBR-0401WM",
          brand: "Magic Bullet",
          color: "Black",
        },
        customerRating: 4
    },
    {
        id: 17, // Unique identifier for the product
        name: "Mainstays 2-Slice Toaster",
        price: 10.00,
        description: "By Mainstays",
        department: "homeAppliances",
        category: "Toaster",
        image: "https://i5.walmartimages.com/asr/10613477-60e9-4102-a76c-7b8ba15f575a.cc3b6aaac8815ee64780cb0f611eb120.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "Mainstays",
          watts: null,
          model: "TA1057",
          brand: "Mainstays",
          color: "Black",
        },
        customerRating: 4
    },
    {
        id: 18, // Unique identifier for the product
        name: "Chefman ExacTemp 12 Quart 5-in-1 Air Fryer",
        price: 99.00,
        description: "By Chefman",
        department: "homeAppliances",
        category: "Clothing",
        image: "https://i5.walmartimages.com/seo/Chefman-ExacTemp-12-Quart-5-in-1-Air-Fryer-with-Integrated-Smart-Thermometer-28-Presets-Black-New_d9e97d6f-b231-4aac-8bfa-385225f777d3.9538a7585d54e4852e8e391e4c90c111.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "Chefman",
          watts: "1700 W",
          model: "RJ38-RDO-PV12",
          brand: "Chefman",
          color: "Black",
        },
        customerRating: 4
    },
    {
        id: 19, // Unique identifier for the product
        name: "Refrigerator",
        price: 899.00,
        description: "By Unique Appliances",
        department: "homeAppliances",
        category: "Refrigerator",
        image: "https://i5.walmartimages.com/seo/Unique-Prestige-21-6-Freestanding-8-7-cu-ft-Bottom-Freezer-Refrigerator-ENERGY-STAR-Certified_5304491f-5975-4d60-a4d3-cc08c2dd21ca.4208911c92ee78dce991f7da34e9f214.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "Unique Appliances",
          watts: null,
          model: "UGP-278L P SS",
          brand: "Unique Appliances",
          color: "Black",
        },
        customerRating: 4
    },
    {
        id: 20, // Unique identifier for the product
        name: "Egg Cooker",
        price: 9.00,
        description: "By MyMini",
        department: "homeAppliances",
        category: "Boiler",
        image: "https://i5.walmartimages.com/seo/MyMini-Premium-7-Egg-Cooker-Teal_5c472cf4-ff64-4947-a8a3-63ec437eb3a5.9d59655e3dad2d2e51dfd40747475aef.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
        details: {
          provider: "MyMini",
          watts: null,
          model: "MEC7TL",
          brand: "MyMini",
          color: "Black",
        },
        customerRating: 5
    },
    {
        id: 21, // Unique identifier for the product
        name: "Coffee Maker",
        price: 49.00,
        description: "By Keurig",
        department: "homeAppliances",
        category: "Clothing",
        image: "https://i5.walmartimages.com/asr/00eb84c1-ecc5-458c-ab35-ba60a393101b.f13bae148b53039e00d13c36142fbeef.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "Keurig",
          watts: null,
          model: "K-Express Essentials",
          brand: "Keurig",
          color: "Black",
        },
        customerRating: 4
    }
    
    // Add more products as needed
];
const ProductContext = createContext(products);

export const ProductProvider = ({ children }) => (
    <ProductContext.Provider value={products}>
        {children}
    </ProductContext.Provider>
);

export const useProducts = () => useContext(ProductContext);
