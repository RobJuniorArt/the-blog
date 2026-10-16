import { MenuAdmin } from "@/components/Admin/MenuAdmin";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <>
      <MenuAdmin />
      {children}
    </>
  );
}
