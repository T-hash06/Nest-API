import { JwtModuleOptions } from "@nestjs/jwt";

export const jwtConstants: JwtModuleOptions = {
	secret: "just monica",
	signOptions: {
		expiresIn: "60s",
	},
};
