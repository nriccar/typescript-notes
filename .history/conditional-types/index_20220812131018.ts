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
