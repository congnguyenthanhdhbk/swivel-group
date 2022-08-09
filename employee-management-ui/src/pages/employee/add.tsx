import { yupResolver } from '@hookform/resolvers/yup'
import { useAppDispatch } from 'hooks/redux-hooks'
import { NextPage } from 'next'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { createEmployee } from 'redux/slices/employeeSlice'
import * as Yup from 'yup'
import { useRouter } from 'next/router'

const EmployeeAddPage: NextPage = () => {
  const phoneRegExp =
    /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('First Name is required')
      .min(6, 'Min 6 characters')
      .max(10, 'Max 10 characters')
      .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
    lastName: Yup.string()
      .required('Last Name is required')
      .min(6, 'Min 6 characters')
      .max(10, 'Max 10 characters')
      .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Phone is required'),
    gender: Yup.string().required('Gender is required'),
  })
  const formOptions = {
    resolver: yupResolver(validationSchema),
  }
  const { register, handleSubmit, formState } = useForm(formOptions)
  const { errors } = formState

  const dispatch = useAppDispatch()
  const router = useRouter()
  const onSubmit = (data) => {
    dispatch(createEmployee(data))
    router.push('/employee')
  }

  return (
    <div className="card p-5 m-5">
      <div className="d-flex justify-content-end mb-3">
        <button
          type="button"
          className="btn btn-sm mx-2 rounded-pill"
          style={{backgroundColor: '#9933FF', width: '8rem', color: 'white'}}
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
              style={{backgroundColor: 'white', width: '8rem', borderColor: '#9933FF'}}
            >
              {formState.isSubmitting && (
                <span className="spinner-border spinner-border-sm mr-1"></span>
              )}
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EmployeeAddPage
