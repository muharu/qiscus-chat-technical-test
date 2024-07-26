import { redirect } from "next/navigation";
import { getAuth } from "~/app/_features/loaders";
import { ChatChannelCard } from "./_components/chat-channel-card";

export default async function Home() {
  const user = await getAuth();
  if (!user) redirect("/");

  return (
    <main className="flex flex-col">
      <ChatChannelCard roomId="123" />
      <ChatChannelCard roomId="123" />
    </main>
  );
}
