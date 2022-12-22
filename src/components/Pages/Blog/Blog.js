import React from "react";
import { Link } from "react-router-dom";
import PostPagination from "../../Utilities/Blog/ArchivePost/PostPagination";
import SideBar from "../../Utilities/Blog/ArchivePost/SideBar";
import Breadcrumb from "../../Utilities/Breadcrumb/Breadcrumb";

import postThumb1 from '../../../assets/img/blog/inner_b1.png';
import postThumb2 from '../../../assets/img/blog/inner_b2.png';
import postThumb3 from '../../../assets/img/blog/inner_b3.png';

const psots = [
   {
        id: '1',
        thumb: postThumb1,
        psotTitle: 'Blockchain Applications',
        excerpt: 'Manufacturing supply chains~Inventory sourcing~Secure voting~Secure multi-party contract applications~Coin mining operation set up & consulting~ICO initialization'
    },
    {
        id: '2',
        thumb: postThumb2,
        psotTitle: 'NFT Construction',
        excerpt: 'One of a kind digital artwork for creators~Gaming applications~WAX smart contracts'
    },
    {
        id: '3',
        thumb: postThumb3,
        psotTitle: 'VR/AR construction',
        excerpt: 'Unity game development~Customized training VR training for companies to reduce training costs and increase skills adoption. (Manufacturing assembly training, specialized labor, safety training)~Educational programs for disability and/or secondary education'
    },
    
]

const BlogPost = () => {

    return (
        <React.Fragment>
            <Breadcrumb pageTitle={'Services'} currentPage={'Services'} />

            <section className="inner-blog pb-90">
                <div className="container">
                    <div className="row">
                       
                            {
                                psots.map((data, index) => {
                                    const { thumb,  psotTitle, excerpt } = data;
									var excerpt_li = excerpt.split('~').map(function (excerpt, index) {
										return <li key={index}>{ excerpt }</li>; 
									});
                                    return (
                                       
										<div className="col-lg-4 col-md-6">
                            <div className="single-post2 mb-30  p-relative wow fadeInDown animated" data-animation="fadeInRight" data-delay=".4s">
                                <div className="blog-thumb2">
                                    
                                        <img src={thumb} alt="img" />
                                   
                                </div>
                                <div className="blog-content2">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h4>{psotTitle}</h4>
                                              
                                            <ul id="services">{excerpt_li}</ul>
											
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                                    );
                                })
                            }


                            
                       
                        
                    </div>
                </div>
            </section>
        </React.Fragment>
    );

}
export default BlogPost;