/* eslint-disable prettier/prettier */
import { IsOptional, IsString } from "class-validator";

export class searchDto {
  @IsOptional()
  subcity?: string;
  @IsOptional()
  city?: string;
  @IsOptional()
  @IsString()
  Home_Type?: string;
  @IsOptional()
  min_price?: number;
  @IsOptional()
  max_price?: number;
}
