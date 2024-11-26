import React, { createContext, useContext } from 'react';

// Sample Product Data
const products = [
    {
        id: 1,
        name: "Samsung Galaxy S21 5G, 128GB Gray - Unlocked",
        price: 164.0,
        discountedPrice: 150.0,
        description:
          'SAMSUNG Galaxy S21 5G 128GB - Unlocked smartphone with 6.2" screen and 8GB RAM',
        department: "electronics",
        category: "Smartphone",
        images: [
          "https://i5.walmartimages.com/seo/USED-Samsung-Galaxy-S21-5G-Xfinity-Only-128GB-Gray-6-2-in_fe0d20e8-4216-4cc8-8c07-34021252ea06.99c756a71ffb2ef58f5310fa4f7f0956.jpeg",
          "https://i5.walmartimages.com/asr/c701e568-708a-463c-afc7-26fdabea8597.8a08883728cd2f4cde705affae2af00f.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/1790a664-b029-4989-ae56-b74c33276ab2.64f2af23b5ab7e10dc386b75ecc67dc8.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      ],
        image:
          "https://i5.walmartimages.com/seo/USED-Samsung-Galaxy-S21-5G-Xfinity-Only-128GB-Gray-6-2-in_fe0d20e8-4216-4cc8-8c07-34021252ea06.99c756a71ffb2ef58f5310fa4f7f0956.jpeg",
        details: {
          provider: "Samsung",
          screenSize: '6.2"',
          storage: "128 GB",
          ram: "8 GB",
          features: ["Wireless Charging", "Water-Resistant"],
          weight: "0.38 lbs",
        },
        isNewArrival: true, // For New Arrival
        isBestSeller: true, // For Best Seller
        isInStock: true,
        customerRating: 4,
      },
      {
        id: 2, // Incrementing the ID for each product
        name: "Apple iPhone 16 Pro, US Version, 256GB, Desert Titanium - Unlocked",
        price: 799.0,
        discountedPrice: 750.0,
        description: "By Apple",
        department: "electronics",
        category: "mobile",
        images: [
          "https://i5.walmartimages.com/seo/Verizon-iPhone-16-Pro-Max-256GB-Desert-Titanium-Apple-Intelligence_2a3b7743-c254-4ea6-807e-173340f9184b.24f9f58f9c3d33fa07c0d1921bca65a1.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/a0e10237-1c1d-43e9-b409-1a3f98e6e6b0.5a4d2ccf3e640fd559e16979545c5f4e.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/31326b23-00bf-4c0c-a0cc-f2aa43444eb4.a4227b7fb67f5c76e102592993626393.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      ],
        image:
          "https://i5.walmartimages.com/seo/Verizon-iPhone-16-Pro-Max-256GB-Desert-Titanium-Apple-Intelligence_2a3b7743-c254-4ea6-807e-173340f9184b.24f9f58f9c3d33fa07c0d1921bca65a1.jpeg",
        details: {
          provider: "AT&T",
          screenSize: '6.7"',
          storage: "512 GB",
          ram: "8 GB",
          features: ["Super Retina XDR Display"],
          weight: "7.81 oz",
        },
        isBestSeller: true, // For Best Seller
        isInStock: true,
        customerRating: 3,
      },
      {
        id: 3,
        name: "Sony WH-1000XM5 The Best Wireless Noise Canceling Headphones, Black",
        price: 289.0,
        description:
          "Sony Wireless Headphones with built-in microphone and Bluetooth connectivity",
        department: "electronics",
        category: "Headphones",
        images: [
          "https://i5.walmartimages.com/seo/Sony-WH-1000XM5-The-Best-Wireless-Noise-Canceling-Headphones-Black_7384c879-1d54-47e8-9876-1d7adadcf0a5.542c245c25d295b30fa5820eacea4450.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/1c819dba-67e7-4abd-958c-2053503aa72b.f69c1074d03dd688de879b90f7f6592c.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/785310a9-fe11-4294-856d-53b9ecad110a.18d2c0b55d9f6a9fae2cbac76edd7571.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      ],
        image:
          "https://i5.walmartimages.com/seo/Sony-WH-1000XM5-The-Best-Wireless-Noise-Canceling-Headphones-Black_7384c879-1d54-47e8-9876-1d7adadcf0a5.542c245c25d295b30fa5820eacea4450.jpeg",
        details: {
          provider: "Sony",
          screenSize: null, // Not applicable for headphones
          storage: null, // Not applicable for headphones
          ram: null, // Not applicable for headphones
          features: [
            "Built-in Microphone",
            "Bluetooth",
            "Wireless",
            "Noise-Canceling",
          ],
          weight: null, // Not specified in the HTML
        },
        isNewArrival: true, // For New Arrival
        isInStock: true,
        customerRating: 5,
        
      },
      {
        id: 4, // Assuming an ID for the product
        name: "Apple 15-Inch MacBook Air Laptop 2023",
        price: 1149.99,
        description: "By Apple",
        department: "electronics",
        category: "Laptop",
        images: [
          "https://i5.walmartimages.com/seo/2023-Apple-15-Inch-MacBook-Air-Laptop-Apple-M2-Chip-with-8-core-CPU-and-10-core-GPU-8GB-RAM-256GB-SSD-Storage-Midnight_f7f69324-2808-4ff1-a5b4-adbafd4e700c.2f5882be0df01e087a3295bbea0a2727.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/ee9e0ba7-13c6-4be5-9556-55bb8f8391a1.9cd1705d12f5e849d97bf1c4bf58385b.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/5d930905-95a4-44c0-93e1-77d52393e8c3.e6254762c68efc8ec899507f341557f5.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      ],
        image:
          "https://i5.walmartimages.com/seo/Apple-MacBook-Pro-MVVM2LL-A-16-32GB-1TB-SSD-Core-i9-9880H-2-3GHz-macOS-Space-Gray-Used-Good_ee1e08c0-e3b1-47c1-afab-312530485f04.11680c93ae2176f0cc5befac1e8b7a00.jpeg",
        details: {
          provider: "Apple",
          screenSize: "13.3 in",
          storage: "256 GB",
          ram: "8 GB",
          features: "Apple M1, Battery life: 15 h",
          weight: "2.8 lb",
        },
        customerRating: 2, // Assuming a rating scale of 1 to 5
      },
    
      {
        id: 5,
        name: "Dell XPS 13 7390 2-in-1 Touchscreen Intel Core i7-1065G7",
        price: 1099.0,
        discountedPrice: 999.0,
        description: "2-in-1 touchscreen laptop with Intel Core i7 processor",
        department: "electronics",
        category: "Laptop",
        images: [
          "https://i5.walmartimages.com/seo/Dell-XPS-13-7390-2-in-1-i7-1065G7-32GB-1TB-SSD-Notebook-USB-C-Touchscreen-Black_9b0ece0a-8250-41fb-8810-eadd1f36e137.db936b3f56abedf6a29943c8927f3c4c.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/bc3cc97d-9ac0-4b95-ac7f-b4f0dd50f295.bf2dd595479a1f612a969fe364799c61.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/6f13c1b2-e1b9-4c52-92e4-3645115211b4.2768fb778660a1d7476167d5d5f97583.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      ],
        image:
          "https://i5.walmartimages.com/seo/Pre-Owned-Dell-XPS-13-9300-Touchscreen-Laptop-Intel-Core-i7-1065G7-1-30GHz-RAM-8-GB-256-GB-SSD-GPU-Intel-R-Iris-R-Plus-Graphics-Refurbished-Good_5d5837c2-b75a-4ee9-9258-aaf7c138d184.e11c2573236cc980f4fbc9ba8cab1d2d.jpeg",
        details: {
          provider: "Dell",
          screenSize: "13.3 in",
          storage: "256 GB SSD",
          ram: "8 GB",
          features: "Touchscreen, Windows 11 Home",
          weight: "Approx. 2.7 lbs", // You can modify this based on actual weight if available
        },
        customerRating: 3, // Assuming a 5-star rating based on the filled stars
      },
      {
        id: 6,
        name: "LG 70” 4K UHD Smart TV 2160p webOS, 70UQ7070ZU",
        price: 598.0,
        description: "By LG",
        department: "electronics",
        category: "Smart TV",
        images: [
          "https://i5.walmartimages.com/seo/LG-70-4K-UHD-Smart-TV-2160p-webOS-70UQ7070ZUD_8f08cf49-277d-4d76-bc10-0bec3177948e.5aa7d7271979c7fe4c85fb92d8ce0fbf.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/fec00b03-6246-49fc-ab2c-89fda3c9a913.9836710fc0f788bb0f30a9c86ac05de5.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/7451230b-c67d-4310-b01a-1c6878567796.525c33222b0d8884ca4b113d21bf81ea.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      ],
        image:
          "https://i5.walmartimages.com/seo/LG-70-4K-UHD-Smart-TV-2160p-webOS-70UQ7070ZUD_8f08cf49-277d-4d76-bc10-0bec3177948e.5aa7d7271979c7fe4c85fb92d8ce0fbf.jpeg",
        details: {
          provider: "LG",
          screenSize: "70 in",
          storage: null, // Storage not applicable for TV
          ram: null, // RAM not applicable for TV
          features: [
            "Platform: WebOS",
            "Display: LED",
            "Refresh rate: 60 Hz",
            "Aspect: 16:9",
            "Backlight type: Direct Lit",
          ],
          weight: null, // Weight not provided
        },
        isInStock: true,
        customerRating: 4,
      },
    
      {
        id: 7,
        name: "Samsung Galaxy S24 Ultra 5G",
        price: 933.0,
        description: "By Samsung",
        department: "electronics",
        category: "mobile",
        images: [
          "https://i5.walmartimages.com/seo/Samsung-Galaxy-S24-Ultra-5G-SM-S928B-DS-256GB-12GB-RAM-DUAL-SIM-Global-Model-Factory-Unlocked-GSM-Titanium-Black_be6b29a9-ba1e-4de4-9c3c-ac88c45d0c0b.47a268b75158f6267671c0e78cc84f44.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/c27a4494-2e0c-4107-aeb3-ea26681da4fe.e6e2393cbe7813d81bb4806a06a945a9.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/e1600a40-8b9a-4792-8047-8f3405605456.63975267b65820778a986911842c14a2.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      ],
        image:
          "https://i5.walmartimages.com/seo/Samsung-Galaxy-S24-Ultra-5G-SM-S928B-DS-256GB-12GB-RAM-DUAL-SIM-Global-Model-Factory-Unlocked-GSM-Titanium-Violet_27c8a138-e673-4372-831a-744cb9511b5f.26c52035bd3a5280da10538de73f88ae.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "Samsung",
          screenSize: "6.8 in",
          storage: 256, // Storage not applicable for TV
          ram: 12, // RAM not applicable for TV
          weight: null, // Weight not provided
        },
        isInStock: true,
        customerRating: 4,
      },
    
      {
        id: 8,
        name: "Moto G Play 4G 2024, 64GB, Blue",
        price: 499.0,
        description: "By Motorola",
        department: "electronics",
        category: "mobile",
        images: [
          "https://i5.walmartimages.com/asr/a31fe92d-da39-4e1c-9666-b54f880fd281.055ae28147e2545742d74481a47c37ce.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/f5ae30a1-2235-4ae1-a1c9-de533db05c2a.ed4133b4999b9432ce430bd95f195bd8.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
          "https://i5.walmartimages.com/seo/ST-MOTOROLA-XT2413V-CDMA-LTE-BLUE-HANDSET-WALMART-POSA_35062c9f-8662-4162-87e0-2c2ff95e3eb0.9279bf7dee7bb1986c833eaa075d7b2e.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
      ],
        image:
          "https://i5.walmartimages.com/seo/ST-MOTOROLA-XT2413V-CDMA-LTE-BLUE-HANDSET-WALMART-POSA_35062c9f-8662-4162-87e0-2c2ff95e3eb0.9279bf7dee7bb1986c833eaa075d7b2e.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "Straight Talk",
          screenSize: "6.5 in",
          storage: 64, // Storage not applicable for TV
          ram: 3, // RAM not applicable for TV
          weight: null, // Weight not provided
        },
        isInStock: true,
        customerRating: 3,
      },
    
      {
        id: 9,
        name: "OnePlus 10 Pro 5G Dual SIM 128GB 8GB RAM GSM Unlocked - Black",
        price: 395.0,
        description: "By OnePlus",
        department: "electronics",
        category: "mobile",
        images: [
          "https://i5.walmartimages.com/seo/OnePlus-10-Pro-5G-Dual-SIM-128GB-8GB-RAM-GSM-Unlocked-Black_3be4035c-a0c1-4e2f-90a4-adef68b38f10.ba030ddceb2c0265200b82b1aa20c67f.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/164cf09b-6539-4ae4-82b4-c84743258c8a.5e0b4c9d57db22880c40c8d24071c233.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/36d9defb-e2da-4a0a-867e-1450dcc0316a.5273f6bc13025661500a055650852414.png?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      ],
        image:
          "https://i5.walmartimages.com/asr/fd1b69cb-47fa-480d-bcf2-19b1edf1a611.07b4045cc82de7a6d3945cfbff7b4982.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "OnePlus",
          screenSize: "6.7 in",
          storage: 128, // Storage not applicable for TV
          ram: 8, // RAM not applicable for TV
          weight: null, // Weight not provided
        },
        isInStock: true,
        customerRating: 4,
      },
    
      {
        id: 10,
        name: "GENTS BLISS Henley Sweatshirts for Men Long Sleeve",
        price: 20.0,
        discountedPrice: 15.0,
        description:
          "GENTS BLISS Crew Neck Sweatshirts for Men - Henley Long Sleeve Tops, Casual Pullover Sweatshirt with Pocket, Comfort Fit, Cooling, and Easy Care.",
        department: "fashion",
        category: "Sweatshirt",
        images: [
          "https://i5.walmartimages.com/seo/GENTS-BLISS-Crew-Neck-Sweatshirts-for-Men-Henley-Long-Sleeve-Tops-Casual-Pullover-Sweatshirts-with-Pocket_036dd176-3794-4ac6-a989-2d0b6cee2ab4.ebc55f0752579fb211b683f44a446aa2.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/fff737ca-b09b-42a3-a76d-a5a8d65498b6.889e01ac84d6fa78cfdefc22fd755a67.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/d95d8815-3446-4e7c-938f-177cbbf41369.b64604e9fabe8b2aef2b3c45076dc8d9.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      ],
        image:
          "https://i5.walmartimages.com/seo/GENTS-BLISS-Crew-Neck-Sweatshirts-for-Men-Henley-Long-Sleeve-Tops-Casual-Pullover-Sweatshirts-with-Pocket_4a9d9561-a956-460d-a5cf-62208d41add6.8202859f293adff004bbc278fabdfed7.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "GENTS BLISS",
          clothingSize: "L",
          fabricContent: "95% Polyester",
          features: ["Breathable", "Comfort Fit", "Cooling", "Easy Care"],
          weight: "N/A",
        },
        isInStock: true,
        customerRating: 5,
      },
    
      {
        id: 11,
        name: "Womens Turtleneck Oversized Sweaters",
        price: 23.99,
        discountedPrice: 20.0,
        description:
          "Asklazy this pullover sweater turtleneck design bring you warm in cold days, warm enough and very cozy. Snuggle up with the turtleneck sweaters on fall and winter ,it will make you the focus of crowd.",
        department: "fashion",
        category: "Clothing",
        images: [
          "https://i5.walmartimages.com/seo/Asklazy-Women-s-Turtleneck-Oversized-Sweaters-Batwing-Long-Sleeve-Pullover-Loose-Chunky-Knit-Jumper_39c4628a-c020-44e0-99d1-16459e5e8091.f74b1d18666f9c8a6315d7cd340e755d.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/43b9c1c2-0bb4-4b5a-9dca-d5f88ef02e4e.1158582362c7d51b652aab6208a5b9c0.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/b626dc03-8e6c-4bbd-be71-3368c53dc77a.2c23df46812ada37fed8fd026eab5bed.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      ],
        image:
          "https://i5.walmartimages.com/seo/Asklazy-Women-s-Turtleneck-Oversized-Sweaters-Batwing-Long-Sleeve-Pullover-Loose-Chunky-Knit-Jumper_39c4628a-c020-44e0-99d1-16459e5e8091.f74b1d18666f9c8a6315d7cd340e755d.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "Asklazy",
          clothingSize: "L",
          fabricContent: "100% Acrylic",
          features: ["Lightweight", "Comfort Fit", "Cooling", "Easy Care"],
          weight: "N/A",
        },
        isInStock: true,
        customerRating: 5,
      },
    
      {
        id: 12,
        name: "Denim Jacket for Women",
        price: 27.99,
        description:
          "Asklazy this pullover sweater turtleneck design bring you warm in cold days, warm enough and very cozy. Snuggle up with the turtleneck sweaters on fall and winter ,it will make you the focus of crowd.",
        department: "fashion",
        category: "Clothing",
        images: [
          "https://i5.walmartimages.com/seo/Eytino-Denim-Jackets-for-Women-Plus-Size-Long-Sleeve-Loose-Jean-Jacket-Coats-Sky-Blue-L-Female_3a6b18fd-87d8-46f0-92b8-6fcce6ecc201.0779786914e23e6ae1847b79875379e5.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/f52b0d1d-bd47-40e8-a586-5c307a93de8f.257d082dd2d91f10f81386e603367018.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/d6042aa8-8291-4a2a-884a-f6da698f9d05.f35941e48764dea9a907757bcf4ae292.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
      ],
        image:
          "https://i5.walmartimages.com/seo/Eytino-Denim-Jacket-for-Women-Long-Sleeve-Boyfriend-Jean-Jacket-Loose-Coat-Sky-Blue-S-Female_3a6b18fd-87d8-46f0-92b8-6fcce6ecc201.0779786914e23e6ae1847b79875379e5.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "Eytino",
          clothingSize: "L",
          fabricContent: "80%Cotton+20%Polyester",
          features: ["Lightweight", "Oversized", "Pockets"],
          weight: "N/A",
        },
        customerRating: 5,
      },
    
      {
        id: 13,
        name: "Women Graphic Band Tee",
        price: 9.99,
        description:
          "Its just a graphic tee, but I like it! Rock on and let your inner fangirl shine with this Rolling Stones Graphic Tee shimmering with an iconic rhinestone stud logo",
        department: "fashion",
        category: "Clothing",
        images: [
          "https://i5.walmartimages.com/seo/Time-and-Tru-Women-s-Rolling-Stones-Rhinestone-Stud-Graphic-Band-Tee-Sizes-XS-XXXL_5fe76635-fb0e-43e2-b8c8-ed6a15632bd3.cc7d4db6f2b8bf877d9634847a2f6fcd.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/4650e20b-47ab-43ee-9600-3f2455ba4cca.ffcccaeeaa31357822ee40ebac729234.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/5cd46156-68e9-4b70-9944-74a883376ae5.81dcd169553b046ebe1edcd7381544cd.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      ],
        image:
          "https://i5.walmartimages.com/asr/5cd46156-68e9-4b70-9944-74a883376ae5.81dcd169553b046ebe1edcd7381544cd.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "Bravado",
          clothingSize: "L",
          fabricContent: "60% Cotton/40% Polyester",
          features: "Graphic at front accented with rhinestone studs",
          weight: "N/A",
        },
        isInStock: true,
        customerRating: 5,
      },
    
      {
        id: 14, // Unique identifier for the product
        name: "Wrangler Men's Long Sleeve",
        price: 23.0,
        discountedPrice: 20.0,
        description:
          "A stylish T-shirt and pants set featuring The Avengers theme, perfect for active boys.",
        department: "fashion",
        category: "Clothing",
        images: [
          "https://i5.walmartimages.com/seo/Wrangler-Men-s-Long-Sleeve-Heavyweight-Shirt_64bfc502-e796-4c98-81be-5ed403e56a4a.77db1df0086b596b01e4ae051ebd5d3a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/51512ed1-8ac9-4294-a7f8-41cb62f0f2fd.ad11c9b948167a58c59607403ff6b74c.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/be312493-9fdf-4b85-bd73-54266a9fcb15.67b6634b26fe1a24c5309779f7900a38.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      ],
        image:
          "https://i5.walmartimages.com/seo/Wrangler-Men-s-Long-Sleeve-Heavyweight-Shirt_c2fa10b8-aa4f-4dea-89b8-7c6643004000.d1b2d4f107aeda93a0aba3817ae00023.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "Wrangler",
          color: "Blue/Orange",
          fabricContent: "100% Cotton",
          brand: "Wrangler",
          features: ["Pockets"],
        },
        isInStock: true,
        customerRating: 5,
      },
      {
        id: 15, // Unique identifier for the product
        name: "Men's T Shirt O-Neck",
        price: 19.99,
        discountedPrice: 15.0,
        description:
          "It is made of high quality materials,durable enough for your daily wearing",
        department: "fashion",
        category: "Clothing",
        images: [
          "https://i5.walmartimages.com/seo/Hot-Style-Men-s-T-Shirt-O-Neck-Clothing-Apparel-Outdoor-Long-Sleeve-Print-Fashion-Designer-Vintage_e7ecdb86-fc3e-4cb9-aab2-6860be637c99.4b3fbc364fae2a01dd47abb1f0992c2a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/f499a6b5-6790-4cbe-9d28-d6a9e3a5aad2.b9f851870d31a7ecf638d41417de4e68.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
               ],
        image:
          "https://i5.walmartimages.com/asr/f499a6b5-6790-4cbe-9d28-d6a9e3a5aad2.b9f851870d31a7ecf638d41417de4e68.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "TOFOTL",
          color: "Blue",
          fabricContent: "95% 95% Polyester,5% Spandex",
          brand: "TOFOTL",
          features: ["Washable"],
        },
        isInStock: true,
        customerRating: 5,
      },
      {
        id: 16, // Unique identifier for the product
        name: "Casual Matching Outfit Set for Boys (4-12)",
        price: 22.0,
        description:
          "A stylish T-shirt and pants set featuring The Avengers theme, perfect for active boys.",
        department: "fashion",
        category: "Clothing",
        images: [
          "https://i5.walmartimages.com/seo/Marvel-Superheroes-Avengers-and-Spider-Man-2-Piece-Set-Boys-Long-Sleeve-Active-Mesh-T-Shirt-Pants-2-Pack-Bundle-Set_5d341e81-a778-4fd7-8f04-41681fff69b7.c82e56384775818016fd8a03e49b789e.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/15a03766-41da-4987-8553-8f7a57ea6dc3.f8848a8ef6f4cce30b1158fac499f7c8.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          
      ],
        image:
          "https://i5.walmartimages.com/seo/Marvel-Superheroes-Avengers-and-Spider-Man-2-Piece-Set-Boys-Long-Sleeve-Active-Mesh-T-Shirt-Pants-2-Pack-Bundle-Set_5d341e81-a778-4fd7-8f04-41681fff69b7.c82e56384775818016fd8a03e49b789e.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "The Avengers",
          color: "Blue/Orange",
          fabricContent: "100% Cotton",
          brand: "The Avengers",
          features: ["Washable"],
          weight: "200g",
        },
        isInStock: true,
        customerRating: 5,
      },
      {
        id: 17, // Unique identifier for the product
        name: "Women's Dresses Elastic Waist Dress with Pockets",
        price: 50.0,
        discountedPrice: 45.0,
        description: "By Jessica Simpson",
        department: "fashion",
        category: "Clothing",
        images: [
          "https://i5.walmartimages.com/seo/Jessica-Simpson-Women-s-Phoebe-Maxi-Dress_3b4ffe56-d026-485d-bc12-73499e8118ae.67ce070dc09d9958306bce23908ad1b3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/a026f83b-b829-42ec-b95c-62a70ae496ca.e3201f87dbda5d5ff7277b39a3f09faf.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        ],
        image:
          "https://i5.walmartimages.com/seo/Jessica-Simpson-Women-s-Phoebe-Maxi-Dress_3b4ffe56-d026-485d-bc12-73499e8118ae.67ce070dc09d9958306bce23908ad1b3.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "Jessica Simpson",
          color: "Anthracite-Autumn Patchwork",
          fabricContent: "Viscose",
          brand: "Jessica Simpson",
          features: ["Washable"],
        },
        customerRating: 5,
        isNewArrival: true, // For New Arrival
        isBestSeller: true, // For Best Seller
        isInStock: true,
      },
      {
        id: 18, // Unique identifier for the product
        name: "Women's Plush Hoodie",
        price: 20.0,
        description: "By GENTS BLISS",
        department: "fashion",
        category: "Clothing",
        images: [
          "https://i5.walmartimages.com/asr/ce60e80b-2045-4da3-87c9-9656aedcc0cd.ab075919520de5a0646ce2b5a8d44934.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/f7d318e5-466f-4bd0-9604-37767a30cd25.a0d460e3a886ce18bd13d6059b84e427.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        ],
        image:
          "https://i5.walmartimages.com/seo/Patlollav-Women-s-Cardigan-Zipper-Tops-Long-Sleeve-Sweatshirt-Pockets-Hoodies_783097ce-633c-4c09-80fc-04775c2af36b.7b07143b8e8a720bbbca9652f4e23cef.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "GENTS BLISS",
          color: "Blue/Orange",
          fabricContent: "95% Polyester",
          brand: "GENTS BLISS",
          features: ["Breathable", "Comfort Fit", "Cooling", "Easy Care"],
        },
        customerRating: 5,
        isInStock: true,
      },
    {
        id: 19, // Unique identifier for the product
        name: "Eureka Stylus Elite Anti-Tangle Cordless Stick Vacuum Cleaner",
        price: 198.00,
        discountedPrice: 170.0,
        description: "By Eureka",
        department: "homeAppliances",
        category: "Vaccum Cleaners",
        images: [
          "https://i5.walmartimages.com/seo/Stylus-Elite-Anti-Tangle-Cordless-Stick-Vacuum-with-Auto-Emptying-Dust-Station_edbc87ed-ed1e-45a2-bfe6-ebc492386dca.c9855cea783812e9647ba6fdc963f508.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/1eb48332-aaa8-4e36-b9ae-5792a76b3072.c8a47380bdd45c0da98743cb4aaac011.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        ],
        image: "https://i5.walmartimages.com/seo/Stylus-Elite-Anti-Tangle-Cordless-Stick-Vacuum-with-Auto-Emptying-Dust-Station_edbc87ed-ed1e-45a2-bfe6-ebc492386dca.c9855cea783812e9647ba6fdc963f508.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "Eureka",
          watts: "350 W",
          model: "NEC490SE",
          brand: "GENTS BLISS",
          color: "Black",
        }, 
        isNewArrival: true, // For New Arrival
        isBestSeller: true, // For Best Seller
        isInStock: true,
        customerRating: 4
    },
    {
        id: 20, // Unique identifier for the product
        name: "Crock-Pot® 4-Quart Classic Slow Cooker",
        price: 20.00,
        description: "By Crock-Pot",
        department: "homeAppliances",
        category: "Cookers",
        images: [
          "https://i5.walmartimages.com/seo/Crock-Pot-4-Quart-Classic-Slow-Cooker-Black_e49da9ba-70eb-44d8-9397-f5a28251d5fd_1.e1bb1c626406ce17ec33c8488dd480f1.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/8b7dde89-3555-4a49-bcb0-2ee7d1c70606_1.3ee2f503290f7bf5b3ad3491410baf55.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        ],
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
        id: 21, // Unique identifier for the product
        name: "Eureka Stylus Elite Anti-Tangle Cordless Stick Vacuum Cleaner",
        price: 198.00,
        discountedPrice: 150.0,
        description: "Hamilton Beach",
        department: "homeAppliances",
        category: "Grinders",
        images: [
          "https://i5.walmartimages.com/seo/Hamilton-Beach-Smoothie-Blender-48-oz-Jar-12-Blending-Functions-Black-50180F_9c24dee9-d6e7-4d79-9fdb-1c173347a5b5.44881137e0f2ba35d581fbd27764b9de.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/a98760b6-e1e0-4bba-9622-85646861d667.a2c84da39f71a72afe6c374de68df185.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        ],
        image: "https://i5.walmartimages.com/seo/Hamilton-Beach-Wave-Crusher-Multi-Function-Blender-40-oz-Glass-Jar-Black-58165_c8788304-2749-4048-af5c-78963e82a221_1.c5fdc640d0e2df1e3de677d241bc90e4.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
        details: {
          provider: "Hamilton Beach",
          watts: "700 W",
          model: "NEC490SE",
          brand: "Hamilton Beach",
          color: "Black",
        },
        isInStock: true,
        customerRating: 4
    },
    {
        id: 22, // Unique identifier for the product
        name: "Magic Bullet 4 Piece Personal Blender",
        price: 20.00,
        description: "By Magic Bullet",
        department: "homeAppliances",
        category: "Blenders",
        images: [
          "https://i5.walmartimages.com/seo/Magic-Bullet-4-Piece-Personal-Blender-MBR-0401WM-Black_216ad3f3-94a3-4b96-8c71-1850a5c99b61.bf0a179a1d0c72192d5cde9f33f00d56.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/9b0fcaab-782a-4baa-9d2a-2c4a0238bb61.3a285c6684e585933b1820dc67f4b3f0.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        ],
        image: "https://i5.walmartimages.com/seo/Magic-Bullet-4-Piece-Personal-Blender-MBR-0401WM-Black_216ad3f3-94a3-4b96-8c71-1850a5c99b61.bf0a179a1d0c72192d5cde9f33f00d56.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "Magic Bullet",
          watts: "250 W",
          model: "MBR-0401WM",
          brand: "Magic Bullet",
          color: "Black",
        },
        isInStock: true,
        customerRating: 4
    },
    {
        id: 23, // Unique identifier for the product
        name: "Mainstays 2-Slice Toaster",
        price: 10.00,
        description: "By Mainstays",
        department: "homeAppliances",
        category: "Toaster",
        images: [
          "https://i5.walmartimages.com/asr/bbf414d8-6b72-43c5-9958-2a96c2c1b12f.37fb9f18445c567167bf0e56af7435fc.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/seo/Mainstays-2-Slice-Toaster-Black-with-6-Shade-Settings-and-Removable-Crumb-Tray-New_dfd0c6c5-3edd-4115-bd49-50e252231f0b.49419b3e8018c1b48311e9024de7c0e8.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        ],
        image: "https://i5.walmartimages.com/asr/10613477-60e9-4102-a76c-7b8ba15f575a.cc3b6aaac8815ee64780cb0f611eb120.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "Mainstays",
          watts: null,
          model: "TA1057",
          brand: "Mainstays",
          color: "Black",
        },
        isInStock: true,
        customerRating: 4
    },
    {
        id: 24, // Unique identifier for the product
        name: "Chefman ExacTemp 12 Quart 5-in-1 Air Fryer",
        price: 99.00,
        description: "By Chefman",
        department: "homeAppliances",
        category: "Clothing",
        images: [
          "https://i5.walmartimages.com/seo/Chefman-ExacTemp-12-Quart-5-in-1-Air-Fryer-with-Integrated-Smart-Thermometer-28-Presets-Black-New_d9e97d6f-b231-4aac-8bfa-385225f777d3.9538a7585d54e4852e8e391e4c90c111.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/23da9474-adc9-4047-a512-b0988373f780.e180060136216ebb547bcad508a89dc4.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        ],
        image: "https://i5.walmartimages.com/seo/Chefman-ExacTemp-12-Quart-5-in-1-Air-Fryer-with-Integrated-Smart-Thermometer-28-Presets-Black-New_d9e97d6f-b231-4aac-8bfa-385225f777d3.9538a7585d54e4852e8e391e4c90c111.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "Chefman",
          watts: "1700 W",
          model: "RJ38-RDO-PV12",
          brand: "Chefman",
          color: "Black",
        },
        isNewArrival: true, // For New Arrival
        isBestSeller: true, // For Best Seller
        isInStock: true,
        customerRating: 4
    },
    {
        id: 25, // Unique identifier for the product
        name: "Element ENR18TFGCS 17.6 Cu. Ft. Stainless Top Freezer Refrigerator",
        price: 899.00,
        description: "By Unique Appliances",
        department: "homeAppliances",
        category: "Refrigerator",
        images: [
          "https://i5.walmartimages.com/seo/Element-ENR18TFGCS-17-6-Cu-Ft-Stainless-Top-Freezer-Refrigerator_87b35ef2-e466-485a-8298-8cd2c4c52562.075c4fa0c2f650460953eae3cbc11def.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/746921a5-dfd2-4ebd-9bc9-f49351203788.ac25f44e732087751a8a4ddb44300706.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        ],
        image: "https://i5.walmartimages.com/seo/Unique-Prestige-21-6-Freestanding-8-7-cu-ft-Bottom-Freezer-Refrigerator-ENERGY-STAR-Certified_5304491f-5975-4d60-a4d3-cc08c2dd21ca.4208911c92ee78dce991f7da34e9f214.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "Unique Appliances",
          watts: null,
          model: "UGP-278L P SS",
          brand: "Unique Appliances",
          color: "Black",
        },
        isInStock: true,
        customerRating: 4
    },
    {
        id: 26, // Unique identifier for the product
        name: "MyMini Premium 7-Egg Cooker, Teal",
        price: 9.00,
        description: "By MyMini",
        department: "homeAppliances",
        category: "Boiler",
        images: [
          "https://i5.walmartimages.com/seo/MyMini-Premium-7-Egg-Cooker-Teal_5c472cf4-ff64-4947-a8a3-63ec437eb3a5.9d59655e3dad2d2e51dfd40747475aef.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/9d460a89-129b-46a0-8701-99837da721f3.8b64be0f4c33b0236551c7eb63e5f55f.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        ],
        image: "https://i5.walmartimages.com/seo/MyMini-Premium-7-Egg-Cooker-Teal_5c472cf4-ff64-4947-a8a3-63ec437eb3a5.9d59655e3dad2d2e51dfd40747475aef.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
        details: {
          provider: "MyMini",
          watts: null,
          model: "MEC7TL",
          brand: "MyMini",
          color: "Black",
        },
        isInStock: true,
        customerRating: 5
    },
    {
        id: 27, // Unique identifier for the product
        name: "Keurig K-Express Essentials Matte Black Single-Serve K-Cup Pod Coffee Maker",
        price: 49.00,
        description: "By Keurig",
        department: "homeAppliances",
        category: "Clothing",
        images: [
          "https://i5.walmartimages.com/seo/Keurig-K-Express-Essentials-Black-Single-Serve-K-Cup-Pod-Coffee-Maker_13ee2422-9a30-476a-949c-0a377e602202.6c6e58134805ac49070f6ec8cf75d30c.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
          "https://i5.walmartimages.com/asr/6f417e26-fc98-48fc-b090-7e2aeba3cb29.12b2f8d3d14c282a1d690b883a7df47f.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        ],
        image: "https://i5.walmartimages.com/asr/00eb84c1-ecc5-458c-ab35-ba60a393101b.f13bae148b53039e00d13c36142fbeef.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        details: {
          provider: "Keurig",
          watts: null,
          model: "K-Express Essentials",
          brand: "Keurig",
          color: "Black",
        },
        isInStock: true,
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
