import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Building2, TrendingUp, Shield, Wrench } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const partnerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Phone number is required"),
  businessName: z.string().min(2, "Business name is required"),
  businessType: z.string().min(2, "Business type is required"),
  location: z.string().min(2, "Location is required"),
  message: z.string().optional(),
});

type PartnerForm = z.infer<typeof partnerSchema>;

export default function Partner() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<PartnerForm>({
    resolver: zodResolver(partnerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      businessName: "",
      businessType: "",
      location: "",
      message: "",
    },
  });

  const onSubmit = async (data: PartnerForm) => {
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: `VENUE PARTNERSHIP APPLICATION\n\nBusiness: ${data.businessName}\nType: ${data.businessType}\nLocation: ${data.location}\n\nAdditional Notes: ${data.message || "None"}`,
        }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setIsSuccess(true);
    } catch {
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <div className="flex-grow flex items-center justify-center p-4">
          <Card className="max-w-lg w-full p-8 text-center border-primary/20 shadow-2xl">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="font-serif text-3xl font-bold mb-4">Application Received!</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Thank you for your interest in partnering with Experience Vending. We'll review your application and reach out within <strong>24 hours</strong>.
            </p>
            <Button onClick={() => window.location.href = "/"} className="bg-primary text-primary-foreground">
              Return Home
            </Button>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary tracking-[0.2em] text-sm uppercase font-medium">Venue Partnership</span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mt-3 mb-6 text-white">
              Get a Booth <span className="text-primary italic">Now!</span>
            </h1>
            <p className="text-background/70 text-lg font-light leading-relaxed">
              We place our luxury Photoma Mini in your venue at no cost to you. We handle everything — you simply enjoy the added experience your guests love.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Building2 className="w-7 h-7 text-primary" />,
                title: "Zero Upfront Cost",
                desc: "We place and install the booth at no cost to your venue."
              },
              {
                icon: <Wrench className="w-7 h-7 text-primary" />,
                title: "Fully Managed",
                desc: "We handle all maintenance, restocking, and tech support."
              },
              {
                icon: <TrendingUp className="w-7 h-7 text-primary" />,
                title: "Revenue Opportunity",
                desc: "Flexible arrangements available including profit sharing for qualifying venues."
              },
              {
                icon: <Shield className="w-7 h-7 text-primary" />,
                title: "Insured & Professional",
                desc: "Fully insured operation. We take care of everything end to end."
              },
            ].map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-border/50 shadow-soft text-center"
              >
                <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <div className="text-center mb-12">
            <span className="text-primary tracking-[0.2em] text-sm uppercase font-medium">Apply Today</span>
            <h2 className="font-serif text-4xl font-bold mt-2">Venue Application</h2>
            <p className="text-muted-foreground mt-4 font-light">Fill out the form below and we'll be in touch within 24 hours.</p>
          </div>

          <Card className="border-border/60 shadow-soft">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl><Input placeholder="Jane Smith" {...field} className="bg-white/50" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl><Input placeholder="jane@venue.com" {...field} className="bg-white/50" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl><Input placeholder="(555) 123-4567" {...field} className="bg-white/50" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="businessName" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Name</FormLabel>
                        <FormControl><Input placeholder="The Grand Venue" {...field} className="bg-white/50" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField control={form.control} name="businessType" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type of Business</FormLabel>
                        <FormControl><Input placeholder="e.g. Restaurant, Wedding Venue..." {...field} className="bg-white/50" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="location" render={({ field }) => (
                      <FormItem>
                        <FormLabel>City / Location</FormLabel>
                        <FormControl><Input placeholder="Fort Worth, TX" {...field} className="bg-white/50" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Anything else you'd like us to know? (optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your venue, typical foot traffic, or any questions..."
                          className="resize-none min-h-[120px] bg-white/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-serif text-lg py-6"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
