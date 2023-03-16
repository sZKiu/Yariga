import MyProfileMain from "@/components/myprofile/MyProfileMain";
import Icon from "../../assets/logo.svg"

export const metadata = {
  title: 'My Profile',
  description: 'Welcome to Yariga',
  siteName: "Yariga",
  type: 'website',
  icons: {
    icon: { url: Icon.src, type: 'image/svg' },
  },
};

function MyProfile() {
  return <MyProfileMain />;
}

export default MyProfile;
