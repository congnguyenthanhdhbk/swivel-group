import React from 'react';
import { compose } from 'recompose';
import { useRouter } from 'next/router'

import Navbar from "../components/navbar";

const Add = (props) => {
    const router = useRouter()
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
                        <form>
                            <div className="form-group row mt-2">
                                <label htmlFor="colFormLabelLg"
                                       className="col-sm-2 col-form-label col-form-label-lg">First Name</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control form-control-lg" id="colFormLabelLg"
                                           placeholder="col-form-label-lg" />
                                </div>
                            </div>
                            <div className="form-group row mt-2">
                                <label htmlFor="colFormLabelLg"
                                       className="col-sm-2 col-form-label col-form-label-lg">Last Name</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control form-control-lg" id="colFormLabelLg"
                                           placeholder="col-form-label-lg" />
                                </div>
                            </div>
                            <div className="form-group row mt-2">
                                <label htmlFor="colFormLabelLg"
                                       className="col-sm-2 col-form-label col-form-label-lg">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control form-control-lg" id="colFormLabelLg"
                                           placeholder="col-form-label-lg" />
                                </div>
                            </div>
                            <div className="form-group row mt-2">
                                <label htmlFor="colFormLabelLg"
                                       className="col-sm-2 col-form-label col-form-label-lg">Phone</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control form-control-lg" id="colFormLabelLg"
                                           placeholder="col-form-label-lg" />
                                </div>
                            </div>
                            <div className="form-group row mt-2">
                                <label htmlFor="colFormLabelLg"
                                       className="col-sm-2 col-form-label col-form-label-lg">Gender</label>

                                <div className="col-sm-10">
                                    <select className="form-control form-control-lg">
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