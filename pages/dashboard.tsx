import {useSession} from 'next-auth/react';
import { useRouter } from "next/router";

/**
 * Dashboard page component
 * @author Kenneth Sumang
 * @since  2023.05.18
 */
export default function Dashboard() {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    async onUnauthenticated() {
      alert('Not logged in.');
      await router.push('/');
    }
  });

  return (
    <div>
      <h1 className="text-3xl"> Dashboard Page! </h1>
    </div>
  );
}