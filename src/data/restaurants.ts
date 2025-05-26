import { Restaurant } from "../types/restaurent";

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Coastal Kitchen',
    address: '123 Ocean Drive, Seaside, CA 90210',
    contactNumber: '(555) 123-4567',
    mainImage: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
    images: [
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
      'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg',
      'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
      'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg'
    ],
    rating: 4.7,
    cuisine: 'Seafood',
    priceRange: '$$'
  },
  {
    id: '2',
    name: 'Urban Spice',
    address: '456 Main Street, Downtown, NY 10001',
    contactNumber: '(555) 987-6543',
    mainImage: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg',
    images: [
      'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg',
      'https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg',
      'https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg',
      'https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg'
    ],
    rating: 4.5,
    cuisine: 'Indian',
    priceRange: '$$$'
  },
  {
    id: '3',
    name: 'Bella Italia',
    address: '789 Vineyard Ave, Little Italy, IL 60007',
    contactNumber: '(555) 234-5678',
    mainImage: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg',
    images: [
      'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg',
      'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg',
      'https://images.pexels.com/photos/1256875/pexels-photo-1256875.jpeg',
      'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg'
    ],
    rating: 4.8,
    cuisine: 'Italian',
    priceRange: '$$'
  },
  {
    id: '4',
    name: 'Sushi Master',
    address: '101 Cherry Blossom Rd, Japantown, CA 94115',
    contactNumber: '(555) 876-5432',
    mainImage: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg',
    images: [
      'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg',
      'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg',
      'https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg',
      'https://images.pexels.com/photos/628776/pexels-photo-628776.jpeg'
    ],
    rating: 4.9,
    cuisine: 'Japanese',
    priceRange: '$$$'
  },
  {
    id: '5',
    name: 'The Green Table',
    address: '202 Harvest Lane, Garden District, OR 97005',
    contactNumber: '(555) 345-6789',
    mainImage: 'https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg',
    images: [
      'https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg',
      'https://images.pexels.com/photos/3669638/pexels-photo-3669638.jpeg',
      'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',
      'https://images.pexels.com/photos/3184188/pexels-photo-3184188.jpeg'
    ],
    rating: 4.6,
    cuisine: 'Vegetarian',
    priceRange: '$$'
  },
  {
    id: '6',
    name: 'Taco Fiesta',
    address: '303 Sunny Road, Westside, TX 78701',
    contactNumber: '(555) 456-7890',
    mainImage: 'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg',
    images: [
      'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg',
      'https://images.pexels.com/photos/2092897/pexels-photo-2092897.jpeg',
      'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg',
      'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg'
    ],
    rating: 4.3,
    cuisine: 'Mexican',
    priceRange: '$'
  }
];