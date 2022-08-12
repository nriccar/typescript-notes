/**
 * * Partial<T> contrstructs a type with all the properties of Type set to optional
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
  password?: string
  address?: string
  phone?: string
}

/**
 * * ✅ Good
 */
type PartialUser = Partial<User>

/**
 * * How Partial<T> works
 */
type Partial_<T> = {
  [P in keyof T]?: T[P]
}
