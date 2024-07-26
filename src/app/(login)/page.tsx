import Image from "next/image";
import { redirect } from "next/navigation";
import login from "~/assets/login.png";
import { getAuth } from "../_features/loaders";
import { LoginButton } from "./_components/login-button";

export default async function HomePage() {
  const user = await getAuth();
  if (user) redirect("/chat");

  return (
    <div className="flex flex-col justify-center items-center h-[calc(100dvh-6rem)] px-4 lg:px-0">
      <Image src={login} alt="login" width={400} height={400} priority />
      <LoginButton id="admin@mail.com" name="Admin" role={0} />
      <LoginButton id="agent@mail.com" name="Agent A" role={1} />
      <LoginButton id="customer@mail.com" name="king customer" role={2} />
    </div>
  );
}
