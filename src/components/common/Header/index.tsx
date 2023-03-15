"use client";
import UserPart from "./UserPart";
import { Provider } from "react-redux";
import store from "../../../redux/store/store";
import { logo, yariga } from "../../../assets";
import { UserwPassword } from "@/interfaces/interfaces";

export default function Header({ meInfo }: { meInfo: UserwPassword }) {
  return (
    <Provider store={store}>
      <header className="flex justify-between px-8 py-3 sticky top-0 bg-white z-[1000]">
        <img className="h-[1.5rem]" src={yariga.src} alt="Yariga" />

        <UserPart meInfo={meInfo} />
      </header>
    </Provider>
  );
}
