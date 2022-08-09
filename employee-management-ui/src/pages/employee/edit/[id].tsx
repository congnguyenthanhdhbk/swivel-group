import { NextPage } from 'next'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { wrapper } from 'redux/store'
import { getEmployee, updateEmployee } from 'redux/slices/employeeSlice'
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks'
import { useRouter } from 'next/router'

const EmployeeEditPage: NextPage = () => {
  const dispatch = useAppDispatch()
  const { employee } = useAppSelector((state) => state.employee)
  const phoneRegExp =
    /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Phone is required'),
    gender: Yup.string().required('Gender is required'),
  })
  const formOptions = {
    resolver: yupResolver(validationSchema),
    defaultValues: employee?.employee || {},
  }
  const { register, handleSubmit, formState } = useForm(formOptions)
  const { errors } = formState
  const router = useRouter()
  const onSubmit = (data) => {
    dispatch(updateEmployee({ id: employee?.employee?._id, employee: data }))
    router.push('/employee')
  }

  return (
    <div className="card p-5 m-5">
      <div className="d-flex justify-content-end mb-3">
        <button
          type="button"
          className="btn btn-sm mx-2 rounded-pill"
          style={{backgroundColor: '#9933FF', width: '10rem', color: 'white'}}
        >
          <Link href="/employee">LIST VIEW</Link>
        </button>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row g-3 mb-3">
            <div className="col-2">
              <label className="col-form-label">First Name</label>
            </div>
            <div className="col-10">
              <input
                type="text"
                {...register('firstName')}
                className={`form-control ${
                  errors.firstName ? 'is-invalid' : ''
                } col-10`}
              />
              <div className="invalid-feedback">
                {errors.firstName?.message}
              </div>
            </div>
          </div>
          <div className="row g-3 mb-3">
            <div className="col-2">
              <label className="col-form-label">Last Name</label>
            </div>
            <div className="col-10">
              <input
                type="text"
                {...register('lastName')}
                className={`form-control ${
                  errors.lastName ? 'is-invalid' : ''
                } col-10`}
              />
              <div className="invalid-feedback">{errors.lastName?.message}</div>
            </div>
          </div>
          <div className="row g-3 mb-3">
            <div className="col-2">
              <label className="col-form-label">Email</label>
            </div>
            <div className="col-10">
              <input
                type="text"
                {...register('email')}
                className={`form-control ${
                  errors.email ? 'is-invalid' : ''
                } col-10`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
          </div>
          <div className="row g-3 mb-3">
            <div className="col-2">
              <label className="col-form-label">Phone</label>
            </div>
            <div className="col-10">
              <input
                type="text"
                {...register('phone')}
                className={`form-control ${
                  errors.phone ? 'is-invalid' : ''
                } col-10`}
              />
              <div className="invalid-feedback">{errors.phone?.message}</div>
            </div>
          </div>
          <div className="row g-3 mb-3">
            <div className="col-2">
              <label className="col-form-label">Gender</label>
            </div>
            <div className="col-10">
              <select
                {...register('gender')}
                className={`form-select ${errors.gender ? 'is-invalid' : ''}`}
              >
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
              <div className="invalid-feedback">{errors.gender?.message}</div>
            </div>
          </div>
          <div className="d-flex justify-content-end mb-3">
            <button
              type="submit"
              disabled={formState.isSubmitting}
              className="btn mr-2 border-2"
              style={{borderColor: '#9933FF', backgroundColor: 'white', width: '8rem'}}
            >
              {formState.isSubmitting && (
                <span className="spinner-border spinner-border-sm mr-1"></span>
              )}
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

EmployeeEditPage.getInitialProps = wrapper.getInitialPageProps(
  (store) =>
    async ({ query }) => {
      await store.dispatch(getEmployee(query.id as string))
    }
)

export default EmployeeEditPage
