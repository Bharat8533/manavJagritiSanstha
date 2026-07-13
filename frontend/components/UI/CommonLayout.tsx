"use client";
import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Fotter from "@/components/layout/Footer";
import WhatsAppButton from "./WhatsAppButton";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.toLowerCase().startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}

      <main className="flex-grow flex flex-col h-full">{children} </main>
      {!isAdminRoute && <WhatsAppButton />}

      {!isAdminRoute && <Fotter />}
    </>
  );
}
