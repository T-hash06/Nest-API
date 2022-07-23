import { HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/database.service";
import { UserModel } from "./users.model";

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async findAll(): Promise<User[]> {
		return await this.prisma.user.findMany();
	}

	async findOne(username: string): Promise<User | null> {
		return await this.prisma.user.findFirst({
			where: { username },
		});
	}

	async create(user: UserModel): Promise<ServiceResponse> {
		try {
			await this.prisma.user.create({ data: user });
			return { statusCode: HttpStatus.CREATED, message: "ok" };
		} catch (error: any) {
			const prismaError = error as PrismaConflictError;

			if (prismaError.code === "P2002") {
				return {
					statusCode: HttpStatus.CONFLICT,
					message: prismaError.meta.target,
					error: "conflict",
				};
			}
			throw error;
		}
	}

	async delete(id: number): Promise<ServiceResponse> {
		try {
			await this.prisma.user.delete({
				where: { id },
			});
		} catch (error) {
			return {
				statusCode: HttpStatus.NOT_FOUND,
				message: "user not found",
				error: "not found",
			};
		}

		return { statusCode: HttpStatus.OK, message: "ok" };
	}
}
