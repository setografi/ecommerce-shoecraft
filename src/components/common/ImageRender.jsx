import React, { useState, useEffect } from "react";

const ImageRender = ({
  src,
  alt,
  className,
  initialQuality = 0.3,
  maxQuality = 1,
}) => {
  const [quality, setQuality] = useState(initialQuality);
  const [imageSrc, setImageSrc] = useState(
    `${src}?quality=${initialQuality * 100}`
  );

  useEffect(() => {
    // Check connection and adjust quality accordingly
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    let connectionType = connection?.effectiveType || "4g"; // Default to "4g" if connection type is not available

    // Set quality based on connection type
    let adjustedQuality;
    switch (connectionType) {
      case "2g":
        adjustedQuality = 0.2;
        break;
      case "3g":
        adjustedQuality = 0.5;
        break;
      default:
        adjustedQuality = 0.8;
    }
    setQuality(adjustedQuality);
    setImageSrc(`${src}?quality=${adjustedQuality * 100}`);
  }, [src]);

  // Function to handle onLoad for enhancing image quality
  const handleImageLoad = () => {
    // Set the quality to max after initial load
    setQuality(maxQuality);
    setImageSrc(`${src}?quality=${maxQuality * 100}`);
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      loading="lazy"
      style={{ opacity: 0.9, transition: "opacity 0.5s ease-in-out" }}
      className={className}
      onLoad={handleImageLoad}
    />
  );
};

export default ImageRender;
