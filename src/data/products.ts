export type Category = "phones" | "laptops";

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  description: string;
}

export const categoryLabels: Record<Category, string> = {
  phones: "Телефони",
  laptops: "Ноутбуки",
};

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 15",
    category: "phones",
    price: 38999,
    description: "Смартфон Apple з дисплеєм 6.1 дюйма, чипом A16 Bionic та камерою 48 Мп.",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    category: "phones",
    price: 34999,
    description: "Флагман Samsung з AMOLED-екраном 120 Гц та функціями Galaxy AI.",
  },
  {
    id: 3,
    name: "Google Pixel 8",
    category: "phones",
    price: 27999,
    description: "Смартфон Google з чипом Tensor G3 та чистим Android.",
  },
  {
    id: 4,
    name: "MacBook Air M3",
    category: "laptops",
    price: 54999,
    description: "Легкий ноутбук Apple з чипом M3, 16 ГБ RAM та автономністю до 18 годин.",
  },
  {
    id: 5,
    name: "Lenovo ThinkPad X1 Carbon",
    category: "laptops",
    price: 62999,
    description: "Бізнес-ноутбук з процесором Intel Core Ultra 7 та дисплеєм 14 дюймів.",
  },
  {
    id: 6,
    name: "ASUS ROG Zephyrus G14",
    category: "laptops",
    price: 71999,
    description: "Ігровий ноутбук з відеокартою RTX 4070 та OLED-екраном 120 Гц.",
  },
];
