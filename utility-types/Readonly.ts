/**
 * * Readonly<T> constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.
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
type ReadonlyUser_ = {
  readonly name: string
  readonly password: string
  readonly address: string
  readonly phone: string
}

/**
 * * ✅ Good
 */
type ReadonlyUser = Readonly<User>

/**
 * * How Readonly<T> works
 */
type Readonly_<T> = {
  readonly [P in keyof T]: T[P]
}
