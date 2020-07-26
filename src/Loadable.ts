/**
 * Represents an object which needs to load resources via I/O (network, file system, etc.)
 */
export default interface Loadable {
	/** Load resources. */
	load(): Promise<void>;
}