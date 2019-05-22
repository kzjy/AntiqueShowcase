import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm'
import GalleryItem from './GalleryItem'


class GalleryRow extends Component {

    getCollectionFromFolder() {
        let collection = [];
        let info = require('../resources/gallery_info/' + this.props.collectionFolder + '.json');
        for (var i = 0; i < this.props.quantity; i++) {
            collection.push({
                "id": info[i].id,
                "img": require('../resources/gallery/' + this.props.collectionFolder + '/' + 
                    this.props.type + ' (' +(i + 1) + ').jpeg'),
                "info": info[i].info,
            });
        }
        return collection;
    }

    render() {
        var params = {
            modules: [Pagination, Navigation],
            // centeredSlides: true,
            slidesPerView: 'auto',
            // loop: true,
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

        let collection = this.getCollectionFromFolder();
        return (
            <div style={{padding: ''}}>
                <div style={{width: '100%', height: '1px', backgroundColor: '#a3a3a3', margin: '30px 0 10px 0'}}/>
                <h2>{this.props.title}</h2>
                <Swiper {...params}>
                    {collection.map((item) => {
                        return <GalleryItem key={item.id} info={item.info} picture={item.img}/>
                    })}
                </Swiper>

            </div>
        );
    }
}

export default GalleryRow;