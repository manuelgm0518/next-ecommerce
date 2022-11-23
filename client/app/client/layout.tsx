import NavigationBar from "@/components/NavigationBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
}
