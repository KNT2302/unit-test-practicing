import Image, { ImageProps } from "next/image";
import React from "react";

const ImageBox: React.FC<ImageProps> = ({ style, src, alt, ...rest }) => {
  return (
    <div style={{ position: "relative", width:'100%', height:'100%' }}>
      <Image
        {...rest}
        src={src}
        alt={alt}
        style={{ objectFit:'contain',...style }}
        placeholder="empty"
        loading="lazy"
        fill
      />
    </div>
  );
};

ImageBox.displayName = "ImageBox";

export default ImageBox;
