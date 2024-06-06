import { sum } from "../models/calculadora";
const testeSum = sum(1, 2);
const expectSum = 3;
test("adds 1 + 2 to equal 3", () => {
  expect(testeSum).toBe(expectSum);
});
