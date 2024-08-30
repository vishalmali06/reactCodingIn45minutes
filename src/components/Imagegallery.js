import React, { useState } from 'react';

function ImageGallery() {
    const images = [
        'https://sirv.sirv.com/website/02.jpg?canvas.width=70&canvas.height=70&scale.option=fit&w=70&h=70',
        'https://sirv.sirv.com/website/01.jpg?canvas.width=70&canvas.height=70&scale.option=fit&w=70&h=70',
        'https://sirv.sirv.com/website/05.jpg?canvas.width=70&canvas.height=70&scale.option=fit&w=70&h=70',
    ];
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            <div className="image-grid">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index}`}
                        onClick={() => setSelectedImage(image)}
                    />
                ))}
            </div>
            {selectedImage && (
                <div className="image-modal">
                    <img src={selectedImage} alt="Selected" />
                    <button onClick={() => setSelectedImage(null)}>Close</button>
                </div>
            )}
        </div>
    );
}

export default ImageGallery;
