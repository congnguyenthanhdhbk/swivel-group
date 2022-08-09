import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type EmployeeDocument = Employee & Document

@Schema()
export class Employee {
    @Prop()
    firstName: string
    @Prop()
    lastName: string
    @Prop()
    email: string
    @Prop()
    phone: string
    @Prop()
    gender: string // M: Male, F: Female
    @Prop()
    photo: string
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee)