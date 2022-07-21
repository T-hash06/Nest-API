import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { UserService } from "./users.service";

@Controller()
export class UserController {
	constructor(private userService: UserService) {}

	@Get()
	async findAll(): Promise<User[]> {
		return this.userService.findAll();
	}

	@Get("/:username")
	async findOne(@Param("username") username: string): Promise<User | null> {
		const user = this.userService.findOne(username);
		return user;
	}

	@Post()
	async createOne(@Body() body: User) {
		const result = await this.userService.create(body);
		return result;
	}

	@Delete("/:id")
	async deleteOne(@Param("id") id: string) {
		const result = await this.userService.delete(Number(id));

		return result;
	}
}
