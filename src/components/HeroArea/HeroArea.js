import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../images/logos/frame.png';
import Spinner from 'react-bootstrap/Spinner'
import { useSpring, animated } from 'react-spring'
import Typical from 'react-typical'
import './HeroArea.css';



const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 240}px,${y / 240}px,0)`
const trans2 = (x, y) => `translate3d(${x / 200}px,${y / 200}px,0)`
const trans3 = (x, y) => `translate3d(${x / 160}px,${y / 160}px,0)`
const trans4 = (x, y) => `translate3d(${x / 120}px,${y / 120}px,0)`
const trans5 = (x, y) => `translate3d(${x / 80}px,${y / 80}px,0)`
const trans6 = (x, y) => `translate3d(${x / 40}px,${y / 40}px,0)`

const HeroArea = () => {

    const [props, set] = useSpring(() => ({ xy: [0, 0] }))

    return (
        <section style={{ height: '600px' }} className='w-100 hero-main'>
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-10 col-sm-10 col-md-10 col-lg-4 offset-md-1">
                    <h1 className="mb-3 text-login">Let’s Grow Your<br /> Brand To The<br /><Typical
                        steps={['Next', 1000, 'Next Level', 500]}
                        loop={Infinity}
                        wrapper="h1" />
                    </h1>
                <p className="pr-5 mr-5 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <Link to="/dashboard" className="btn btn-login text-white px-3">
                        <div className="d-flex align-items-center">
                            <Spinner
                            className='mr-2'
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            />
                            <span className="">Hire us</span>
                        </div>
                </Link>
            </div>
                <animated.div className="col-10 col-sm-10 col-md-10 col-lg-6"
                    onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
                    style={{
                        transform: props.xy.interpolate(trans1),
                        transform: props.xy.interpolate(trans2),
                        transform: props.xy.interpolate(trans3),
                        transform: props.xy.interpolate(trans4),
                        transform: props.xy.interpolate(trans5),
                        transform: props.xy.interpolate(trans6)
                    }}
                >
                <img className="img-fluid hero-image" src={heroImage} alt="Hero"/>
            </animated.div>
            </div>
        </section>
    );
};

export default HeroArea;

