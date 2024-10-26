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
