const groupProducts = require("./solution");

test("Sprawdza czy obsługuje pusta tablice", ()=> {
    expect(groupProducts([])).toEqual([]);
    expect(groupProducts(null)).toEqual([]);
    expect(groupProducts(undefined)).toEqual([]);
});

const productsInput = [
  { name: "TV", category: "electronics", price: 1200 },
  { name: "Laptop", category: "electronics", price: 3500 },
  { name: "Phone", category: "electronics", price: 2200 },
  { name: "T-Shirt", category: "clothes", price: 50 },
  { name: "Jeans", category: "clothes", price: 120 },
  { name: "Blender", category: "home", price: 200 },
  { name: "Sofa", category: "home", price: 1500 }
];

const productsOutput = [
  {
    category: "electronics",
    count: 3,
    averagePrice: 2300
  },
  {
    category: "home",
    count: 2,
    averagePrice: 850
  },
  {
    category: "clothes",
    count: 2,
    averagePrice: 85
  }
];

test("Test na przykłdowych danych", () => {
  expect(groupProducts(productsInput)).toEqual(productsOutput);
});

const productsInput2 = [
  { name: "TV", category: "electronics", price: 0 },
  { name: "Laptop", category: "electronics", price: 0 },
  { name: "Phone", category: "electronics", price: 2200 },
  { name: "T-Shirt", category: "clothes", price: 50 },
  { name: "Jeans", category: "clothes", price: 120 },
  { name: "Blender", category: "home", price: 200 },
  { name: "Sofa", category: "home", price: 1500 }
];

const productsOutput2 = [
  {
    category: "home",
    count: 2,
    averagePrice: 850
  },
  {
    category: "electronics",
    count: 3,
    averagePrice: 733.33
  },
  {
    category: "clothes",
    count: 2,
    averagePrice: 85
  }
];


test("Test na przykłdowych danych", () => {
  expect(groupProducts(productsInput2)).toEqual(productsOutput2);
});

test("Test na nazwach kategori pisanych z rózny sposob", ()=> {
    const data = [
        { name: "Blender", category: "HoMe", price: 200 },
        { name: "Sofa", category: "HOME", price: 1500 }
    ];
    const output = [
        {
            category: "home",
            count: 2,
            averagePrice: 850
        }
    ]
    expect(groupProducts(data)).toEqual(output);
});