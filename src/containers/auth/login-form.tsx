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
import Link from "next/link";
import { useLogin } from "@/sdk/hooks/auth";

const formSchema = z.object({
  login: z
    .string()
    .min(1, { message: "Fill input" })
    .regex(
      /^[^\s@]+@[^\s@]+\.[^\s@]+|[0-9]{6,}$/,
      "Wrong email or phone number"
    ),
  password: z.string().min(1, { message: "Fill input" }),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const { login, loading, clientPortalId } = useLogin();

  function onSubmit(values: z.infer<typeof formSchema>) {
    login({
      variables: { ...values, clientPortalId },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="login"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} autoComplete="username" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between mb-1">
                <FormLabel>Password</FormLabel>
                <Button
                  asChild
                  variant="link"
                  className="py-1 h-auto font-normal px-0"
                  tabIndex={-1}
                >
                  <Link href="/forgot">Forgot?</Link>
                </Button>
              </div>

              <FormControl>
                <Password {...field} autoComplete="current-password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" size="lg" disabled={loading}>
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
