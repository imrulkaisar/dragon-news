import Heading2 from "./Heading2";
import qz1 from "../assets/qZone1.png";
import qz2 from "../assets/qZone2.png";
import qz3 from "../assets/qZone3.png";

const QZone = () => {
  return (
    <div className="p-4 bg-grayBg">
      <Heading2>Q-Zone</Heading2>
      <div className="images space-y-4">
        <img className="w-full" src={qz1} alt="" />
        <img className="w-full" src={qz2} alt="" />
        <img className="w-full" src={qz3} alt="" />
      </div>
    </div>
  );
};

export default QZone;
