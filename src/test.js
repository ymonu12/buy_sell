import React from 'react'

const Test = () => {
    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade position-absolute" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Select Category</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div
                                id="tg-dbcategoriesslider"
                                className="tg-dbcategoriesslider tg-categories owl-carousel select-category post-option modal-body"
                            >
                                <div
                                    className="tg-category hover-shadow"
                                    data-ajax-catid={8}
                                    data-ajax-action="https://buynsell.mchamp.xyz/posts/getsubcatbyidList"
                                    data-cat-name="Entertainment"
                                >
                                    <div className="tg-categoryholder ">
                                        <div className="margin-bottom-10">
                                            <img src="https://img.icons8.com/dusk/64/000000/dancing.png" />
                                        </div>
                                        <h6>
                                            <a href="javascript:void()">Entertainment</a>
                                        </h6>
                                    </div>
                                </div>
                                <div
                                    className="tg-category"
                                    data-ajax-catid={7}
                                    data-ajax-action="https://buynsell.mchamp.xyz/posts/getsubcatbyidList"
                                    data-cat-name="Services"
                                >
                                    <div className="tg-categoryholder">
                                        <div className="margin-bottom-10">
                                            <img src="https://img.icons8.com/dusk/64/000000/services.png" />
                                        </div>
                                        <h6>
                                            <a href="javascript:void()">Services</a>
                                        </h6>
                                    </div>
                                </div>
                                <div
                                    className="tg-category"
                                    data-ajax-catid={6}
                                    data-ajax-action="https://buynsell.mchamp.xyz/posts/getsubcatbyidList"
                                    data-cat-name="Jobs"
                                >
                                    <div className="tg-categoryholder">
                                        <div className="margin-bottom-10">
                                            <img src="https://img.icons8.com/dusk/64/000000/find-matching-job.png" />
                                        </div>
                                        <h6>
                                            <a href="javascript:void()">Jobs</a>
                                        </h6>
                                    </div>
                                </div>
                                <div
                                    className="tg-category"
                                    data-ajax-catid={5}
                                    data-ajax-action="https://buynsell.mchamp.xyz/posts/getsubcatbyidList"
                                    data-cat-name="Home & Lifestyle"
                                >
                                    <div className="tg-categoryholder">
                                        <div className="margin-bottom-10">
                                            <img src="https://img.icons8.com/dusk/64/000000/home-page.png" />
                                        </div>
                                        <h6>
                                            <a href="javascript:void()">Home &amp; Lifestyle</a>
                                        </h6>
                                    </div>
                                </div>
                                <div
                                    className="tg-category"
                                    data-ajax-catid={4}
                                    data-ajax-action="https://buynsell.mchamp.xyz/posts/getsubcatbyidList"
                                    data-cat-name="Real Estate"
                                >
                                    <div className="tg-categoryholder">
                                        <div className="margin-bottom-10">
                                            <img src="https://img.icons8.com/dusk/64/000000/real-estate.png" />
                                        </div>
                                        <h6>
                                            <a href="javascript:void()">Real Estate</a>
                                        </h6>
                                    </div>
                                </div>
                                <div
                                    className="tg-category"
                                    data-ajax-catid={3}
                                    data-ajax-action="https://buynsell.mchamp.xyz/posts/getsubcatbyidList"
                                    data-cat-name="Electronics & Appliances"
                                >
                                    <div className="tg-categoryholder">
                                        <div className="margin-bottom-10">
                                            <img src="https://img.icons8.com/dusk/64/000000/tv.png" />
                                        </div>
                                        <h6>
                                            <a href="javascript:void()">Electronics &amp; Appliances</a>
                                        </h6>
                                    </div>
                                </div>
                                <div
                                    className="tg-category"
                                    data-ajax-catid={2}
                                    data-ajax-action="https://buynsell.mchamp.xyz/posts/getsubcatbyidList"
                                    data-cat-name="Mobiles & Tablets"
                                >
                                    <div className="tg-categoryholder">
                                        <div className="margin-bottom-10">
                                            <img src="https://img.icons8.com/dusk/64/000000/two-smartphones.png" />
                                        </div>
                                        <h6>
                                            <a href="javascript:void()">Mobiles &amp; Tablets</a>
                                        </h6>
                                    </div>
                                </div>
                                <div
                                    className="tg-category"
                                    data-ajax-catid={1}
                                    data-ajax-action="https://buynsell.mchamp.xyz/posts/getsubcatbyidList"
                                    data-cat-name="Cars & Bikes"
                                >
                                    <div className="tg-categoryholder">
                                        <div className="margin-bottom-10">
                                            <img src="https://img.icons8.com/dusk/64/000000/traffic-jam.png" />
                                        </div>
                                        <h6>
                                            <a href="javascript:void()">Cars &amp; Bikes</a>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Test