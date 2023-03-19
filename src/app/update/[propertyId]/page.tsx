import React from "react";
import UpdateProperty from "../../../components/update/UpdateProperty";
import Icon from "../../../assets/logo.svg";

export const metadata = {
  title: "Update Property",
  description: "Welcome to Yariga",
  siteName: "Yariga",
  type: "website",
  icons: {
    icon: { url: Icon.src, type: "image/svg" },
  },
};

export default function PropertyName({
  params: { propertyId },
}: {
  params: { propertyId: string };
}) {
  return (
    <section className="w-[86%] bg-gray-200 rounded-md p-3 flex flex-col gap-4">
      <UpdateProperty propertyId={propertyId} />
    </section>
  );
}
