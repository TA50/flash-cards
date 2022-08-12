import { LeftArrowIcon } from "../../components/icons";

function CardViewHeader() {
  return (
    <div className="row ">
      <div className="col-2">
        <LeftArrowIcon />
      </div>
      <div className="col">
        <h4>Collection Name</h4>
      </div>
    </div>
  );
}

export default CardViewHeader;
