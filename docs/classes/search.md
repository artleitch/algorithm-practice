**[js-gym](../README.md)**

> [Globals](../globals.md) / Search

# Class: Search

## Hierarchy

* **Search**

## Index

### Methods

* [whatFlavors](search.md#whatflavors)

## Methods

### whatFlavors

▸ `Static`**whatFlavors**(`cost`: number[], `money`: number): string

*Defined in src/modules/search/search.ts:19*

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
