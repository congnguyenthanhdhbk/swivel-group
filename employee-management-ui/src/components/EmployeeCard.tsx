import { EmployeeDTO } from 'common/dto'
import { useAppDispatch } from 'hooks/redux-hooks'
import { deleteEmployee } from 'redux/slices/employeeSlice'
import { useRouter } from 'next/router'

function renderGender(gender: string): string {
  if (gender === 'M') return 'Male'
  if (gender === 'F') return 'Female'
  return 'N/A'
}

export default function EmployeeCard(
  employee: EmployeeDTO
): React.ReactElement {
  const { email, firstName, gender, lastName, phone, photo, _id } = employee
  const dispatch = useAppDispatch()
  const router = useRouter()
  const onEditEmployee = () => {
    router.push(`/employee/edit/${_id}`)
  }
  const onRemoveEmployee = () => {
    const isConfirmed = confirm(
      `Delete this employee?: ${firstName} ${lastName}`
    )
    if (isConfirmed) {
      dispatch(deleteEmployee(_id as string))
      router.reload()
    }
  }
  return (
    <div className="card m-1">
      <img src={photo} className="card-img-top" alt="Employee Photo" />
      <div className="card-body">
        <p className="card-text fs-6">
          {firstName} {lastName}
        </p>
        <p className="card-link">{email}</p>
        <p className="card-text">{phone}</p>
        <p className="card-text">{renderGender(gender)}</p>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-success btn-sm mx-2 rounded-pill"
            onClick={onEditEmployee}
          >
            <i className="bi bi-pencil"></i>
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm mx-2 rounded-pill"
            onClick={onRemoveEmployee}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  )
}
