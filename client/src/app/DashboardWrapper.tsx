"use client";

export const dynamic = "force-dynamic";
import DashboardLayout from "@/components/common/DashboardLayout";
import StoreProvider from "./StoreProvider";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
