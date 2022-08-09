/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import EmployeeService from 'common/services/EmployeeService'

export const getAllEmployees = createAsyncThunk(
  'employees/getAllEmployees',
  async () => {
    return await EmployeeService.getAll()
  }
)

const initialState = {
  employees: [],
  isGridMode: true,
  loading: null,
  success: null,
  message: null,
}

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setIsGridMode(state, action) {
      state.isGridMode = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      }
    },
    [getAllEmployees.pending.type]: (state: any) => {
      state.loading = true
    },
    [getAllEmployees.fulfilled.type]: (state: any, { payload }: any) => {
      state.loading = false
      state.employees = payload
      state.success = true
    },
    [getAllEmployees.rejected.type]: (state: any, { payload }: any) => {
      state.loading = false
      state.message = payload
    },
  },
})

export const { setIsGridMode } = employeesSlice.actions

export default employeesSlice.reducer
