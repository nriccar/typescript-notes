/**
 * * Exclude<UnionType, ExcludedMembers> constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.
 */

type T0000 = Exclude<'a' | 'b' | 'c', 'a'>
// type T0 = 'b' | 'c'

type T001 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>
// type T1 = 'c'

type T002 = Exclude<string | number | (() => void), Function>
// type T1 = string | number

/**
 * * How Exclude<T> works
 */
type Exclude___<T, U> = T extends U ? never : T
