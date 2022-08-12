type Exclude_<T, U> = T extends U ? never : T

type T0 = Exclude_<'a' | 'b' | 'c', 'a' | 'b'>
