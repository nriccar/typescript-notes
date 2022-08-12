/**
 * * Parameters<Type> constructs a tuple type from the types used in the parameters of a function type Type.
 */

function getUserInfo(id: number, name: string) {
  return `User ID: ${id}, User Name: ${name}`
}

type FuncParameters = Parameters<typeof getUserInfo> // [number, string]

type FirstParameter = Parameters<typeof getUserInfo>[0] | FuncParameters[0] // number

/**
 * * How Parameters<T> works
 */
type Parameters_<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never
