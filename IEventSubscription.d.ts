/*
 * Information tracked by event emitters.
 */
interface IEventSubscription {
	subscriber: any;
	event: string;
	callback: Function;
}
