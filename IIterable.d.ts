/// <reference path="IIterator" />

interface IIterable<T> {
	'Symbol.iterator'(): IIterator<T>;
}