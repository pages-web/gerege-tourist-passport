"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Password } from "@/components/ui/password";
import { useRegister } from "@/sdk/hooks/auth";
import { toast } from "sonner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { genderZod, passwordZod, phoneZod } from "@/lib/zod";
import { LoadingIcon } from "@/components/ui/loading";
import { useTranslations } from "next-intl";
import { useSetAtom } from "jotai";
import { currentUserAtom } from "@/store/auth.store";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "Fill input" }),
  lastName: z.string().optional(),
  email: z.string().email(),
  phone: phoneZod,
  password: passwordZod,
  gender: genderZod,
});

const RegisterForm = () => {
  const router = useRouter();
  const t = useTranslations("Welcome");
  const setCurrentUser = useSetAtom(currentUserAtom);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      gender: "male",
    },
  });

  const { register, loading, clientPortalId } = useRegister();

  function onSubmit(values: z.infer<typeof formSchema>) {
    register({
      variables: { ...values, clientPortalId },
      onCompleted(data) {
        setCurrentUser({
          _id: data?.registeredUser?._id ?? "",
          email: values.email,
          gender: values.gender,
          firstName: values.firstName,
          lastName: values.lastName,
        });

        toast.success("Congratulations, You registered successfully", {
          description: t("email_verification_sent"),
        });

        router.push("/login");
      },
    });
  }

  return (
    <Form {...form}>
      <form
        className="lg:grid grid-cols-2 space-y-4 lg:space-y-0 gap-y-6 gap-x-3 relative"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("firstname")}</FormLabel>
              <FormControl>
                <Input
                  placeholder="John"
                  {...field}
                  autoComplete="given-name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("lastname")}</FormLabel>
              <FormControl>
                <Input
                  placeholder="Doe"
                  {...field}
                  autoComplete="family-name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("email")}</FormLabel>
              <FormControl>
                <Input
                  placeholder="john@doe.com"
                  {...field}
                  autoComplete="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("phone")}</FormLabel>
              <FormControl>
                <Input
                  placeholder="0000 0000"
                  {...field}
                  autoComplete="tel-national"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>{t("password")}</FormLabel>
              <FormControl>
                <Password {...field} autoComplete="new-password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("gender")}</FormLabel>
              <FormControl>
                <div className="flex space-x-6">
                  {["Male", "Female", "Other"].map((gender) => (
                    <label
                      key={gender}
                      className={`inline-flex items-center cursor-pointer ${
                        field.value === gender
                          ? "font-semibold text-black"
                          : "text-gray-400"
                      }`}
                    >
                      <input
                        type="radio"
                        value={gender}
                        checked={field.value === gender}
                        onChange={() => field.onChange(gender)}
                        className="form-radio"
                      />
                      <span className="ml-2">{t(gender)}</span>
                    </label>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full col-span-2" size="lg" disabled={loading}>
          {loading && <LoadingIcon />}
          {t("signup")}
        </Button>
        <Alert className="col-span-2">
          <InfoIcon className="h-4 w-4" />
          <AlertTitle className="text-sm">Caution!</AlertTitle>
          <AlertDescription className="text-xs">
            By clicking the register button, you are considered to have accepted
            the website&apos;s Terms of Service and Privacy Policy.
          </AlertDescription>
        </Alert>
      </form>
    </Form>
  );
};

export default RegisterForm;
