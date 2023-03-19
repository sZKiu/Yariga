"use client";
import "./globals.css";
import Header from "../components/common/Header";
import Navigation from "@/components/common/Header/Navigation";
import AlertDelAcc from "../components/common/AlertDeleteAcc";
import { Provider } from "react-redux";
import store from "../redux/store/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-[Roboto]">
        <Provider store={store}>
          <Header />

          <main className="flex">
            <Navigation showAll={true} />

            {children}
          </main>

          <footer></footer>
        </Provider>

        <AlertDelAcc />

        <a href="/" id="anchor-to-home" />
      </body>
    </html>
  );
}
