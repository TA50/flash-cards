import Card from "./Card";
import CardViewActions from "./CardViewActions";
import CardViewHeader from "./CardViewHeader";

function CardViewPage() {
  return (
    <div>
      <CardViewHeader />
      <Card />
      <CardViewActions />
    </div>
  );
}

export default CardViewPage;
