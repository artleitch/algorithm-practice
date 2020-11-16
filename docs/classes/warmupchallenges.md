**[js-gym](../README.md)**

> [Globals](../globals.md) / WarmUpChallenges

# Class: WarmUpChallenges

## Hierarchy

* **WarmUpChallenges**

## Index

### Methods

* [countingValleys](warmupchallenges.md#countingvalleys)
* [jumpingOnTheClouds](warmupchallenges.md#jumpingontheclouds)
* [repeatedString](warmupchallenges.md#repeatedstring)
* [salesByMatch](warmupchallenges.md#salesbymatch)

## Methods

### countingValleys

▸ `Static`**countingValleys**(`length`: number, `movements`: string): number

*Defined in [src/modules/warm-up-challenges/warm-up-challenges.ts:41](https://github.com/artleitch/js-gym/blob/8813bf5/src/modules/warm-up-challenges/warm-up-challenges.ts#L41)*

**`name`** countingValleys

**`description`** 
Given an string of 'D' and 'U' representing a movement of down and up
respectively, find the number of valleys in the array

[Original challenge](https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`length` | number | How long the array is |
`movements` | string | String of movements, given as 'D' and 'U' |

**Returns:** number

Number of valleys in array of movements

___

### jumpingOnTheClouds

▸ `Static`**jumpingOnTheClouds**(`clouds`: number[]): number

*Defined in [src/modules/warm-up-challenges/warm-up-challenges.ts:73](https://github.com/artleitch/js-gym/blob/8813bf5/src/modules/warm-up-challenges/warm-up-challenges.ts#L73)*

**`name`** jumpingOnTheClouds

**`description`** 
Emma is playing a new mobile game that starts with consecutively numbered
clouds. Some of the clouds are thunderheads and others are cumulus. She can
 jump on any cumulus cloud having a number that is equal to the number of
the current cloud plus 1 or 2. She must avoid the thunderheads. Determine
the minimum number of jumps it will take Emma to jump from her starting
postion to the last cloud. It is always possible to win the game.
For each game, Emma will get an array of clouds numbered 0 if they are safe
 or 1 if they must be avoided. For example, c = [0, 1, 0, 0, 0, 1, 0]
indexed from 0 … 6. The number on each cloud is its index in the list so
she must avoid the clouds at indexes 1 and 5. She could follow the
following two paths: 0 > 2 > 4 > 6 or 0 > 2 > 3 > 4 > 6. The first path
takes 3 jumps while the second takes 4.
jumpingOnClouds should return the minimum number of jumps required, as an
integer.

[Original challenge](https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`clouds` | number[] | An array of binary integers, representing clouds |

**Returns:** number

Minimum number of jumps needed

___

### repeatedString

▸ `Static`**repeatedString**(`string`: string, `n`: number): number

*Defined in [src/modules/warm-up-challenges/warm-up-challenges.ts:107](https://github.com/artleitch/js-gym/blob/8813bf5/src/modules/warm-up-challenges/warm-up-challenges.ts#L107)*

**`name`** jumpingOnTheClouds

**`description`** 
Lilah has a string, s, of lowercase English letters that she repeated
infinitely many times.
Given an integer, n, find and print the number of letter a's in the first
n letters of Lilah's infinite string.
For example, if the string s = ‘abcac’ and n=10, the substring we consider
is abcacabcac, the first 10 characters of her infinite string. There are 4
occurrences of a in the substring.

[Original challenge](https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`string` | string | The base string to use |
`n` | number | The length of characters to consider |

**Returns:** number

Number of occurances of 'a'

___

### salesByMatch

▸ `Static`**salesByMatch**(`length`: number, `socks`: number[]): number

*Defined in [src/modules/warm-up-challenges/warm-up-challenges.ts:16](https://github.com/artleitch/js-gym/blob/8813bf5/src/modules/warm-up-challenges/warm-up-challenges.ts#L16)*

**`name`** salesByMatch

**`description`** 
Find the number of pairs of numbers in an array

[Original challenge](https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`length` | number | How long the array is |
`socks` | number[] | Array of numbers to match |

**Returns:** number

Number of matches in array of numbers
