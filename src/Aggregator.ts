/**
 * Strategy for aggregation.
 */
export default interface Aggregator<T> {
	/**
	 * @param aggregation what has been aggregated thus far.
	 * @param nextValue next unaggregated value to be aggregated.
	 * @return new aggregation.
	 */
	(aggregation: T, nextValue: T): T;
}