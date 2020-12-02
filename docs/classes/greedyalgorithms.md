**[js-gym](../README.md)**

> [Globals](../globals.md) / GreedyAlgorithms

# Class: GreedyAlgorithms

## Hierarchy

* **GreedyAlgorithms**

## Index

### Methods

* [candies](greedyalgorithms.md#candies)
* [greedyFlorist](greedyalgorithms.md#greedyflorist)
* [gridChallenge](greedyalgorithms.md#gridchallenge)
* [marcsCakewalk](greedyalgorithms.md#marcscakewalk)
* [maximumPerimeterTriangle](greedyalgorithms.md#maximumperimetertriangle)
* [minimumDiffInArray](greedyalgorithms.md#minimumdiffinarray)

## Methods

### candies

▸ `Static`**candies**(`n`: number, `arr`: number[]): number

*Defined in [src/modules/greedy-algorithms/greedy-algorithms.ts:50](https://github.com/artleitch/js-gym/blob/992a2d7/src/modules/greedy-algorithms/greedy-algorithms.ts#L50)*

**`name`** candies

**`description`** 
Alice is a kindergarten teacher. She wants to give some candies to the
children in her class.  All the children sit in a line and each of them
has a rating score according to his or her performance in the class. Alice
 wants to give at least 1 candy to each child. If two children sit next to
each other, then the one with the higher rating must get more candies.
Alice wants to minimize the total number of candies she must buy.
[Original challenge](https://www.hackerrank.com/challenges/candies/problem)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`n` | number | Dumber of students |
`arr` | number[] | An array of students results |

**Returns:** number

Minimum number of candies needed

___

### greedyFlorist

▸ `Static`**greedyFlorist**(`k`: number, `c`: number[]): number

*Defined in [src/modules/greedy-algorithms/greedy-algorithms.ts:197](https://github.com/artleitch/js-gym/blob/992a2d7/src/modules/greedy-algorithms/greedy-algorithms.ts#L197)*

**`name`** greedyFlorist

**`description`** 
[Original challenge](https://www.hackerrank.com/challenges/greedy-florist/problem)

#### Parameters:

Name | Type |
------ | ------ |
`k` | number |
`c` | number[] |

**Returns:** number

___

### gridChallenge

▸ `Static`**gridChallenge**(`grid`: string[]): string

*Defined in [src/modules/greedy-algorithms/greedy-algorithms.ts:137](https://github.com/artleitch/js-gym/blob/992a2d7/src/modules/greedy-algorithms/greedy-algorithms.ts#L137)*

**`name`** gridChallenge

**`description`** 
Given a square grid of characters in the range ascii[a-z], rearrange
elements of each row alphabetically, ascending. Determine if the columns
are also in ascending alphabetical order, top to bottom. Return YES if
they are or NO if they are not.
[Original challenge](https://www.hackerrank.com/challenges/grid-challenge/problem)

#### Parameters:

Name | Type |
------ | ------ |
`grid` | string[] |

**Returns:** string

___

### marcsCakewalk

▸ `Static`**marcsCakewalk**(`calorie`: number[]): number

*Defined in [src/modules/greedy-algorithms/greedy-algorithms.ts:177](https://github.com/artleitch/js-gym/blob/992a2d7/src/modules/greedy-algorithms/greedy-algorithms.ts#L177)*

**`name`** marcsCakewalk

**`description`** 
Marc loves cupcakes, but he also likes to stay fit. Each cupcake has a
calorie count, and Marc can walk a distance to expend those calories. If
Marc has eaten j cupcakes so far, after eating a cupcake with c calories
he must walk at least 2 ** j * c miles to maintain his weight.
[Original challenge](https://www.hackerrank.com/challenges/marcs-cakewalk/problem)

#### Parameters:

Name | Type |
------ | ------ |
`calorie` | number[] |

**Returns:** number

___

### maximumPerimeterTriangle

▸ `Static`**maximumPerimeterTriangle**(`sticks`: number[]): number

*Defined in [src/modules/greedy-algorithms/greedy-algorithms.ts:96](https://github.com/artleitch/js-gym/blob/992a2d7/src/modules/greedy-algorithms/greedy-algorithms.ts#L96)*

**`name`** maximumPerimeterTriangle

**`description`** 
Given an array of stick lengths, use 3 of them to construct a
non-degenerate triange with the maximum possible perimeter. Print the
lengths of its sides as space-separated integers in non-decreasing order.
[Original challenge](https://www.hackerrank.com/challenges/maximum-perimeter-triangle/problem)

#### Parameters:

Name | Type |
------ | ------ |
`sticks` | number[] |

**Returns:** number

___

### minimumDiffInArray

▸ `Static`**minimumDiffInArray**(`arr`: number[]): number

*Defined in [src/modules/greedy-algorithms/greedy-algorithms.ts:22](https://github.com/artleitch/js-gym/blob/992a2d7/src/modules/greedy-algorithms/greedy-algorithms.ts#L22)*

**`name`** 

**`description`** 
Complete the minimumAbsoluteDifference function in the editor below. It
should return an integer that represents the minimum absolute difference
between any pair of elements.

minimumAbsoluteDifference has the following parameter(s):
arr: an array of integers

[Original challenge](https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`arr` | number[] | An array of integers |

**Returns:** number

Total number of swaps made in sorting
