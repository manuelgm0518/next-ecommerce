import { ClientNavigationBar } from "@/components/client";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ClientNavigationBar />
      {children}
    </div>
  );
}
