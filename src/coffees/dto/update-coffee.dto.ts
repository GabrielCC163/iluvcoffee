import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

/**
 * uses the same structure from CreateCoffeeDto
 * with all validation rules
 * but sets each one as optional
 **/

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
