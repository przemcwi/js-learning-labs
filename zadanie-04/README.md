## Zadanie 04 — Mini-Lodash (utilities)

### Napisz moduł utils.js eksportujący następujące funkcje:

1. chunk(array, size)
2. uniq(array)
3. groupBy(array, fnOrKey)
4. debounce(fn, wait)
5. flatten(array, depth = 1)
6. deepClone(value)

1. chunk(array, size)

Dzieli array na podtablice długości size.

- Jeśli size <= 0 → wyrzuć Error.
- Jeśli array pusta → [].
- Przykład:
`chunk([1,2,3,4,5], 2) -> [[1,2],[3,4],[5]]`

2. uniq(array)

Zwraca nową tablicę bez duplikatów, zachowując kolejność pierwszych wystąpień.
- Porównanie przez ===
- Przykład:
`uniq([1,2,2,3,1]) -> [1,2,3]`

3. groupBy(array, fnOrKey)

Grupuje elementy wg klucza: jeśli fnOrKey jest funkcją — użyj fn(item) jako klucza; jeśli jest stringiem — użyj item[fnOrKey].

- Zwróć obiekt: `{ key1: [items], key2: [items] }`.
- Przykład:
`groupBy([{age:20},{age:30}], 'age') -> { '20': [{...}], '30': [{...}] }`
`groupBy([1,2,3,4], n => n % 2 === 0 ? 'even' : 'odd') -> { odd:[1,3], even:[2,4] }`

4. debounce(fn, wait)

Zwraca funkcję debounced: opóźnia wykonanie fn o wait ms od ostatniego wywołania.

- Zwrócona funkcja powinna zachować kontekst (this) i przekazywać argumenty do fn.
- Dodaj metodę `.cancel()` na zwróconej funkcji, która anuluje oczekujące wywołanie.
- Przykład:
`const d = debounce(() => console.log('x'), 100); d(); d();` → fn wykona się tylko raz, ~100ms po ostatnim wywołaniu.

**Uwaga: testy dla debounce możesz robić z użyciem timerów Jest `(jest.useFakeTimers())`.**

5. flatten(array, depth = 1)

Spłaszcza zagnieżdżoną tablicę do podanej głębokości.

- Jeśli depth = Infinity → spłaszcza w nieskończoność.
- Przykłady:
`flatten([1,[2,[3]]], 1) -> [1,2,[3]]`
`flatten([1,[2,[3]]], Infinity) -> [1,2,3]`

6. deepClone(value)

Tworzy głęboką kopię wartości: obsługuje obiekty, tablice, Date, RegExp, typy prymitywne.

- Powinien poradzić sobie z cyklicznymi referencjami (zachowując strukturę, nie wpadając w rekursję nieskończoną).
- Nie musisz kopiować funkcji (może pozostać referencją).
- Przykład:
`const a = { x:1 }; a.self = a; deepClone(a).self !== a i deepClone(a).self === deepClone(a)` (cykl zachowany).