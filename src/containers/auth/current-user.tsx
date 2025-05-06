"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useCurrentUser } from "@/sdk/queries/auth.client";
import { scrolledAtom } from "@/store/framer.store";
import { useAtomValue } from "jotai";
import { UserIcon, Loader2Icon } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const CurrentUser = () => {
  const { currentUser, setLoading, loading } = useCurrentUser();
  const scrolled = useAtomValue(scrolledAtom);
  const isLaptop = useMediaQuery("(min-width: 1200px)");

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      setLoading(false);
    }
  }, []);

  if (loading)
    return (
      <div className="h-9 w-9 flex items-center justify-center">
        <Loader2Icon className="h-5 w-5 animate-spin" />
      </div>
    );

  if (currentUser) {
    const { firstName, avatar, lastName } = currentUser;
    return (
      <Avatar asChild>
        <Link href="/profile">
          <AvatarImage src={avatar} alt={currentUser.firstName} />
          <AvatarFallback>
            {(firstName || "P")[0]}
            {(lastName || "")[0]}
          </AvatarFallback>
        </Link>
      </Avatar>
    );
  }

  return (
    <Button
      size="icon"
      variant={"ghost"}
      className={`hover:bg-background/10 ${
        !scrolled && isLaptop ? "lg:text-white" : ""
      }`}
      asChild
    >
      <Link href="/login">
        <UserIcon className="h-5 w-5" />
      </Link>
    </Button>
  );
};

export default CurrentUser;
