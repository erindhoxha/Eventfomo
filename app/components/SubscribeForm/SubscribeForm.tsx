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
import { Icons } from '@/components/ui/icons';

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
   <form onSubmit={form.handleSubmit(onSubmit)} className="w-full lg:w-max">
    <FormField
     control={form.control}
     name="username"
     render={({ field }) => (
      <FormItem>
       <FormControl>
        <div>
         <p className="text-sm mb-1.5">Join 100+ users</p>
         <div className="flex flex-col sm:flex-row max-w-sm space-y-2 sm:space-y-0">
          <Input
           className="lg:min-w-[250px]"
           placeholder="Your best email"
           {...field}
          />
          <Button
           type="submit"
           className="lg:ml-1"
           disabled={form.formState.isSubmitting}
          >
           {form.formState.isSubmitting && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
           )}
           Subscribe
          </Button>
         </div>
        </div>
       </FormControl>
       <FormDescription className="max-w-[230px]">
        We will send you events on this email 24 hours before tournaments start.
       </FormDescription>
       <FormMessage className="text-destructive" />
      </FormItem>
     )}
    />
   </form>
  </UIForm>
 );
};

export default Form;
