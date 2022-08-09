export interface EmployeeDTO {
  _id?: string
  id?: string
  firstName: string
  lastName: string
  email: string
  phone: string
  gender: string
  photo?: string
}

export interface EmployeeListDTO {
  employees: EmployeeDTO[]
}
