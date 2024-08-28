import type { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { z } from "zod";
import { formSchema } from "./address-form";

const PersonalInfo = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof formSchema>, any, undefined>;
}) => {
  return (
    <>
      <FormField
        control={form.control}
        name="firstName"
        render={({ field }) => (
          <FormItem className="col-span-3">
            <FormLabel>Firstname / Нэр</FormLabel>
            <FormControl>
              <Input placeholder="John" {...field} autoComplete="given-name" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="lastName"
        render={({ field }) => (
          <FormItem className="col-span-3">
            <FormLabel>Lastname / Овог</FormLabel>
            <FormControl>
              <Input placeholder="Doe" {...field} autoComplete="family-name" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem className="col-span-3">
            <FormLabel>Contact number / Утасны дугаар</FormLabel>
            <FormControl>
              <Input
                placeholder="0000 0000"
                {...field}
                autoComplete="tel-local"
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
          <FormItem className="col-span-3">
            <FormLabel>E-mail address / И-Мэйл хаяг</FormLabel>
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
      <div />
    </>
  );
};

export default PersonalInfo;
