import { auth } from "../_lib/auth";

export default async function Page() {
  const session = await auth();
  console.log(session);

  if (!session) return <div>Not authenticated</div>;
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome, {session.user.name}
    </h2>
  );
}
