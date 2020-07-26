/**
 * Initializes another object.
 */
export default interface Initializer<T> {
	initialize(obj: T): void;
}