/**
 * * Record<Keys, Type> constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.
 */

export type User = {
  name?: string
  password?: string
  address?: string
  phone?: string
}

type UserIds = 1000 | 1001 | 1002

/**
 * * ❌ Bad
 */
type UserMap1 = {
  1000: User
  1001: User
  1002: User
}

/**
 * * ✅ Good
 */
type RecordUser = Record<UserIds, User>

/**
 * * How Record<T> works
 */
type Record_<K extends keyof any, T> = {
  [P in K]: T
}
