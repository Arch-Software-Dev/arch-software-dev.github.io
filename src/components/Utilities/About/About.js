import { Link } from 'react-router-dom';
import aboutBgImg from '../../../assets/img/bg/about-bg.png';
import experienceImg from '../../../assets/img/features/experience-years.png';
import features1 from '../../../assets/img/features/about-home-1.jpg';
import features2 from '../../../assets/img/features/about-img2.jpg';
import features3 from '../../../assets/img/features/about-img3.png';
import SectionTitle from '../SectionTitle/SectionTitle';

const About = () => {
    return (
        <section id="about" className="about-area about-p pt-70 pb-140 p-relative" style={{ background: `url(${aboutBgImg}) no-repeat center center / cover` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="s-about-img p-relative wow fadeInLeft" data-wow-delay=".4s">
                            <div className="experience-years wow fadeInDown" data-wow-delay=".4s">
                                <img src={experienceImg} alt="Experience Years" />
                                <span>{'30'}</span>
                            </div>
                            <img src={features1} alt="About Image" />
                             {/*<div className="about-image2 wow fadeInUp" data-wow-delay=".4s">
                                <img src={features2} alt="About Image" />
                            </div>*/}
                            <div className="about-image3 wow fadeInUp" data-wow-delay=".6s">
                                <img src={features3} alt="About Image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="about-content s-about-content wow fadeInRight" data-wow-delay=".4s">
                            <SectionTitle
                                titlefirst={'About'}
                                titleSec={'Us'}
                                className={'about-title second-title'}
                            />
                            <p>Arch Games brings virtual reality to training for essential technical skills. Lowering costs, increasing skills adoption and engagement with users, virtual and mixed reality training programs will be the way forward in bridging the essential skills gap in the workforce.</p>
                            <p>The Arch Games team was formed to utilize a technology with immense potential to fulfill the need for smart contract & NFT services.</p>
 							<p>The Arch team is made of graphic designers, blockchain developers and programmatic experts using agile methodologies to build an iterative process for each deliverable. With over 30 years of development experience, our team can help you implement smart contract deliverables for any application.</p>
                            
                            <div className="slider-btn2 mt-30">
                                <Link to={'/about'} className="btn ss-btn">{'FIND OUT MORE'}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;