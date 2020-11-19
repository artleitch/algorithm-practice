**[js-gym](../README.md)**

> [Globals](../globals.md) / Search

# Class: Search

## Hierarchy

* **Search**

## Index

### Methods

* [balancedBrackets](search.md#balancedbrackets)
* [taleOfTwoStacks](search.md#taleoftwostacks)
* [whatFlavors](search.md#whatflavors)

## Methods

### balancedBrackets

▸ `Static`**balancedBrackets**(`s`: string): string

*Defined in [src/modules/stacks/stacks.ts:34](https://github.com/artleitch/js-gym/blob/10f7f8a/src/modules/stacks/stacks.ts#L34)*

**`name`** balancedBrackets

**`description`** 
A bracket is considered to be any one of the following characters: (, ),
{, }, [, or ].
Two brackets are considered to be a matched pair if the an opening bracket
(i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or
}) of the exact same type. There are three types of matched pairs of
brackets: [], {}, and ().
A matching pair of brackets is not balanced if the set of brackets it
encloses are not matched. For example, {[(])} is not balanced because the
contents in between { and } are not balanced. The pair of square brackets
encloses a single, unbalanced opening bracket, (, and the pair of
parentheses encloses a single, unbalanced closing square bracket, ].
By this logic, we say a sequence of brackets is balanced if the following
conditions are met:
It contains no unmatched brackets.
The subset of brackets enclosed within the confines of a matched pair of
brackets is also a matched pair of brackets.
Given n strings of brackets, determine whether each sequence of brackets
is balanced. If a string is balanced, return YES. Otherwise, return NO.

[Original challenge](https://www.hackerrank.com/challenges/balanced-brackets/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`s` | string | String of bracket characters |

**Returns:** string

YES or NO depending on whether the string is balanced

___

### taleOfTwoStacks

▸ `Static`**taleOfTwoStacks**(`input`: string): void

*Defined in [src/modules/stacks/stacks.ts:86](https://github.com/artleitch/js-gym/blob/10f7f8a/src/modules/stacks/stacks.ts#L86)*

**`name`** taleOfTwoStacks

**`description`** 
A queue is an abstract data type that maintains the order in which elements
 were added to it, allowing the oldest elements to be removed from the
front and new elements to be added to the rear. This is called a
First-In-First-Out (FIFO) data structure because the first element added
to the queue (i.e., the one that has been waiting the longest) is always
the first one to be removed.
A basic queue has the following operations:
Enqueue: add a new element to the end of the queue.
Dequeue: remove the element from the front of the queue and return it.
In this challenge, you must first implement a queue using two stacks. Then
process q queries, where each query is one of the following 3 types:
1 x: Enqueue element xinto the end of the queue.
2: Dequeue the element at the front of the queue.
3: Print the element at the front of the queue.

[Original challenge](https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues&h_r=next-challenge&h_v=zen)

#### Parameters:

Name | Type |
------ | ------ |
`input` | string |

**Returns:** void

YES or NO depending on whether the string is balanced

___

### whatFlavors

▸ `Static`**whatFlavors**(`cost`: number[], `money`: number): string

*Defined in [src/modules/search/search.ts:19](https://github.com/artleitch/js-gym/blob/10f7f8a/src/modules/search/search.ts#L19)*

**`name`** whatFlavors

**`description`** 
Given an array of costs, find the combination that would add up to the
given amount, with the answer given as the 1-based indices of the costs

[Original challenge](https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`cost` | number[] | The array of costs |
`money` | number | The amount of money to use |

**Returns:** string

The 1-based indices of the costs the fulfil the money given
