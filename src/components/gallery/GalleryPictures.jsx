import { useInView } from 'react-intersection-observer';

export const GalleryPictures = (props) => {
  const { ref: galleryRef , inView: galleryIsVisible } = useInView();

  return (
    <div ref={galleryRef} 
      className={`gallery-content init-hidden ${galleryIsVisible ? 'init-hidden-off' : ''}`}>
      <picture>
        <source media="(max-width: 768px)" srcSet={props.imgMobile} />
        <img src={props.img} alt={props.alt} />
      </picture>
    </div>
  );
};
