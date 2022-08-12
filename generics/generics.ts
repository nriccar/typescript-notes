// https://medium.com/frontend-canteen/what-are-k-t-and-v-in-typescript-generics-9fabe1d0f0f3

function identity<T>(value: T): T {
  return value
}

/**
 * * K(Key): represents the type of key in the object
 * * V(Value): represents the type of value in the object
 * * E(Element): represents the element type
 */

function identityWithMessage<T, U>(value: T, message: U): T {
  console.log(message) // 'Hello'
  return value // 1
}

const result = identityWithMessage<number, string>(1, 'Hello')
