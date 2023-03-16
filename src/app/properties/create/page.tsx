"use client";
import CreateProperty from "@/components/properties/CreateProperty";

function CreatePropertyPage() {
  return (
      <section className="w-[86%] bg-gray-200 rounded-md p-3 flex flex-col gap-4">
        <CreateProperty />
      </section>
  );
}

export default CreatePropertyPage;
