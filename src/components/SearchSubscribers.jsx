import React from 'react'
import SubscribersNavbar from './SubscribersNavbar'

const SearchSubscribers = () => {
    return (
        <div>
            <SubscribersNavbar />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <h5>Subscriber Search</h5>
                        <br />
                        <div className="row g-3">

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button type="button" class="btn btn-primary">Search</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchSubscribers