import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "../../css/Lightbox.css";
import imgOne from "../../images/concert-1.jpg";
import imgTwo from "../../images/concert-2.jpg";
import imgFour from "../../images/concert-4.jpg";
import imgFive from "../../images/concert-5.jpg";
import imgSix from "../../images/concert-6.jpg";
import imgSeven from "../../images/concert-7.jpg";

const Gallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [images] = useState([
    imgOne,
    imgTwo,
    imgSeven,
    imgFour,
    imgFive,
    imgSix,
  ]);

  const renderImages = () => {
    let photoIndexTemp = -1;

    return images.map((imageSrc) => {
      photoIndexTemp++;
      const privateKey = photoIndexTemp;
      return (
        <MDBCol md="4" key={photoIndexTemp}>
          <figure style={{ cursor: "pointer" }}>
            <img
              src={imageSrc}
              alt="Gallery"
              className="img-fluid"
              onClick={() => {
                setPhotoIndex(privateKey);
                setIsOpen(true);
              }}
            />
          </figure>
        </MDBCol>
      );
    });
  };

  return (
    <div
      id="gallery"
      style={{ backgroundColor: "#fff", padding: "10px 0 40px 0" }}
    >
      <MDBContainer className="mt-5">
        <h2
          className="font-weight-bold"
          style={{
            // fontSize: "30px",
            marginBottom: "80px",
            fontSize: "3vw",
            textAlign: "center",
            color: "#1C2331",
          }}
        >
          TOUR GALLERY
        </h2>
        <div className="mdb-lightbox no-margin">
          <MDBRow>{renderImages()}</MDBRow>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
          />
        )}
      </MDBContainer>
    </div>
  );
};

export default Gallery;
