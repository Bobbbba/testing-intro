const products = require("../../src/data/products");
const { filterByCategory } = require("../../src/catalog");

describe("filterByCategory", () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = filterByCategory(products, "all");
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = filterByCategory(products, undefined);
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const result = filterByCategory(products, "");
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const result = filterByCategory(products, "electronics");
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([1, 2]);
  });

  test("'books' возвращает товары с ID [3, 6]", () => {
    const result = filterByCategory(products, "books");
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([3, 6]);
  });

  test("'home' возвращает товары с ID [4, 5]", () => {
    const result = filterByCategory(products, "home");
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([4, 5]);
  });

  test("'clothes' возвращает пустой массив", () => {
    const result = filterByCategory(products, "clothes");
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([]);
  });

  test("'toys' возвращает пустой массив", () => {
    const result = filterByCategory(products, "toys");
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([]);
  });

  test("'sports' возвращает пустой массив", () => {
    const result = filterByCategory(products, "sports");
    const productIds = result.map((product) => product.id);
    expect(productIds).toEqual([]);
  });
});
