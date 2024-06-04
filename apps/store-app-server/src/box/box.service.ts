import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BoxServiceBase } from "./base/box.service.base";

@Injectable()
export class BoxService extends BoxServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
