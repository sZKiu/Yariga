import "./globals.css";
import Header from "../components/common/Header";
import Navigation from "@/components/common/Header/Navigation";
import AlertDelAcc from "../components/common/AlertDeleteAcc";
import { cookies } from "next/headers";
import { UserwPassword } from "@/interfaces/interfaces";

async function getMeInfo() {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get("refreshToken");

  const meInfo = await fetch(
    "https://apiexpressuser-2-k8787246.deta.app/api/v1/auth/me",
    {
      credentials: "include",
      headers: {
        "content-type": "application/json",
        refreshtoken: refreshToken ? refreshToken.value : "",
      },
      cache: "no-store",
    }
  );

  return await meInfo.json();
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const meInfo: UserwPassword = await getMeInfo();

  return (
    <html lang="en">
      <body className="font-[Roboto]">
        {/* @ts-ignore */}
        <Header meInfo={meInfo} />

        <main className="flex">
          <Navigation showAll={Boolean(meInfo)} />

          {children}
        </main>

        <footer></footer>

        <AlertDelAcc />
      </body>
    </html>
  );
}
