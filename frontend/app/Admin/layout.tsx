import { Providers } from "@/store/providers";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Providers>
      {children}
    </Providers>;
}
