import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BoxService } from "./box.service";
import { BoxControllerBase } from "./base/box.controller.base";

@swagger.ApiTags("boxes")
@common.Controller("boxes")
export class BoxController extends BoxControllerBase {
  constructor(
    protected readonly service: BoxService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
