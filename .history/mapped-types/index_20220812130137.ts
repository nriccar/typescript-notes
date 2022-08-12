// https://javascript.plainenglish.io/using-typescript-mapped-types-like-a-pro-be10aef5511a

type User = {
  name: string
  password: string
  address: string
  phone: string
}

/**
 * * ❌ Bad
 */
type UserPartial = {
  name?: string
  password?: string
  address?: string
  phone?: string
}
