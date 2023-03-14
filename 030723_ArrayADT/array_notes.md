# Arrays 1: Array abstract data types

## 1) What is an array?


## 1) Prototype-Based Programming

Javascript is actually an object oriented programming language, but it's paradigm is slightly different than other object oriented languages such as java.

According to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript), javascript is a
[prototype-based programming language](https://en.wikipedia.org/wiki/Prototype-based_programming).
While traditional object oriented programming paradigms use **classes** to act as templates for creating objects, and **extend** those classes in order to enable **inheritence** of object state and behavior, javascript instead contains objects known as **prototypes**. These prototypes are copied to create new objects, and because objects in javascript are **mutable**, i.e. the state that the object keeps track of and the behavior that the object provides through functions can be added to, those objects can then add new functionality and new properties and then be defined as new prototypes to be copied into other objects and augmented.

This is why when we create and use arrays in javascript there are functions already defined and ready for use - they have been defined in the [Array prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

We will go more into depth on prototypes in javascript later on as it will be important to understand 
the totality of how objects work in javascript when we go into other data structure topics, but hopefully for now this will be a good introduction.

## 2) What is an array?

