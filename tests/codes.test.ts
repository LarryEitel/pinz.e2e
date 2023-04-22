import { generateCode } from '$lib/utils/codes';

import { describe, expect, it } from 'vitest';


describe('generateCode', () => {
    it('should generate codes', () => {
        const code1 = generateCode(1); 
        expect(code1).toBe('3');
        const code2 = generateCode(25); 
        expect(code2).toBe('w');
        const code3 = generateCode(28); 
        expect(code3).toBe('z');
        const code4 = generateCode(29); 
        expect(code4).toBe('32');
        const code5 = generateCode(987_654_321_912); 
        expect(code5).toBe('3z9e44g77');
    });
  
  it('should generate unique codes for different numbers', () => {
    const seenCodes = new Set();
    for (let i = 0; i < 1000; i++) {
      const code = generateCode(i);
      expect(seenCodes.has(code)).toBe(false);
      seenCodes.add(code);
    }
  });

  it('should generate consistent codes for the same input', () => {
    for (let i = 0; i < 1000; i++) {
      const code1 = generateCode(i);
      const code2 = generateCode(i);
      expect(code1).toBe(code2);
    }
  });
});


// const vals = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
// console.log(generateCode(101));

// vals.forEach(val => {
//   console.log(generateCode(val));
// })