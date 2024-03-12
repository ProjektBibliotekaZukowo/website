// import { Box, chakra, ImageProps as ChakraImageProps } from '@chakra-ui/react';
// import NextImage, { ImageLoaderProps, ImageProps } from 'next/image';

// const ChakraNextUnwrappedImage = chakra(NextImage, {
//   shouldForwardProp: (prop) =>
//     [
//       'width',
//       'fill',
//       'height',
//       'src',
//       'alt',
//       'quality',
//       'placeholder',
//       'blurDataURL',
//       'loader',
//     ].includes(prop),
// });

// const myLoader = (resolverProps: ImageLoaderProps): string => {
//   return `${resolverProps.src}`;
// };

// const shimmer = (w: number, h: number) => `
// <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//   <defs>
//     <linearGradient id="g">
//       <stop stop-color="#333" offset="20%" />
//       <stop stop-color="#222" offset="50%" />
//       <stop stop-color="#333" offset="70%" />
//     </linearGradient>
//   </defs>
//   <rect width="${w}" height="${h}" fill="#333" />
//   <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
//   <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
// </svg>`;

// const toBase64 = (str: string) =>
//   typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

// export const ChakraNextImage = (props: ImageProps & ChakraImageProps) => {
//   const { src, alt, width, quality, height, ...rest } = props;
//   return (
//     <Box pos="relative" cursor="pointer" className="group" {...rest}>
//       <ChakraNextUnwrappedImage
//         w="auto"
//         h="auto"
//         loader={myLoader}
//         width={width}
//         quality={quality}
//         height={height}
//         placeholder="blur"
//         blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(576, 448))}`}
//         src={src}
//         alt={alt}
//         transition="all 0.2s"
//       />
//     </Box>
//   );
// };

// ="current"
import { useState } from 'react';

import NextImage, { ImageProps } from "next/legacy/image";

import { Skeleton, Box, BoxProps } from '@chakra-ui/react';

type Props = ImageProps &
  BoxProps & {
    alt: string;
    fallbackSrc?: string;
  };

export const ChakraNextImage: React.FC<Props> = (props) => {
  const {
    src,
    alt,
    width,
    height,
    fallbackSrc = 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
    bgGradient,
    priority,
    quality,
    ...rest
  } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleLoad = (result: { naturalWidth: number; naturalHeight: number }) => {
    if (result.naturalWidth === 0) setIsError(true);
    else setIsLoaded(true);
  };
  const handleError = () => setIsError(true);
  return (
    <Box width={width} height={height} position="relative" overflow="hidden" {...rest}>
      <Skeleton position="absolute" top="0" left="0" width="100%" height="100%" isLoaded={isLoaded}>
        <NextImage
          src={isError ? fallbackSrc : src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          onLoadingComplete={handleLoad}
          onError={handleError}
          priority={priority}
          quality={quality}
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bgGradient={bgGradient}
        />
      </Skeleton>
    </Box>
  );
};
