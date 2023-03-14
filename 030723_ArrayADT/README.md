# The Array Abstract Data Type

## What is an Array?

An **Array** is a collection of elements that can be accessed randomly (i.e. in any order) by their corresponding index value.

## Important characteristics of an array

1. When an array is created, it will contain **n** elements, where 1 <= n < infinity, and n is an element of the set of all positive integers
2. The **length** of an array is equal to the number of elements in the array
3. An array must support at least 3 operations:
    * **new(n)** which returns a new array A of length n populated with elements 
    * **set(A,i,v)** which sets the element v at index i and returns array A 
    * **get(A,i)** which returns the element mapped to index i
4. An index - element mapping in an array will exist indefinitely; an index - element mapping can only be changed by using the set() method. This can be defined in the following two axioms:
    * get(set(A,i,v),i) = v (If an element is set at index i using the set method and no other set method at index i occurs, then the get method at index i will return the same element)
    * get(set(A,j,v),i) = get(A,i) where i != j (a set() method using index j does not affect the index - element mapping at index i so long as i and j are not the same index)

## Sortable Arrays

One thing to notice from this list of characteristics is that there is no definition of what an array "element" can or can't be. This also isn't touched upon in the formal array
ADT definition [from the National Institute of Standards and Technology](https://xlinux.nist.gov/dads/HTML/array.html)

In order for an array to be **sortable**, the elements of set E, which we will define as the set of elements permitted for any single array A, must be defined as follows:

1. for every **e** and **g** that are elements of E, **e** and **g** must have an attribute **A** such that **A-sub-e** and **A-sub-g** are acceptable operands for comparison operations (i.e. they can be compared to each other for less than, greater than, or equality)
2. for every **e** that is an element of E, **e** must be **immutable**, meaning its attributes and values cannot change.

Axiom 1 allows us to compare any number of elements to each other and determine an order based on their shared attribute and it's respective value. And Axiom 2 restricts the elements from changing so that a determined order of elements will remain relevant without unknowingly being undone by a change in an elements attribute value, thus rendering the order potentially inaccurate and therefore useless.

Putting these additional characteristics together gives us an array whose elements can be **sorted**, or put in a specific order based on a comparison of attribute values between the elements in the array.

## What's So Great About Sorting, Anyway?

We'll have to talk about this next time!

