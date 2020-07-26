/**
 * General function with an input and output.
 */
export default interface Func<I, O> {
	(input: I): O;
}