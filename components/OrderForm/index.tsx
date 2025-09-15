"use client";
import { z } from "zod";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { post } from "../../lib/api";

import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
  customerFirstName: z.string({ message: "Verplicht veld." }).min(2, {
    message: "Voornaam moet langer zijn dan 2 karakters.",
  }),
  customerLastName: z.string({ message: "Verplicht veld." }).min(2, {
    message: "Naam moet langer zijn dan 2 karakters.",
  }),
  customerEmail: z
    .string({ message: "Verplicht veld." })
    .email({ message: "Geen geldig email adres." }),
  email2: z
    .string({ message: "Verplicht veld." })
    .email({ message: "Geen geldig email adres" }),
  ticketQuantity: z.coerce
    .number()
    .min(1, { message: "Je moet minstens 1 ticket kopen." })
    .max(10, { message: "Je kan maximaal 10 tickets kopen per bestelling." }),
});

type OrderFormProps = {
  price: number;
  ticketId?: string;
};

export default function OrderForm(props: OrderFormProps) {
  const [apiError, setError] = useState("");
  const [url, setUrl] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ticketQuantity: 1,
    },
  });

  useEffect(() => {
    if (url) {
      window.location.href = url;
    }
  }, [url]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const orderData = {
        ...values,
        slug: "cvb2024",
        ...(props.ticketId && { ticketId: props.ticketId }),
      };
      console.log("submitting");
      const [error, data] = await post("/tickets/purchase", orderData);

      if (error) setError(error.message);
      else {
        setUrl(data.checkoutUrl);
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Er is een onverwachte fout opgetreden. Probeer het later opnieuw.",
      );
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="customerFirstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Voornaam</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="customerLastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Naam</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="customerEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="email2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Verifieer email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="ticketQuantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Aantal</FormLabel>
              <FormControl>
                <Input max={10} min={1} type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormMessage>{apiError}</FormMessage>
        <Button
          disabled={form.formState.isSubmitting}
          className="rounded-lg font-bold hover:bg-primary bg-primary w-full plausible-event-name=Order"
          type="submit"
        >
          Betaal € {(form.watch("ticketQuantity") || 1) * props.price},00
        </Button>
      </form>
    </Form>
  );
}
