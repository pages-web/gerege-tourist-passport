import { Button } from "@/components/ui/button";
import { Metadata } from "next/types";
import Link from "next/link";
import { getConfig } from "@/sdk/queries/auth";
import LoginComp from "@/containers/auth/login-comp";
import { useTranslations } from "next-intl";

export async function generateMetadata(): Promise<Metadata> {
  const { config } = await getConfig();

  return {
    title: config.name + " - Welcome",
    openGraph: {
      title: config.name + " - Welcome",
    },
  };
}

const Login = () => {
  const t = useTranslations("Welcome");
  return (
    <>
      <div className="text-lg lg:text-2xl font-semibold mx-auto relative lg:mt-20 ">
        {t("title")}
      </div>
      <div className="mb-auto mx-auto mt-4 lg:mt-8 w-full sm:max-w-md">
        <LoginComp className="lg:border lg:rounded-xl sm:py-10 px-3 sm:px-10" />
      </div>
      <div className="mt-8 text-center text-sm relative lg:mb-20">
        <Button variant="link" className="text-sm" asChild>
          <Link href="/signup">{t("signupLink")}</Link>
        </Button>
      </div>
    </>
  );
};

export default Login;
