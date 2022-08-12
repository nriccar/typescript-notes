/**
 * * Required<T> constructs a type consisting of all properties of Type set to required. The opposite of Partial.
 */

export type User = {
  name?: string
  password?: string
  address?: string
  phone?: string
}

/**
 * * ❌ Bad
 */
type RequiredUser_ = {
  name: string
  password: string
  address: string
  phone: string
}

/**
 * * ✅ Good
 */
type RequiredUser = Required<User>

/**
 * * How Required<T> works
 */
type Required_<T> = {
  [P in keyof T]-?: T[P]
}
