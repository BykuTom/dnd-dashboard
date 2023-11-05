import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface ForgotPasswordModalProps {
  closeModal: () => void;
  isOpen: boolean;
}

export const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({
  closeModal,
  isOpen,
}) => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (value) => {
      console.log(value);
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required(
          "The email address you are registered with is required to reset your password."
        )
        .email("The email is not valid."),
    }),
  });

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                    Lost Password
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-stone-100">
                      If you have forgotten your password, you can use this form
                      to reset your password. You will receive an email with
                      instructions.
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
                        The email address you are registered with is required to
                        reset your password.
                      </span>
                    ) : null}
                    <button
                      type="button"
                      className="text-white py-1 px-4 w-full max-w-xxs bg-blue-400 flex flex-row , items-center justify-center rounded-md"
                      onClick={closeModal}
                    >
                      Reset
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
