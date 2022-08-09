/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import EmployeeService from 'common/services/EmployeeService'
import { EmployeeDTO } from 'common/dto'

export const createEmployee = createAsyncThunk(
  'employee/createEmployee',
  async (employee: EmployeeDTO) => {
    return await EmployeeService.create(employee)
  }
)

export const getEmployee = createAsyncThunk(
  'employee/getEmployee',
  async (id: string) => {
    return EmployeeService.get(id)
  }
)

export const updateEmployee = createAsyncThunk(
  'employee/updateEmployee',
  async ({ id, employee }: { id: string; employee: EmployeeDTO }) => {
    return EmployeeService.update(id, employee)
  }
)

export const deleteEmployee = createAsyncThunk(
  'employee/deleteEmployee',
  async (id: string) => {
    return EmployeeService.remove(id)
  }
)

const initialState = {
  employee: {},
  loading: null,
  success: null,
  message: null,
}

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      }
    },
    [createEmployee.pending.type]: (state: any) => {
      state.loading = true
    },
    [createEmployee.fulfilled.type]: (state: any, { payload }: any) => {
      state.loading = false
      state.employee = payload
      state.success = true
    },
    [createEmployee.rejected.type]: (state: any, { payload }: any) => {
      state.loading = false
      state.message = payload
    },
    [getEmployee.pending.type]: (state: any) => {
      state.loading = true
    },
    [getEmployee.fulfilled.type]: (state: any, { payload }: any) => {
      state.loading = false
      state.employee = payload
      state.success = true
    },
    [getEmployee.rejected.type]: (state: any, { payload }: any) => {
      state.loading = false
      state.message = payload
    },
    [updateEmployee.pending.type]: (state: any) => {
      state.loading = true
    },
    [updateEmployee.fulfilled.type]: (state: any, { payload }: any) => {
      state.loading = false
      state.employee = payload
      state.success = true
    },
    [updateEmployee.rejected.type]: (state: any, { payload }: any) => {
      state.loading = false
      state.message = payload
    },
    [deleteEmployee.pending.type]: (state: any) => {
      state.loading = true
    },
    [deleteEmployee.fulfilled.type]: (state: any, { payload }: any) => {
      state.loading = false
      state.success = payload
    },
    [deleteEmployee.rejected.type]: (state: any, { payload }: any) => {
      state.loading = false
      state.message = payload
    },
  },
})

export default employeeSlice.reducer
