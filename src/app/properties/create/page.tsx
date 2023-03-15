"use client";
import CreateProperty from "@/components/properties/CreateProperty";
import { Provider } from "react-redux";
import store from "../../../redux/store/store";

function CreatePropertyPage() {
  return (
    <Provider store={store}>
      <section className="w-[86%] bg-gray-200 rounded-md p-3 flex flex-col gap-4">
        <CreateProperty />
      </section>
    </Provider>
  );
}

export default CreatePropertyPage;
