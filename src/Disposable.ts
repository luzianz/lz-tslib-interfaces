/**
 * Defines a mechanism for releasing resources.
 */
export default interface Disposable {
	dispose(): void;
}