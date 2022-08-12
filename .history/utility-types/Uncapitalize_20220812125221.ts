/**
 * * Capitalize<StringType> onvert the first character of string literal type to lowercase.
 */

type Method4 = 'Get' | 'Post' | 'Put' | 'Delete'

/**
 * * ❌ Bad
 */
type CapitalizeMethod4 = 'get' | 'post' | 'put' | 'delete'

/**
 * * ✅ Good
 */
type CapitalizeMethod4_ = Uncapitalize<Method>
