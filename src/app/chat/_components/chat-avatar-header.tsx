import { MdGroups2 } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

export function ChatAvatarHeader() {
  return (
    <div className="flex gap-x-2.5 items-center">
      <Avatar>
        <AvatarImage src="https://picsum.photos/id/237/200/300" alt="Udin" />
        <AvatarFallback>
          <MdGroups2 className="size-5" />
        </AvatarFallback>
      </Avatar>
      <span className="text-background font-bold">Product A</span>
    </div>
  );
}
