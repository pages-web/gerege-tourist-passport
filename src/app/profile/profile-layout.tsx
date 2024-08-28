import { SidebarNav } from "@/components/sidebar-nav/sidebar-nav";
import { Separator } from "@/components/ui/Separator";
import PrivateRoute from "@/containers/auth/private-route";
import { Suspense } from "react";

const ProfileLayout = ({
  children,
  title,
  description,
}: React.PropsWithChildren & { title: string; description: string }) => {
  return (
    <PrivateRoute>
      <div className="space-y-3 md:space-y-6 pt-6 md:pt-10 flex-auto container min-h-screen">
        <div className="space-y-0.5 -mx-2 md:mx-0">
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Separator className="-mx-2 md:mx-0" />
        <div className="flex flex-col space-y-4 md:space-y-8 lg:flex-row lg:space-x-10 lg:space-y-0">
          <aside className="lg:w-1/5 overflow-auto -mx-2 md:mx-0">
            <Suspense>
              <SidebarNav items={sidebarNavItems} />
            </Suspense>
          </aside>
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </PrivateRoute>
  );
};

const sidebarNavItems = [
  {
    title: "Хувийн мэдээлэл",
    href: "/profile",
  },
  {
    title: "Захиалгууд",
    href: "/profile/orders",
  },
  {
    title: "Гарах",
    href: "/logout",
  },
];

export default ProfileLayout;
