import React, {Component} from 'react';
import GalleryRow from './GalleryRow';

class Home extends Component {

    render() {
        return (
            <div className="home-container" style={homeStyle}>
                {/* <h1>展示 | Showcase</h1> */}
                <div style={{dispaly: 'block', zIndex: '20', height: '0.2em', width: '100%', backgrounColor: '#333333'}}></div>
                <GalleryRow title="精品 | Special" type="special" collectionFolder="special" quantity="9" ></GalleryRow>
            </div>
            
        );
    }
}

const homeStyle = {
    marginTop: '50px'
}


export default Home;