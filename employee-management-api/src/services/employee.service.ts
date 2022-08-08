import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Employee, EmployeeDocument} from "../entities/employee.entity";
import {Model} from "mongoose";
import {CreateEmployeeDto} from "../dtos/CreateEmployeeDto";

@Injectable()
export class EmployeeService {
    constructor(@InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>) {}

    async create(createEmployee: CreateEmployeeDto): Promise<Employee> {
        return this.employeeModel.create(createEmployee)
    }

    async update(id: string, updateEmployee: CreateEmployeeDto): Promise<any> {
        return this.employeeModel.updateOne({ _id: id }, updateEmployee)
    }

    async list(): Promise<Employee[]> {
        return this.employeeModel.find({})
    }

    async get(id: string): Promise<Employee> {
        return this.employeeModel.findById(id)
    }

    async delete(id: string): Promise<any> {
        return this.employeeModel.deleteOne({ _id: id })
    }

}