/**
 * * Extract<Type, Union> constructs a type by extracting from Type all union members that are assignable to Union.
 */

type T3 = Extract<'a' | 'b' | 'c', 'a' | 'f'>
// type T3 = 'a'

/**
 * * How Extract<T> works
 */
type Extract_<T, U> = T extends U ? T : never
