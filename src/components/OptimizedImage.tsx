import { useState, useEffect, useRef } from 'react';
import type { ImgHTMLAttributes } from 'react';
interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  priority?: boolean;
}

const OptimizedImage = ({ 
  priority = false, 
  className = '', 
  src, 
  alt = '', 
  ...props 
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    } else {
      setIsLoaded(false);
    }
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
      onLoad={(e) => {
        setIsLoaded(true);
        if (props.onLoad) props.onLoad(e);
      }}
      onError={(e) => {
        setIsLoaded(true);
        if (props.onError) props.onError(e);
      }}
      className={`transition-[opacity,transform] duration-700 ease-out ${
        isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
      } ${className}`}
      {...props}
    />
  );
};

export default OptimizedImage;
