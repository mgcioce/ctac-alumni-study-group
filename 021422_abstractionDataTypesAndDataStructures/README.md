# Abstraction, Abstract Data Types, and Data Structures

Let's talk about abstraction

## 1) What is abstraction and why should I care?

Let's take a look at cars. You probably have driven one at some point, you may have even done maintenance on your own car. To understand abstraction let's ask and answer a very simple question:

**Do you need to know how a car works in order to drive it?**

The answer is no. You can be completely oblivious to the inner design and workings of a car and still successfully drive it. Someone could be convinced that there is a monster under the hood that drinks gasoline and makes the car move for you, and they could still drive a car successfully. Understanding how combustion engines work or what an axel is is irrelevant to the actual process of sitting behind the wheel and driving a car on the road.

What we've just described is **abstraction**. Put another way, abstraction is the intentional hiding of details. By hiding details that aren't pertinant to **interfacing** with (i.e. using) something, we are able to focus on the details of how to interact with it rather than how it is put together. This idea allows us to all drive cars without having to know how it works. It also allows us to build complex machines and programs piece by piece without having to actively consider every single aspect all at once.

## 2) Types and more types: Types, Data Types, and Abstract Data Types

Let's say you are a musician and you're playing on the sidewalk downtown for tips from passerby pedestrians. You put out a tip jar and start playing. Some people stop and listen for a minute or two, and some of those people put something in your tip jar. But then you notice what they are putting in your tip jar. One person takes the gum out of their mouth and puts it in there. Another person puts a tube of lipstick in there. One person gives you money but it's in a foreign currency. Another person gives you some string they had in their pocket. People **are** giving you things in your tip jar, but it's not really what you want. You were just looking for US Dollars and now you have a whole bunch of different stuff.

This scenario probably seems unrealistic to you. When a musician has a tip jar out and is doing a street performance, people know to put money in the tip jar, **specifically** money, and more specifically money that is the local monetary currency. Tip jars are used to hold a specific **type** of thing.

In the world of computer science and programming, **types** are used to define a set of things. They define what is a specific thing and what is not. There can be super types and sub types (e.g. birds are considered animals (their super type) and red headed woodpeckers are a subtype of birds).

Since computers deal with different categories of **data** (e.g. numbers, characters, bits, etc), the types that computers work with are called **data types**.

Now types not only are defined by what they are and are not, but also what they can and can't do. E.g. in our society I can't go to the store and pay for groceries by giving them shoes I made or a hat I found: I have to use a credit card or physical money of the local currency. I also can't put a dollar bill on my head and use it as a hat or take my credit card and use it as a nail to build a tree house with. So an important aspect of data types is not only what it can be (i.e. the domain and range), but also what **operations** it can be used to perform.

If we take all of this together - a definition for what kind of things are acceptable, what the acceptable range of values are for those things, and what operations they can be used in - we get an **abstract data type**.

Technically, **the difference between a data type and an abstract data type is that an abstract data type is the conceptual definition for what the type is, and the data type is the actual implementation of that type in the computer**. 

## 3) Data structures vs Abstract Data Types

Very simply, a **data structure** is a specific implementation of an abstract data type. For example, a [List](https://en.wikipedia.org/wiki/List_(abstract_data_type)) is an abstract data type that is basically a finite collection of elements in sequence (e.g. a list of numbers could be 1,2,3,4...,8,9). However, there are multiple ways of implementing a list: an array list (list based on an array) or a linked list (a list where each element has a pointer to the next element in the list). The important thing is that both of these list implementations can contain the exact same elements and can perform the exact same operations; they are interfaced with in the same way.

## Challenge problems

These challenge problems will actually have to do with the topic above

1) Come up with a definition for an abstract data type called ValentinesGift. It should define what possible things can be in the type and what operations can be made on them (e.g. you should be able to give a ValentinesGift to your valentine's date). Feel free to make this as opinionated and/or silly as you'd like!

2) Take the abstract data type above and implement it in your favored coding language. Remember to define not only what it can and can't be, but also what operations it can be used for.

3) Finally, write a sample program that will show off the new data type. Show what happens when an potential element isn't suited to be a ValentinesGift by your definition, and what operations the ones that can are able to do.



