import { IoHomeOutline, IoLogOutOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { Icon as IconComponent } from "./Icon";
import { useState, useEffect, FC } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface NavBarProps {}

export const NavBar: FC<NavBarProps> = () => {
  const navigate = useNavigate();
  const [activeIcon, setActiveIcon] = useState<string>(
    () => localStorage.getItem("activeIcon") || "home"
  );
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    () => !!localStorage.getItem("isLoggedIn")
  );
  const [isAdmin, setIsAdmin] = useState<boolean>(
    () => !!localStorage.getItem("isAdmin")
  );

  useEffect(() => {
    localStorage.setItem("activeIcon", activeIcon);
  }, [activeIcon]);

  const handleLogOut = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
    setActiveIcon("home");
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-col justify-between border-e bg-white w-16">
        <div>
          <div className="inline-flex size-16 items-center justify-center">
            <span className="grid size-20 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
              IB
            </span>
          </div>

          <div className="border-t border-gray-100">
            <div className="px-2">
              <div className="py-4">
                <IconComponent
                  icon={IoHomeOutline}
                  name="Home"
                  active={activeIcon === "home"}
                  onClick={() => {
                    navigate("/");
                    setActiveIcon("home");
                  }}
                />
              </div>

              <ul className="space-y-1 border-t border-gray-100 pt-4">
                <li>
                  <IconComponent
                    icon={MdOutlineAccountCircle}
                    name="Account"
                    active={activeIcon === "account"}
                    onClick={() => {
                      isLoggedIn ? navigate("account") : navigate("/sign-in");
                      setActiveIcon("account");
                    }}
                  />
                </li>
                <li>
                  <IconComponent
                    icon={FaMoneyBillAlt}
                    name="Transfer"
                    active={activeIcon === "transfer credit"}
                    onClick={() => {
                      isLoggedIn
                        ? navigate("transfer-credit")
                        : navigate("/sign-in");
                      setActiveIcon("transfer credit");
                    }}
                  />
                </li>
                <li>
                  <IconComponent
                    icon={RiAdminLine}
                    name="Admin panel"
                    active={activeIcon === "admin-panel"}
                    onClick={() => {
                      isLoggedIn
                        ? isAdmin
                          ? navigate("/admin-panel")
                          : toast.error(
                              "You are not allowed to view this panel"
                            )
                        : navigate("/sign-in");
                      setActiveIcon("admin-panel");
                    }}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2 z-10">
          <form action="#">
            <IconComponent
              icon={IoLogOutOutline}
              name="Logout"
              active={activeIcon === "logout"}
              onClick={() => handleLogOut()}
            />
          </form>
        </div>
      </div>
      <div className="flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
};
