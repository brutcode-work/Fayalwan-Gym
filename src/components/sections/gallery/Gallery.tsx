import HeaderLabel from "@/components/ui/HeaderLabel";
import Image from "next/image";
import "./Gallery.css";

const Gallery = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-section-header">
        <HeaderLabel label="Our Family" fontType="sans" />
        <h2>Our Family</h2>
      </div>

      <div className="gallery-media-container">
        <div className="col col-1">
          <div className="gallery-media-img">
            <Image
              src="https://i.pinimg.com/736x/6c/e8/ac/6ce8ac43ac31770f3cee00a9dedd0ae9.jpg"
              alt="gallery-1"
              fill
              className="img"
            />
          </div>
          <div className="gallery-media-img">
            <Image
              src="https://i.pinimg.com/1200x/eb/ad/a3/ebada3bda088d6396479007ed8bb90d2.jpg"
              alt="gallery-1"
              fill
              className="img"
            />
          </div>
          <div className="gallery-media-img">
            <Image
              src="https://i.pinimg.com/1200x/04/71/7f/04717fc3f6d15dc1a8ace1c6bf5dd67f.jpg"
              alt="gallery-1"
              fill
              className="img"
            />
          </div>
        </div>
        <div className="col col-2">
          <div className="gallery-media-img">
            <Image
              src="https://i.pinimg.com/736x/6c/e8/ac/6ce8ac43ac31770f3cee00a9dedd0ae9.jpg"
              alt="gallery-1"
              fill
              className="img"
            />
          </div>
          <div className="gallery-media-img">
            <Image
              src="https://i.pinimg.com/1200x/eb/ad/a3/ebada3bda088d6396479007ed8bb90d2.jpg"
              alt="gallery-1"
              fill
              className="img"
            />
          </div>
          <div className="gallery-media-img">
            <Image
              src="https://i.pinimg.com/1200x/04/71/7f/04717fc3f6d15dc1a8ace1c6bf5dd67f.jpg"
              alt="gallery-1"
              fill
              className="img"
            />
          </div>
        </div>
        <div className="col col-3">
          <div className="gallery-media-img">
            <Image
              src="https://i.pinimg.com/736x/6c/e8/ac/6ce8ac43ac31770f3cee00a9dedd0ae9.jpg"
              alt="gallery-1"
              fill
              className="img"
            />
          </div>
          <div className="gallery-media-img">
            <Image
              src="https://i.pinimg.com/1200x/eb/ad/a3/ebada3bda088d6396479007ed8bb90d2.jpg"
              alt="gallery-1"
              fill
              className="img"
            />
          </div>
          <div className="gallery-media-img">
            <Image
              src="https://i.pinimg.com/1200x/04/71/7f/04717fc3f6d15dc1a8ace1c6bf5dd67f.jpg"
              alt="gallery-1"
              fill
              className="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
