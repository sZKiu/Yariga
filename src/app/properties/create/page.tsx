import CreateProperty from "@/components/properties/CreateProperty";
import Icon from "../../../assets/logo.svg"

export const metadata = {
  title: 'Create Property',
  description: 'Welcome to Yariga',
  siteName: "Yariga",
  type: 'website',
  icons: {
    icon: { url: Icon.src, type: 'image/svg' },
  },
};

function CreatePropertyPage() {
  return (
      <section className="w-[86%] bg-gray-200 rounded-md p-3 flex flex-col gap-4">
        <CreateProperty />
      </section>
  );
}

export default CreatePropertyPage;
