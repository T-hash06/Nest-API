export {};

declare global {
	interface User {
		id?: number;
		username: string;
		email: string;
		name: string;
		password: string;
	}
}
