import React, {Component} from 'react';

class GalleryItem extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="swiper-slide" style={{position: 'relative'}}>
                <img style={{height: '500px', width: 'auto', marginBottom: '20px'}}
                src={this.props.picture} alt=""/>
                <p style={labelStyle}>{this.props.info}</p>
                <div></div>
            </div>
        );
    }
}

const labelStyle = {
    padding: '15px',
    position: 'absolute',
    top: '80%',
    width: '100%',
    height:'20%',
    color: 'white',
    background: 'linear-gradient(0deg, rgba(37,37,37,1) 0%, rgba(48,48,48,1) 61%, rgba(61,61,61,1) 87%, rgba(255,255,255,0) 100%)',
}

export default GalleryItem;