import Main from "../components/dashboard/Main";
import Icon from "../assets/logo.svg";

export const metadata = {
  title: "Yariga",
  description: "Welcome to Yariga",
  siteName: "Yariga",
  type: "website",
  icons: {
    icon: { url: Icon.src, type: "image/svg" },
  },
};

export default function Home() {
  return (
    <section className="w-[86%] bg-gray-200 rounded-md p-3 flex flex-col gap-4">
      <Main />
    </section>
  );
}
