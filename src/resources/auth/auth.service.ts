import { HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/database.service";
import { compare } from "bcrypt";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
	constructor(private prisma: PrismaService, private jwt: JwtService) {}

	async createSession(authModel: Auth): Promise<ServiceResponse> {
		const user = await this.prisma.user.findFirst({
			where: {
				username: authModel.username,
			},
		});

		if (!user) {
			return {
				statusCode: HttpStatus.NOT_FOUND,
				message: `user ${authModel.username} not found`,
				error: "not found",
			};
		}

		const match = await compare(authModel.password, user.password);

		if (!match) {
			return {
				statusCode: HttpStatus.FORBIDDEN,
				message: "incorrect password",
				error: "forbidden",
			};
		}

		const token = this.jwt.sign({ email: user.email });

		return { statusCode: HttpStatus.CREATED, message: token };
	}
}
