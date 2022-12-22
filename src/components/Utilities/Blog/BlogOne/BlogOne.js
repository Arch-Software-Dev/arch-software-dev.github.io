import React from 'react';
import ReactDOM from "react-dom";
import bgImg from '../../../../assets/img/bg/blog-bg.png';
import blogImg1 from '../../../../assets/img/blog/inner_b1.png';
import blogImg2 from '../../../../assets/img/blog/inner_b2.png';
import blogImg3 from '../../../../assets/img/blog/inner_b3.png';
import BlogCard from "../BlogCard";

const blogData = [
    {
        id: '1',
        thumb: blogImg1,
        title: 'Blockchain Applications',
        excerpt: 'Manufacturing supply chains~Inventory sourcing~Secure voting~Secure multi-party contract applications~Coin mining operation set up & consulting~ICO initialization'
    },
    {
        id: '2',
        thumb: blogImg2,
        title: 'NFT Construction',
        excerpt: 'One of a kind digital artwork for creators~Gaming applications~WAX smart contracts'
    },
    {
        id: '3',
        thumb: blogImg3,
        title: 'VR/AR construction',
        excerpt: 'Unity game development~Customized training VR training for companies to reduce training costs and increase skills adoption. (Manufacturing assembly training, specialized labor, safety training)~Educational programs for disability and/or secondary education'
    },
];
const BlogOne = () => {
    return (
        <section id="blog" className="blog-area  p-relative pt-120 pb-120 fix" style={{ background: `url(${bgImg}) no-repeat right bottom` }}>
            <div className="container">
                <div className="row">
					<div class="row justify-content-center col-12"><div class="col-xl-12 col-lg-12"><h2 class="service_heading">Services</h2></div></div>
                    <BlogCard blogData={blogData} />
                </div>
            </div>
        </section>
    )
}
export default BlogOne;