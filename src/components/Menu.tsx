// import { NavLink } from "react-router-dom";

// const Menu = () => {
//   return (
//     <aside className="row-start-2 row-end-4 border-r-2 border-r-soft-bg h-screen px-4">
//       <NavLink
//         to="/home"
//         className={({ isActive }) =>
//           `flex items-center gap-2 p-3 hover:bg-soft-bg rounded-sm ${
//             isActive ? "bg-soft-bg" : ""
//           }`
//         }
//       >
//         <img src="/home.svg" alt="home icon" />
//         <span>Homepage</span>
//       </NavLink>

//       <NavLink
//         to="/users"
//         className={({ isActive }) =>
//           `flex items-center gap-2 p-3 hover:bg-soft-bg rounded-sm ${
//             isActive ? "bg-soft-bg" : ""
//           }`
//         }
//       >
//         <img src="/user.svg" alt="home icon" />
//         <span>Users</span>
//       </NavLink>

//       <NavLink
//         to="/products"
//         className={({ isActive }) =>
//           `flex items-center gap-2 p-3 hover:bg-soft-bg rounded-sm ${
//             isActive ? "bg-soft-bg" : ""
//           }`
//         }
//       >
//         <img src="/product.svg" alt="home icon" />
//         <span>Produce</span>
//       </NavLink>
//     </aside>
//   );
// };

// export default Menu;

import { NavLink } from "react-router-dom";
import { menu } from "../data";

const Menu = () => {
  return (
    <div className="row-start-2 row-end-4 border-r-2 border-r-soft-bg h-screen px-4">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <NavLink
              to={listItem.url}
              className={({ isActive }) =>
                `flex items-center gap-2 p-3 hover:bg-soft-bg rounded-sm ${
                  isActive ? "bg-soft-bg" : ""
                }`
              }
              key={listItem.id}
            >
              <img src={listItem.icon} alt="" />
              <span className="listItemTitle">{listItem.title}</span>
            </NavLink>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
