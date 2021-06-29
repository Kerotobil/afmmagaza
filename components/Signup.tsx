import React from "react";
import Link from "next/link";
import { Formik } from "formik";
import { writeHeapSnapshot } from "node:v8";

export default function Signup() {
  return (
    <div className="">
      <div className=" bg-gradient-to-r from-blue-400 to-green-600 ">
        <div className="w-2/3 flex justify-start mx-auto h-24 pl-8">
          <Link href="/">
            <img
              className="h-20 my-auto  cursor-pointer"
              src="https://www.afmmagaza.com/resman/uploads/kurumsal _logo_AFM.png"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="mt-12">
        <div className="border-2 flex w-auto lg:w-3/4 justify-around mx-auto bg-gray-800 pb-8">
          <img
            src="https://www.afmmagaza.com/resman/uploads/2334094.jpg"
            className="hidden md:block mt-4 h-64 lg:h-96"
            alt=""
          />
          <div className="w-96 ml-2 my-auto">
            <h1 className="text-3xl text-gray-100 text-center font-sans font-semibold">
              Üye Ol
            </h1>
            <div className="py-4 mt-4 w-full rounded-md bg-white shadow-lg">
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-5 w-3/4 mx-auto ">
                      {" "}
                      <input
                        className=" border-b-2 mx-2 border-gray-300"
                        type="email"
                        name="email"
                        placeholder="email"
                        onChange={handleChange}
                        value={values.email}
                      />
                      {errors.email && touched.email && errors.email}
                      <input
                        className="border-b-2 mx-2 border-gray-300"
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={handleChange}
                        value={values.password}
                      />
                      {errors.password && touched.password && errors.password}
                      <button type="submit" disabled={isSubmitting}>
                        Submit
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
