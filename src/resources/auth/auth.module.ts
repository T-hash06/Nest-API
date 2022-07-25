import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PrismaService } from "src/database.service";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./entities/constants";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./jwt.strategy";

@Module({
	controllers: [AuthController],
	imports: [PassportModule, JwtModule.register(jwtConstants)],
	providers: [AuthService, PrismaService, JwtStrategy],
})
export class AuthModule {}
