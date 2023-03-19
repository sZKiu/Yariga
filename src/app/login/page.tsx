import LoginMain from "../../components/login";
import Icon from "../../assets/logo.svg"

export const metadata = {
  title: 'Login',
  description: 'Welcome to Yariga',
  siteName: "Yariga",
  type: 'website',
  icons: {
    icon: { url: Icon.src, type: 'image/svg' },
  },
};

function Login() {
  return (
    <>
      <LoginMain />
    </>
  );
}

export default Login;
