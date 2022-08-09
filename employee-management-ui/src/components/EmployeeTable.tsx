import { EmployeeDTO, EmployeeListDTO } from 'common/dto'
import { useAppDispatch } from 'hooks/redux-hooks'
import { deleteEmployee } from 'redux/slices/employeeSlice'
import { useRouter } from 'next/router'

export default function EmployeeTable({
  employees,
}: EmployeeListDTO): React.ReactElement {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const onEditEmployee = (employee: EmployeeDTO) => {
    const { _id } = employee
    router.push(`/employee/edit/${_id}`)
  }
  const onRemoveEmployee = (employee: EmployeeDTO) => {
    const isConfirmed = confirm(
      `Delete this employee?: ${employee.firstName} ${employee.lastName}`
    )
    if (isConfirmed) {
      dispatch(deleteEmployee(employee._id as string))
      router.reload()
    }
  }
  return (
    <table className="table table-striped align-middle table-bordered">
      <thead>
        <tr style={{backgroundColor: '#33FF66'}}>
          <th scope="col">Image</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Gender</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {(employees || []).map((employee) => (
          <tr key={employee._id}>
            {/* <th scope="row">{employee.id}</th> */}
            <td>
              <img src={employee.photo} alt="Employee Photo" />
            </td>
            <td>
              <span>{employee.firstName}</span>
            </td>
            <td>
              <span>{employee.lastName}</span>
            </td>
            <td>
              <span>{employee.email}</span>
            </td>
            <td>
              <span>{employee.phone}</span>
            </td>
            <td>
              <span>{employee.gender === 'M' ? 'Male' : 'Female'}</span>
            </td>
            <td>
              <button
                type="button"
                className="btn btn-success btn-sm mx-2 rounded-pill"
                onClick={() => onEditEmployee(employee)}
              >
                <i className="bi bi-pencil"></i>
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm mx-2 rounded-pill"
                onClick={() => onRemoveEmployee(employee)}
              >
                <i className="bi bi-trash"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
