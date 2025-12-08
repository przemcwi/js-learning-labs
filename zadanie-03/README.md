## Zadanie 03 — Grupowanie danych + transformacja + sortowanie

#### Napisz funkcję: groupProducts(products) grupuje produkty po kategorii

Grupuje produkty po kategorii

1. Zlicza liczbę produktów w każdej kategorii
2. Liczy średnią cenę produktów w kategorii
3. Zwraca wszystko posortowane malejąco po średniej cenie
4. Nie modyfikuje wejściowej tablicy

**Input**

```js
const products = [
  { name: "TV", category: "electronics", price: 1200 },
  { name: "Laptop", category: "electronics", price: 3500 },
  { name: "Phone", category: "electronics", price: 2200 },
  { name: "T-Shirt", category: "clothes", price: 50 },
  { name: "Jeans", category: "clothes", price: 120 },
  { name: "Blender", category: "home", price: 200 },
  { name: "Sofa", category: "home", price: 1500 }
];
```

**Output**

```js
[
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
]
```