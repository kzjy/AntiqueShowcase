import React, {Component} from 'react';
import GalleryRow from "./GalleryRow";


class Gallery extends Component {



    render() {
        return (
            <div>
                <h1 >收藏 | Gallery</h1>
                <GalleryRow title="古钟 | Clocks" type="clock" collectionFolder="clocks" quantity="11" ></GalleryRow>
                <GalleryRow title="留声机 | Gramophones" type="gramophone" collectionFolder="gramophones" quantity="5" ></GalleryRow>
                <GalleryRow title="铜像 | Statue" type="statue" collectionFolder="statue" quantity="5" ></GalleryRow>
            </div>
        );
    }
}

export default Gallery;