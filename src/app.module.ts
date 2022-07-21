import { Module } from "@nestjs/common";
import { RouterModule, Routes } from "@nestjs/core";
import { UsersModule } from "./resources/users/users.module";

const routes: Routes = [
	{
		path: "user",
		module: UsersModule,
	},
];

@Module({
	imports: [UsersModule, RouterModule.register(routes)],
})
export class AppModule {}
