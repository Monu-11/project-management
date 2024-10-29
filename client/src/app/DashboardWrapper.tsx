"use client";

export const dynamic = "force-dynamic";
import DashboardLayout from "@/components/common/DashboardLayout";
import StoreProvider from "./StoreProvider";
import AuthProvider from "./authProvider";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <AuthProvider>
        <DashboardLayout>{children}</DashboardLayout>
      </AuthProvider>
    </StoreProvider>
  );
};

export default DashboardWrapper;
