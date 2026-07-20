export interface ProductItem {
  name: string;
  stock: number;
}

export interface CategoryItem {
  id: number;
  code: string;
  title: string;
  features: string[];
  products: ProductItem[];
  stockCount: number;
  shopeeUrl: string;
  imageExt?: 'png' | 'svg';
}

export const categoriesData: CategoryItem[] = [
  {
    id: 1,
    code: "101",
    title: "Crimping Tools",
    features: [
      "Hydraulic Crimping Pliers",
      "Hexagonal Crimping Tools",
      "Heavy-Duty Cable Lug Crimpers"
    ],
    products: [
      { name: "YQK-70 Hydraulic Crimping Pliers", stock: 10 },
      { name: "YQK-300 Hexagonal Crimping Tool", stock: 8 },
      { name: "CO-400 Heavy-Duty Cable Lug Crimper", stock: 6 }
    ],
    stockCount: 24,
    shopeeUrl: "https://shopee.co.id/arbertools.id?shopCollection=257955817#product_list"
  },
  {
    id: 2,
    code: "102",
    title: "Cable Cutters",
    features: [
      "Ratchet Cable Cutters",
      "Steel Wire Rope Cutters",
      "Armored Cable Shears"
    ],
    products: [
      { name: "J40 Ratchet Cable Cutter", stock: 6 },
      { name: "LK-125 Steel Wire Rope Cutter", stock: 6 },
      { name: "CPC-85A Armored Cable Shear", stock: 4 }
    ],
    stockCount: 16,
    shopeeUrl: "https://shopee.co.id/arbertools.id?page=0&shopCollection=257955818"
  },
  {
    id: 3,
    code: "103",
    title: "Hydraulic Gear Pullers",
    features: [
      "Integrated Hydraulic Pullers",
      "Separated Hydraulic Bearing Pullers",
      "2-Jaw & 3-Jaw Puller Sets"
    ],
    products: [
      { name: "YYL-10 Integrated Hydraulic Puller", stock: 12 },
      { name: "FHP-20 Separated Bearing Puller", stock: 10 },
      { name: "2-Jaw & 3-Jaw Puller Set Attachment", stock: 6 }
    ],
    stockCount: 28,
    shopeeUrl: "https://shopee.co.id/arbertools.id?page=0&shopCollection=257955863"
  },
  {
    id: 4,
    code: "104",
    title: "Hydraulic Pumps",
    features: [
      "Manual Hydraulic Hand Pumps",
      "Electric Power Pack Pumps",
      "Ultra-High Pressure Hydraulic Pumps"
    ],
    products: [
      { name: "CP-180 Manual Hydraulic Hand Pump", stock: 8 },
      { name: "CP-700 Ultra-High Pressure Pump", stock: 8 },
      { name: "DYB-63A Electric Power Pack Pump", stock: 4 }
    ],
    stockCount: 20,
    shopeeUrl: "https://shopee.co.id/arbertools.id?page=0&shopCollection=257955867"
  },
  {
    id: 5,
    code: "105",
    title: "Hydraulic Jacks and Cylinders",
    features: [
      "Low Profile Cylinders",
      "Hollow Plunger Hydraulic Jacks",
      "Heavy-Duty Hydraulic Toe Jacks"
    ],
    products: [
      { name: "FPY-10 Low Profile Cylinder", stock: 20 },
      { name: "RCH-201 Hollow Plunger Jack", stock: 16 },
      { name: "MHC-5 Heavy-Duty Toe Jack", stock: 14 }
    ],
    stockCount: 50,
    shopeeUrl: "https://shopee.co.id/arbertools.id?page=0&shopCollection=257955841",
    imageExt: "png"
  },
  {
    id: 6,
    code: "106",
    title: "Bending Tools",
    features: [
      "Hydraulic Pipe & Tube Benders",
      "Heavy-Duty Busbar Bending Tools",
      "Multi-Angle Steel Sheet Benders"
    ],
    products: [
      { name: "SWG-2 Hydraulic Pipe & Tube Bender", stock: 4 },
      { name: "CB-150D Busbar Bending Tool", stock: 4 },
      { name: "Multi-Angle Steel Sheet Bender", stock: 4 }
    ],
    stockCount: 12,
    shopeeUrl: "https://shopee.co.id/arbertools.id?page=0&shopCollection=257955868"
  },
  {
    id: 7,
    code: "107",
    title: "Hydraulic Valves",
    features: [
      "Directional Control Valves (1P40)",
      "PTO Control Valves & Solenoid Valves",
      "Pressure Relief Valves"
    ],
    products: [
      { name: "1P40 Directional Control Valve", stock: 12 },
      { name: "PTO Control Valve & Solenoid Valve", stock: 12 },
      { name: "Pressure Relief Valve 350 Bar", stock: 8 }
    ],
    stockCount: 32,
    shopeeUrl: "https://shopee.co.id/arbertools.id?page=0&shopCollection=257955854"
  },
  {
    id: 8,
    code: "108",
    title: "Punching and Pressing Tools",
    features: [
      "Split-Unit Hydraulic Hole Punchers",
      "Busbar Punching & Pressing Tools",
      "Professional Punch Dies Kits"
    ],
    products: [
      { name: "Mesin Punch Pneumatik 200kg DTD N-63", stock: 16 },
      { name: "CH-60 Pelubang Busbar Punching Hidrolik 31T", stock: 31 }
    ],
    stockCount: 47,
    shopeeUrl: "https://shopee.co.id/arbertools.id?page=0&shopCollection=257955869"
  },
  {
    id: 9,
    code: "109",
    title: "Ratchet Pullers",
    features: [
      "Cable Hand Pullers & Wire Tighteners",
      "Professional Wire Rope Grips",
      "Lever Block Pullers"
    ],
    products: [
      { name: "Cable Hand Puller & Wire Tightener", stock: 6 },
      { name: "ARBER TOOLS | Wire Grip 2 Ton NGK 2000 - Penjepit Kabel Baja & Listrik", stock: 34 },
      { name: "Lever Block Puller 3T", stock: 4 }
    ],
    stockCount: 44,
    shopeeUrl: "https://shopee.co.id/arbertools.id?page=0&shopCollection=257955859"
  },
  {
    id: 10,
    code: "110",
    title: "Hydraulic Hoses and Couplers",
    features: [
      "High-Pressure Rubber Hoses (700 Bar)",
      "Quick-Connect Hydraulic Couplers",
      "Adapter Fittings & Protective Sleeves"
    ],
    products: [
      { name: "High-Pressure Rubber Hose (700 Bar)", stock: 10 },
      { name: "Quick-Connect Hydraulic Coupler Set", stock: 8 },
      { name: "Adapter Fitting & Protective Sleeve", stock: 4 }
    ],
    stockCount: 22,
    shopeeUrl: "https://shopee.co.id/arbertools.id?page=0&shopCollection=257955877"
  }
];
