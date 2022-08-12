/**
 * * Lowercase<StringType> converts string literal type to lowercase.
 */

type Method2 = 'GET' | 'POST' | 'PUT' | 'DELETE'

/**
 * * ❌ Bad
 */
type LowercaseMethod2 = 'get' | 'post' | 'put' | 'delete'

/**
 * * ✅ Good
 */
type LowercaseMethod2_ = Lowercase<Method2>
