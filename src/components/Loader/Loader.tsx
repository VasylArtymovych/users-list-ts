import { RotatingLines } from "react-loader-spinner";
import { LoaderContainer } from "./Loader.styled";

function Loader() {
  return (
    <LoaderContainer>
      <RotatingLines
        strokeColor="#4e0eff"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderContainer>
  );
}

export default Loader;
