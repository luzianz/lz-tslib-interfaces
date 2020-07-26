import Disposable from "./Disposable";

export interface PropertyChangeCallback<T extends object> {
	(obj: T, propertyName: keyof T): void;
}

export interface NotifiesPropertyChanged<T extends object> {
	/**
	 * When a property has changed.
	 * @returns A disposable which unsubscribes from the event
	 */
	addEventListener(event: 'propertyChanged', callback: PropertyChangeCallback<T>): Disposable;
}