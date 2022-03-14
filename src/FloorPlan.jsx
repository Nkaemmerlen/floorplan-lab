import BedRoom from "./BedRoom";
import Kitchen from "./Kitchen";
import Bath from "./Bath";
import LivingRoom from "./LivingRoom";
const FloorPlan = (props) => {
  return ( 
    <>
    <div>
      <BedRoom bedNum="1" />
    </div>
    <div>
      <Kitchen />
    </div>
    <div>
      <Bath size="Full" />
    </div>
    <div>
      <BedRoom bedNum="2" />
    </div>
    <div>
      <LivingRoom />
    </div>
    <div>
      <Bath size='Half' />
    </div>
    <div>
      <BedRoom bedNum="3" />
    </div>
    </>
  );
}

export default FloorPlan;