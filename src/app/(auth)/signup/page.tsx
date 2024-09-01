import { Button } from "@/components/ui/button";
import RegisterForm from "@/containers/auth/register-form";
import { getConfig } from "@/sdk/queries/auth";
import { Metadata } from "next/types";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const { config } = await getConfig();

  return {
    title: "Sign up",
    openGraph: {
      title: "Sign up",
    },
  };
}

const SignUp = () => {
  return (
    <>
      <div className="text-lg md:text-2xl font-semibold mx-auto relative">
        Sign up
      </div>
      <div className="mb-auto mx-auto mt-4 md:mt-8 w-full sm:max-w-lg">
        <div className="md:border md:rounded-xl w-full sm:py-10 px-3 sm:px-10 space-y-5  bg-background">
          <RegisterForm />
        </div>
        <div className="my-4 md:my-8 text-center text-sm relative">
          <Button variant="link" className="text-sm" asChild>
            <Link href="/login">Sign in?</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
