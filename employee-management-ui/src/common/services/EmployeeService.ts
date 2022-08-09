/* eslint-disable @typescript-eslint/no-explicit-any */
import { EmployeeDTO } from 'common/dto'
import http from './http'

const ROOT_URL = '/employees'

const getAll = async () => {
  try {
    const response = await http.get(`${ROOT_URL}`)
    return response.data
  } catch (error: any) {
    console.log(error.response.data)
  }
}

const get = async (id: string) => {
  try {
    const response = await http.get(`${ROOT_URL}/${id}`)
    return response.data
  } catch (error: any) {
    console.log(error.response.data)
  }
}

const create = async (employee: EmployeeDTO) => {
  try {
    const response = await http.post(`${ROOT_URL}`, employee)
    return response.data
  } catch (error: any) {
    console.log(error.response.data)
  }
}

const update = async (id: string, employee: EmployeeDTO) => {
  try {
    const response = await http.put(`${ROOT_URL}/${id}`, employee)
    return response.data
  } catch (error: any) {
    console.log(error.response.data)
  }
}

const remove = async (id: string) => {
  try {
    const response = await http.delete(`${ROOT_URL}/${id}`)
    return response.data
  } catch (error: any) {
    console.log(error.response.data)
  }
}

const EmployeeService = {
  getAll,
  get,
  create,
  update,
  remove,
}

export default EmployeeService
