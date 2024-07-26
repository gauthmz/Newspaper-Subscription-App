import React from 'react'
import SubscribersNavbar from './SubscribersNavbar'

const AddSubscribers = () => {
    return (
        <div>
            <SubscribersNavbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 xol-xxl-6">

                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 xol-xxl-6">

                                <label htmlFor="" className="form-label">Phone no</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 xol-xxl-12">

                                <label htmlFor="" className="form-label">Address</label>
                                <textarea name="" id="" cols="10" rows="5" className="form-control"></textarea>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 xol-xxl-6">

                                <label htmlFor="" className="form-label">Pincode</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 xol-xxl-6">

                                <label htmlFor="" className="form-label">District</label>
                                <select name="" id="" className="form-control">
                                    <option value="Alappuzha">Alappuzha</option>
                                    <option value="Ernakulam">Ernakulam</option>
                                    <option value="Kozhikode">Kozhikode</option>
                                    <option value="Palakkad">Palakkad</option>
                                    <option value="Kollam">Kollam</option>
                                    <option value="Kannur">Kannur</option>
                                    <option value="Kasaragod">Kasaragod</option>
                                    <option value="Idukki">Idukki</option>
                                    <option value="Kottayam">Kottayam</option>
                                    <option value="Thrissur">Thrissur</option>
                                    <option value="Pathanamthitta">Pathanamthitta</option>
                                    <option value="Malappuram">Malappuram</option>
                                    <option value="Wayanad">Wayanad</option>
                                    <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 xol-xxl-6">


                                <label htmlFor="" className="form-label">Village Office</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 xol-xxl-6">

                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 xol-xxl-12">

                                <button className="btn btn-success">Submit</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddSubscribers