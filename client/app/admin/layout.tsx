import { AdminNavigationBar } from "@/components/admin";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AdminNavigationBar />
      {children}
    </div>
  );
}
