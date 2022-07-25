import { Module } from "@nestjs/common";
import { RouterModule, Routes } from "@nestjs/core";
import { AuthModule } from "./resources/auth/auth.module";
import { UsersModule } from "./resources/users/users.module";

const routes: Routes = [
	{
		path: "user",
		module: UsersModule,
	},
	{
		path: "auth",
		module: AuthModule,
	},
];

@Module({
	imports: [UsersModule, AuthModule, RouterModule.register(routes)],
})
export class AppModule {}
