/**
 * Compare two objects for rank.
 */
export default interface Comparer<T> {
	/**
	 * @return
	 *     0 if objects are equal.
	 *     1 if a is greater.
	 *     -1 if a is lesser.
	 */
	(a: T, b: T): number;
}