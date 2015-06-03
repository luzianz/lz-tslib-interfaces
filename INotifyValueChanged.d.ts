/// <reference path="IEventEmitter.d.ts" />
/// <reference path="FAction.d.ts" />

interface INotifyValueChanged<T> extends IEventEmitter {
	on(event: string, callback: Function); // IEventEmitter
	
	/** When a value has changed. */
	on(event: 'valueChanged', callback: (oldValue: T, newValue: T) => void);
	
	/** 
	 * Before a value might change.
	 * cancel is provided in the callback if cancellation is supported.
	 */
	on(event: 'valueChanging', callback: (oldValue: T, newValue: T, cancel?: FAction) => void);
}