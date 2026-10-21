import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
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
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const createInquiry = useCreateInquiry();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    createInquiry.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader as="h1" title="Get in Touch" subtitle="Contact" className="mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
            
            <div className="space-y-8">
              <p className="text-lg text-foreground/75 font-light leading-relaxed">
                Have questions about our booths or placement options? Need more info before applying? We'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">Email Us</h3>
                  <div className="flex flex-col space-y-1">
                    <a href="mailto:jared@experiencevending.com" className="text-primary hover:text-primary/80 transition-colors text-lg">jared@experiencevending.com</a>
                    <a href="mailto:kylee@experiencevending.com" className="text-primary hover:text-primary/80 transition-colors text-lg">kylee@experiencevending.com</a>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">Call Us</h3>
                  <div className="flex flex-col space-y-1">
                    <a href="tel:+19403277045" className="text-foreground/70 hover:text-primary transition-colors text-lg">(940) 327-7045</a>
                    <a href="tel:+18178970460" className="text-foreground/70 hover:text-primary transition-colors text-lg">(817) 897-0460</a>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">Service Area</h3>
                  <p className="text-foreground/75 text-lg">Based in Fort Worth, Texas. Serving the DFW Metroplex and surrounding areas.</p>
                </div>
              </div>
            </div>

            <Card className="border-border/60 shadow-gold bg-card">
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} className="bg-background/70 border-border" />
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
                            <Input placeholder="you@company.com" {...field} className="bg-background/70 border-border" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you?" 
                              className="resize-none min-h-[150px] bg-background/70 border-border" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-serif"
                      disabled={createInquiry.isPending}
                    >
                      {createInquiry.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
