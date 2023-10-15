'use client';

import Image from 'next/image';

interface ImageComponentProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  rounded?: boolean;
}

const ImageComponent = ({
  src,
  alt,
  width,
  height,
  rounded,
}: ImageComponentProps) => {
  return (
    <div className={`${rounded ? 'rounded-lg overflow-hidden' : null}`}>
      <Image
        objectFit="cover"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
};

export default ImageComponent;
