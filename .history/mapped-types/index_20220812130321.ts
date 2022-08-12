// https://javascript.plainenglish.io/using-typescript-mapped-types-like-a-pro-be10aef5511a

type User = {
  name: string
  password: string
  address: string
  phone: string
}

/**
 * * ❌ Bad
 */
type UserPartial = {
  name?: string
  password?: string
  address?: string
  phone?: string
}

/**
 * * ❌ Bad
 */
type ReadonlyUser = {
  readonly name: string
  readonly password: string
  readonly address: string
  readonly phone: string
}

/**
 * * { [P in K]: T }
 * * P in K is similar to for...in statement
 * * T is the type of the property
 */

// { [ P in K ] : T }
// { [ P in K ] ?: T }
// { [ P in K ] -?: T }
// { readonly [ P in K ] : T }
// { readonly [ P in K ] ?: T }
// { -readonly [ P in K ] ?: T }

type Item = { a: string; b: number; c: boolean }
