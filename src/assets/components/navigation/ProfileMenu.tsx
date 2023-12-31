import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { classNames } from "../../utils/appUtils";
import { useAuth } from "../../../context/AuthContext";

export const ProfileMenu = () => {
  const { dispatch } = useAuth();

  const handleLogout = () => {
    console.log("here");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="relative flex rounded-full bg-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stone-800">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-stone-600  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? "bg-stone-800 text-stone-300" : "",
                  "block px-4 py-2 text-sm text-white"
                )}
              >
                Your Profile
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? "bg-stone-800 text-stone-300" : "",
                  "block px-4 py-2 text-sm text-white"
                )}
              >
                Settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                onClick={handleLogout}
                className={classNames(
                  active ? "bg-stone-800 text-stone-300" : "",
                  "block px-4 py-2 text-sm text-white"
                )}
              >
                Sign out
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
