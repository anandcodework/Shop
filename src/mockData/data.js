import Image1 from '../image/SlideBar.png'
import Image2 from '../image/SlideBar2.png'
import Image3 from '../image/HeadPhone.png'
import watch1 from '../image/SlideBar.png'
import watch2 from '../image/Hero.png'
import watch3 from '../image/SlideBar2.png'
import Image4 from '../image/blue.webp'
import Image5 from '../image/Ram.jpg'
import Image6 from '../image/Laptop.webp'


export const steps = [
  { title: 'Select Processor', icon: 'https://www.pcstudio.in/wp-content/uploads/2021/04/processor-caticon.svg' },
  { title: 'Select Motherboard', icon: 'https://www.pcstudio.in/wp-content/uploads/2021/04/motherboard-caticon.svg' },
  { title: 'Select RAM', icon: 'https://www.pcstudio.in/wp-content/uploads/2021/04/ram-caticon.svg' },
  { title: 'Select Power Supply Unit', icon: 'https://www.pcstudio.in/wp-content/uploads/2021/04/powersupply-caticon.svg' },
  { title: 'Select Storage', icon: 'https://www.pcstudio.in/wp-content/uploads/2021/04/storage-caticon.svg' },
  { title: 'Select Cabinet', icon: 'https://www.pcstudio.in/wp-content/uploads/2021/04/cabinets-caticon.svg' },
  { title: 'Select Graphics Card', icon: 'https://www.pcstudio.in/wp-content/uploads/2021/04/graphiccard-caticon.svg' },
  { title: 'Select Cooler', icon: 'https://www.pcstudio.in/wp-content/uploads/2021/04/cooler-caticon.svg' },
];

export const componentOptions = {
  0: [{ name: 'Intel i5', price: 200 }, { name: 'AMD Ryzen 5', price: 220 }],
  1: [{ name: 'Asus', price: 150 }, { name: 'MSI', price: 180 }],
  2: [{ name: 'Corsair 16GB', price: 80 }, { name: 'G.Skill 16GB', price: 90 }],
  3: [{ name: 'Corsair 650W', price: 60 }, { name: 'EVGA 750W', price: 90 }],
  4: [{ name: 'Samsung 1TB SSD', price: 120 }, { name: 'WD 2TB HDD', price: 80 }],
  5: [{ name: 'NZXT H510', price: 70 }, { name: 'Fractal Design Meshify', price: 90 }],
  6: [{ name: 'NVIDIA RTX 3060', price: 350 }, { name: 'AMD RX 6700 XT', price: 400 }],
  7: [{ name: 'Noctua NH-D15', price: 90 }, { name: 'Corsair H100i', price: 120 }],
};


export const getStarRating = (rating) => {
  const fullStar = '⭐'; // Filled star character
  const starCount = 5;  // Total number of stars

  // Return a string with only the filled stars based on the rating
  return Array.from({ length: Math.min(rating, starCount) }).fill(fullStar).join('');
};

export const NavbarMenu = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'About', link: '/about' },
  { id: 3, title: 'Services', link: '/services' },
  { id: 4, title: 'Contact', link: '/contact' },
  { id: 5, title: 'Build', link: '/build' },
  { id: 6, title: 'Category', link: '/category' },
];

export const FooterData = [
  { id: 1, title: 'FAQs', link: '/' },
  { id: 2, title: 'Privacy Policy ', link: '/' },
  { id: 3, title: 'Shipping Policy', link: '/' },
  { id: 4, title: 'Refund', link: '/' },
  { id: 5, title: 'Terms & Conditions', link: '/' },
];

export const ProfileData = [
  { title: "Profile",
    link: "/profile"
  },
  { title: "Login",
    link: "/login"
  },
] 


export const ProductsData = [
{
  id: 1,
  category: "Laptop",
  image: "https://m.media-amazon.com/images/I/41te6o+zQ7L._SY300_SX300_.jpg",
  info: "Acer Laptop AMD Ryzen 3",
  price: "12999",
  route: "/"
},
{
  id: 2,
  category: "Accessories",
  image: Image2,
  info: "Computer Parts",
  price: " 3999"
},
{
  id: 3,
  category: "Accessories",
  image: Image3,
  info: "Headphone",
  price: "139999"
},
{
  id: 4,
  category: "Laptop",
  image: Image4,
  info: "Desktop ",
  price: "18999"
},
{
  id: 5,
  category: "Computer",
  image: Image5,
  info: "Ram DDR4 3200MHz",
  price: "16999"
},
{
  id: 6,
  category: "Computer",
  image: Image6,
  info: "HP Laptop AMD",
  price: "17999"
},
];

