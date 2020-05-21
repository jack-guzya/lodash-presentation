# Transcript of the presentation

## Introduction

Hey! I'm Evgeniy. I want to tell about the lodash. This is a modern JavaScript utility library delivering modularity, performance & extras.
The original author of the library is John-David Dalton. The initial release took place in 2012. 
Lodash takes most of its ideas from Underscore.js and now receives maintenance from the original contributors to Underscore.js.

## Slide 2 (Installation)

Lodash is easy to install. You can install in the browser or using npm:

In a browser:
```
<script src="lodash.js"></script>
```
Using npm:
```
$ npm i --save lodash
```
```
// Load the full build.
var _ = require('lodash');
```

## Slide 3 (Why Lodash?)

Lodash makes JavaScript easier. Lodash’s modular methods are great for:

* Iterating arrays, objects, & strings;
* Manipulating & testing values;
* Creating composite functions;

## Slide 4 (Lodash and the ES6 standard)

Lodash was especially relevant before the release of the ES6 standard.
For example, some Lodash -> es5/es6 array methods:

* each -> forEach
* map -> map
* reduce -> reduce
* find -> find
* filter -> filter
* contains -> includes
* etc

## Slide 5 (Is it relevant today?)

You ask: why should we use Lodash? After all, there are almost all native JavaScript methods that we can use without Lodash. You will get an answer when I talk about the possibilities of this library.

## Slide 6 (Possibilities)

So, we pass directly to Lodash itself. It can be broken down into several main areas:

* Utilities - for simplifying common programming tasks such as determining type as well as simplifying math operations;
* Function - simplifying binding, decorating, constraining, throttling, currying, and changing the pointer;
* String - conversion functions for performing basic string operations, such as trimming, converting to uppercase, camel case, etc;
* Array - creating, splitting, combining, modifying, and compressing;
* Collection - iterating, sorting, filtering, splitting, and building;
* Object - accessing, extending, merging, defaults, and transforming;
* Seq - chaining, wrapping, filtering, and testing.

Let's consider some of them.

## Slide 7 ("Collection" Methods)

Before that I already said that Lodash and the ES6 methods are very similar. Let's consider in more detail.

## Slide 7.1 (_.forEach (ES6))

For an example of the similarities and differences of native JS and Lodash methods we consider _.each method.

forEach method of native JS iterates over elements of an array and invokes iterate for each element.

```
const arr = [1, 2, 3];

arr.forEach((item) => console.log(item));
// expected: 1, 2, 3
```

We can iterate over the elements of the array, but not keys of an object, which is obvious:

```
const obj = {
  name: 'Jack',
  age: 26,
};

obj.forEach((item) => console.log(item));
// expected: TypeError: obj.forEach is not a function
```

As a result, we expect TypeError.

## Slide 7.2 (_.forEach (Lodash))

_.forEach method of Lodash allows iterate values of objects:
```
const obj = {
  name: 'Jack',
  age: 26,
};

_.forEach(obj, (item) => console.log(item));
// expected: 'Jack', 26
```
We also can iterate keys:
```
_.forEach(obj, (item, key) => console.log(`${key}: ${item}`));
/* expected:  name: 'Jack'
              age: 26 */
```
This method returns collection.

## Slide 7.3 (_.groupBy)

GroupBy method creates an object composed of keys generated from the results of running each element of collection through iterate. For example, we have an array of person. 
```
const persons = [
        { name: 'Jack', isActive: false }, 
        { name: 'Julia', isActive: true }, 
        { name: 'John', isActive: true }
      ];
```
This method allows you to group items by an iterator.
```
const groups = _.groupBy(persons, (person) => person.isActive);

// expected:
{
  false: [ { name: 'Jack', isActive: false } ],
  true: [
    { name: 'Julia', isActive: true },
    { name: 'John', isActive: true }
  ]
}
```
In our example, we grouped into active and inactive persons.

## Slide 8 ("Function" Methods)

Next, we look at two useful functional methods that may be useful.

## Slide 8.1 (_.debounce)

Debounce method creates a debounced function that delays invoking function until after wait milliseconds have elapsed since the last time the debounced function was invoked. Example:
```
const isValidEmail = (email) => (/* some RegExp */).test(email);

input.addEventListener('input', _.debounce(() => isValidEmail(input.value), 2000));
```
We can check the validity of the email during the input process so that we can report an error as early as possible. In this example, we check the email after 2 seconds of stopping text input.

## Slide 8.2 (_.memoize)

Memoize method creates a function that memoizes the result of func. 
```
const add = (a, b) => a + b; // or some difficult function
	
const adder = _.memoize(add);

adder(20, 5); // 25
adder(10, 10); // 20
adder(20, 5); // returns cached result (25)
adder(10, 10); // returns cached result (20)
adder(20, 5); // returns cached result (25)
```
For example you don't want to have to perform that same operation over and over for the same arguments. Memoize effectively lets you cache the results of a function.

## Slide 9 (Other methods)

Finally, I will show you other methods from different areas

## Slide 9.1 (_.random)

Produces a random number between the inclusive lower and upper bounds. If only one argument is provided a number between 0 and the given number is returned. If floating is true, or either lower or upper are floats, a floating-point number is returned instead of an integer.

```
_.random(0, 5);
// an integer between 0 and 5
 
_.random(5);
// also an integer between 0 and 5
 
_.random(5, true);
// a floating-point number between 0 and 5
 
_.random(1.2, 5.2);
// a floating-point number between 1.2 and 5.2
```

## Slide 9.2 (_.times)

A quite useful method. Invokes the iteratee n times, returning an array of the results of each invocation. 
```
_.times(5, () => _.random(0, 5)); // array with random values between 0 and 5
```
For example, we can create an array with random values.

## Slide 9.3 (_.unionBy)

Creates an array of unique values, in order, from all given arrays.
```
_.unionBy([2.1], [1.2, 2.3], Math.floor);
// => [2.1, 1.2]
 
// The `_.property` iteratee shorthand.
_.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
```
It accepts iterate which is invoked for each element of each array to generate the criterion by which uniqueness is computed. 

## Slide 10 (Modules)

The Lodash library has many different methods for solving various problems. You probably won't use all the methods. You can import only the methods you need so as not to overload the project.

```
import times from 'lodash/times';
import random from 'lodash/random';
```

## Slide 11 (Official documentation)

For complete information, you can go to the official website with documentation: https://lodash.com
