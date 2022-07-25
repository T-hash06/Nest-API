import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const Session = createParamDecorator(
	(_: unknown, ctx: ExecutionContext): SessionPayload | undefined => {
		const request = ctx.switchToHttp().getRequest();
		const session: SessionPayload = request.user;

		return session;
	}
);
