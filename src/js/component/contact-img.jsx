import React from 'react';
import contactImg from '../../img/me.jpg'

const ContactImg = () => {

    const imgMaxDim = '225px';

    return (
        <img
            src={contactImg}
            alt='Contact Imgage'
            className='img-fluid rounded-circle'
            style={{maxHeight: imgMaxDim, maxWidth: imgMaxDim}}
        />
    );
};

export default ContactImg;