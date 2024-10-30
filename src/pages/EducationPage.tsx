import { Layer, Stage } from "react-konva";
import { CustomCanvasImage } from "../components/CustomCanvasImage";
import { MapImg } from "../constants/ImagesPaths";

export const EducationPage = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <CustomCanvasImage
          src={MapImg}
          width={window.innerWidth}
          height={window.innerHeight}
        />
      </Layer>
    </Stage>
  );
};
