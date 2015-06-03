/// <reference path="FGetter.d.ts"/>
/// <reference path="FSetter.d.ts"/>

interface IValueContainer<T> {
	getValue: FGetter<T>;
	setValue: FSetter<T>;
}