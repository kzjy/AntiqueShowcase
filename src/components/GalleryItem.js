import React, {Component} from 'react';

class GalleryItem extends Component {

    render() {
        return (
            <div className="swiper-slide" style={{position: 'relative'}}>
                <img style={{width:'inherit', height:'auto', marginBottom: '20px'}}
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
    // backgroundImage: 'linear-gradient(rgba(255,255,255,0), rgba(0,0,0,1))'
    // background: rgb(37,37,37);
    background: 'linear-gradient(0deg, rgba(37,37,37,1) 0%, rgba(48,48,48,1) 61%, rgba(61,61,61,1) 87%, rgba(255,255,255,0) 100%)',
}

export default GalleryItem;