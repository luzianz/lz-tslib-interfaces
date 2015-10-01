/// <reference path="IEventEmitter.d.ts" />
/// <reference path="FAction.d.ts" />

interface INotifyPropertyChanged extends IEventEmitter {
	on(event: string, callback: Function); // IEventEmitter
	
	/** When a property has changed. */
	on(event: 'propertyChanged', callback: (propertyName: string) => void);
}