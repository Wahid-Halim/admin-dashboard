import ChartBox from "./ChartBox";
import TopDealsBox from "./TopDealsList";

const HomeWrapper = () => {
  return (
    <div className="grid gap-5 grid-cols-4 auto-rows-[minmax(180px,_auto)] ">
      <div className="box-border col-span-1 row-span-3 ">
        <TopDealsBox />
      </div>
      <div className="box-border ">
        <ChartBox />
      </div>
      <div className="box-border ">
        {" "}
        <ChartBox />
      </div>
      <div className="box-border  row-span-3">
        {" "}
        <ChartBox />
      </div>
      <div className="box-border  ">box5</div>
      <div className="box-border ">box6</div>
      <div className="box-border  row-span-2 col-span-2">box7</div>
      <div className="box-border ">box8</div>
      <div className="box-border ">box9</div>
    </div>
  );
};

export default HomeWrapper;
