**[js-gym](../README.md)**

> [Globals](../globals.md) / Sorting

# Class: Sorting

## Hierarchy

* **Sorting**

## Index

### Methods

* [bubbleSort](sorting.md#bubblesort)
* [countingInversions](sorting.md#countinginversions)
* [fraudulentActivitiyNotifications](sorting.md#fraudulentactivitiynotifications)
* [markAndToys](sorting.md#markandtoys)

## Methods

### bubbleSort

▸ `Static`**bubbleSort**(`a`: number[]): number

*Defined in [src/modules/sorting/sorting.ts:24](https://github.com/artleitch/js-gym/blob/992a2d7/src/modules/sorting/sorting.ts#L24)*

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

### countingInversions

▸ `Static`**countingInversions**(`arr`: number[]): number

*Defined in [src/modules/sorting/sorting.ts:155](https://github.com/artleitch/js-gym/blob/992a2d7/src/modules/sorting/sorting.ts#L155)*

**`name`** countingInversions

**`description`** 

[Original challenge](https://www.hackerrank.com/challenges/ctci-merge-sort/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`arr` | number[] | Array of unsorted numbers |

**Returns:** number

The number of inversions needed to sort array

___

### fraudulentActivitiyNotifications

▸ `Static`**fraudulentActivitiyNotifications**(`expenditure`: number[], `d`: number): number

*Defined in [src/modules/sorting/sorting.ts:102](https://github.com/artleitch/js-gym/blob/992a2d7/src/modules/sorting/sorting.ts#L102)*

**`name`** fraudulentActivitiyNotifications

**`description`** 
HackerLand National Bank has a simple policy for warning clients about
possible fraudulent account activity. If the amount spent by a client on a
particular day is greater than or equal to 2x the client's median spending
for a trailing number of days, they send the client a notification about
potential fraud. The bank doesn't send the client any notifications until
they have at least that trailing number of prior days' transaction data.

Given the number of trailing days d and a client's total daily expenditures
for a period of n days, find and print the number of times the client will
receive a notification over all days

[Original challenge](https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting&h_r=next-challenge&h_v=zen)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`expenditure` | number[] | An array of daily expenditures |
`d` | number | The number of trailing days to calculate median from |

**Returns:** number

The number of days that an alert is sent

___

### markAndToys

▸ `Static`**markAndToys**(`prices`: number[], `k`: number): number

*Defined in [src/modules/sorting/sorting.ts:62](https://github.com/artleitch/js-gym/blob/992a2d7/src/modules/sorting/sorting.ts#L62)*

**`name`** markAndToys

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
