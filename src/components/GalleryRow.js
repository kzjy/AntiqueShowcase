import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm'
import GalleryItem from './GalleryItem'


class GalleryRow extends Component {

    getCollectionFromFolder() {
        let collection = [];
        for (var i = 1; i < this.props.quantity; i++) {
            collection.push({
                "img": require('../resources/gallery/' + this.props.collectionFolder + '/' + 
                    this.props.type + i + '.jpeg'),
                "info": "这里添加一些描述",
            });
        }
        return collection;
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

        let collection = this.getCollectionFromFolder();
        return (
            <div style={{padding: ''}}>
                <div style={{width: '100%', height: '1px', backgroundColor: '#a3a3a3', margin: '30px 0 10px 0'}}/>
                <h2>{this.props.title}</h2>
                <Swiper slidesPerView='auto' {...params}>
                    {collection.map((item) => {
                        return <GalleryItem info={item.info} picture={item.img}/>
                    })}
                </Swiper>

            </div>
        );
    }
}

export default GalleryRow;