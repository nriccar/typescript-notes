/**
 * * ReturnType<Type> constructs a type consisting of the return type of function Type.
 */

function getUserInfo2(id: number, name: string) {
  return `User ID: ${id}, User Name: ${name}`
}

type FuncReturnType = ReturnType<typeof getUserInfo2> // string

type ReturnType1 = ReturnType<(s: string) => void> // void
type ReturnType2 = ReturnType<any> // any
type ReturnType3 = ReturnType<never> // never

/**
 * * How ReturnType<T> works
 */
type ReturnType_<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any
