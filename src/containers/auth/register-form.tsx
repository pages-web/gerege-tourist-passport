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
import { ageZod, passwordZod, phoneZod } from "@/lib/zod";
import { LoadingIcon } from "@/components/ui/loading";
import { useTranslations } from "next-intl";
import { useSetAtom } from "jotai";
import { currentUserAtom } from "@/store/auth.store";
import { useState, useEffect } from "react";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "Fill input" }),
  lastName: z.string().optional(),
  email: z.string().email(),
  phone: phoneZod,
  password: passwordZod,
  age: ageZod,
  gender: z.enum(["male", "female", "other"]),
  country: z.string().min(1, { message: "Select a country" }),
});
interface Country {
  code: string;
  name: string;
}
const RegisterForm = () => {
  const router = useRouter();
  const t = useTranslations("Welcome");
  const tr = useTranslations("Gender");

  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch("/countries.json")
      .then((res) => res.json())
      .then((data: Country[]) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error loading countries:", error);
      });
  }, []);

  const setCurrentUser = useSetAtom(currentUserAtom);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      age: undefined,
      gender: "male",
      country: "",
    },
  });

  const { register, loading, clientPortalId } = useRegister();

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { age, gender, country, ...restValues } = values;

    const customFieldsData = [
      {
        field: "RW9QvGiHnj4Uc_zoLXTaj",
        value: age,
      },
      {
        field: "DQQsZm-hsuQsqPb8W_vbL",
        value: gender,
      },
      {
        field: "TM6BT3QGRX2vZ50e-7VMj",
        value: country,
      },
    ];

    register({
      variables: { ...restValues, customFieldsData, clientPortalId },
      onCompleted(data) {
        setCurrentUser({
          _id: data?.registeredUser?._id ?? "",
          email: values.email,
          firstName: values.firstName,
          lastName: values.lastName,
          phone: values.phone,
          customFieldsData: JSON,
          age,
          gender,
          country,
        });

        toast.success("Congratulations, You registered successfully", {
          description: t("email_sent"),
        });

        router.push("/login");
      },
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="lg:grid grid-cols-2 space-y-4 lg:space-y-0 gap-y-6 gap-x-3 relative"
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
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("age")}</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="input w-full p-2 border rounded"
                  defaultValue=""
                >
                  <option value="" disabled>
                    -- {t("select_age")} --
                  </option>
                  {ageZod.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
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
              <FormLabel>{t("genders")}</FormLabel>
              <FormControl>
                <select {...field} className="input w-full p-2 border rounded">
                  <option value="male">{tr("male")}</option>
                  <option value="female">{tr("female")}</option>
                  <option value="other">{tr("other")}</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("country")}</FormLabel>
              <FormControl>
                <select {...field} className="input w-full p-2 border rounded">
                  <option value="">-- {t("select_country")} --</option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
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
                <Input placeholder="0000 0000" {...field} autoComplete="tel" />
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
        <Button className="w-full col-span-2" size="lg" disabled={loading}>
          {loading && <LoadingIcon />}
          {t("signup")}
        </Button>
        <Alert className="col-span-2">
          <InfoIcon className="h-4 w-4" />
          <AlertTitle className="text-sm">Caution!</AlertTitle>
          <AlertDescription className="text-xs">
            By clicking register, you accept the Terms of Service and Privacy
            Policy.
          </AlertDescription>
        </Alert>
      </form>
    </Form>
  );
};

export default RegisterForm;
