import { Menu, Transition } from "@headlessui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

interface LoginMenuProps {
  openForgotPassword: () => void;
}

export const LoginMenu: React.FC<LoginMenuProps> = ({ openForgotPassword }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required."),
      password: Yup.string().required("Password is required."),
    }),
  });

  return (
    <Menu as="div" className="relative ml-3">
      {({ close }) => (
        <>
          <div>
            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open login menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src="./src/assets/images/noUser.webp"
                alt=""
              />
            </Menu.Button>
          </div>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="py-4 px-2 flex flex-col items-center justify-center absolute right-0 z-10 mt-2  w-56 origin-top-right rounded-md bg-gray-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                <form
                  onClick={(event) => {
                    event.preventDefault();
                  }}
                  className="flex flex-col gap-1 items-center justify-center"
                  onSubmit={formik.handleSubmit}
                >
                  <input
                    className="border-solid rounded-sm bg-gray-700 text-white w-full p-1 px-2 "
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.username ? (
                    <span className=" text-red-600 text-sm">
                      {formik.errors.username &&
                        formik.touched.username &&
                        formik.errors.username}
                    </span>
                  ) : null}
                  <input
                    className="border-solid rounded-sm bg-gray-700 text-white w-full p-1 px-2 "
                    type="password"
                    placeholder="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.password ? (
                    <span className=" text-red-600 text-sm">
                      {formik.errors.password &&
                        formik.touched.password &&
                        formik.errors.password}
                    </span>
                  ) : null}

                  <button
                    className="py-1 px-4 bg-blue-400 flex flex-row , items-center justify-center rounded-md"
                    onClick={close}
                  >
                    <span className="text-white">Log in</span>
                  </button>
                </form>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="#"
                  className="self-center text-blue-300 text-sm"
                  onClick={openForgotPassword}
                >
                  Forgot your password?
                </a>
              </Menu.Item>
              <Menu.Item>
                <div className="flex flex-row gap-1 flex-wrap">
                  <span className="text-white text-sm">No account?</span>
                  <Link to="#" className="self-start text-blue-300 text-sm">
                    Register now
                  </Link>
                </div>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
