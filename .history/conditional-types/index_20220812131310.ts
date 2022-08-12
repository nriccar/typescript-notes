// https://javascript.plainenglish.io/use-typescript-conditional-types-like-a-pro-7baea0ad05c5

type Exclude_<T, U> = T extends U ? never : T

type T0 = Exclude_<'a' | 'b' | 'c', 'a' | 'b'>
// type T0 = 'b' | 'c'

//
type IsString<T> = T extends string ? true : false
type I0 = IsString<number> // false
type I1 = IsString<'abc'> // true
type I2 = IsString<any> // boolean
type I3 = IsString<never> // never

type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'function'
  : 'object'

type T000 = TypeName<string> // 'string'
type T00 = TypeName<'a'> // 'string'
type T01 = TypeName<number> // 'number'
type T02 = TypeName<true> // 'boolean'
type T03 = TypeName<() => void> // 'function'
type T04 = TypeName<{}> // 'object'
type T05 = TypeName<string[]> // 'object'

// "string" | "function"
type T10 = TypeName<string | (() => void)>

// "string" | "object" | "undefined"
type T11 = TypeName<string | string[] | undefined>

/**
* * For distributed conditional types, when the incoming checked type is a union type, it will be broken into multiple branches during the operation.

T extends U ? X : Y 

T => A | B | C 

A | B | C extends U ? X : Y  => 
(A extends U ? X : Y) | (B extends U ? X : Y) | (C extends U ? X : Y)
*/


//
type Exclude<T, U> = T extends U ? never : T;
type T4 = Exclude<"a" | "b" | "c", "a" | "b">
​
("a" extends "a" | "b" ? never : "a") // => never
| ("b" extends "a" | "b" ? never : "b") // => never
| ("c" extends "a" | "b" ? never : "c") // => "c"
​
never | never | "c" // => "c"