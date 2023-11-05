import { useState, useEffect, useRef } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ProfileMenu } from "./ProfileMenu";
import { LoginMenu } from "./LoginMenu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ForgotPasswordModal } from "../ForgotPasswordModal";
import logo from "../../images/d20.png";
import { useAuth } from "../../../context/AuthContext";
import { classNames } from "../../utils/appUtils";

export const Navigation = () => {
  const { authState } = useAuth();

  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const navigate = useNavigate();

  function closeForgotPassword() {
    setIsForgotPasswordOpen(false);
  }

  function openForgotPassword() {
    setIsForgotPasswordOpen(true);
  }

  const [menuItems, setMenuItems] = useState([
    { name: "Dashboard", href: "/", current: true },
    { name: "Campaign Tool", href: "/Campaign-Tool", current: false },
    { name: "Creator Tool", href: "/Creator-Tool", current: false },
    { name: "References", href: "/References", current: false },
    { name: "Campaign Wiki", href: "/Campaign-wiki", current: false },
  ]);

  const location = useLocation();
  const menuItemsRef = useRef(menuItems);

  useEffect(() => {
    // Get the current route pathname from the location
    const currentPath = location.pathname;
    // Check if the route has changed
    if (menuItemsRef.current.some((item) => item.href === currentPath)) {
      // Update the menuItems state based on the current route
      const updatedItems = menuItemsRef.current.map((item) => ({
        ...item,
        current: item.href === currentPath,
      }));

      setMenuItems(updatedItems);
    }
  }, [location.pathname]);

  useEffect(() => {
    menuItemsRef.current = menuItems;
  }, [menuItems]);

  return (
    <>
      <Disclosure as="nav" className="bg-stone-900">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
              <div className="relative flex h-12 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-stone-400 hover:bg-stone-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-8 w-auto"
                      src={logo}
                      alt="Dungeon Keeper"
                    />
                  </div>
                  <div className="hidden md:ml-6 md:block">
                    <div className="flex space-x-4">
                      {menuItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "bg-stone-800 text-white"
                              : "text-stone-300 hover:bg-stone-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                  <button
                    type="button"
                    className="relative rounded-full bg-stone-900 p-1 text-stone-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stone-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  {authState?.user ? (
                    <ProfileMenu />
                  ) : (
                    <LoginMenu openForgotPassword={openForgotPassword} />
                  )}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {menuItems.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="button"
                    onClick={() => {
                      navigate(item.href);
                    }}
                    className={classNames(
                      item.current
                        ? "bg-stone-900 text-white"
                        : "text-stone-300 hover:bg-stone-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {isForgotPasswordOpen && (
        <ForgotPasswordModal
          closeModal={closeForgotPassword}
          isOpen={isForgotPasswordOpen}
        />
      )}
    </>
  );
};
