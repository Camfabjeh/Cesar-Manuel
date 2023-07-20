import React from "react";
import PropTypes from "prop-types";

function PictureCard({ cls, src, alt }) {
  return (
    <div className="">
      <div className="p-6">
        <img
          onContextMenu={(e) => e.preventDefault()}
          className={cls}
          src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${src}`}
          alt={alt}
        />
      </div>
    </div>
  );
}

PictureCard.propTypes = {
  cls: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

PictureCard.defaultProps = {
  cls: "",
  src: "",
  alt: "",
};

export default PictureCard;
