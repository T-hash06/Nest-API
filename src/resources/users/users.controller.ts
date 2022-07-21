import { Controller, Get } from "@nestjs/common";
import { UserService } from "./users.service";

@Controller()
export class UserController {
	constructor(private userService: UserService) {}

	@Get()
	findAll(): User[] {
		return this.userService.findAll();
	}
}
