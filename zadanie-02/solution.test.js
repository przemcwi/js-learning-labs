const analyzeUsers = require("./solution");

const users = [
  { name: "Kuba", age: 25, active: true },
  { name: "Asia", age: 19, active: false },
  { name: "Marek", age: 30, active: true },
  { name: "Ola", age: 22, active: false },
  { name: "Tomek", age: 35, active: true }
]

const usersRes = {
  activeCount: 3,
  averageAge: 26.2,
  names: ['KUBA', 'ASIA', 'MAREK', 'OLA', 'TOMEK']
}

test("obsługuje pustą tablicę, null, undefined", () => {
  expect(analyzeUsers([])).toEqual({ activeCount: 0, averageAge: 0, names: [] });
  expect(analyzeUsers(null)).toEqual({ activeCount: 0, averageAge: 0, names: [] });
  expect(analyzeUsers(undefined)).toEqual({ activeCount: 0, averageAge: 0, names: [] });
});

test('Test na przykłdowych danych', ()=> {
    expect(analyzeUsers(users)).toEqual(usersRes);
});


