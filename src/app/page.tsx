import Image from "next/image";
import login from "~/assets/login.png";
import { LoginAdminButton } from "./chat/(main)/_components/login-admin-button";
import { LoginUserButton } from "./chat/(main)/_components/login-user-button";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100dvh-6rem)] px-4 lg:px-0">
      <Image src={login} alt="login" width={400} height={400} priority />
      <LoginAdminButton />
      <LoginUserButton />
    </div>
  );
}
