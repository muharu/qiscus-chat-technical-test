"use client";

import { useMutation } from "@tanstack/react-query";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Else, If, Then } from "react-if";
import { Button } from "~/components/ui/button";
import { loginAction } from "../_features/action";

export function LoginButton({
  id,
  name,
  role,
}: Readonly<{
  id: string;
  name: string;
  role: number;
}>) {
  const { mutate, isPending } = useMutation({
    mutationFn: async () => loginAction({ id, name, role }),
  });

  return (
    <Button
      onClick={() => mutate()}
      disabled={isPending}
      className="my-2 w-full max-w-[400px] font-bold"
      size="lg"
    >
      <If condition={!isPending}>
        <Then>Login as {getUserRole(role)}</Then>
        <Else>
          <AiOutlineLoading3Quarters className="animate-spin size-5" />
        </Else>
      </If>
    </Button>
  );
}

function getUserRole(role: number) {
  switch (role) {
    case 0:
      return "Admin";
    case 1:
      return "Agent";
    case 2:
      return "Customer";
    default:
      return "Unknown";
  }
}
