export class UserModel implements User {
	id: number;
	username: string;
	email: string;
	name: string;
	password: string;

	constructor(
		id: number,
		username: string,
		email: string,
		name: string,
		password: string
	) {
		this.id = id;
		this.username = username;
		this.email = email;
		this.name = name;
		this.password = password;
	}

	static isUser(object: any): boolean {
		if (
			object.email &&
			object.email !== "" &&
			object.name &&
			object.name !== "" &&
			object.username &&
			object.username !== "" &&
			object.password &&
			object.password !== ""
		)
			return true;

		return false;
	}
}
/*
export class UserModel {
	name: string;
	username: string;
	password: string;
	age: number;

	constructor(name: string, username: string, password: string, age: number) {
		this.name = name;
		this.username = username;
		this.password = password;
		this.age = age;
	}

	static createTestUser(): UserModel {
		return new UserModel("", "", "", 0);
	}

	static isUser(object: unknown): boolean {
		const objectKeys = Object.keys(object).toString();
		const classKeys = Object.keys(this.createTestUser()).toString();

		return objectKeys === classKeys;
	}
}
*/
