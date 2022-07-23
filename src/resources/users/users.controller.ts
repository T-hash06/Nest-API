import {
	Body,
	Controller,
	Delete,
	Get,
	HttpException,
	HttpStatus,
	Param,
	Post,
} from "@nestjs/common";
import { UserModel } from "./users.model";
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
		const user = await this.userService.findOne(username);

		if (user === null)
			throw new HttpException(
				`user ${username} not found`,
				HttpStatus.NOT_FOUND
			);
		return user;
	}

	@Post()
	async createOne(@Body() body: UserModel) {
		const result = await this.userService.create(body);

		if (result.statusCode !== HttpStatus.CREATED)
			throw new HttpException(result, result.statusCode);

		return;
	}

	@Delete("/:id")
	async deleteOne(@Param("id") id: string) {
		const result = await this.userService.delete(Number(id));

		if (result.statusCode !== HttpStatus.OK) {
			throw new HttpException(result, result.statusCode);
		}

		return;
	}
}
