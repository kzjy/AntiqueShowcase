import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm'

class Home extends Component {
    state =  {
        numSlides: 3.5,
    }

    componentDidMount() {
        window.addEventListener("resize", this.getSlidesPerView.bind(this));
        this.getSlidesPerView();
    }

    getSlidesPerView() {
        this.setState({numSlides: ( window.innerWidth * 0.8) / 300});
    }

    render() {
        var params = {
            modules: [Pagination, Navigation],
                pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
                },
                navigation: {
                nextEl: '.swiper-button-next.swiper-button-white',
                prevEl: '.swiper-button-prev.swiper-button-white'
                },
                spaceBetween: 30
            
        };

        let images = [];
        for (var i = 1; i < 10; i++) {
            images.push(require('../resources/home/showcase' + i + '.jpeg'));
        }

        return (
            <div className="home-container" style={homeStyle}>
                {/* <h1>展示 | Showcase</h1> */}
                <div style={{dispaly: 'block', zIndex: '20', height: '0.2em', width: '100%', backgrounColor: '#333333'}}></div>
                <Swiper slidesPerView='auto' {...params}>
                    {images.map((img) => {
                        return <img src={img} alt=""/>
                    })}
                </Swiper>
            </div>
            
        );
    }
}

const homeStyle = {
    marginTop: '50px'
}


export default Home;