import React from 'react';
import { compose } from 'recompose';
import { useRouter } from 'next/router'

import Navbar from "../../components/navbar";
import axios from "axios";

const Add = (props) => {
    const router = useRouter()

    const [state, setState] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: ''
    })

    const handleChange = (e) => setState({...state, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        let formData = new FormData()

        let obj = {}

        for (let [key, value] of Object.entries(state)) {
            formData.append(key, value)
            obj[key] = value
        }
        debugger

        const response = await axios.postForm("http://localhost:8080/api/v1/employees", formData)
        console.log(`response: ${JSON.stringify(response)}`)
    }
    return (
        <React.Fragment>
            <Navbar/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <button className="rounded-pill me-lg-5 mt-sm-2 mb-sm-2" style={{color: 'white', backgroundColor: '#7f29d6', width: '8rem'}} onClick={() => router.push('/')}>LIST VIEW</button>
                    </div>
                </div>
                <div className="card ms-lg-5 me-lg-5 w-75">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group row mt-2">
                                <label htmlFor="colFormLabelLg"
                                       className="col-sm-2 col-form-label col-form-label-lg">First Name</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control form-control-lg" id="firstName" name="firstName"
                                           placeholder="Please enter your first name"  onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="form-group row mt-2">
                                <label htmlFor="colFormLabelLg"
                                       className="col-sm-2 col-form-label col-form-label-lg">Last Name</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control form-control-lg" id="lastName" name="lastName"
                                           placeholder="Please enter your last name" onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="form-group row mt-2">
                                <label htmlFor="colFormLabelLg"
                                       className="col-sm-2 col-form-label col-form-label-lg">Email</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control form-control-lg" id="email" name="email"
                                           placeholder="Please enter your email" onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="form-group row mt-2">
                                <label htmlFor="colFormLabelLg"
                                       className="col-sm-2 col-form-label col-form-label-lg">Phone</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control form-control-lg" id="phone" name="phone"
                                           placeholder="Please enter your phone" onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="form-group row mt-2">
                                <label htmlFor="colFormLabelLg"
                                       className="col-sm-2 col-form-label col-form-label-lg">Gender</label>

                                <div className="col-sm-10">
                                    <select className="form-control form-control-lg" name="gender" id="gender" onChange={handleChange}>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-light float-lg-end mt-2 border-1" style={{width: '10rem', borderColor: '#7f29d6'}}>ADD</button>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default compose()(Add);