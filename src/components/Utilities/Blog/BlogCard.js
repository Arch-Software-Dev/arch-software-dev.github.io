import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blogData }) => {
    return (
        <Fragment>
            {
                blogData.map(data => {
                    const { id, thumb, title, excerpt } = data;
					var excerpt_li = excerpt.split('~').map(function (excerpt, index) {
							return <li key={index}>{ excerpt }</li>; 
						});
                    return (
                        <div className="col-lg-4 col-md-6" key={id}>
                            <div className="single-post2 mb-30  p-relative wow fadeInDown animated" data-animation="fadeInRight" data-delay=".4s">
                                <div className="blog-thumb2">
                                    
                                        <img src={thumb} alt="img" />
                                   
                                </div>
                                <div className="blog-content2">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h4>{title}</h4>
                                              
                                            <ul id="services">{excerpt_li}</ul>
											
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </Fragment>
    )
}
export default BlogCard;