"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/sdk/queries/auth.client";
import { UserIcon, Loader2Icon } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const CurrentUser = () => {
  const { currentUser, setLoading, loading } = useCurrentUser();

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
        <Link
          href="/profile"
          className="md:h-[40px] md:w-[40px] border shadow-sm text-[#0087FF] border-[#0087FF]"
        >
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
    <Avatar
      className="md:h-[40px] md:w-[40px] flex justify-center items-center hover:bg-background/10 hover:text-[#0087FF] border hover:border-[#0087FF] duration-200 rounded-full "
      asChild
    >
      <Link href="/login">
        <UserIcon className="h-4 w-4 md:h-5 md:w-5" />
      </Link>
    </Avatar>
  );
};

export default CurrentUser;
