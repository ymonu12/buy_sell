import React from 'react'
import { useLocation } from 'react-router-dom'

const DashboardAdsContainer = () => {
    const path=useLocation().pathname.split('/');
    const title=path[path.length-1];
    return (
        <div className="col-lg-9 col-md-12">
            <div className="dashboard-box margin-top-0">
                <div className="headline">
                    <h3>
                        <i className="icon-feather-layers" /> {title}
                    </h3>
                </div>
                <div className="content with-padding">
                    <div className="table-responsive">
                        <table id="js-table-list" className="basic-table dashboard-box-list">
                            <tbody>
                                <tr>
                                    <th className="big-width">Ads</th>
                                    <th className="small-width">Status</th>
                                    <th className="small-width">Action</th>
                                </tr>
                                <tr>
                                    <td colSpan={3} className="text-center">
                                        Nothing found
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {/* Pagination */}
                            <div className="pagination-container margin-top-20"></div>
                        </div>
                    </div>
                </div>
            </div>
            <center>
                <div className="google-ads-728x90 margin-top-30 margin-bottom-30 my-4">
                    <img
                        src="https://via.placeholder.com/720x90"
                        width="100%"
                        height="100%"
                    />
                </div>
            </center>
        </div>

    )
}

export default DashboardAdsContainer