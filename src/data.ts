import { Product } from './types';

export const CATEGORIES = [
  { id: 'all', name: 'All Products', icon: 'Blocks' },
  { id: 'paddy-husker', name: 'Paddy Husker & Rubber Rolls', icon: 'Disc' },
  { id: 'whitener', name: 'Whitener Spare Parts', icon: 'Settings' },
  { id: 'silky', name: 'Silky Spare Parts', icon: 'Wrench' },
  { id: 'elevator', name: 'Elevator Spare Parts', icon: 'ArrowUpCircle' },
  { id: 'laboratory', name: 'Laboratory Equipment', icon: 'FlaskConical' },
  { id: 'additional', name: 'Additional Components', icon: 'Grid' },
];

export const BRANDS = [
  {
    name: 'Alaska Rubber Roll',
    logoText: 'Alaska',
    badge: 'Authorized Dealer',
    description: 'Renowned for high de-husking rates, minimum broken rice ratio, and exceptional temperature resistance.',
  },
  {
    name: 'Garlon Thread',
    logoText: 'Garlon',
    badge: 'Official Partner',
    description: 'High-strength industrial synthetic sewing threads, trusted for reliable bag closure under high tension.',
  },
  {
    name: 'Sterling Abrasives',
    logoText: 'Sterling',
    badge: 'Authorized Distributor',
    description: 'Premium abrasive whitening wheels and stones engineered with high bonding precision for whitening efficiency.',
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'g1',
    title: 'Alaska Premium Rubber Rolls',
    category: 'Products',
    imageType: 'roll',
    imageSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    details: 'Ajanta is an authorized dealer of Alaska Rubber Rolls, known for extreme heat dissipation and longevity.'
  },
  {
    id: 'g2',
    title: 'Hardened Spring Steel Whitener Screens (Jalli)',
    category: 'Spare Parts',
    imageType: 'screen',
    imageSrc: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6e22?auto=format&fit=crop&q=80&w=800',
    details: 'Precisely slotted screens featuring high resistance to abrasive silica sand.'
  },
  {
    id: 'g3',
    title: 'Elevator Conveyor Buckets & Cotton Belts',
    category: 'Rice Mill Components',
    imageType: 'bucket',
    imageSrc: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    details: 'Industrial polymer buckets paired with high-tension multi-ply nylon core belting.'
  },
  {
    id: 'g4',
    title: 'Grain Feed Screws & Sizing Shafts',
    category: 'Spare Parts',
    imageType: 'shaft',
    imageSrc: 'https://images.unsplash.com/photo-1530124560072-aee7062445d4?auto=format&fit=crop&q=80&w=800',
    details: 'High twisting torque EN24 alloy steel shafts and CNC-ground feed screws.'
  },
  {
    id: 'g5',
    title: 'Water Jet Silky Polisher Components',
    category: 'Spare Parts',
    imageType: 'milling',
    imageSrc: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800',
    details: 'Mirror finished stainless steel rolls and high-atomizing water mist spray nozzles.'
  },
  {
    id: 'g6',
    title: 'Laboratory Grain Aspirators & Huskers',
    category: 'Laboratory Equipment',
    imageType: 'lab-equipment',
    details: 'Test machinery ensuring exact measuring of head-rice recovery percentage.'
  },
  {
    id: 'g7',
    title: 'SS Pneumatic Slide Gates & Valves',
    category: 'Rice Mill Components',
    imageType: 'valve',
    details: 'Pneumatic double-acting cylinders for dynamic flow control inside conveyors.'
  },
  {
    id: 'g8',
    title: 'High-Gauss Tube and Plate Magnets',
    category: 'Rice Mill Components',
    imageType: 'magnet',
    details: 'NdFeB rare earth magnets to purge mechanical contaminants from processing lines.'
  }
,
  {
    id: 'g_user_0',
    title: 'Spare Part Component 01',
    category: 'Spare Parts',
    imageType: 'default',
    imageSrc: '/711828060_18086242049132248_6163303143837874841_n.webp',
    details: 'View our official component images from the latest catalogue update.'
  },
  {
    id: 'g_user_1',
    title: 'Spare Part Component 02',
    category: 'Spare Parts',
    imageType: 'default',
    imageSrc: '/713284080_18085366901132248_4550052494114751351_n.webp',
    details: 'View our official component images from the latest catalogue update.'
  },
  {
    id: 'g_user_2',
    title: 'Spare Part Component 03',
    category: 'Spare Parts',
    imageType: 'default',
    imageSrc: '/714423461_18086209169132248_42285294813332002_n.webp',
    details: 'View our official component images from the latest catalogue update.'
  },
  {
    id: 'g_user_3',
    title: 'Spare Part Component 04',
    category: 'Spare Parts',
    imageType: 'default',
    imageSrc: '/714599093_18086245805132248_1800360810060095377_n.webp',
    details: 'View our official component images from the latest catalogue update.'
  },
  {
    id: 'g_user_4',
    title: 'Spare Part Component 05',
    category: 'Spare Parts',
    imageType: 'default',
    imageSrc: '/714611813_18086253857132248_5004907016099275317_n.webp',
    details: 'View our official component images from the latest catalogue update.'
  },
  {
    id: 'g_user_5',
    title: 'Spare Part Component 06',
    category: 'Spare Parts',
    imageType: 'default',
    imageSrc: '/714631388_18086207921132248_1106884222181958759_n.webp',
    details: 'View our official component images from the latest catalogue update.'
  },
  {
    id: 'g_user_6',
    title: 'Spare Part Component 07',
    category: 'Spare Parts',
    imageType: 'default',
    imageSrc: '/714652327_18086206400132248_4431060123985964341_n.webp',
    details: 'View our official component images from the latest catalogue update.'
  },
  {
    id: 'g_user_7',
    title: 'Spare Part Component 08',
    category: 'Spare Parts',
    imageType: 'default',
    imageSrc: '/714670854_18086248826132248_3486912241875599260_n.webp',
    details: 'View our official component images from the latest catalogue update.'
  },
  {
    id: 'g_user_8',
    title: 'Spare Part Component 09',
    category: 'Spare Parts',
    imageType: 'default',
    imageSrc: '/714764709_18086251382132248_4545780746401942809_n.webp',
    details: 'View our official component images from the latest catalogue update.'
  },
  {
    id: 'g_user_9',
    title: 'Spare Part Component 010',
    category: 'Spare Parts',
    imageType: 'default',
    imageSrc: '/714766092_18086238707132248_1796983234248357446_n.webp',
    details: 'View our official component images from the latest catalogue update.'
  },
  {
    id: 'g_user_10',
    title: 'Spare Part Component 011',
    category: 'Spare Parts',
    imageType: 'default',
    imageSrc: '/714966076_18086242589132248_4445032510538859744_n.webp',
    details: 'View our official component images from the latest catalogue update.'
  },
  {
    id: 'g_user_11',
    title: 'Spare Part Component 012',
    category: 'Spare Parts',
    imageType: 'default',
    imageSrc: '/715058236_18086252321132248_5065726632716609056_n.webp',
    details: 'View our official component images from the latest catalogue update.'
  },
  {
    id: 'g_user_12',
    title: 'Spare Part Component 013',
    category: 'Spare Parts',
    imageType: 'default',
    imageSrc: '/715078221_18086250437132248_1552943008067158193_n.webp',
    details: 'View our official component images from the latest catalogue update.'
  },
  {
    id: 'g_user_13',
    title: 'Spare Part Component 014',
    category: 'Spare Parts',
    imageType: 'default',
    imageSrc: '/715346786_18086243819132248_1516330382294424778_n.webp',
    details: 'View our official component images from the latest catalogue update.'
  },
  {
    id: 'g_user_14',
    title: 'Spare Part Component 015',
    category: 'Spare Parts',
    imageType: 'default',
    imageSrc: '/715360253_18086240045132248_2967046960812069827_n.webp',
    details: 'View our official component images from the latest catalogue update.'
  },
  {
    id: 'g_user_15',
    title: 'Spare Part Component 016',
    category: 'Spare Parts',
    imageType: 'default',
    imageSrc: '/715397064_18086255633132248_8658993242386398235_n.webp',
    details: 'View our official component images from the latest catalogue update.'
  },
  {
    id: 'g_user_16',
    title: 'Spare Part Component 017',
    category: 'Spare Parts',
    imageType: 'default',
    imageSrc: '/715516329_18086419850132248_1662264054689760263_n.webp',
    details: 'View our official component images from the latest catalogue update.'
  },
  {
    id: 'g_user_17',
    title: 'Spare Part Component 018',
    category: 'Spare Parts',
    imageType: 'default',
    imageSrc: '/715537430_18086420636132248_778669848444845215_n.webp',
    details: 'View our official component images from the latest catalogue update.'
  },
  {
    id: 'g_user_18',
    title: 'Spare Part Component 019',
    category: 'Spare Parts',
    imageType: 'default',
    imageSrc: '/715650305_18086241407132248_1749240537532508743_n.webp',
    details: 'View our official component images from the latest catalogue update.'
  },
  {
    id: 'g_user_19',
    title: 'Spare Part Component 020',
    category: 'Spare Parts',
    imageType: 'default',
    imageSrc: '/715690867_18086213531132248_2197127978845901709_n.webp',
    details: 'View our official component images from the latest catalogue update.'
  },
  {
    id: 'g_user_20',
    title: 'Spare Part Component 021',
    category: 'Spare Parts',
    imageType: 'default',
    imageSrc: '/715730250_18086240543132248_8458244010810937293_n.webp',
    details: 'View our official component images from the latest catalogue update.'
  },
  {
    id: 'g_user_21',
    title: 'Spare Part Component 022',
    category: 'Spare Parts',
    imageType: 'default',
    imageSrc: '/715910426_18086420159132248_8733144403340946777_n.webp',
    details: 'View our official component images from the latest catalogue update.'
  },
  {
    id: 'g_user_22',
    title: 'Spare Part Component 023',
    category: 'Spare Parts',
    imageType: 'default',
    imageSrc: '/716070211_18086421227132248_7893448937556899977_n.webp',
    details: 'View our official component images from the latest catalogue update.'
  },
  {
    id: 'g_user_23',
    title: 'Spare Part Component 024',
    category: 'Spare Parts',
    imageType: 'default',
    imageSrc: '/716250798_18086421647132248_3479688236136570166_n.webp',
    details: 'View our official component images from the latest catalogue update.'
  },
  {
    id: 'g_user_24',
    title: 'Spare Part Component 025',
    category: 'Spare Parts',
    imageType: 'default',
    imageSrc: '/716270731_18086417684132248_4231479742704651945_n.webp',
    details: 'View our official component images from the latest catalogue update.'
  },
  {
    id: 'g_user_25',
    title: 'Spare Part Component 026',
    category: 'Spare Parts',
    imageType: 'default',
    imageSrc: '/716310329_18086418632132248_6756830579720608276_n.webp',
    details: 'View our official component images from the latest catalogue update.'
  }
];

