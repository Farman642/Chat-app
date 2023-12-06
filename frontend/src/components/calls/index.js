import "./calls.css";
import Header from "../common/header/index";
import Siderbar from "../common/sidebar/index";
import LeftFold from "../calls/left-fold/index";
import RightFold from "../calls/right-fold/index";

const Calls = () => {
  return (
    <div className="calls-container">
      <Header />
      <div className="calls-body">
        <div className="calls-sidebar">
          <Siderbar />
        </div>
        <div className="calls-leftFold">
          <LeftFold />
        </div>
        <div className="calls-rightFold">
          <RightFold />
        </div>
      </div>
    </div>
  );
};

export default Calls;
