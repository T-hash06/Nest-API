import { IsNotEmpty } from "class-validator";

export class AuthModel implements Auth {
	@IsNotEmpty()
	username: string;

	@IsNotEmpty()
	password: string;
}
