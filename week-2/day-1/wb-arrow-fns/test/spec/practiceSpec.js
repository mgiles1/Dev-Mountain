// Helper function to count the number of properties on an object.
const countObjectProperties = (obj) => Object.keys(obj).length;

describe('Problem 1 - objectLooper', () => {
  const original = { ...number };
  it('original object should still exist', () => {
    expect(number.age).toBe(0);
    expect(original.age).toBe(30);
    expect(original.score).toBe(100);
    expect(original.length).toBe(12);
    expect(original.year).toBe(2016);
  });
  objectLooper(number);
  it('should change all values to 0', () => {
    expect(number.age).toBe(0);
    expect(number.score).toBe(0);
    expect(number.length).toBe(0);
    expect(number.year).toBe(0);
  });
});

describe('Problem 2 - stateLooper', () => {
  const original = { ...state };
  it('original object should exist', () => {
    expect(original.utah).toBe(2942902);
    expect(original.texas).toBe(26956958);
    expect(original.california).toBe(38802500);
    expect(state.california).toBe(0);
  });
  stateLooper(state);
  it('should change state populations greater than 3,000,000 to 0', () => {
    expect(state.utah).toBe(2942902);
    expect(state.texas).toBe(0);
    expect(state.california).toBe(0);
  });
});

describe('Problem 3 - cleanUser', () => {
  const obj = {
    one: false,
    two: true,
    three: 0,
    four: 'happy',
  };
  const returned = cleanUser(obj);
  it('function exists and returns an obj', () => {
    expect(returned).toBeDefined();
    expect(typeof returned).toBe('object');
  });
  cleanUser(obj);
  it('should remove all falsy key-value pairs', () => {
    expect(countObjectProperties(obj)).toBe(2);
  });
});

describe('Problem 4 - maxedOut', () => {
  const obj = {
    one: false,
    two: true,
    three: 0,
    four: 'happy',
  };
  const returned = maxedOut(obj);
  it('function exists and returns an obj', () => {
    expect(returned).toBeDefined();
    expect(typeof returned).toBe('object');
  });
  maxedOut(obj);
  it(`should change all key-value pairs to be "max"`, () => {
    expect(obj.one).toBe('max');
    expect(obj.two).toBe('max');
    expect(obj.three).toBe('max');
    expect(obj.four).toBe('max');
    expect(countObjectProperties(obj)).toBe(4);
  });
});

describe('Problem 5 - animalCount', () => {
  it('newly destructured variables should exist and have the correct values', () => {
    expect(cats).toBeDefined();
    expect(cats).toBe(2);
    expect(dogs).toBeDefined();
    expect(dogs).toBe(5);
    expect(mice).toBeDefined();
    expect(mice).toBe(0);
  });
});

describe('Problem 6 - object literals', () => {
  it('newly destructured variables should exist and have the correct values', () => {
    expect(students).toBeDefined();
    expect(students).toBe(24);
    expect(mentors).toBeDefined();
    expect(mentors).toBe(3);
    expect(instructors).toBeDefined();
    expect(instructors).toBe(5);
  });
});

describe('Problem 7 - languages', () => {
  it('languages object should exist', () => {
    expect(languages).toBeDefined();
  });
  it('languages object should have the correct properties with corresponding boolean values', () => {
    expect(languages.english).toBeDefined();
    expect(typeof languages.english).toBe('boolean');
    expect(languages.spanish).toBeDefined();
    expect(typeof languages.spanish).toBe('boolean');
    expect(languages.french).toBeDefined();
    expect(typeof languages.french).toBe('boolean');
  });
  it('newly destructured variables should exist and have the correct values', () => {
    expect(english).toBeDefined();
    expect(typeof english).toBe('boolean');
    expect(spanish).toBeDefined();
    expect(typeof spanish).toBe('boolean');
    expect(french).toBeDefined();
    expect(typeof french).toBe('boolean');
  });
});

describe('Problem 8 - subtraction', () => {
  it('subtraction function should exist', () => {
    expect(subtraction).toBeDefined();
    expect(typeof subtraction).toBe('function');
  });
  it('should use destructured variables to return the result of subtracting num2 from num1', () => {
    const example = { num1: 12, num2: 6, num3: 2 };
    const exampleTwo = { num1: 12, num2: 1, num3: 15 };
    expect(subtraction(example)).toBe(6);
    expect(subtraction(exampleTwo)).toBe(11);
  });
});

describe('Problem 9 - zooAnimals', () => {
  it('zooAnimals function should exist', () => {
    expect(zooAnimals).toBeDefined();
    expect(typeof zooAnimals).toBe('function');
  });
  it('should use destructured variables to return the sum of animal counts', () => {
    const example = { lion: 12, tiger: 6, bear: 2 };
    const exampleTwo = { lion: 12, tiger: 1, bear: 15 };
    expect(zooAnimals(example)).toBe(20);
    expect(zooAnimals(exampleTwo)).toBe(28);
  });
});

describe('Problem 10 - greeting', () => {
  it('greeting function should exist', () => {
    expect(greeting).toBeDefined();
    expect(typeof greeting).toBe('function');
  });
  it('should use destructured variables to return the correct string', () => {
    const example = { title: 'Dr.', name: 'Watson' };
    const exampleTwo = { title: 'Mr.', name: 'Holmes' };
    expect(greeting(example)).toBe('Hello, Dr. Watson!');
    expect(greeting(exampleTwo)).toBe('Hello, Mr. Holmes!');
  });
});

