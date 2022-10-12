import "./ProductsContent.scss";

import { useInView } from 'react-intersection-observer';

export const ProductsContent = (props) => {
  const { ref: productsRef, inView: productsIsVisible } = useInView();

  const ProductsStyle = {
    color: props.color,
  };

  return (
    <div ref={productsRef}
      className={`products-col init-hidden ${productsIsVisible ? 'init-hidden-off' : '' }`} 
      style={ProductsStyle}>
      <div className="products-img">
        <picture>
          <source media="(max-width: 400px)" srcSet={props.imageMobile} />
          <img src={props.image} alt="" aria-hidden={true} />
        </picture>
      </div>
      <div className="products-text">
        <h3 className="products-title">{props.title}</h3>
        <p className="products-content">{props.text}</p>
      </div>
    </div>
  );
};
