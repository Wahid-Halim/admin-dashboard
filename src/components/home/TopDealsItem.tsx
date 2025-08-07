type User = {
  id: number;
  img: string;
  username: string;
  email: string;
  amount: string;
};

type topDealsItemProps = {
  user: User;
};

const TopDealsUser = ({ user }: topDealsItemProps) => {
  return (
    <div className="flex items-center justify-between border-b border-b-soft-bg pb-2 ">
      <div className="flex gap-5 items-center justify-between">
        <img
          src={user.img}
          className="w-[40px] h-[40px] rounded-full object-cover
"
        />
        <div className="flex flex-col">
          <span className="text-base">{user.username}</span>
          <span className="text-sm text-soft-color">{user.email}</span>
        </div>
      </div>
      <span className="font-bold">${user.amount}</span>
    </div>
  );
};

export default TopDealsUser;
