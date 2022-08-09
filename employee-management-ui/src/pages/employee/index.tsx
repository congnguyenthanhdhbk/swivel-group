/* eslint-disable @typescript-eslint/no-unused-vars */
import { EmployeeDTO } from 'common/dto'
import EmployeeCard from 'components/EmployeeCard'
import EmployeeTable from 'components/EmployeeTable'
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks'
import Link from 'next/link'
import { NextPage } from 'next/types'
import { getAllEmployees, setIsGridMode } from 'redux/slices/employeesSlice'
import { wrapper } from 'redux/store'

const EmployeeListPage: NextPage = () => {
  const dispatch = useAppDispatch()
  const { employees, isGridMode, loading } = useAppSelector(
    (state) => state.employees
  )

  const toggleViewMode = () =>
    isGridMode ? dispatch(setIsGridMode(false)) : dispatch(setIsGridMode(true))

  const renderedEmployeeCard = Array.isArray(employees?.employees)
    ? (employees?.employees || []).map((employee: EmployeeDTO) => {
        const { email, firstName, gender, lastName, phone, photo, _id } =
          employee
        return (
          <div className="col" key={_id}>
            <EmployeeCard
              _id={_id}
              firstName={firstName}
              gender={gender}
              email={email}
              lastName={lastName}
              phone={phone}
              photo={photo}
            />
          </div>
        )
      })
    : []

  const renderedEmployeeTable = (
    <EmployeeTable employees={employees?.employees || []} />
  )

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-end mb-3">
        <button
          type="button"
          className="btn btn-sm mx-2 rounded-pill"
          style={{backgroundColor: '#9933FF', color: 'white'}}
        >
          <Link href="/employee/add">ADD EMPLOYEE</Link>
        </button>
        <button
          type="button"
          className="btn btn-sm mx-2 rounded-pill"
          onClick={toggleViewMode}
          style={{backgroundColor: '#9933FF', color: 'white'}}
        >
          <i className="bi bi-grid-1x2"></i>
        </button>
      </div>
      <div>
        {isGridMode ? (
          <div className="row row-cols-4 g-4">{renderedEmployeeCard}</div>
        ) : (
          <div className="">{renderedEmployeeTable}</div>
        )}
      </div>
    </div>
  )
}

EmployeeListPage.getInitialProps = wrapper.getInitialPageProps(
  (store) => async () => {
    await store.dispatch(getAllEmployees())
  }
)

export default EmployeeListPage