describe('Problem 11 - truthyFalsy', () => {
  it('truthyFalsy function should exist', () => {
    expect(truthyFalsy).toBeDefined();
    expect(typeof truthyFalsy).toBe('function');
  });
  it('should use destructured variables to return the correct value', () => {
    const example = { number: 13, string: '' };
    const exampleTwo = { number: 0, string: 'Holmes' };
    expect(truthyFalsy(example)).toBe(13);
    expect(truthyFalsy(exampleTwo)).toBe('Holmes');
  });
});

describe('Problem 12 - isGreaterThanTwenty', () => {
  it('isGreaterThanTwenty function should exist', () => {
    expect(isGreaterThanTwenty).toBeDefined();
    expect(typeof isGreaterThanTwenty).toBe('function');
  });
  it('should return the correct boolean value', () => {
    expect(isGreaterThanTwenty(21)).toBe(true);
    expect(isGreaterThanTwenty(20)).toBe(false);
  });
});

describe('Problem 13 - seven', () => {
  it('function should exist', () => {
    expect(seven).toBeDefined();
    expect(typeof seven).toBe('function');
  });
  it('should return the number 7', () => {
    expect(seven()).toBe(7);
    expect(typeof seven()).toBe('number');
  });
});

describe('Problem 14 - rewrite functions', () => {
  it('add function should exist and return the correct value', () => {
    expect(add).toBeDefined();
    expect(typeof add).toBe('function');
    expect(add(1, 2)).toBe(3);
  });
  it('subtract function should exist and return the correct value', () => {
    expect(subtract).toBeDefined();
    expect(typeof subtract).toBe('function');
    expect(subtract(2, 1)).toBe(1);
  });
  it('double function should exist and return the correct value', () => {
    expect(double).toBeDefined();
    expect(typeof double).toBe('function');
    expect(double(2)).toBe(4);
  });
});

describe('Problem 15 - multiply', () => {
  it('function should exist and return the correct value', () => {
    expect(multiply).toBeDefined();
    expect(typeof multiply).toBe('function');
    expect(multiply(1, 2)).toBe(2);
  });
});

describe('Problem 16 - concatenate', () => {
  it('function should exist and return the correct value', () => {
    expect(concatenate).toBeDefined();
    expect(typeof concatenate).toBe('function');
    expect(concatenate('hi ', 'Bob')).toBe('hi Bob');
  });
});

describe('Problem 17 - gemInfo', () => {
  it('function should exist', () => {
    expect(gemInfo).toBeDefined();
    expect(typeof gemInfo).toBe('function');
  });
  it('should return an object with gemType, gemSize and gemWeight properties', () => {
    const result = gemInfo('diamond', 12, 14);
    expect(result.gemType).toBe('diamond');
    expect(result.gemSize).toBe(12);
    expect(result.gemWeight).toBe(14);
  });
});

describe('Problem 18 - identifier', () => {
  it('function should exist', () => {
    expect(identifier).toBeDefined();
    expect(typeof identifier).toBe('function');
  });
  it('should return the correct object associated with the programmer from the jobs array', () => {
    const result = identifier(jobs);
    expect(result.programmer).toBe('Steve');
    const jobs2 = [{ programmer: 'James' }, { employee: 'Steve' }, { designer: 'Alicia' }];
    const result2 = identifier(jobs2);
    expect(result2.programmer).toBe('James');
  });
});

describe('Problem 19 - evens', () => {
  it('function should exist', () => {
    expect(evens).toBeDefined();
    expect(typeof evens).toBe('function');
  });
  it('should return an array of just the even numbers', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const result = evens(array);
    expect(result.length).toBe(3);
    expect(result.includes(2)).toBe(true);
    expect(result.includes(4)).toBe(true);
    expect(result.includes(6)).toBe(true);
    expect(array.length).toBe(6);
  });
});

describe('Problem 20 - startWithLetterA', () => {
  it('function should exist', () => {
    expect(startWithLetterA).toBeDefined();
    expect(typeof startWithLetterA).toBe('function');
  });
  it('should return an array of all words starting with the letter a', () => {
    const array = ['Apple', 'acorn', 'banana', 'peach'];
    const result = startWithLetterA(array);
    expect(result.length).toBe(2);
    expect(result.includes('Apple')).toBe(true);
    expect(result.includes('acorn')).toBe(true);
    expect(array.length).toBe(4);
  });
});

describe('Problem 21 - formalGreeting', () => {
  const names = ['Indiana', 'Vader', 'Ursula'];
  it(`should return an array with "Hello, " before each name in the original array`, () => {
    const result = formalGreeting(names);
    expect(result.length).toBe(3);
    expect(result[0]).toBe('Hello, Indiana');
    expect(result[1]).toBe('Hello, Vader');
    expect(result[2]).toBe('Hello, Ursula');
  });
});

describe('Problem 22 - productOfArray', () => {
  const numbers = [1, 2, 3, 4, 5];
  const numbers2 = [2, 8, 10];
  const randNum1 = Math.floor(Math.random() * 10) + 1;
  const randNum2 = Math.floor(Math.random() * 10) + 1;
  const randNum3 = Math.floor(Math.random() * 10) + 1;
  it(`should return the correct product outcome`, () => {
    expect(productOfArray(numbers)).toBe(120);
    expect(productOfArray(numbers2)).toBe(160);
    expect(productOfArray([randNum1, randNum2, randNum3])).toBe(randNum1 * randNum2 * randNum3);
  });
});
