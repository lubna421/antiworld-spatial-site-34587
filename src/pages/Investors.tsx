import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const investorFormSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100),
  contact: z.string().trim().min(1, { message: "Contact is required" }).max(50),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  investmentValue: z.string().trim().min(1, { message: "Investment value is required" }),
  country: z.string().trim().min(1, { message: "Country is required" }).max(100),
  state: z.string().trim().min(1, { message: "State is required" }).max(100),
  city: z.string().trim().min(1, { message: "City is required" }).max(100),
  background: z.string().trim().min(1, { message: "Background is required" }).max(1000),
});

const Investors = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof investorFormSchema>>({
    resolver: zodResolver(investorFormSchema),
    defaultValues: {
      name: "",
      contact: "",
      email: "",
      investmentValue: "",
      country: "",
      state: "",
      city: "",
      background: "",
    },
  });

  const onSubmit = (values: z.infer<typeof investorFormSchema>) => {
    console.log(values);
    toast({
      title: "Form submitted",
      description: "Thank you for your interest. We'll be in touch soon.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Investor Resources</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Pitch Deck</h2>
            <div className="bg-muted p-8 rounded-lg border border-border">
              <p className="text-muted-foreground">Pitch deck will be available here soon.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Investor Information Form</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact</FormLabel>
                      <FormControl>
                        <Input placeholder="Phone number" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="investmentValue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Investment Value</FormLabel>
                      <FormControl>
                        <Input placeholder="Expected investment amount" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <Input placeholder="Country" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input placeholder="State" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="City" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="background"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Background</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your investment background and interests"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full md:w-auto">
                  Submit Information
                </Button>
              </form>
            </Form>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Investors;
