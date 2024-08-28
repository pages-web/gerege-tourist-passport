import { Button } from "@/components/ui/button";
import LoginForm from "@/containers/auth/login-form";
import { Metadata } from "next/types";
import Link from "next/link";
import { Suspense } from "react";
import { getConfig } from "@/sdk/queries/auth";

export async function generateMetadata(): Promise<Metadata> {
  const { config } = await getConfig();

  return {
    title: config.name + " - Тавтай морил",
    openGraph: {
      title: config.name + " - Тавтай морил",
    },
  };
}

const Login = () => {
  return (
    <>
      <div className="text-lg md:text-2xl font-semibold mx-auto relative md:mt-20">
        Тавтай морил
      </div>
      <div className="mb-auto mx-auto mt-4 md:mt-8 w-full sm:max-w-md">
        <div className="md:border md:rounded-xl w-full sm:py-10 px-3 sm:px-10 space-y-5 bg-background relative">
          <Suspense>
            <LoginForm />
          </Suspense>
        </div>
      </div>
      <div className="mt-8 text-center text-sm relative md:mb-20">
        <Button variant="link" className="text-sm" asChild>
          <Link href="/signup">Бүртгэл үүсгэх?</Link>
        </Button>
      </div>
    </>
  );
};

export default Login;
