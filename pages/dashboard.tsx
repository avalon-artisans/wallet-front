import Dashboard from '@/components/dashboard/Dashboard';
import ApplicationLayout from "@/components/ApplicationLayout";

/**
 * Dashboard page component
 * @author Kenneth Sumang
 * @since  2023.05.18
 */
export default function DashboardPage() {
  return (
    <>
      <div className="w-screen">
        <ApplicationLayout>
          <Dashboard />
        </ApplicationLayout>
      </div>
    </>
  );
}