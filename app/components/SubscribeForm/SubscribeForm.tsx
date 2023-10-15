'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form as UIForm,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

const Form = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <UIForm {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex flex-col sm:flex-row max-w-sm space-y-2 sm:space-y-0">
                  <Input
                    className="lg:min-w-[250px]"
                    placeholder="Your best email"
                    {...field}
                  />
                  <Button className="lg:ml-1" type="submit">
                    Subscribe
                  </Button>
                </div>
              </FormControl>
              <FormDescription>
                We will send you the events in this email.
                <br />
                Join 100+ users for free.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </UIForm>
  );
};

export default Form;
