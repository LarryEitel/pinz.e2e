export function generateCode(num) {
    // let baseChars = "23456789abcdefghjkmnpqrstwxyzABCDEFGHJKMNPQRSTWXYZ"; // remove "#" from this string
    let baseChars = "23456789abcdefghjkmnpqrstwxyz"; // remove "#" from this string
    let base = baseChars.length;
    let code = "";
  
    while (num > 0) {
      let remainder = num % base;
      num = Math.floor(num / base);
      code = baseChars[remainder] + code;
      // console.log('code: ', code, num)
    }
  
    return code;
  }
