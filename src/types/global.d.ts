import { HttpStatus } from "@nestjs/common";
import { Prisma } from "@prisma/client";

export {};

declare global {
	interface User {
		id: number;
		username: string;
		email: string;
		name: string;
		password: string;
	}

	interface Auth {
		username: string;
		password: string;
	}

	interface ServiceResponse {
		statusCode: HttpStatus;
		message: string | Record<string, any>;
		error?: string;
	}

	interface PrismaConflictError extends Prisma.PrismaClientKnownRequestError {
		meta: Record<string, any>;
	}

	interface SessionPayload {
		username: string;
	}
}