export const PRODUCTS: Product[] = [
  // --- Category 1: Paddy Husker & Rubber Rolls ---
  {
    id: 'p1_1',
    name: 'Alaska Premium Rubber Roll',
    category: 'Paddy Husker & Rubber Rolls',
    subcategory: 'Rubber Rolls',
    brand: 'Alaska',
    description: 'Highly resilient premium grade vulcanized rubber roll designed for optimal de-husking efficiency with minimal grain cracking.',
    specifications: [
      'Material: Special synthetic nitrile elastomers',
      'Sizes Available: 10 Inch, 14 Inch',
      'Hardness: 88-92 Shore A',
      'Life Index: 500+ Metric Tons under standard conditions'
    ],
    features: ['Heat dissipation thermal grooves', 'Uniform wearing rate', 'Strict alignment balance'],
    imagePlaceholderType: 'roll',
    imageSrc: '/711828060_18086242049132248_6163303143837874841_n.webp'
  },
  {
    id: 'p1_2',
    name: 'Duraflex Stone Polisher',
    category: 'Paddy Husker & Rubber Rolls',
    subcategory: 'Rubber Polishers',
    brand: 'Sterling',
    description: 'Engineered for smooth polishing action. It removes bran layer evenly without heating the grain.',
    specifications: [
      'Grit Range: #36 to #54',
      'Compatibility: Standard stone polishers',
      'Self-sharpening abrasive bond structure'
    ],
    features: ['High durability adhesive matrix', 'Cool cutting performance', 'Reduced grain breakage'],
    imagePlaceholderType: 'roll',
    imageSrc: '/713284080_18085366901132248_4550052494114751351_n.webp'
  },
  {
    id: 'p1_3',
    name: 'Husker Coupling - Taper Lock Type',
    category: 'Paddy Husker & Rubber Rolls',
    subcategory: 'Husker Couplings',
    description: 'Precision cast-iron coupling with standard taper-lock bush for quick mounting and concentric alignment.',
    specifications: [
      'Bore Sizes: 25mm to 65mm standard taper locks',
      'Material: Spheroidal graphite iron (ductile iron)',
      'Dynamic Balancing: Verified at 2400 RPM'
    ],
    features: ['No slip transmission', 'Fast swap-out mechanics', 'High vibration damping'],
    imagePlaceholderType: 'coupling',
    imageSrc: '/714423461_18086209169132248_42285294813332002_n.webp'
  },
  {
    id: 'p1_4',
    name: 'Satake Husker Coupling',
    category: 'Paddy Husker & Rubber Rolls',
    subcategory: 'Husker Couplings',
    brand: 'Satake',
    description: 'OEM-compatible high precision coupling specifically designed for Satake de-husker shafts to assure stress-free run.',
    specifications: [
      'Machined on high-end CNC lines',
      'Flexible elastomer inserts for torque dampening',
      'Direct-fit specification'
    ],
    features: ['Corrosion resistant oxide coat', 'Wear-resistant rubber sleeve', 'Zero-backlash transmission'],
    imagePlaceholderType: 'coupling',
    imageSrc: '/714599093_18086245805132248_1800360810060095377_n.webp'
  },
  {
    id: 'p1_5',
    name: 'Rubber Polisher Roll',
    category: 'Paddy Husker & Rubber Rolls',
    subcategory: 'Rubber Polishers',
    description: 'Heavy duty rubber polisher roll for final-stage seed polishing, offering a scratch-free finish and lustrous grain.',
    specifications: [
      'Inner diameter steel hub reinforced',
      'Rubber Grade: Highly pure food grade elastomer',
      'Available sizes: 10" x 10", 12" x 12"'
    ],
    features: ['Food-grade safe contact surface', 'Excellent abrasion index', 'High shear strength'],
    imagePlaceholderType: 'roll',
    imageSrc: '/714611813_18086253857132248_5004907016099275317_n.webp'
  },

  // --- Category 2: Whitener Spare Parts ---
  {
    id: 'p2_1',
    name: 'Whitening Abrasive Rollers',
    category: 'Whitener Spare Parts',
    brand: 'Sterling',
    description: 'Premium silicate and silicon carbide whitening rollers providing abrasive scraping of the paddy husks and bran.',
    specifications: [
      'Formulations: Silicate-bound & Resinoid-bound',
      'Applicable on Buhler, Satake & Milltec Whiteners',
      'Operating Speed: 800 - 1200 RPM optimal range'
    ],
    features: ['Uniform wear behavior', 'Optimal bran purging', 'Extremely long service hours'],
    imagePlaceholderType: 'milling',
    imageSrc: '/714631388_18086207921132248_1106884222181958759_n.webp'
  },
  {
    id: 'p2_2',
    name: 'Rice Whitener Screens (Jalli for VT 5 / 10 / 15)',
    category: 'Whitener Spare Parts',
    description: 'Precisely perforated whitening screen sheets (Jalli) constructed from high-tensile spring steel, enabling prompt bran escape.',
    specifications: [
      'Material: Special Chrome-Alloy Hardened Sheet Steel',
      'Thickness: 1.2mm, 1.5mm, 1.8mm',
      'Slotted open area: Custom airflow specifications'
    ],
    features: ['High wear resistance to silica abrasive sand', 'Smooth interior laser cut finishing', 'Optimal elasticity to resist cracking'],
    imagePlaceholderType: 'screen',
    imageSrc: '/714652327_18086206400132248_4431060123985964341_n.webp'
  },
  {
    id: 'p2_3',
    name: 'Whitener Star Plates',
    category: 'Whitener Spare Parts',
    description: 'Balanced star wheel distribution plates ensuring an equilateral flow of paddy into the whitening sleeve.',
    specifications: [
      '6-Lobe & 8-Lobe configurations',
      'Hardened steel lugs to resist intake wear',
      'Dynamically balanced'
    ],
    features: ['Prevents grain congestion at intake', 'Interchangeable wear sleeves', 'High impact resistance'],
    imagePlaceholderType: 'ring',
    imageSrc: '/714670854_18086248826132248_3486912241875599260_n.webp'
  },
  {
    id: 'p2_4',
    name: 'Feed Screw for Buhler BSPB Model',
    category: 'Whitener Spare Parts',
    brand: 'Buhler',
    description: 'Precisely machined screw feeder tailored for the Buhler BSPB series whitener, facilitating rhythmic grain forward motion.',
    specifications: [
      'Material: Hardened manganese-steel alloy casting',
      'Flute Depth: Graduated variable design',
      'Finish: Heavy chrome coat'
    ],
    features: ['Optimized pitch to match OEM throughput rates', 'Extreme wear life', 'Anti-clogging surface finish'],
    imagePlaceholderType: 'feeder',
    imageSrc: '/714764709_18086251382132248_4545780746401942809_n.webp'
  },
  {
    id: 'p2_5',
    name: 'Feed Screw for VT 10 (With Inner Hub)',
    category: 'Whitener Spare Parts',
    description: 'Intake feed screw with a structural inner hub coupling core, perfect for VT 10 series вертикальной whitener machines.',
    specifications: [
      'Inner diameter: Machined to precise Tolerance indices',
      'Heavy-wall helical structure',
      'Balanced counter-weighting'
    ],
    features: ['Quick interlocking keys', 'Reduced shear force design', 'High volumetric efficiency'],
    imagePlaceholderType: 'feeder',
    imageSrc: '/714766092_18086238707132248_1796983234248357446_n.webp'
  },
  {
    id: 'p2_6',
    name: 'Whitener Cylinder Of Inner Ring / Outer Ring',
    category: 'Whitener Spare Parts',
    description: 'Concentric guiding cylinders for whitener systems, acting as structural retainers for the abrasive sleeves.',
    specifications: [
      'Machining Precision: +/- 0.05 mm',
      'Material: Low-carbon structural steel with nitriding'
    ],
    features: ['Absolutely steady spin alignment', 'Quick installation tracks', 'Vibration buffering ring setup'],
    imagePlaceholderType: 'ring',
    imageSrc: '/714966076_18086242589132248_4445032510538859744_n.webp'
  },
  {
    id: 'p2_7',
    name: 'Whitener Main Shafts',
    category: 'Whitener Spare Parts',
    description: 'High strain critical alloy steel main shafts capable of handling extreme twisting torques of whitener machine motors.',
    specifications: [
      'Material: EN24 high-tensile tempered steel',
      'Precision ground sitting points for bearings',
      'Straightness: Within 0.02 mm over length'
    ],
    features: ['Keyways for steady pulley lock', 'Ultrasonic deflection tested', 'Exceptional fatigue limits'],
    imagePlaceholderType: 'shaft',
    imageSrc: '/715058236_18086252321132248_5065726632716609056_n.webp'
  },
  {
    id: 'p2_8',
    name: 'Feed Screw Six Stone Whitener',
    category: 'Whitener Spare Parts',
    description: 'Sturdy screw feeder custom engineered for high-diameter multi-stone traditional whiteners.',
    specifications: [
      'Heavy cast profile',
      'High pitch fluted structure for massive conveying loads'
    ],
    features: ['Maximized volumetric feed rate', 'Coated with wear-retardant alloy spray'],
    imagePlaceholderType: 'feeder',
    imageSrc: '/715078221_18086250437132248_1552943008067158193_n.webp'
  },

  // --- Category 3: Silky Spare Parts ---
  {
    id: 'p3_1',
    name: 'Buhler Milltec Silky Milling Roll',
    category: 'Silky Spare Parts',
    brand: 'Buhler',
    description: 'Mirror-polished stainless steel milling rolls for water-jet silky polishers, securing a dust-free glass-like shine.',
    specifications: [
      'Material: High Chromium Stainless Steel alloy SUS420',
      'Mirror Finish: Ra < 0.1 micrometers',
      'Air & water cooling channels integral to the hub'
    ],
    features: ['Anti-frictional micro grooves', 'No head-rise operation', 'Exceptional hygienic food safety ratings'],
    imagePlaceholderType: 'milling',
    imageSrc: '/715346786_18086243819132248_1516330382294424778_n.webp'
  },
  {
    id: 'p3_2',
    name: 'Milling Roll DRPA 30 HP',
    category: 'Silky Spare Parts',
    description: 'Heavy-duty 30 HP specification milling roll for high-volume silky machines, providing maximum surface friction without cracks.',
    specifications: [
      'Heavy internal reinforcement ribs',
      'Compatibility: Standard 30 Horsepower silky frames',
      'Balanced at high operational velocity'
    ],
    features: ['Withstands massive torsional shocks', 'Optimum water spray distribution integration'],
    imagePlaceholderType: 'milling',
    imageSrc: '/715360253_18086240045132248_2967046960812069827_n.webp'
  },
  {
    id: 'p3_3',
    name: 'Polishing Silky Screens (Jali)',
    category: 'Silky Spare Parts',
    description: 'Micro-perforated silky screens compatible with Buhler, Milltec, Agretech, and Sonafood machinery.',
    specifications: [
      'Perforation profile: Fine slot matrices',
      'Material: Solid stainless steel sheets',
      'Thickness: 1.5mm - 2.0mm high durability'
    ],
    features: ['Absolutely burr-free surfaces to avoid grain damage', 'Resilient under highly humid moist conditions'],
    imagePlaceholderType: 'screen',
    imageSrc: '/715397064_18086255633132248_8658993242386398235_n.webp'
  },
  {
    id: 'p3_4',
    name: 'Buhlar Silky Nozzle with Pipe',
    category: 'Silky Spare Parts',
    brand: 'Buhler',
    description: 'High-atomization spray nozzles with support pipe setup, ensuring fine, mist-like water integration during the silky polishing stage.',
    specifications: [
      'Atomization range: Superfine micro drops',
      'Nozzle Tip Material: Hardened SS316',
      'Inlet connection threads: BSP Standard'
    ],
    features: ['Prevents spot wetting', 'Non-clogging internal swirl vanes', 'Easy quick-clean build'],
    imagePlaceholderType: 'nozzle',
    imageSrc: '/715516329_18086419850132248_1662264054689760263_n.webp'
  },
  {
    id: 'p3_5',
    name: 'KB 40 Jalli Frame & Sleeve',
    category: 'Silky Spare Parts',
    description: 'Rigid screen holding frames (Jalli Frame) and protective wear sleeves designed for the KB 40 series silky polishers.',
    specifications: [
      'Fabricated on high accuracy precision jigs',
      'Material: Powder-coated steel & galvanized structure',
      'Maintains perfect circular concentricity'
    ],
    features: ['Friction-lock assembly tabs', 'Quick-change design simplifies maintenance'],
    imagePlaceholderType: 'ring',
    imageSrc: '/715537430_18086420636132248_778669848444845215_n.webp'
  },
  {
    id: 'p3_6',
    name: 'Main Front Housing for Silky',
    category: 'Silky Spare Parts',
    description: 'Precision alignment front cover and housing plates for high-end water polishers, keeping dynamic elements leak-proof.',
    specifications: [
      'Material: Fine-grain grey cast iron GG25',
      'Sealing channels: Formed double lip viton inserts'
    ],
    features: ['Water-tight seal alignment', 'Heavy load bearing seating ground'],
    imagePlaceholderType: 'ring',
    imageSrc: '/715650305_18086241407132248_1749240537532508743_n.webp'
  },

  // --- Category 4: Elevator Spare Parts ---
  {
    id: 'p4_1',
    name: 'Elevator Buckets (Steel & PVC Varieties)',
    category: 'Elevator Spare Parts',
    description: 'Impact-resistant PVC & pressed carbon steel elevator buckets for clean, high-intensity grain transport in vertical runs.',
    specifications: [
      'Deep bottom design for smooth discharge',
      'Strengthened walls and rear lips',
      'Sizes: 4", 5", 6", 8", 10", 12"'
    ],
    features: ['Ultra smooth inner radius prevents grain trapping', 'Heavy structural rimming to resist deflection'],
    imagePlaceholderType: 'bucket',
    imageSrc: '/715690867_18086213531132248_2197127978845901709_n.webp'
  },
  {
    id: 'p4_2',
    name: 'Premium Nylon Cotton Belts',
    category: 'Elevator Spare Parts',
    description: 'Multi-ply robust elevator belts with custom nylon weave core and sweat-wicking cotton outer layer for slip-free grip.',
    specifications: [
      'Ply options: 3-Ply, 4-Ply, 5-Ply',
      'Anti-static and oil-resistant coating',
      'Tensile Strength: Up to 450 N/mm'
    ],
    features: ['Minimal elongation stretching', 'High bolt holding strength', 'Optimal flexibility over small pulleys'],
    imagePlaceholderType: 'bucket',
    imageSrc: '/715730250_18086240543132248_8458244010810937293_n.webp'
  },
  {
    id: 'p4_3',
    name: 'Garlon Premium Cotton Sewing Threads',
    category: 'Elevator Spare Parts',
    brand: 'Garlon',
    description: 'Multi-strand heavy duty industrial sewing threads ideal for high-speed bag closing machines under high-stress packaging environments.',
    specifications: [
      'Material: Glace cotton & high tenacity poly-core blend',
      'Tensile Strength: High knot-strength index',
      'Packaging: 1Kg and 2Kg industrial cone packs'
    ],
    features: ['Knot-free uniform thread diameter', 'Smooth flow through sewing needles without linting'],
    imagePlaceholderType: 'bucket',
    imageSrc: '/715910426_18086420159132248_8733144403340946777_n.webp'
  },
  {
    id: 'p4_4',
    name: 'Elevator Bucket Bolts (T-head Type)',
    category: 'Elevator Spare Parts',
    description: 'Specially designed flat-head bolts (Fanged or Euro-Style) preventing bolt rotation during tension fastening.',
    specifications: [
      'Material: Steel Grade 8.8 High-Tensile / Stainless Steel 304',
      'Threading: Metric coarse thread M6, M8, M10 standard',
      'Packaging: 100 piece industrial boxes'
    ],
    features: ['Anti-spinning dual-fang design', 'Extra flat head contours prevents belt wear'],
    imagePlaceholderType: 'coupling',
    imageSrc: '/716070211_18086421227132248_7893448937556899977_n.webp'
  },
  {
    id: 'p4_5',
    name: 'High Intensity Tube & Plate Magnets',
    category: 'Elevator Spare Parts',
    description: 'Rare-earth NdFeB permanent magnets designed to intercept and trap accidental iron spikes, nails, and washers from running grain.',
    specifications: [
      'Magnetic Power: 8000 to 12000 Gauss units',
      'Material: SS304 dustproof cladding case',
      'Dimensions: Custom engineered to fit duct slots'
    ],
    features: ['Exceptional magnetic pulling radius', 'Easy self-slide clean mechanics', 'No power backup required'],
    imagePlaceholderType: 'magnet',
    imageSrc: '/716250798_18086421647132248_3479688236136570166_n.webp'
  },
  {
    id: 'p4_6',
    name: 'Dynamically Balanced Husker Ampellor',
    category: 'Elevator Spare Parts',
    description: 'Pneumatic blower fans (Ampellor) for de-huskers, yielding high vacuum flows to pull husks out of the system flawlessly.',
    specifications: [
      'Material: Lightweight high durability alloy',
      'Balanced: ISO 1940 G2.5 strict criteria'
    ],
    features: ['Low power consumption', 'Minimal aerodynamic noise', 'Egress wear shield plating'],
    imagePlaceholderType: 'ring',
    imageSrc: '/716270731_18086417684132248_4231479742704651945_n.webp'
  },

  // --- Category 5: Laboratory Equipment ---
  {
    id: 'p5_1',
    name: 'Precision Lab Aspirator',
    category: 'Laboratory Equipment',
    description: 'Allows prompt and precise testing of dockage, dust, and light weight husk parts in sample paddy lots.',
    specifications: [
      'Voltage: 220V Single-phase AC',
      'Control: Infinitely variable fine fan velocity slider',
      'Inspection panel: Highly transparent PMMA chamber'
    ],
    features: ['Accurate separation replication', 'Desktop compact operational footprint'],
    imagePlaceholderType: 'lab-equipment',
    imageSrc: '/716310329_18086418632132248_6756830579720608276_n.webp'
  },
  {
    id: 'p5_2',
    name: 'High capacity Lab Drier',
    category: 'Laboratory Equipment',
    description: 'Enables quick moisture reduction of green paddy batches to reach target milling humidity levels safely.',
    specifications: [
      'Digital temperature controller: 30 to 80 Deg C',
      'Sturdy stainless steel sample drawers'
    ],
    features: ['Uniform hot air flow matrix', 'Prevents grain thermal shock cracking'],
    imagePlaceholderType: 'lab-equipment',
    imageSrc: '/logo.jpg'
  },
  {
    id: 'p5_3',
    name: 'Riffle Type Lab Divider',
    category: 'Laboratory Equipment',
    description: 'Equilateral gravity-drop splitter dividing large batches of grain into perfect, statistically identical laboratory samples.',
    specifications: [
      'No. of Chutes: 12 to 24 slots precision milled',
      'Material: High polished seamless stainless steel',
      'Comes with standard dynamic catch pans'
    ],
    features: ['Zero static dust trap corners', 'Complying fully with ISTA grain standards'],
    imagePlaceholderType: 'lab-equipment',
    imageSrc: '/711828060_18086242049132248_6163303143837874841_n.webp'
  },
  {
    id: 'p5_4',
    name: 'Laboratory Rice Husker & Polisher Set',
    category: 'Laboratory Equipment',
    description: 'Benchtop test sheller and polisher machines to accurately measure head-rice recovery percentage from incoming paddy trucklots.',
    specifications: [
      'Motor: 0.5HP high starting torque induction motor',
      'Shelling rate: 99% on raw standard paddy',
      'Quick timing controllers standard'
    ],
    features: ['Accurate dial adjustment for roll pressure', 'Tough noise-insulated composite cabinet'],
    imagePlaceholderType: 'lab-equipment',
    imageSrc: '/713284080_18085366901132248_4550052494114751351_n.webp'
  },
  {
    id: 'p5_5',
    name: 'Lab Grader with Indent Cylinder',
    category: 'Laboratory Equipment',
    description: 'Separates head-rice, broken rice parts, and small seeds by thickness or length for sample statistical diagnostics.',
    specifications: [
      'Interchangeable steel indent cylinders included',
      'Electric automated rotation timer'
    ],
    features: ['Perfect separation profiling', 'Highly visual separation process'],
    imagePlaceholderType: 'lab-equipment',
    imageSrc: '/714423461_18086209169132248_42285294813332002_n.webp'
  },

  // --- Category 6: Additional Components ---
  {
    id: 'p6_1',
    name: 'Heavy Duty Rotary Air Lock',
    category: 'Additional Components',
    description: 'Rotary air valve for pneumatic pipeline systems, preventing backpressure leaks while dropping dust and husks from silos.',
    specifications: [
      'Casting material: Closed grey iron high density body',
      'Rotor flutes: 8-vane adjustable rubber tips',
      'Sizes: 150mm, 200mm, 250mm standard'
    ],
    features: ['Absolutely minimal blower air loss', 'Vane adjustments are swift and straightforward', 'Direct gear-box coupled mountings'],
    imagePlaceholderType: 'valve',
    imageSrc: '/714599093_18086245805132248_1800360810060095377_n.webp'
  },
  {
    id: 'p6_2',
    name: 'Revo Heavy Bag Closer Machine',
    category: 'Additional Components',
    brand: 'General',
    description: 'High-speed handheld chain-stitch bag close machine with continuous automatic lubrication oil system.',
    specifications: [
      'Sewing speed: 1800 - 2000 stitches per min',
      'Drives on AC/DC double insulated motor',
      'Weight: 5.5 Kg'
    ],
    features: ['Extremely study cast alloy frame', 'Integrated safe mechanical thread cutter'],
    imagePlaceholderType: 'machine',
    imageSrc: '/714611813_18086253857132248_5004907016099275317_n.webp'
  },
  {
    id: 'p6_3',
    name: 'SS Pneumatic Slide Gate',
    category: 'Additional Components',
    description: 'Corrosion resistant stainless steel pneumatic blade-gates to regulate grain flow inside conveyor shoots dynamically.',
    specifications: [
      'Cylinders: Standard air double-acting design',
      'Material: Solid SS304 slide blade plate',
      'Position sensors: Magnetic proximity reed switches standard'
    ],
    features: ['Quick 0.5 second open/close timing', 'Slide blade guide bearings prevent jams'],
    imagePlaceholderType: 'valve',
    imageSrc: '/714631388_18086207921132248_1106884222181958759_n.webp'
  },
  {
    id: 'p6_4',
    name: 'Paddy Separator Distribution Box',
    category: 'Additional Components',
    description: 'Specially engineered intake manifold box designed to equally segregate incoming paddy flow across table screens.',
    specifications: [
      'Inlet flow divider: Dynamic level swing plates',
      'Material: Wear-resistant structural grade steel sheet'
    ],
    features: ['Eliminates unbalanced channel congestion', 'Extends separator screen lifespans'],
    imagePlaceholderType: 'default',
    imageSrc: '/714652327_18086206400132248_4431060123985964341_n.webp'
  },
  {
    id: 'p6_5',
    name: 'Nylon S Pocket for Buhlar Sizer',
    category: 'Additional Components',
    brand: 'Buhler',
    description: 'Special nylon sizer pocket inserts custom molded to secure uniform alignment in sorting machinery sheets.',
    specifications: [
      'Material: High grade low-friction Nylon 66',
      'Excellent dimensional retention'
    ],
    features: ['Resistant to thermal flex', 'Simple snap-in fit mechanism'],
    imagePlaceholderType: 'ring',
    imageSrc: '/714670854_18086248826132248_3486912241875599260_n.webp'
  },
  {
    id: 'p6_6',
    name: 'Traditional Sampling Parkhi (SS Tip)',
    category: 'Additional Components',
    description: 'Pointed hollow stainless steel sampling spears to easily draw grain core-samples from deep within bagged storage.',
    specifications: [
      'Available lengths: 3 Feet, 4 Feet, 5 Feet',
      'Core diameter: 25mm seamless tubular pipe'
    ],
    features: ['Sharp penetrative chrome tip', 'Easy grain dump ports'],
    imagePlaceholderType: 'shaft',
    imageSrc: '/714764709_18086251382132248_4545780746401942809_n.webp'
  },
  {
    id: 'p3_7',
    name: 'Ajanta Silky Water Meter',
    category: 'Silky Spare Parts',
    description: 'Specialized water flow metering instrument for silky polishing machines, engineered for accurate water mist controls to avoid grain damage.',
    specifications: [
      'Material: Premium Brass & MS solid core body',
      'Scale unit: LPM (Liters per Minute)',
      'Measuring Ranges: 0 - 3 LPM / 0 - 30 LPM',
      'Mounting: Rigid Dual Wall/Panel Mount alignment'
    ],
    features: ['High Precision Needle Valve Control', 'Vibrant float dial meter for instant visibility', 'Special anti-rust coating for high moisture regions'],
    imagePlaceholderType: 'nozzle',
    imageSrc: '/714766092_18086238707132248_1796983234248357446_n.webp'
  },
  {
    id: 'p6_7',
    name: 'Rotary Airlock Valve',
    category: 'Additional Components',
    description: 'High precision rotary valve designed for pneumatic conveying lines to dump dust or husks from cyclones without pressure loss.',
    specifications: [
      'Casing: High-grade cast iron / Stainless steel solid body',
      'Vanes: 8-blade adjustable sealing pocket tips',
      'Sizes: 150 mm, 200 mm, 250 mm Standard',
      'Rotor Alignment: Concentric dynamic balance'
    ],
    features: ['Minimizes blowback air leakages', 'Interchangeable heat-resistant neoprene blade tips', 'Direct-drive reduction gear transmission'],
    imagePlaceholderType: 'valve',
    imageSrc: '/714966076_18086242589132248_4445032510538859744_n.webp'
  },
  {
    id: 'p3_8',
    name: 'High-Atomization Silky Nozzle',
    category: 'Silky Spare Parts',
    description: 'Precision-milled water-spray mist nozzle component for water gloss polishing, ensuring seamless, uniform mist injection without spot-wetting.',
    specifications: [
      'Tip Material: Sintered steel & brass body',
      'Spray Pattern: Concentric high-atomization cone',
      'Connection: standard BSP threads'
    ],
    features: ['Guards against rice spot-wetting & clumping', 'Internal swirl vane prevents sediment clogging', 'Instant quick-clean thread disassembly'],
    imagePlaceholderType: 'nozzle',
    imageSrc: '/715058236_18086252321132248_5065726632716609056_n.webp'
  },
  {
    id: 'p1_6',
    name: 'Airlock Rubber Sleeves',
    category: 'Paddy Husker & Rubber Rolls',
    description: 'Elastic sealing sleeves designed to offer secure, airtight joint connections between airlocks, pipe ducts, and receiving hopper cones.',
    specifications: [
      'Material: High-elastic EPDM / Natural Rubber / Neoprene',
      'Sizes: 120 mm, 150 mm, 190 mm diameters',
      'Elongation Limit: High stretch memory elasticity'
    ],
    features: ['Prevents conveying line vacuum leaks', 'Strict resistance to environmental ozone and cracks', 'Fast clamp-on snap fit'],
    imagePlaceholderType: 'roll',
    imageSrc: '/715078221_18086250437132248_1552943008067158193_n.webp'
  },
  {
    id: 'p3_9',
    name: 'Screw Case Silky',
    category: 'Silky Spare Parts',
    description: 'Heavy walled stainless steel screw case housing, optimized for high load Silky polisher forward delivery units.',
    specifications: [
      'Material: Ultra-thick structural steel casting',
      'Coating: Corrosion-resistant alloy plating',
      'Application: Rice Polishing systems'
    ],
    features: ['Dampens dynamic vibration during high velocity conveying', 'Precision inner diameter prevents grain entrapment', 'Withstands extended continuous running hours'],
    imagePlaceholderType: 'feeder',
    imageSrc: '/715346786_18086243819132248_1516330382294424778_n.webp'
  },
  {
    id: 'p6_8',
    name: 'Wooden Frame Rice Cleaner Screen',
    category: 'Additional Components',
    description: 'Premium wire mesh sizing screens bound in solid timber frameworks, built for swift impurity isolation in separator cleaners.',
    specifications: [
      'Mesh: High-carbon strong steel mesh net',
      'Frame: Heavy seasoned hardwood border',
      'Sizes: Custom manufactured sizes available'
    ],
    features: ['High filtration efficiency with minimal mesh clogging', 'Wooden border absorbs rhythmic shaker vibrations', 'High tension assembly guards grid flatness'],
    imagePlaceholderType: 'screen',
    imageSrc: '/715360253_18086240045132248_2967046960812069827_n.webp'
  },
  {
    id: 'p6_9',
    name: 'Industrial Reddler Chain',
    category: 'Additional Components',
    description: 'Heavy duty carbon steel traction chains for flight scrapers and deep-link conveyor networks, providing non-slip grain towing.',
    specifications: [
      'Material: Heat-treated alloy steel links',
      'Link Profiles: Outer wing scraper loops',
      'Tension rating: Multi-ton wear resistance'
    ],
    features: ['High-tensile joint pins resist stretch fatigue', 'Smooth scraper motion protects channel corners', 'Anti-corrosive finish for reliable outdoor runs'],
    imagePlaceholderType: 'coupling',
    imageSrc: '/715397064_18086255633132248_8658993242386398235_n.webp'
  },
  {
    id: 'p6_10',
    name: 'Paddy Separator Leg',
    category: 'Additional Components',
    description: 'Heavy-walled structural steel leg mounts designed to support vibrating separator tables safely, controlling oscillation dampening.',
    specifications: [
      'Material: Thick-welded structural steel channel',
      'Coating: Heavy epoxy anti-corrosive paint',
      'Application: Separator machine support footing'
    ],
    features: ['Dramatically minimizes structural building vibrations', 'Ensures perfect, level alignment of separation screen tables', 'Reduces mechanical stress wear on machine brackets'],
    imagePlaceholderType: 'default',
    imageSrc: '/715516329_18086419850132248_1662264054689760263_n.webp'
  },
  {
    id: 'p5_6',
    name: 'Digital Grain Moisture Meter',
    category: 'Laboratory Equipment',
    description: 'Instant digital grain moisture analyzer equipped with a standard thermal printer for automated inspection logs and records.',
    specifications: [
      'Analysis System: High-frequency capacitance constant sensing',
      'Display Range: 5% to 40% moisture index',
      'Accessory: Dynamic desktop record printer'
    ],
    features: ['Secures 100% instant moisture verification', 'User friendly multi-grain preset selectors', 'Unmatched sensor accuracy of +/- 0.5%'],
    imagePlaceholderType: 'lab-equipment',
    imageSrc: '/715537430_18086420636132248_778669848444845215_n.webp'
  },
  {
    id: 'p6_11',
    name: 'Perforated Sizing Grader Screen',
    category: 'Additional Components',
    description: 'Accurate sizer screens with precise punch-hole layouts to segregate long, broken, and small grain seeds correctly.',
    specifications: [
      'Material: High stiffness perforated sheet steel',
      'Perforation Profiles: Precise slot/round hole matrices',
      'Thickness: Heavy gauge wear resistance'
    ],
    features: ['Uniform perforation guarantees calibration consistency', 'Seamless, burr-free borders protect polished grain', 'Friction-free slip finish increases sieve output'],
    imagePlaceholderType: 'screen',
    imageSrc: '/715650305_18086241407132248_1749240537532508743_n.webp'
  },
  {
    id: 'p2_9',
    name: 'Whitener Screen Breaker',
    category: 'Whitener Spare Parts',
    description: 'Hardened alloy steel breaker bar components to safeguard whitening screen meshes by pulverizing large debris feed spikes.',
    specifications: [
      'Material: Highly abrasion-resistant chrome-alloy',
      'Applicable machines: Vertical and horizontal whiteners',
      'Dimensions: Factory matched specifications'
    ],
    features: ['Extends expensive whitener screen mesh lifespans', 'Improves milling efficiency through steady feeds', 'Extremely resilient wear-resistant alloy structure'],
    imagePlaceholderType: 'shaft',
    imageSrc: '/715690867_18086213531132248_2197127978845901709_n.webp'
  },
  {
    id: 'p6_12',
    name: 'Automatic Pneumatic Sliding Gate',
    category: 'Additional Components',
    description: 'Rapid stroke pneumatic slider gates, perfect for automated chute flows and silo discharging loops in smart mills.',
    specifications: [
      'Actuator: Dual-acting heavy pneumatic cylinder',
      'Blade Plate: Precision SS304 plate gate',
      'Sensors: Integrated magnetic reed status indicators'
    ],
    features: ['Smart automation ready for clean remote integration', 'Ultra-durable casing resists heavy gravity loads', '0.5-second fast slider movement prevents flow congestion'],
    imagePlaceholderType: 'valve',
    imageSrc: '/715730250_18086240543132248_8458244010810937293_n.webp'
  },
  {
    id: 'p6_13',
    name: 'LPI Premium Bag Closing Machine',
    category: 'Additional Components',
    description: 'Reliable heavy-duty portable sack closer, utilizing a single-thread chain stitch with a continuous lubrication pump.',
    specifications: [
      'Stitch Speed: 1800 - 2000 stitches per min',
      'Capacity: Heavy poly, jute, HDPE, and paper sacks',
      'Sewing Motor: Fully insulated 110W drive'
    ],
    features: ['Perfect, leak-proof packaging sutures', 'Automatic mechanical thread chain-cutter', 'Lightweight alloy housing reduces handler fatigue'],
    imagePlaceholderType: 'machine',
    imageSrc: '/715910426_18086420159132248_8733144403340946777_n.webp'
  },
  {
    id: 'p6_14',
    name: 'Digital Vibration Controller',
    category: 'Additional Components',
    description: 'Electronic smart sensor and monitor to balance shaker table frequencies, optimizing sizer yields dynamically.',
    specifications: [
      'Sensors: High-sensitivity piezoelectric accelerometers',
      'Power: 220V standard digital console',
      'Adjustable levels: Custom screen intensity parameters'
    ],
    features: ['Shields delicate screen frameworks from over-flex damage', 'Guarantees uniform separation across entire sizer grids', 'Significantly scales up hourly separator throughput'],
    imagePlaceholderType: 'lab-equipment',
    imageSrc: '/716070211_18086421227132248_7893448937556899977_n.webp'
  },
  {
    id: 'p2_10',
    name: 'Whitener Destoner Screen',
    category: 'Whitener Spare Parts',
    description: 'High-durability separator screen with a structural timber carrier frame, built to safely isolate dense pebbles and stones.',
    specifications: [
      'Frame: Heavy structural wood alignment rim',
      'Sieve Material: Double-crimped high carbon wire grids',
      'Application: De-stoner machines & whiteners'
    ],
    features: ['Eliminates abrasive mineral pebbles from flow line', 'Sturdy framework absorbs recurring dynamic shocks', 'Easy slide-in replacements reduce plant downtime'],
    imagePlaceholderType: 'screen',
    imageSrc: '/716250798_18086421647132248_3479688236136570166_n.webp'
  },
  {
    id: 'p2_11',
    name: 'Manganese-steel Whitener Breaker',
    category: 'Whitener Spare Parts',
    description: 'Heavy alloy break blocks providing efficient structural grain cracking forces to simplify downstream bran shearing.',
    specifications: [
      'Material: High-impact hardened manganese steel',
      'Application: Primary wheat/rice whitener machinery'
    ],
    features: ['Achieves uniform grain fracture index', 'Significantly lowers energy consumption of whiteners', 'Prevents accidental friction head-rise inside chamber'],
    imagePlaceholderType: 'shaft',
    imageSrc: '/716270731_18086417684132248_4231479742704651945_n.webp'
  },
  {
    id: 'p3_10',
    name: 'Vented Stainless Silky Screen',
    category: 'Silky Spare Parts',
    description: 'Special laser-slotted SS sieve screens for water jet silky polishers, securing friction airflow without grain scratches.',
    specifications: [
      'Material: Heat-hardened SUS304 / Chrome alloy sheet',
      'Perforations: Airflow micro slots',
      'Application: Silky water polishers'
    ],
    features: ['Extends polishing screen life under moist zones', 'Absolutely smooth, burr-free inner channels prevent grain broken ratios'],
    imagePlaceholderType: 'screen',
    imageSrc: '/716310329_18086418632132248_6756830579720608276_n.webp'
  },
  {
    id: 'p2_12',
    name: 'Whitener Abrasive Stones',
    category: 'Whitener Spare Parts',
    description: 'High density whitener abrasive wheels of diverse diameters and core hubs, engineered with durable silicate and resin bindings.',
    specifications: [
      'Diameter profiles: 250mm, 340mm, 358mm, 390mm standard',
      'Formulations: High purity silicon carbide matrix',
      'Application: All standard vertical/horizontal whiteners'
    ],
    features: ['Highly balanced structure prevents machine vibrations', 'Exceptional self-sharpening properties raise peeling rate', 'Extremely resilient wear limits for massive cumulative tonnage'],
    imagePlaceholderType: 'milling',
    imageSrc: '/logo.jpg'
  },
  {
    id: 'p5_7',
    name: 'Mini Paddy Cleaner & Cyclone',
    category: 'Laboratory Equipment',
    description: 'Compact laboratory paddy cleaner with built-in cyclone vacuum blower to purge chaff, dust, and light hollow seed contaminants.',
    specifications: [
      'System: Compact shaker deck paired with cyclone blower',
      'Aspiration: Powerful integrated fan suction',
      'Footprint: Space-saving desktop model'
    ],
    features: ['Ensures clean, standardized lab grain batches before tests', 'Dust-free closed recycling structure saves environment', 'Extremely quiet, simple maintenance operation'],
    imagePlaceholderType: 'lab-equipment',
    imageSrc: '/711828060_18086242049132248_6163303143837874841_n.webp'
  },
  {
    id: 'p2_13',
    name: 'Whitener Star Plate',
    category: 'Whitener Spare Parts',
    description: 'Fluted intake distribution stars, engineered to guide incoming grain feed sets concentrically around the main rotor.',
    specifications: [
      'Material: High impact manganese alloy steel',
      'Profiles: 6-lobe / 8-lobe standard stars',
      'Application: High volume rice whitener entries'
    ],
    features: ['Uniform distribution eliminates chute blockage risks', 'Superb resistance against abrasive sand scraping', 'Concentric balance saves rotor bearing life'],
    imagePlaceholderType: 'ring',
    imageSrc: '/713284080_18085366901132248_4550052494114751351_n.webp'
  },
  {
    id: 'p6_15',
    name: 'Rubber Inspection Caps',
    category: 'Additional Components',
    description: 'Flex-rubber seal bungs with secure locking lips to seal diagnostic inspection ports on gravity pipelines and hopper casings.',
    specifications: [
      'Material: Durable EPDM, neoprene & silicone formulation',
      'Sizes: 100mm, 112mm, 120mm, 150mm diameters',
      'Hardness: Flex-firm 70 Shore A'
    ],
    features: ['Tight-fitting rim prevents material blowouts', 'Resilient under chemical, thermal, and oil contacts', 'Fast snap-fit manual pull-tabs simplify lookups'],
    imagePlaceholderType: 'roll',
    imageSrc: '/714423461_18086209169132248_42285294813332002_n.webp'
  },
  {
    id: 'p6_16',
    name: 'Anti-Vibration Machinery Mounts',
    category: 'Additional Components',
    description: 'Structural rubber and steel isolator mounts, custom engineered to absorb dynamic forces of vibrating sieve decks and blowers.',
    specifications: [
      'Design: Bonded steel threaded studs with rubber buffers',
      'Models: AVM 120x110, AVM 90x100, AVM 96x96, AVM 96x86',
      'Bore layouts: standard mechanical fittings'
    ],
    features: ['Isolates dynamic shocks from concrete floors and rails', 'Increases mechanical life of supporting bolts and frames', 'Dampens noise yields for safe operator surroundings'],
    imagePlaceholderType: 'roll',
    imageSrc: '/714599093_18086245805132248_1800360810060095377_n.webp'
  },
  {
    id: 'p6_17',
    name: 'Anti-leak rubber De-Stoner Sleeve',
    category: 'Additional Components',
    description: 'Special bag-shaped elastic rubber sleeve with precision sealing lips to maintain negative pressure inside destoner silos.',
    specifications: [
      'Material: High-fatigue elastic Natural Rubber',
      'Sizes: 200 mm, 220 mm, 265 mm heights',
      'Design: Form-fitting bag configuration'
    ],
    features: ['Assures continuous 100% air-tight de-stoner pressure levels', 'Highly flexible elongation resists dust wear scraper fatigue', 'Uniform sealing saves de-stoning fans power consumption'],
    imagePlaceholderType: 'roll'
  }
];
