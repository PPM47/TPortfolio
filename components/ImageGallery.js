import Image from "@components/Image";
import classes from "@components/ImageGallery.module.scss"

const ImageGallery = () => {
    // const imageWidth = 100;
    // const imageHeight = 100;
    
    // const localImages = [
    //     { src: '/image/bg2.webp', alt: 'Photo 1', width: imageWidth, height: imageHeight},
    //     { src: '/image/bg1.webp', alt: 'Photo 2', width: imageWidth, height: imageHeight },
    //     { src: '/image/bg2.webp', alt: 'Photo 3', width: imageWidth, height: imageHeight},
    // ];

    const localImages = [
        { src: '/image/01.jpg', alt: 'Photo 1'},
        { src: '/image/04.jpg', alt: 'Photo 2'},
        { src: '/image/02.jpg', alt: 'Photo 3'},
        { src: '/image/03.jpg', alt: 'Photo 4'},
        { src: '/image/05.jpg', alt: 'Photo 5'},
        { src: '/image/06.jpg', alt: 'Photo 6'},
        { src: '/image/07.jpg', alt: 'Photo 7'},
        { src: '/image/08.jpg', alt: 'Photo 8'},
        { src: '/image/09.jpg', alt: 'Photo 9'},
        { src: '/image/10.jpg', alt: 'Photo 10'},
    ];

    return (
        <div className={classes.img_gallery}>
            <h1 className={classes.img_gallery_h1}>{"- Art Gallery -"}</h1>
            <Image imagess={localImages} />
        </div>
    );
}
export default ImageGallery;