import React, { useEffect, useState} from 'react';

const ContactImg = () => {

    const imgMaxDim = '225px';
    const [dogImg, setDogImg] = useState('');

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(obj => setDogImg(obj.message));
    }, []);

    return (
        <img
            src={dogImg}
            alt='Contact Imgage'
            className='img-fluid rounded-circle'
            style={{maxHeight: imgMaxDim, maxWidth: imgMaxDim}}
        />
    );
};

export default ContactImg;