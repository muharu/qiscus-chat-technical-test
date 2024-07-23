import Link from "next/link";
import { MdGroups2 } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

export function ChatChannelCard({ roomId }: Readonly<{ roomId: string }>) {
  return (
    <Link
      href={`/chat/${roomId}`}
      className="border-b h-16 px-3 py-2 flex justify-between items-center"
    >
      <ChatContent />
      <div className="flex flex-col justify-end items-end gap-x-3 min-w-16">
        <span className="text-xs text-gray-400">12:00 PM</span>
      </div>
    </Link>
  );
}

function ChatContent() {
  return (
    <div className="flex gap-x-3">
      <ChatChannelAvatar />
      <div className="flex flex-col text-sm">
        <span className="font-semibold">Product A</span>
        <span className="text-gray-400 line-clamp-1">
          Baik, silahkan kirimkan lampiran bukti pembayarannya
        </span>
      </div>
    </div>
  );
}

function ChatChannelAvatar() {
  return (
    <Avatar>
      <AvatarImage
        className="w-12 h-12"
        src="https://picsum.photos/id/237/200/300"
        alt="Udin"
      />
      <AvatarFallback>
        <MdGroups2 className="size-5" />
      </AvatarFallback>
    </Avatar>
  );
}
