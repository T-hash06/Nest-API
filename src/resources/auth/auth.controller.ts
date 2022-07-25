import {
	Body,
	Controller,
	HttpException,
	HttpStatus,
	Post,
} from "@nestjs/common";
import { AuthModel } from "./auth.model";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post()
	async createSession(@Body() authModel: AuthModel) {
		const result = await this.authService.createSession(authModel);

		if (result.statusCode !== HttpStatus.CREATED)
			throw new HttpException(result, result.statusCode);
		return result;
	}
}
