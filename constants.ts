import { WineProduct, WineType } from './types';

// ==========================================
// IMAGE REPLACEMENT GUIDE
// ==========================================
// To use your own images:
// 1. Create a folder named 'products' inside your 'public' directory.
// 2. Add your image files (png/jpg/webp) to that folder.
// 3. Match the filenames to the paths defined below.
// 
// Example: public/products/lunetta-prosecco-rose.png
// ==========================================

export const PRODUCTS: WineProduct[] = [
  {
    id: 'lunetta-prosecco-rose',
    name: 'Prosecco Rosé',
    brand: 'Lunetta',
    type: WineType.SPARKLING,
    shortDescription: 'Bright pink with slight cherry reflections.',
    fullDescription: 'A fresh and fruity sparkling rosé with a delicate touch of sweetness.',
    tastingNotes: {
      color: 'Bright pink with slight cherry reflections. Persistent white foam with fine-grained perlage.',
      nose: 'Fragrant, with enticing aromas of small red berries.',
      taste: 'Clean, fresh and fruity with a delicate touch of sweetness.'
    },
    stats: {
      alcohol: '11.5%',
      temperature: '8-10°C',
      grape: '100% Glera',
      region: 'Veneto',
    },
    pairings: 'Delightful as an aperitif or enjoyed with seafood salads, antipasti, hors d\'oeuvres, shellfish and vegetable-based dishes.',
    image: 'https://uploads.onecompiler.io/43924vdyc/44c8p7bab/Lunneta%20Rose.png',
    scales: { sweetness: 30, body: 40 }
  },
  {
    id: 'lunetta-prosecco',
    name: 'Prosecco',
    brand: 'Lunetta',
    type: WineType.SPARKLING,
    shortDescription: 'Refreshing, dry and harmonious.',
    fullDescription: 'Typically fruity, pleasantly intense and persistent nose.',
    tastingNotes: {
      color: 'Pale straw with greenish reflections, fine bubbles and a creamy white foam.',
      nose: 'Fragrant, with enticing aromas of apple and peach.',
      taste: 'Refreshing, dry and harmonious, with crisp fruit flavors and a clean finish.'
    },
    stats: {
      alcohol: '11.5%',
      temperature: '8-10°C',
      grape: '100% Glera',
      region: 'Veneto',
    },
    pairings: 'Delightful as an aperitif or enjoyed with antipasti, hors d\'oeuvres, sushi, shellfish and seafood.',
    image: 'https://uploads.onecompiler.io/43924vdyc/44c8p7bab/Cavit%2016.png',
    scales: { sweetness: 80, body: 40 }
  },
  {
    id: 'cavit-pinot-grigio',
    name: 'Pinot Grigio',
    brand: 'I Mastri Vernacoli',
    type: WineType.WHITE,
    shortDescription: 'Dry, wonderfully crisp palate with great character.',
    fullDescription: 'Pleasant, intense and persistent nose, distinctly floral.',
    tastingNotes: {
      color: 'Straw yellow colour.',
      nose: 'Pleasant, intense and persistent, distinctly floral.',
      taste: 'Dry, wonderfully crisp palate, with great character and elegance.'
    },
    stats: {
      alcohol: '12.5%',
      temperature: '12-14°C',
      grape: 'Pinot Grigio',
      region: 'Trentino',
    },
    pairings: 'Sea fish, hot and cold starters, slightly spicy dishes with white meat.',
    image: 'https://uploads.onecompiler.io/43924vdyc/44c8p7bab/Cavit%2014.png',
    scales: { sweetness: 90, body: 40 }
  },
  {
    id: 'cavit-chardonnay',
    name: 'Chardonnay',
    brand: 'I Mastri Vernacoli',
    type: WineType.WHITE,
    shortDescription: 'Typically fruity, pleasantly intense.',
    fullDescription: 'Dry, pleasantly crisp on the palate with good structure.',
    tastingNotes: {
      color: 'Straw yellow colour with distinct greenish tinges.',
      nose: 'Typically fruity, pleasantly intense and persistent.',
      taste: 'Dry, pleasantly crisp on the palate, with good structure and personal character. Its elegance and freshness set this apart.'
    },
    stats: {
      alcohol: '12.5%',
      temperature: '10°C',
      grape: 'Chardonnay',
      region: 'Trentino',
    },
    pairings: 'Salmon, mushroom risotto, spaghetti with seafood, saltwater fish en papillote.',
    image: 'https://uploads.onecompiler.io/43924vdyc/44c8p7bab/Cavit%2012.png',
    scales: { sweetness: 85, body: 60 }
  },
  {
    id: 'cavit-sauvignon-blanc',
    name: 'Sauvignon Blanc',
    brand: 'I Mastri Vernacoli',
    type: WineType.WHITE,
    shortDescription: 'Dry, delicate, characteristic plate with luscious acidity.',
    fullDescription: 'Pale golden yellow in colour with a characteristic sage and elderflower nose.',
    tastingNotes: {
      color: 'Pale golden yellow.',
      nose: 'Characteristic sage and elderflower nose.',
      taste: 'Dry, delicate, characteristic plate with a luscious streak of acidity.'
    },
    stats: {
      alcohol: '12.5%',
      temperature: '10°C',
      grape: 'Sauvignon Blanc',
      region: 'Trentino',
    },
    pairings: 'White meats, vegetable dishes, pasta salads, delicately flavoured fish dishes.',
    image: 'https://uploads.onecompiler.io/43924vdyc/44c8p7bab/Cavit%2013.png',
    scales: { sweetness: 95, body: 50 }
  },
  {
    id: 'cavit-cabernet-sauvignon',
    name: 'Cabernet Sauvignon',
    brand: 'I Mastri Vernacoli',
    type: WineType.RED,
    shortDescription: 'Excellent body, medium tannins.',
    fullDescription: 'Deep ruby red colour, berry nose with slight hints of spice.',
    tastingNotes: {
      color: 'Deep ruby red colour.',
      nose: 'Berry nose with slight hints of spice.',
      taste: 'Excellent body, medium tannins, harmonic and well balanced.'
    },
    stats: {
      alcohol: '13.0%',
      temperature: '18°C',
      grape: 'Cabernet Sauvignon',
      region: 'Trentino',
    },
    pairings: 'Grilled meats, high-quality game, mature cheeses.',
    image: 'https://uploads.onecompiler.io/43924vdyc/44c8p7bab/Cavit%2009.png',
    scales: { sweetness: 90, body: 80 }
  },
  {
    id: 'cavit-pinot-nero',
    name: 'Pinot Nero',
    brand: 'I Mastri Vernacoli',
    type: WineType.RED,
    shortDescription: 'Harmonious and refined, pleasantly bitter undertones.',
    fullDescription: 'Extremely pronounced red fruit nose, vaguely almondy and ethereal.',
    tastingNotes: {
      color: 'Ruby red colour with characteristic brick red reflections becoming more marked with age.',
      nose: 'Extremely pronounced red fruit nose, vaguely almondy and ethereal.',
      taste: 'The palate is dry, harmonious and refined, with pleasantly bitter undertones.'
    },
    stats: {
      alcohol: '12.5%',
      temperature: '16°C',
      grape: 'Pinot Nero',
      region: 'Trentino',
    },
    pairings: 'Risotto, roast lamb, guinea fowl casserole, grilled white meats.',
    image: 'https://uploads.onecompiler.io/43924vdyc/44c8p7bab/Cavit%2011.png',
    scales: { sweetness: 85, body: 60 }
  },
  {
    id: 'cavit-merlot',
    name: 'Merlot',
    brand: 'I Mastri Vernacoli',
    type: WineType.RED,
    shortDescription: 'Dry, pleasantly balanced palate, good structure.',
    fullDescription: 'Clean, pleasant, discreetly fruity with scarcely noticeable hints of grass.',
    tastingNotes: {
      color: 'Deep ruby red colour with violet hues when young which develop into brick red with age.',
      nose: 'Clean, pleasant, discreetly fruity with scarcely noticeable hints of grass.',
      taste: 'Dry, pleasantly balanced palate, good structure and elegant body.'
    },
    stats: {
      alcohol: '13.0%',
      temperature: '16-18°C',
      grape: 'Merlot',
      region: 'Trentino',
    },
    pairings: 'Traditional meat dishes of the Italian cuisine, game.',
    image: 'https://uploads.onecompiler.io/43924vdyc/44c8p7bab/Cavit%2010.png',
    scales: { sweetness: 90, body: 75 }
  }
];