**[js-gym](../README.md)**

> [Globals](../globals.md) / Search

# Class: Search

## Hierarchy

* **Search**

## Index

### Methods

* [balancedBrackets](search.md#balancedbrackets)
* [whatFlavors](search.md#whatflavors)

## Methods

### balancedBrackets

▸ `Static`**balancedBrackets**(`s`: string): string

*Defined in src/modules/stacks/stacks.ts:34*

**`name`** whatFlavors

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

### whatFlavors

▸ `Static`**whatFlavors**(`cost`: number[], `money`: number): string

*Defined in [src/modules/search/search.ts:19](https://github.com/artleitch/js-gym/blob/2843b41/src/modules/search/search.ts#L19)*

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
