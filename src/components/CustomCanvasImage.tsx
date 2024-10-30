import Konva from "konva";
import { FC } from "react";
import useImage from "use-image";
import { Image } from "react-konva";

interface Props {
  src: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  onClick?: (e: Konva.KonvaEventObject<MouseEvent>) => void;
  playerRef?: React.RefObject<Konva.Image>;
}

export const CustomCanvasImage: FC<Props> = ({
  src,
  x,
  y,
  width,
  height,
  onClick,
  playerRef,
}) => {
  const [image] = useImage(src);

  return (
    <Image
      image={image}
      width={width}
      x={x}
      y={y}
      height={height}
      onTap={onClick}
      onClick={onClick}
      ref={playerRef}
    />
  );
};
