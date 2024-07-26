import { redirect } from "next/navigation";
import { getAuth } from "~/app/_features/loaders";
import { Chat } from "./_components/chat";

export default async function ChatPage() {
  const user = await getAuth();
  if (!user) redirect("/");

  return <Chat user={user} />;
}
