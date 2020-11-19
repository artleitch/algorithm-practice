/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('source-map-support').install()

class Search {
  /**
   * @name balancedBrackets
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

  /**
   * @name taleOfTwoStacks
   * @description
   * A queue is an abstract data type that maintains the order in which elements
   *  were added to it, allowing the oldest elements to be removed from the
   * front and new elements to be added to the rear. This is called a
   * First-In-First-Out (FIFO) data structure because the first element added
   * to the queue (i.e., the one that has been waiting the longest) is always
   * the first one to be removed.
   * A basic queue has the following operations:
   * Enqueue: add a new element to the end of the queue.
   * Dequeue: remove the element from the front of the queue and return it.
   * In this challenge, you must first implement a queue using two stacks. Then
   * process q queries, where each query is one of the following 3 types:
   * 1 x: Enqueue element xinto the end of the queue.
   * 2: Dequeue the element at the front of the queue.
   * 3: Print the element at the front of the queue.
   *
   * [Original challenge](https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues&h_r=next-challenge&h_v=zen)
   *
   * @param s String of bracket characters
   * @returns YES or NO depending on whether the string is balanced
   */
  static taleOfTwoStacks(input: string): void {
    const stack: number[] = []
    // Enter your code here
    const instructions = input.split('\n')
    instructions.forEach((ins) => {
      const nums: string[] = ins.split(' ')
      if (+nums[0] === 1) {
        // add number to end of queue
        stack.push(+nums[1])
      } else if (+nums[0] === 2) {
        // remove number at front of queue
        stack.shift()
      } else if (+nums[0] === 3) {
        // print element at the front of the queue
        console.log(stack[0])
      }
    })
  }
}

export default Search
