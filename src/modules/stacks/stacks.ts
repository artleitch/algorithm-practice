/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('source-map-support').install()

class Search {
  /**
   * @name whatFlavors
   * @description
   * A bracket is considered to be any one of the following characters: (, ),
   * {, }, [, or ].
   * Two brackets are considered to be a matched pair if the an opening bracket
   * (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or
   * }) of the exact same type. There are three types of matched pairs of
   * brackets: [], {}, and ().
   * A matching pair of brackets is not balanced if the set of brackets it
   * encloses are not matched. For example, {[(])} is not balanced because the
   * contents in between { and } are not balanced. The pair of square brackets
   * encloses a single, unbalanced opening bracket, (, and the pair of
   * parentheses encloses a single, unbalanced closing square bracket, ].
   * By this logic, we say a sequence of brackets is balanced if the following
   * conditions are met:
   * It contains no unmatched brackets.
   * The subset of brackets enclosed within the confines of a matched pair of
   * brackets is also a matched pair of brackets.
   * Given n strings of brackets, determine whether each sequence of brackets
   * is balanced. If a string is balanced, return YES. Otherwise, return NO.
   *
   * [Original challenge](https://www.hackerrank.com/challenges/balanced-brackets/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues)
   *
   * @param s String of bracket characters
   * @returns YES or NO depending on whether the string is balanced
   */
  static balancedBrackets(s: string): string {
    const pairs = new Map()
    pairs.set(')', '(')
    pairs.set(']', '[')
    pairs.set('}', '{')
    const stack: string[] = []
    const letters = s.split('')
    let unbalanced = false
    for (let i = 0; i < letters.length; i++) {
      const el = letters[i]
      if (pairs.get(el) === undefined) {
        // Opening bracket
        stack.push(el)
      } else {
        const lastLetter = stack[stack.length - 1]
        if (!lastLetter) {
          unbalanced = true
        }
        if (lastLetter === pairs.get(el)) {
          stack.pop()
        } else {
          unbalanced = true
        }
      }
    }

    return stack.length || unbalanced ? 'NO' : 'YES'
  }
}

export default Search
