/**
 * Sets a value.
 * Provides a value to be stored.
 */
export default interface Setter<T> {
	(value: T): void;
}