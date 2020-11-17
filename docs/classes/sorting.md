**[js-gym](../README.md)**

> [Globals](../globals.md) / Sorting

# Class: Sorting

## Hierarchy

* **Sorting**

## Index

### Methods

* [bubbleSort](sorting.md#bubblesort)
* [markAndToys](sorting.md#markandtoys)

## Methods

### bubbleSort

▸ `Static`**bubbleSort**(`a`: number[]): number

*Defined in [src/modules/sorting/sorting.ts:24](https://github.com/artleitch/js-gym/blob/6ec6fef/src/modules/sorting/sorting.ts#L24)*

**`name`** bubbleSort

**`description`** 
Given an array of integers, sort the array in ascending order using the
Bubble Sort algorithm above. Once sorted, print the following three lines:
'Array is sorted in numSwaps swaps.', where numSwaps is the number of swaps
that took place.
First Element: firstElement, where 'First Element' is the first element in
the sorted array.
Last Element: lastElement, where 'Last Element' is the last element in the
sorted array.

[Original challenge](https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`a` | number[] | The array of numbers to sort |

**Returns:** number

Total number of swaps made in sorting

___

### markAndToys

▸ `Static`**markAndToys**(`prices`: number[], `k`: number): number

*Defined in [src/modules/sorting/sorting.ts:62](https://github.com/artleitch/js-gym/blob/6ec6fef/src/modules/sorting/sorting.ts#L62)*

**`name`** bubbleSort

**`description`** 
Mark and Jane are very happy after having their first child. Their son
loves toys, so Mark wants to buy some. There are a number of different toys
 lying in front of him, tagged with their prices. Mark has only a certain
amount to spend, and he wants to maximize the number of toys he buys with
this money.

Given a list of prices and an amount to spend, what is the maximum number
of toys Mark can buy?

[Original challenge](https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting&h_r=next-challenge&h_v=zen)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`prices` | number[] | The array of prices to select from |
`k` | number | The amount of money Mark has to spend |

**Returns:** number

The number of toys Mark can buy
