/**
 * * Uppercase<StringType> converts string literal type to uppercase.
 */

type Method = 'get' | 'post' | 'put' | 'delete'

/**
 * * ❌ Bad
 */
type UppercaseMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

/**
 * * ✅ Good
 */
type UppercaseMethod_ = Uppercase<Method>
