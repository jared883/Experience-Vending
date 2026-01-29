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
          <SectionHeader title="Get in Touch" subtitle="Contact" className="mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
            
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Have questions about our packages? Need a custom quote for a multi-day event or brand activation? We'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">Email Us</h3>
                  <a href="mailto:hello@experiencevending.com" className="text-primary hover:underline text-lg">hello@experiencevending.com</a>
                </div>
                
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">Call Us</h3>
                  <a href="tel:+15551234567" className="text-foreground hover:text-primary transition-colors text-lg">(555) 123-4567</a>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">Service Area</h3>
                  <p className="text-muted-foreground">Serving the Greater Metro Area and surrounding counties. Travel fees may apply for events &gt;50 miles from city center.</p>
                </div>
              </div>
            </div>

            <Card className="border-border/60 shadow-soft">
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
                            <Input placeholder="Your Name" {...field} className="bg-white/50" />
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
                            <Input placeholder="you@company.com" {...field} className="bg-white/50" />
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
                              className="resize-none min-h-[150px] bg-white/50" 
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
