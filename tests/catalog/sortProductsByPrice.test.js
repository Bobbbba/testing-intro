const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const result = sortProductsByPrice(products, 'asc');
    const prices = result.map((p) => p.id);

    expect(prices).toEqual([3, 6, 5, 4, 2, 1]);
  });
 
  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    const result = sortProductsByPrice(products);
    const prices = result.map((p) => p.id);

    expect(prices).toEqual([3, 6, 5, 4, 2, 1]);
  });
  
  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const items = products.filter((p) => [1, 3, 4].includes(p.id))
    
    const result = sortProductsByPrice(items, 'asc');
    const prices = result.map((p) => p.id);

    expect(prices).toEqual([3, 4, 1]);
  });
  
  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const result = sortProductsByPrice(products, 'desc');
    const prices = result.map((p) => p.id);

    expect(prices).toEqual([1, 2, 4, 5, 6, 3]);
  });
  
  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const items = products.filter((p) => [1, 3, 4].includes(p.id))
    
    const result = sortProductsByPrice(items, 'desc');
    const prices = result.map((p) => p.id);

    expect(prices).toEqual([1, 4, 3]);
  });
  
  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const items = products.filter((p) => [5, 2, 6].includes(p.id))
    
    const result = sortProductsByPrice(items, 'desc');
    const prices = result.map((p) => p.id);

    expect(prices).toEqual([2, 5, 6]);
  });
 
  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const subset  = products.filter((p) => [1, 3, 4].includes(p.id))
    
    const result = sortProductsByPrice(subset , 'asc');
    const prices = subset.map((p) => p.id);

    expect(prices).toEqual([1, 3, 4]);
  });
 
  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const subset  = products.filter((p) => [1, 3, 4].includes(p.id))
    
    const result = sortProductsByPrice(subset , 'desc');
    const prices = subset.map((p) => p.id);

    expect(prices).toEqual([1, 3, 4]);
  });

 
  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
    const subset  = products.filter((p) => products.includes(p.id))
    
    const result = sortProductsByPrice(subset , 'asc');
    const prices = subset.map((p) => p.id);

    expect(prices).toEqual(subset);
  });
});
