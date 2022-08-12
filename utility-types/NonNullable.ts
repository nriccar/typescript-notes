/**
 * * NonNullable<Type> constructs a type by excluding null and undefined from Type.
 */

type Value = string | string[] | number | boolean | null | undefined

/**
 * * ❌ Bad
 */
type NonNullableValue = string | number | boolean | string[]

/**
 * * ✅ Good
 */
type NonNullableValue_ = NonNullable<Value>

/**
 * * How NonNullable<T> works
 */
type NonNullable_<T> = T extends null | undefined ? never : T