export const slides = [
  { url: "https://picsum.photos/102/102", title: "beach" },
  { url: Image2, title: "boat" },
  { url: Image3, title: "forest" },
  { url: Image4, title: "city" },
  { url: Image5, title: "italy" },
];
export const containerStyles = {
  width: "99%",
  height: "70vh",
  margin: "0 auto",
};

export const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on Student",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Office Worker",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "10% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const ImageList2 = [
  {
    id: 1,
    img: watch1,
    price: "12.99",
    tag: "New",
    title: "Next Gen Blue Image",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: watch2,
    price: "13.99",
    tag: "Sale",
    title: "Best & Smart Yellow Image",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: watch3,
    price: "14.99",
    tag: "Hot",
    title: "Apple Ultra Smart Image 2",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const productData = [
  // Laptops
  { id: 1, name: 'Gaming Laptop', category: 'Laptops', price: 1200, image: 'https://imgs.search.brave.com/f83OcFWKQSGdBNmUlODqDarJoXdRQFAkSKK3TP9H2yg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFZWTVxLWZSWUwu/anBn' },
  { id: 2, name: 'Business Laptop', category: 'Laptops', price: 900, image: 'https://i.pinimg.com/736x/fd/3f/4e/fd3f4eb91742d56c1b1d7c96b50e9174.jpg' },
  { id: 3, name: 'Ultrabook', category: 'Laptops', price: 1300, image: 'https://i.pinimg.com/736x/02/7e/3e/027e3e8233c0c92f1200b8b376a3fc3d.jpg' },
  { id: 4, name: '2-in-1 Laptop', category: 'Laptops', price: 1100, image: 'https://i.pinimg.com/736x/74/d3/f7/74d3f756e749fbb528f5f9c3b973b918.jpg' },
  { id: 5, name: 'Gaming Laptop Pro', category: 'Laptops', price: 1500, image: 'https://i.pinimg.com/736x/3b/1c/d2/3b1cd266e1f1473a7a54c0c05f7f4a60.jpg' },

  // Accessories
  { id: 6, name: 'Wireless Mouse', category: 'Accessories', price: 30, image: 'https://i.pinimg.com/736x/67/aa/7c/67aa7c3ac14b0cd199d8f0930d547d04.jpg' },
  { id: 7, name: 'Mechanical Keyboard', category: 'Accessories', price: 80, image: 'https://i.pinimg.com/736x/4e/2a/c6/4e2ac6cc05e448e1e23c68d45d85b36b.jpg' },
  { id: 8, name: 'Laptop Stand', category: 'Accessories', price: 50, image: 'https://i.pinimg.com/736x/96/30/63/963063d3d1c65d0c0c64d9092aa64681.jpg' },
  { id: 9, name: 'Webcam', category: 'Accessories', price: 70, image: 'https://i.pinimg.com/736x/94/56/72/945672b613d5fcb0c6295d72e3aa4b15.jpg' },
  { id: 10, name: 'Bluetooth Speaker', category: 'Accessories', price: 60, image: 'https://i.pinimg.com/736x/bd/ae/30/bdae30c0180d5dbca3b8007b65c6b547.jpg' },

  // Monitors
  { id: 11, name: '4K Monitor', category: 'Monitors', price: 300, image: 'https://i.pinimg.com/736x/62/6e/4a/626e4a30d02263423eaf5a4b0bfa537d.jpg' },
  { id: 12, name: 'Curved Monitor', category: 'Monitors', price: 400, image: 'https://i.pinimg.com/736x/20/58/ba/2058ba9a44fa29e11328c88f7be7e6fc.jpg' },
  { id: 13, name: 'UltraWide Monitor', category: 'Monitors', price: 500, image: 'https://i.pinimg.com/736x/d6/0c/5b/d60c5bafdb3d26bc35c4b09f2e21e76f.jpg' },
  { id: 14, name: 'Gaming Monitor', category: 'Monitors', price: 350, image: 'https://i.pinimg.com/736x/35/b6/f3/35b6f305f74354e1dcd41dbd3d39b5db.jpg' },
  { id: 15, name: 'Professional Monitor', category: 'Monitors', price: 600, image: 'https://i.pinimg.com/736x/86/5b/4f/865b4fae8fd5f23abddf100fc9ed0fa3.jpg' },

  // Components
  { id: 16, name: 'Graphics Card', category: 'Components', price: 600, image: 'https://i.pinimg.com/736x/8f/c5/04/8fc504bb78be62eb458c6c4d2674e4b5.jpg' },
  { id: 17, name: 'SSD Drive', category: 'Components', price: 150, image: 'https://i.pinimg.com/736x/1b/7e/d3/1b7ed301aa6c530cf4bca6dc0620e0b0.jpg' },
  { id: 18, name: 'Motherboard', category: 'Components', price: 250, image: 'https://i.pinimg.com/736x/a6/5b/c0/a65bc0e35a1cb008c2ff225b4f178c87.jpg' },
  { id: 19, name: 'RAM Module', category: 'Components', price: 80, image: 'https://i.pinimg.com/736x/02/3d/a4/023da4f1636e4b0c865ab2b88b47b98f.jpg' },
  { id: 20, name: 'Power Supply', category: 'Components', price: 100, image: 'https://i.pinimg.com/736x/c6/3b/06/c63b067bc8e52796ec9a9a75b87e7c93.jpg' },

  // Additional Products
  // Laptops
  { id: 21, name: 'MacBook Air', category: 'Laptops', price: 1000, image: 'https://i.pinimg.com/736x/03/62/a1/0362a12db7e7e8cb8c8d197ae10a8ebf.jpg' },
  { id: 22, name: 'Surface Laptop', category: 'Laptops', price: 1200, image: 'https://i.pinimg.com/736x/16/ab/98/16ab98c9f03aa69aaef07e3e8abf6bc0.jpg' },
  { id: 23, name: 'Chromebook', category: 'Laptops', price: 400, image: 'https://i.pinimg.com/736x/d1/14/c7/d114c7abda2c6e2c6de18ec56cb567ff.jpg' },
  { id: 24, name: 'Dell XPS', category: 'Laptops', price: 1300, image: 'https://i.pinimg.com/736x/34/59/6b/34596b12308a4a35b63e6e8b12da1ec5.jpg' },
  { id: 25, name: 'HP Spectre', category: 'Laptops', price: 1400, image: 'https://i.pinimg.com/736x/e8/49/34/e84934a5c2d9cb9cf95f299563c7f58a.jpg' },

  // Accessories
  { id: 26, name: 'USB Hub', category: 'Accessories', price: 25, image: 'https://i.pinimg.com/736x/15/ff/25/15ff251eae45069ab02b4ef61a8a4b65.jpg' },
  { id: 27, name: 'Wireless Charger', category: 'Accessories', price: 30, image: 'https://i.pinimg.com/736x/25/2c/9f/252c9f899f9f34ec158d6e43e42f65d2.jpg' },
  { id: 28, name: 'Cooling Pad', category: 'Accessories', price: 40, image: 'https://i.pinimg.com/736x/73/bc/d6/73bcd6d2165b679640d32d3007c6c0f4.jpg' },
  { id: 29, name: 'Mouse Pad', category: 'Accessories', price: 15, image: 'https://i.pinimg.com/736x/c7/8f/a3/c78fa3b0c034a40c080e4c66f1be5f30.jpg' },
  { id: 30, name: 'HDMI Cable', category: 'Accessories', price: 20, image: 'https://i.pinimg.com/736x/a8/44/4a/a8444a0b152c7ec2f74cae5b11f7e6b9.jpg' },

  // Monitors
  { id: 31, name: '27-inch Monitor', category: 'Monitors', price: 250, image: 'https://i.pinimg.com/736x/b0/5a/d4/b05ad404ad65f3e5a868d4f8d6850773.jpg' },
  { id: 32, name: '1080p Monitor', category: 'Monitors', price: 200, image: 'https://i.pinimg.com/736x/5c/b5/cf/5cb5cf2d3a2731f8b0de6a0e4bb8a571.jpg' },
  { id: 33, name: '144Hz Monitor', category: 'Monitors', price: 300, image: 'https://i.pinimg.com/736x/4d/6a/82/4d6a82ed2df4bc00b51671d0c54b57b9.jpg' },
  { id: 34, name: 'IPS Monitor', category: 'Monitors', price: 350, image: 'https://i.pinimg.com/736x/ee/70/01/ee7001f0fbd2d6e745bb17b9a8994c75.jpg' },
  { id: 35, name: 'Widescreen Monitor', category: 'Monitors', price: 400, image: 'https://i.pinimg.com/736x/d6/64/35/d66435e9c0733f5413c867b8e1e5cf01.jpg' },

  // Components
  { id: 36, name: 'CPU Cooler', category: 'Components', price: 70, image: 'https://i.pinimg.com/736x/7f/d2/b8/7fd2b8e2e35021d5e9b053c08e4cfc6f.jpg' },
  { id: 37, name: 'Case Fans', category: 'Components', price: 40, image: 'https://i.pinimg.com/736x/5f/a3/1b/5fa31bcf4d86da96debb78875f195cf8.jpg' },
  { id: 38, name: 'Network Card', category: 'Components', price: 60, image: 'https://i.pinimg.com/736x/4c/a2/6a/4ca26ae3f5bfb0d789d6656f2b1e93bb.jpg' },
  { id: 39, name: 'External GPU Enclosure', category: 'Components', price: 250, image: 'https://i.pinimg.com/736x/c3/0a/13/c30a139a1cb3a53f8a0e3e2a163a2eb7.jpg' },
  { id: 40, name: 'Sound Card', category: 'Components', price: 90, image: 'https://i.pinimg.com/736x/1c/1a/c2/1c1ac2532d72e8fa839ca276ed4d3533.jpg' },

  // Repeat categories with more products
  // Laptops
  { id: 41, name: 'HP Envy', category: 'Laptops', price: 1100, image: 'https://i.pinimg.com/736x/7b/d2/e2/7bd2e277ae29e2e16f6a2b5f194d6b47.jpg' },
  { id: 42, name: 'Lenovo ThinkPad', category: 'Laptops', price: 950, image: 'https://i.pinimg.com/736x/ef/b1/62/efb1622d1f02182d88cb2ed07d5f5d05.jpg' },
  { id: 43, name: 'Asus ZenBook', category: 'Laptops', price: 1300, image: 'https://i.pinimg.com/736x/3e/07/7b/3e077b7dbad4b56908fba06ac44c5fbd.jpg' },
  { id: 44, name: 'Acer Aspire', category: 'Laptops', price: 800, image: 'https://i.pinimg.com/736x/4e/15/cb/4e15cb6796e78de82bb1dcfdf672afe3.jpg' },
  { id: 45, name: 'MSI Stealth', category: 'Laptops', price: 1400, image: 'https://i.pinimg.com/736x/b1/5b/d4/b15bd484f885ed098fd200c7f8ec96f7.jpg' },

  // Accessories
  { id: 46, name: 'External Hard Drive', category: 'Accessories', price: 120, image: 'https://i.pinimg.com/736x/79/7a/f9/797af9a19cd48514d8997f51e34e905c.jpg' },
  { id: 47, name: 'Docking Station', category: 'Accessories', price: 130, image: 'https://i.pinimg.com/736x/c5/4a/ab/c54aab6486ec2bcd83e6e7855f5d03a8.jpg' },
  { id: 48, name: 'Smartwatch', category: 'Accessories', price: 200, image: 'https://i.pinimg.com/736x/b9/9e/8e/b99e8eaf18eb44f3b2a2fc764ad042c1.jpg' },
  { id: 49, name: 'Power Bank', category: 'Accessories', price: 40, image: 'https://i.pinimg.com/736x/3b/d6/9b/3bd69b490a6f2c9ff8c25783fbe1e13a.jpg' },
  { id: 50, name: 'Cable Management', category: 'Accessories', price: 25, image: 'https://i.pinimg.com/736x/df/4b/d4/df4bd491a49d7c48645fdf96a6315b24.jpg' },
];

