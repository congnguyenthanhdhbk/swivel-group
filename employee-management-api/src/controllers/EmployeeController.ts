import {Body, Controller, Delete, Get, Param, Post, Put, Query} from "@nestjs/common";
import {EmployeeService} from "../services/employee.service";
import {CreateEmployeeDto} from "../dtos/CreateEmployeeDto";
import {Employee} from "../entities/employee.entity";

@Controller("/api/v1/employees")
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) {}

    @Post()
    async createEmployee(@Body() employee: CreateEmployeeDto): Promise<Employee> {
        return this.employeeService.create(employee)
    }

    @Get("/:id")
    async getEmployeeById(@Param("id") id: string): Promise<Employee> {
        return this.employeeService.get(id)
    }

    @Get()
    async getEmployees(): Promise<Employee[]> {
        return this.employeeService.list()
    }

    @Put("/:id")
    async updateEmployee(@Param('id') id: string, @Body() employee: CreateEmployeeDto): Promise<any> {
        return this.employeeService.update(id, employee)
    }

    @Delete("/:id")
    async deleteEmployee(@Param("id") id: string): Promise<any> {
        return this.employeeService.delete(id)
    }
}