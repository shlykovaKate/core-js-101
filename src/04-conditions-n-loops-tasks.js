/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  let result = '';
  if (num % 3 === 0) result += 'Fizz';
  if (num % 5 === 0) result += 'Buzz';
  return result || num;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i += 1) {
    factorial *= i;
  }
  return factorial;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i += 1) {
    sum += i;
  }
  return sum;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  return a + b > c && b + c > a && c + a > b;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  function ii(a1, a2, b1, b2) {
    return a1 <= b2 && b1 <= a2;
  }
  return ii(rect1.left, rect1.left + rect1.width, rect2.left, rect2.left + rect2.width)
         && ii(rect1.top, rect1.height + rect1.top, rect2.top, rect2.height + rect2.top);
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  return (point.x - circle.center.x) ** 2 + (point.y - circle.center.y) ** 2 < circle.radius ** 2;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const set = new Set();
  const setOfRepeatedChar = new Set();
  const arr = str.split('');
  arr.forEach((item) => {
    if (set.has(item) || setOfRepeatedChar.has(item)) {
      set.delete(item);
      setOfRepeatedChar.add(item);
    } else {
      set.add(item);
    }
  });
  return set.size === 0 ? null : Array.from(set)[0];
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  return `${isStartIncluded ? '[' : '('}${a < b ? `${a}, ${b}` : `${b}, ${a}`}${isEndIncluded ? ']' : ')'}`;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return String(num).split('').reverse().join('');
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  let sum = 0;
  const ccnString = String(ccn);
  const ccnLength = ccnString.length;
  const parity = ccnLength % 2;

  for (let i = 1; i <= ccnLength - 1; i += 1) {
    if (i % 2 === parity) {
      sum += Number(ccnString[i - 1]);
    } else if (Number(ccnString[i - 1]) > 4) {
      sum += 2 * Number(ccnString[i - 1]) - 9;
    } else {
      sum += 2 * Number(ccnString[i - 1]);
    }
  }

  return Number(ccnString[ccnLength - 1]) === ((10 - (sum % 10)) % 10);
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  let sum;
  const getSum = (number) => {
    const arr = String(number).split('');
    sum = arr.reduce((prev, item) => prev + Number(item), 0);
  };
  getSum(num);
  if (sum > 9) {
    getSum(sum);
  }
  return sum;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const brConfig = [['(', ')'], ['[', ']'], ['{', '}'], ['<', '>']];
  const arrStrElements = str.split('');
  const copyArrStrElements = str.split('');
  let check = false;

  if (arrStrElements.length) {
    arrStrElements.reduce((prev) => {
      let start = false;

      if (prev && prev.length) {
        for (let accI = 0; accI < prev.length; accI += 1) {
          for (let brConfigI = 0; brConfigI < brConfig.length; brConfigI += 1) {
            for (let bracketsI = 0; bracketsI < brConfig[brConfigI].length; bracketsI += 1) {
              if (prev[accI] === brConfig[brConfigI][bracketsI]
                && bracketsI === 1
                && prev[accI - 1] === brConfig[brConfigI][0]) {
                prev.splice(accI - 1, 2);

                if (prev.length === 0) {
                  check = true;
                } else {
                  start = true;
                }
                break;
              }
            }

            if (start || check) break;
          }

          if (start || check) break;
        }
      }

      return prev;
    }, copyArrStrElements);
  } else {
    check = true;
  }

  return check;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  return num.toString(n);
}


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  const set = new Set();
  let result;

  const getPath = (arrPath) => {
    const newPathes = arrPath.map((item) => {
      const arr = item.split('/');
      arr.pop();
      set.add(arr.length > 0 ? arr.join('/').concat('/') : arr.join('/'));
      return arr.join('/');
    });

    if (set.size > 1) {
      if (set.has('/')) {
        set.clear();
        result = '/';
        return;
      }
      if (set.has('')) {
        set.clear();
        result = '';
        return;
      }
      set.clear();
      getPath(newPathes);
    }

    if (set.size === 1) {
      [result] = Array.from(set);
      set.clear();
    }
  };

  getPath(pathes);
  return result;
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const c = [];
  c.length = m1.length;

  for (let i = 0; i < m1.length; i += 1) {
    c[i] = [];
    c[i].length = m2[0].length;
    c[i].fill(0);
  }

  for (let d = 0; d < m2[0].length; d += 1) {
    for (let i = 0; i < m1.length; i += 1) {
      for (let j = 0; j < m2.length; j += 1) {
        c[d][i] += (m1[d][j] * m2[j][i]);
      }
    }
  }

  return c;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  const ii = (i, j, value) => {
    const set = new Set(value);
    for (let a = 0; a < 3; a += 1) {
      if (i && !j) {
        set.add(position[i - 1][a]);
      } else if (!i && j) {
        set.add(position[a][j - 1]);
      } else if (i === 0 && j === 0) {
        set.add(position[a][a]);
      } else {
        set.add(position[a][2 - a]);
      }
    }
    if (set.size === 1) return Array.from(set)[0];
    return undefined;
  };

  const arr = ['X', '0'];
  let winner;
  for (let b = 0; b < arr.length; b += 1) {
    for (let d = 1; d < 4; d += 1) {
      const win = ii(d, 0, arr[b]);

      if (win === 'X' || win === '0') {
        winner = win;
        break;
      }
    }
    if (winner) { break; }

    for (let d = 1; d < 4; d += 1) {
      const win = ii(0, d, arr[b]);

      if (win === 'X' || win === '0') {
        winner = win;
        break;
      }
    }
    if (winner) { break; }

    let win = ii(0, 0, arr[b]);
    if (win === 'X' || win === '0') {
      winner = win;
    }
    if (winner) { break; }

    win = ii(5, 5, arr[b]);
    if (win === 'X' || win === '0') {
      winner = win;
    }
    if (winner) { break; }
  }
  return winner;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
