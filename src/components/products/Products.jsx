import "./Products.scss";
import { ProductsContent } from "./ProductsContent";
import GraphicImg from "../../assets/images/desktop/image-graphic-design.jpg";
import GraphicImgMobile from "../../assets/images/mobile/image-graphic-design.jpg";
import PhotographImg from "../../assets/images/desktop/image-photography.jpg";
import PhotographImgMobile from "../../assets/images/mobile/image-photography.jpg";

export const Products = () => {
  const yellow = "hsl(167, 40%, 24%)";
  const salmon = "hsl(198, 62%, 26%)";

  return (
    <section id="products">
      <div className="products__container">
        <div className="products__row">
          <ProductsContent
            imageMobile={GraphicImgMobile}
            image={GraphicImg}
            title="Graphic design"
            text="Great design makes you memorable. We deliver artwork that underscores your 
                       brand message and captures potential clients attention."
            color={yellow}
          />

          <ProductsContent
            imageMobile={PhotographImgMobile}
            image={PhotographImg}
            title="Photography"
            text="Increase your credibility by getting the most stunning, 
                            high-quality photos that improve your business image."
            color={salmon}
          />
        </div>
      </div>
    </section>
  );
};
