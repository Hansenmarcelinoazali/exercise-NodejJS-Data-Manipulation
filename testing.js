const target = { a: [1], b: [2] };
const source = { a: [2], c: [5] };

const returnedTarget = Object.assign(target, source);

for(var date in source)
target[date] = [...target[date] || [],...source[date]]

console.log(target);