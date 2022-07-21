import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
	private readonly users: User[] = [];

	findAll() {
		return this.users;
	}
}
