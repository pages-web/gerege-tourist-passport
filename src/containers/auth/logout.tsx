"use client";

import { Button } from "@/components/ui/button";
import { LoadingIcon } from "@/components/ui/loading";
import { useLogout } from "@/sdk/hooks/auth";
import { useTranslations } from "next-intl";

const Logout = () => {
  const { logout, loading } = useLogout();
  const t = useTranslations("Welcome");

  return (
    <Button
      className="justify-start"
      variant="link"
      disabled={loading}
      onClick={logout}
    >
      {loading && <LoadingIcon />} {t("logout")}
    </Button>
  );
};

export default Logout;
