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

type T1 = { [P in 'x' | 'y']: number }
// {x: number, y: number}

type T2 = { [P in 'x' | 'y']: string }
// {x: string, y: string}

type T3 = { [P in 'x' | 'y']: P }
// {x: 'x', y: 'y'}

type T4 = { [P in 'a' | 'b']: Item[P] }
// {a: string; b:number}

type T5 = { [P in 'c']: Item[P] }
// {c: boolean}

type T6 = { [P in keyof Item]: Item[P] }
// {a: string; b:number; c: boolean}
