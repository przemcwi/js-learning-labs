## Zadanie 02 — Analiza użytkowników (map / filter / reduce)

Napisz funkcję analyzeUsers(users), która zwraca statystyki na podstawie tablicy obiektów użytkowników.

**Przykładowe wejście**

```js
const users = [
  { name: "Kuba", age: 25, active: true },
  { name: "Asia", age: 19, active: false },
  { name: "Marek", age: 30, active: true },
  { name: "Ola", age: 22, active: false },
  { name: "Tomek", age: 35, active: true }
];
```

**Wyście**

```js
{
  activeCount: 3,                     // liczba użytkowników z active: true
  averageAge: 26.2,                   // średnia wieku wszystkich użytkowników
  names: ["KUBA","ASIA","MAREK","OLA","TOMEK"] // wszystkie imiona wielkimi literami
}
```