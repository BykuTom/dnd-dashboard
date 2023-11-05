import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const RegisterModal = () => {
  const navigate = useNavigate();

  const { authState } = useAuth();

  useEffect(() => {
    authState.user ? navigate("/") : null;
  }, [authState, navigate]);

  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => {
    setIsOpen(false);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      retypePassword: "",
    },
    onSubmit: (value) => {
      console.log(value);
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("The email is not valid.")
        .required(
          "The email address you are registered with is required to reset your password."
        ),
      username: Yup.string()
        .min(4, "Username must be longer than 4 characters.")
        .max(20, "Username must be shorter than 20 characters.")
        .required("Username is required."),
      password: Yup.string()
        .required("Please enter a password")
        .min(6, "Password needs to be longer than 6 characters")
        .max(20, "Password needs to be shorter than 20 characters")
        .test(
          "has-uppercase",
          "Password must contain at least one uppercase letter",
          (value) => /[A-Z]/.test(value)
        )
        .test(
          "has-lowercase",
          "Password must contain at least one lowercase letter",
          (value) => /[a-z]/.test(value)
        )
        .test(
          "has-number",
          "Password must contain at least one number",
          (value) => /[0-9]/.test(value)
        )
        .test(
          "has-symbol",
          "Password must contain at least one special character.",
          (value) => /[!@#%&.;'`$£"^&*_\-,<?>:~{}=+/]/.test(value)
        ),
      retypePassword: Yup.string()
        .required("You need to retype your password to continue.")
        .test("isSameAsPass", "Your passwords aren't matching", (value) => {
          if (value === formik.values.password) {
            return true;
          }
          return false;
        }),
    }),
  });

  const handleSubmitButton = () => {
    if (
      !formik.errors.email &&
      !formik.errors.password &&
      !formik.errors.username &&
      !formik.errors.retypePassword
    ) {
      closeModal();
      //handleLogin(true);
    }
    //If doesn't fill condition then all errors should lit up not just touched ones.
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full flex flex-col items-center gap-1 max-w-md transform overflow-hidden rounded-md bg-stone-600 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white"
                  >
                    Register A New Account
                  </Dialog.Title>
                  <div>
                    <p className="text-sm mb-4 text-stone-100">
                      Please enter your details to complete the registration
                      process.
                    </p>
                  </div>
                  <form
                    className="w-full flex flex-col gap-1 justify-center items-center"
                    onSubmit={formik.handleSubmit}
                  >
                    <input
                      className="border-solid rounded-sm bg-stone-700 text-white w-full p-1 px-2 "
                      type="email"
                      placeholder="Email@email.mail"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.email ? (
                      <span className="text-sm text-red-400">
                        {formik.errors.email &&
                          formik.touched.email &&
                          formik.errors.email}
                      </span>
                    ) : null}
                    <input
                      className="border-solid rounded-sm bg-stone-700 text-white w-full p-1 px-2 "
                      type="text"
                      placeholder="username"
                      name="username"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.username ? (
                      <span className="text-sm text-red-400">
                        {formik.errors.username &&
                          formik.touched.username &&
                          formik.errors.username}
                      </span>
                    ) : null}
                    <input
                      className="border-solid rounded-sm bg-stone-700 text-white w-full p-1 px-2 "
                      type="password"
                      placeholder="password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.password ? (
                      <span className="text-sm text-red-400">
                        {formik.errors.password &&
                          formik.touched.password &&
                          formik.errors.password}
                      </span>
                    ) : null}
                    <input
                      className="border-solid rounded-sm bg-stone-700 text-white w-full p-1 px-2 "
                      type="password"
                      placeholder="Confirm password"
                      name="retypePassword"
                      value={formik.values.retypePassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.retypePassword ? (
                      <span className="text-sm text-red-400">
                        {formik.errors.retypePassword &&
                          formik.touched.retypePassword &&
                          formik.errors.retypePassword}
                      </span>
                    ) : null}
                    <button
                      type="button"
                      className="btn btn-secondary min-w-[10rem]"
                      onClick={() => {
                        formik.handleSubmit();
                        handleSubmitButton();
                      }}
                    >
                      Submit
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
