const Navbar = () => {
  return (
    <div className="col-start-1 col-end-3 flex h-[60px] w-full justify-between items-center px-2">
      <div className="flex items-center ">
        <img src="/logo.svg" alt="logo" />
        <span className="font-semibold">Admin dash</span>
      </div>
      <div className="flex items-center gap-5">
        <img src="search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />
        <div className="relative ">
          <span className="absolute -top-2 -right-2 w-[14px] h-[14px] flex items-center justify-center text-[10px] rounded-full bg-red-600 ">
            1
          </span>
          <img src="/notifications.svg" alt="notification icon" />
        </div>
        <div className="flex items-center gap-2">
          <img
            src="/wahid-img.jpeg"
            alt="person img"
            className="w-[26px] h-[26px] rounded-full"
          />
          <span className="text-sm text-semibold">Wahid</span>
        </div>
        <img src="/settings.svg" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
