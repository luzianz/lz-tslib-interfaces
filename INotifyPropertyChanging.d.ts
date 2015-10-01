/// <reference path="IEventEmitter.d.ts" />
/// <reference path="FAction.d.ts" />

interface INotifyPropertyChanging extends IEventEmitter {
	on(event: string, callback: Function); // IEventEmitter
	
	/**
	 * Before a property might change.
	 * cancel is provided in the callback if cancellation is supported.
	 */
	on<T>(event: 'propertyChanging', callback: (propertyName: string, oldValue: T, newValue: T, cancel?: FAction) => void);
}