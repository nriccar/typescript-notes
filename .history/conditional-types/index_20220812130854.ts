type T0 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>

type Exclude<T, U> = T extends U ? never : T
