import { topDealUsers } from "../../data";
import TopDealsItem from "./TopDealsItem";

const TopDealsBox = () => {
  return (
    <div className="flex flex-col gap-4 p-4 ">
      <h1 className="text-2xl font-bold">Top Deals</h1>
      {topDealUsers.map((user) => (
        <TopDealsItem user={user} key={user.id} />
      ))}
    </div>
  );
};

export default TopDealsBox;
