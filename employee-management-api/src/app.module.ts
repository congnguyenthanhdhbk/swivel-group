import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Employee, EmployeeSchema} from "./entities/employee.entity";
import {EmployeeController} from "./controllers/EmployeeController";
import {EmployeeService} from "./services/employee.service";

@Module({
  imports: [
      MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/employee'),
      MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema }])
  ],
  controllers: [AppController, EmployeeController],
  providers: [AppService, EmployeeService],
})
export class AppModule {}
