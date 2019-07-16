import React, {Component} from 'react';
import GalleryRow from "./GalleryRow";
import InfiniteScroll from 'react-infinite-scroller';


class Gallery extends Component {



    render() {
        return (
            <div>
                <InfiniteScroll
                    pageStart={0}
                    dataLenght='3'
                    // loadMore={loadFunc}
                    hasMore={true || false}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                >
                    <h1 >收藏 | Gallery</h1>
                <GalleryRow title="古钟 | Clocks" type="clock" collectionFolder="clocks" quantity="11" />
                <GalleryRow title="留声机 | Gramophones" type="gramophone" collectionFolder="gramophones" quantity="5"/>
                <GalleryRow title="铜像 | Statue" type="statue" collectionFolder="statues" quantity="5"/>
                <GalleryRow title="玉器 | Jade" type="jade" collectionFolder="jade" quantity="23"/>
                </InfiniteScroll>
                
            </div>
        );
    }
}

export default Gallery;