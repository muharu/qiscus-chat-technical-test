import { ChatBrandHeader } from "../../_components/chat-brand-header";
import { ChatOptionsHeader } from "../../_components/chat-options-header";

export default function LayoutChat({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavbarChat />
      {children}
    </>
  );
}

function NavbarChat() {
  return (
    <header className="h-14 flex bg-qiscus sticky top-0 z-10">
      <nav className="flex justify-between items-center mx-4 w-full">
        <ChatBrandHeader />
        <ChatOptionsHeader />
      </nav>
    </header>
  );
}
