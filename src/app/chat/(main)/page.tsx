import { Metadata } from "next";
import { ChatChannelCard } from "./_components/chat-channel-card";

export const metadata: Metadata = {
  title: "Simple Chat",
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <ChatChannelCard roomId="123" />
      <ChatChannelCard roomId="123" />
    </main>
  );
}
