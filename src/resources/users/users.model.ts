import { IsEmail, IsNotEmpty } from "class-validator";

export class UserModel implements User {
	id: number;

	@IsNotEmpty()
	username: string;

	@IsEmail()
	@IsNotEmpty()
	email: string;

	@IsNotEmpty()
	name: string;

	@IsNotEmpty()
	password: string;
}
