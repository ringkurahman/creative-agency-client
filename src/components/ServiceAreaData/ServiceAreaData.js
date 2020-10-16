import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import './ServiceAreaData.css';


    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const ServiceAreaData = ({ service }) => {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 my-2 text-center">
            <Link to='/dashboard'>
                <animated.div className={`card1 card align-items-center p-3 service-card background-${service.title.slice(0, 8)}`}
                 onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
                >
                <img style={{ width: '40px' }} className="card-img-top" src={`data:image/png;base64,${service.image.img}`} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title text-dark">{service.title}</h5>
                    <p className="card-text text-muted">{service.desc}</p>
                </div>
            </animated.div>
            </Link>
        </div>
    );
};

export default ServiceAreaData;

