import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BoxModuleBase } from "./base/box.module.base";
import { BoxService } from "./box.service";
import { BoxController } from "./box.controller";
import { BoxResolver } from "./box.resolver";

@Module({
  imports: [BoxModuleBase, forwardRef(() => AuthModule)],
  controllers: [BoxController],
  providers: [BoxService, BoxResolver],
  exports: [BoxService],
})
export class BoxModule {}
