/**
 * Determines whether the subject meets the criteria the predicate represents.
 */
export default interface Predicate<T> {
	(subject: T): boolean;
}