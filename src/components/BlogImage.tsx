"use client";

import React, { useState } from "react";

export function BlogImage({ src, alt, index }: { src: string; alt: string; index: number }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // When an image fails to load, we assign a completely unique, real human photograph 
  // from Flickr based on the blog's index so they never repeat and always look real.
  const fallbackUrl = `https://loremflickr.com/800/600/fitness,therapy,people/all?lock=${index + 100}`;

  return (
    <img
      src={hasError ? fallbackUrl : imgSrc}
      alt={alt}
      className="w-full h-full object-cover transition-opacity duration-300"
      onError={() => {
        if (!hasError) {
          setHasError(true);
        }
      }}
    />
  );
}
