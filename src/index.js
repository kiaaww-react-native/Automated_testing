import { add } from '../initial/src/calculator.js'; 
import { divide } from '../division/src/calculator.js';

const result1 = add(2, 3);
console.log(`2 + 3 = ${result1}`);
const result2 = divide(2, 1);
console.log(`2 / 1 = ${result2}`);

console.log(typeof(NaN));