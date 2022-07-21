import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

@Injectable()
export class UserService {
	async findAll(): Promise<User[]> {
		return await prisma.user.findMany();
	}

	async findOne(username: string): Promise<User | null> {
		return await prisma.user.findFirst({
			where: {
				username,
			},
		});
	}

	async create(user: User) {
		const result = prisma.user.create({ data: user });
		return result;
	}

	async delete(id: number) {
		const result = prisma.user.delete({
			where: {
				id,
			},
		});

		return result;
	}
}
