/**
 * * Omit<Type, Keys> constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals).
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
type PartialUser = Omit<User, 'password' | 'phone'>

/**
 * * How Omit<T> works
 */
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
