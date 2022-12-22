import { Link } from 'react-router-dom';
import bgImg from '../../../assets/img/bg/divider-bg.png';
const ctaData = {
    bg: bgImg,
    title: 'BEGIN PROJECT',
    description: 'Arch Games brings over 30 years of experience to smart contracts, NFT construction and blockchain applications. Lowering costs, increasing application utility and consumer engagement, Arch brings skilled developers to the forefront of agile methodologies to deliver high quality products to its clients.',
    btn: 'Join Now',
}
const Cta = () => {
    const { bg, title, description, btn } = ctaData;
    return (
        <section id="graph" className="features-area pt-120 pb-120" style={{ background: `url(${bg}) no-repeat` }}>
            <div className="container">
                <div className="row align-items-center text-center">
                    <div className="col-lg-12 col-md-12">
                        <div className="section-title cta-title  mb-20 wow fadeInUp animated" data-animation="fadeInRight" data-delay=".4s">
                            <div className="row justify-content-center">
                                <div className="col-xl-6 col-lg-8">
                                    <h2>{title}</h2>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-11">
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="slider-btn">
                            <Link to="https://docs.google.com/forms/d/e/1FAIpQLScHiVaf7WHQVXEk-arCjFqxGP4LJOAqKU-PqCRpZZUBCoSVbA/viewform" className="btn ss-btn mt-20 wow fadeInDown animated" data-animation="fadeInRight" data-delay=".4s">{btn}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cta;