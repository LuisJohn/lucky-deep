/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsBoolean,
  ValidateNested,
  IsNumber,
} from "class-validator";
import { OrderCreateNestedManyWithoutBoxesInput } from "./OrderCreateNestedManyWithoutBoxesInput";
import { Type } from "class-transformer";
import { TransactionCreateNestedManyWithoutBoxesInput } from "./TransactionCreateNestedManyWithoutBoxesInput";

@InputType()
class BoxCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isRevealed?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutBoxesInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutBoxesInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutBoxesInput, {
    nullable: true,
  })
  orders?: OrderCreateNestedManyWithoutBoxesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: () => TransactionCreateNestedManyWithoutBoxesInput,
  })
  @ValidateNested()
  @Type(() => TransactionCreateNestedManyWithoutBoxesInput)
  @IsOptional()
  @Field(() => TransactionCreateNestedManyWithoutBoxesInput, {
    nullable: true,
  })
  transactions?: TransactionCreateNestedManyWithoutBoxesInput;
}

export { BoxCreateInput as BoxCreateInput };
