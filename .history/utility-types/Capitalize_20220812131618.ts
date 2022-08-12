/**
 * * Capitalize<StringType> converts the first character of string literal type to uppercase.
 */

type Method3 = 'get' | 'post' | 'put' | 'delete'

/**
 * * ❌ Bad
 */
type CapitalizeMethod3 = 'Get' | 'Post' | 'Put' | 'Delete'

/**
 * * ✅ Good
 */
type CapitalizeMethod3_ = Capitalize<Method3>
