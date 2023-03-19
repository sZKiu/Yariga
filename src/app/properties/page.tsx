import MainProperties from "@/components/properties/MainProperties";
import Icon from "../../assets/logo.svg";

export const metadata = {
  title: "Properties",
  description: "Welcome to Yariga",
  siteName: "Yariga",
  type: "website",
  icons: {
    icon: { url: Icon.src, type: "image/svg" },
  },
};

function Properties() {
  return (
    <section className="w-[86%] bg-gray-200 rounded-md p-3 px-6 flex flex-col gap-6">
      <MainProperties title="All Properties" />
    </section>
  );
}

export default Properties;
