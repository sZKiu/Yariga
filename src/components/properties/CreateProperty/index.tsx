"use client";
import React, { useState, useRef, useEffect } from "react";
import CustomSelect from "@/components/common/CustomSelect";
import CustomInput from "@/components/common/CustomInput";
import CustomTextArea from "@/components/common/CustomTextArea";
import Link from "next/link";
import { Envs } from "@/constants";
import { useSelector } from "react-redux";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(10, "The name is too Short!")
    .max(50, "The name is too Long!"),

  description: Yup.string()
    .required("Description is required")
    .min(50, "The description is too Short!")
    .max(2000, "The description is too Long!"),

  price: Yup.number()
    .required("Price is required")
    .min(50, "The price is too cheap!")
    .max(999999999, "The price is too Expensive!"),

  location: Yup.string()
    .required("Location is required")
    .min(10, "The location is too Short!")
    .max(150, "The location is too Long!"),
});

interface Values {
  name: string;
  description: string;
  price: string;
  location: string;
}

function CreateProperty() {
  const user = useSelector((state: any) => state.user);
  const [img, setImg] = useState("");
  const [imgName, setImgName] = useState("");
  const [type, setType] = useState("");
  const [showTypeErrors, setShowTypeErrors] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState<any>();
  const [showMessa, setShowMessa] = useState(false);

  const onSubmit = async (values: Values) => {
    const fetchDataJson = await fetch(
      `${Envs.API_URL}/api/v1/properties/create`,
      {
        method: "POST",
        body: JSON.stringify({
          ...values,
          image: img,
          type,
          authorUniqueName: user.uniqueName,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        mode: "cors",
      }
    );

    const fetchData = await fetchDataJson.json();

    if (fetchDataJson.ok) {
      setShowMessa(true);

      setTimeout(() => {
        setShowMessa(false);
        document.getElementById("anchor-to-home")?.click();
      }, 2000);
    } else {
      setError({
        data: { error: fetchData.error },
        status: fetchDataJson.status,
      });

      setShowMessa(true);

      setTimeout(() => {
        setShowMessa(false);

        setError(undefined);
      }, 2000);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-medium text-zinc-800/90">Create Property</h1>

      <Formik
        initialValues={{
          name: "",
          description: "",
          price: "",
          location: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={onSubmit}
      >
        {() => {
          return (
            <Form className="flex flex-col gap-4  bg-white rounded-lg text-zinc-700 px-3 py-6">
              <div className="flex flex-col gap-1.5">
                <h4 className="font-medium">Enter property name</h4>

                <div>
                  <Field
                    name="name"
                    component={CustomInput}
                    label="Enter property name"
                  />

                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-xs text-red-700"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <h4 className="font-medium">Enter Description</h4>

                <div>
                  <Field
                    name="description"
                    component={CustomTextArea}
                    label="Write a Description"
                  />

                  <ErrorMessage
                    name="description"
                    component="p"
                    className="text-xs text-red-700"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-[70%] flex flex-col gap-1.5">
                  <h4 className="font-medium">Select Property Type</h4>

                  <div>
                    <Field
                      name="type"
                      label="Select Type Property"
                      component={CustomSelect}
                      setType={setType}
                      showAll={false}
                    />

                    {showTypeErrors ? (
                      <p className="text-xs text-red-700">{showTypeErrors}</p>
                    ) : null}
                  </div>
                </div>

                <div className="w-[30%] flex flex-col gap-1.5">
                  <h4 className="font-medium">Enter property price</h4>

                  <div>
                    <Field
                      name="price"
                      type="number"
                      component={CustomInput}
                      label="Enter property price"
                    />

                    <ErrorMessage
                      name="price"
                      component="p"
                      className="text-xs text-red-700"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <h4 className="font-medium">Enter Location</h4>

                <div>
                  <Field
                    name="location"
                    component={CustomInput}
                    label="Enter Location"
                  />

                  <ErrorMessage
                    name="location"
                    component="p"
                    className="text-xs text-red-700"
                  />
                </div>
              </div>

              <div>
                <div className="flex gap-4">
                  <input
                    accept="image/*"
                    onChange={(e) => {
                      if (!e.currentTarget?.files) return;
                      if (!e.currentTarget?.files[0]) return;

                      setImgName(e.currentTarget.files[0].name.split(".")[0]);

                      const fileReader = new FileReader();

                      fileReader.readAsDataURL(e.currentTarget?.files[0]);

                      fileReader.addEventListener("load", (e) => {
                        if (!e?.currentTarget) return;
                        // @ts-ignore
                        if (!e.currentTarget.result) return;
                        // @ts-ignore
                        setImg(e.currentTarget?.result);
                      });
                    }}
                    type="file"
                    className="hidden"
                  />

                  <button
                    type="button"
                    onClick={(e) => {
                      //@ts-ignore
                      e.currentTarget?.previousElementSibling?.click();
                    }}
                    className="font-medium underline hover:text-gray-600 duration-300"
                  >
                    Select Property Photo
                  </button>

                  {img ? (
                    <div className="flex gap-2">
                      <p className="text-green-700">Uploaded *</p>

                      <button
                        onClick={() => {
                          setImg("");
                          setImgName("");
                        }}
                        className="text-red-700 font-medium hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  ) : null}
                </div>

                {imgName ? (
                  <p className="text-sm text-gray-700">{imgName}</p>
                ) : null}
              </div>

              <button
                onClick={() => {
                  const options = [
                    "apartment",
                    "villa",
                    "farmhouse",
                    "condos",
                    "townhouse",
                    "duplex",
                    "studio",
                    "chalet",
                  ];

                  if (!type) {
                    setShowTypeErrors("Type of property is required");
                    return;
                  } else if (!options.includes(type.toLowerCase())) {
                    setShowTypeErrors(
                      "Type of property is not a valid property"
                    );
                    return;
                  }

                  setShowTypeErrors("");
                }}
                className="py-1.5 px-8 bg-indigo-700 rounded-lg text-white w-fit transition-transform hover:scale-105 duration-300"
                type="submit"
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>

      {showMessa ? (
        <div
          className={`fixed top-[10%] left-[50%] -translate-x-[50%] rounded-xl py-2 px-4 z-[1050] ${
            error ? "bg-red-600 text-white" : "bg-green-600 text-white"
          }`}
        >
          <p className="font-medium">
            {error
              ? `Status code: ${error.status}, Error: ${
                  !error?.data ? error?.error : error.data.error
                }`
              : "You have succesfully created a property!"}
          </p>
        </div>
      ) : null}
    </>
  );
}

export default CreateProperty;
