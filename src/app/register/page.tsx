import RegisterMain from "@/components/register";
import Icon from "../../assets/logo.svg";

export const metadata = {
  title: "Register",
  description: "Welcome to Yariga",
  siteName: "Yariga",
  type: "website",
  icons: {
    icon: { url: Icon.src, type: "image/svg" },
  },
};

function Register() {
  return (
    <>
      <RegisterMain />
    </>
  );
}

export default Register;
