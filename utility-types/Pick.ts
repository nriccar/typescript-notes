/**
 * * Pick<Type, Keys> constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
 */

export type User = {
  name: string
  password: string
  address: string
  phone: string
}

/**
 * * ❌ Bad
 */
type PartialUser_ = {
  name?: string
  address?: string
}

/**
 * * ✅ Good
 */
type PartialUser = Pick<User, 'name' | 'address'>

/**
 * * How Pick<T> works
 */
type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}
