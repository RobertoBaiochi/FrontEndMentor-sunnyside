import "./Gallery.scss";
import { GalleryPictures } from "./GalleryPictures";

import ImgMilk from "../../assets/images/desktop/image-gallery-milkbottles.jpg";
import ImgMilkMobile from "../../assets/images/mobile/image-gallery-milkbottles.jpg";
import ImgOrange from "../../assets/images/desktop/image-gallery-orange.jpg";
import ImgOrangeMobile from "../../assets/images/mobile/image-gallery-orange.jpg";
import ImgCone from "../../assets/images/desktop/image-gallery-cone.jpg";
import ImgConeMobile from "../../assets/images/mobile/image-gallery-cone.jpg";
import ImgSugar from "../../assets/images/desktop/image-gallery-sugarcubes.jpg";
import ImgSugarMobile from "../../assets/images/mobile/image-gallery-sugar-cubes.jpg";

export const Gallery = () => {
  return (
    <section id="gallery">
      <div className="gallery-container">
        <div className="gallery-grid">
          <GalleryPictures
            imgMobile={ImgMilkMobile}
            img={ImgMilk}
            alt="Milk bottles with part of the blue sky with some clouds in the background."
          />

          <GalleryPictures
            imgMobile={ImgOrangeMobile}
            img={ImgOrange}
            alt="Half an orange on top of a plate."
          />

          <GalleryPictures
            imgMobile={ImgConeMobile}
            img={ImgCone}
            alt="An ice cream cone."
          />

          <GalleryPictures
            imgMobile={ImgSugarMobile}
            img={ImgSugar}
            alt="Stacked sugar cubes."
          />
        </div>
      </div>
    </section>
  );
};
