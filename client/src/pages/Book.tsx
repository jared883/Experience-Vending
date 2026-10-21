import { useState, useRef } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Loader2, CheckCircle2, Check } from "lucide-react";
import { insertBookingSchema, type InsertBooking } from "@shared/schema";
import { useBookings, useCreateBooking } from "@/hooks/use-bookings";
import { cn } from "@/lib/utils";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent } from "@/components/ui/card";

const packages = [
  {
    id: "basic",
    name: "The Essential",
    price: "$1,250",
    duration: "4 Hours",
    description: "Perfect for intimate gatherings, cocktail hours, and smaller celebrations where you want a premium experience without the full-day commitment.",
    features: [
      "4 Hours of Service",
      "Unlimited Print & Digital Photos",
      "Customizable Photo Options",
      "On-site Attendant",
      "Setup & Teardown",
    ],
    highlight: false,
    ideal: "Cocktail hours, birthday parties, bridal showers",
  },
  {
    id: "advanced",
    name: "The Classic",
    price: "$1,500",
    duration: "6 Hours",
    description: "Our most popular choice. Ideal for weddings and milestone celebrations that call for extended coverage and more time for your guests to enjoy the experience.",
    features: [
      "6 Hours of Service",
      "Unlimited Print & Digital Photos",
      "Customizable Photo Options",
      "On-site Attendant",
      "Setup & Teardown",
    ],
    highlight: true,
    ideal: "Weddings, anniversary galas, quinceañeras",
  },
  {
    id: "premium",
    name: "The Gala",
    price: "$2,500",
    duration: "8 Hours",
    description: "Full-day luxury coverage for grand events and corporate activations. Two dedicated attendants ensure a seamless, white-glove experience from start to finish.",
    features: [
      "8 Hours of Service",
      "Unlimited Print & Digital Photos",
      "Customizable Photo Options",
      "Guestbook Service",
      "Two On-site Attendants",
      "Priority Support",
    ],
    highlight: false,
    ideal: "Corporate events, fundraisers, large-scale galas",
  },
];

export default function Book() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const preselectedPackage = searchParams.get("package") || "advanced";

  const { data: bookings } = useBookings();
  const createBooking = useCreateBooking();
  const [isSuccess, setIsSuccess] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const isPreLaunch = new Date() < new Date(2026, 6, 1);
  const disabledDates = bookings?.map(b => new Date(b.eventDate)) || [];

  const form = useForm<InsertBooking>({
    resolver: zodResolver(insertBookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      packageId: preselectedPackage,
      notes: "",
    },
  });

  const handleSelectPackage = (pkgId: string) => {
    form.setValue("packageId", pkgId);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onSubmit = (data: InsertBooking) => {
    setSubmitError(null);
    createBooking.mutate(data, {
      onSuccess: () => setIsSuccess(true),
      onError: (error) => setSubmitError(error.message || "Something went wrong. Please try again."),
    });
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <div className="flex-grow flex items-center justify-center p-4">
          <Card className="max-w-lg w-full p-8 text-center border-primary/20 shadow-gold bg-card">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-serif text-3xl font-bold mb-4">Request Received!</h2>
            <p className="text-foreground/75 mb-8 text-lg">
              Thank you for choosing Experience Vending. We've received your booking request for{" "}
              <span className="font-semibold text-foreground">
                {form.getValues().eventDate && format(form.getValues().eventDate, "MMMM do, yyyy")}
              </span>.
            </p>
            <p className="text-sm text-foreground/70 mb-8">
              We will review your request and send a confirmation email along with an invoice within 24 hours.
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

      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader as="h1" title="Secure Your Date" subtitle="Booking" className="mb-16" />

          {/* ── Package Overview ── */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="text-center mb-10">
              <p className="label-luxury mb-3">Choose Your Experience</p>
              <h2 className="font-serif text-2xl font-semibold text-foreground/90">
                Select the package that fits your event
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => {
                const isSelected = form.watch("packageId") === pkg.id;
                return (
                  <div
                    key={pkg.id}
                    data-testid={`card-package-${pkg.id}`}
                    className={cn(
                      "relative flex flex-col p-7 rounded-xl border transition-all duration-300",
                      pkg.highlight
                        ? "border-primary/60 bg-primary/5 shadow-gold"
                        : "border-border/50 bg-card hover:border-primary/30",
                      isSelected && "ring-2 ring-primary ring-offset-2 ring-offset-background"
                    )}
                  >
                    {pkg.highlight && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                        Most Popular
                      </div>
                    )}

                    <div className="mb-5">
                      <h3 className="font-serif text-xl font-bold mb-1">{pkg.name}</h3>
                      <div className="text-xs text-primary uppercase tracking-widest font-light mb-3">{pkg.duration}</div>
                      <div className="font-serif text-3xl font-bold text-foreground mb-4">{pkg.price}</div>
                      <p className="text-sm text-foreground/75 leading-relaxed">{pkg.description}</p>
                    </div>

                    <div className="space-y-2.5 mb-5 flex-grow">
                      {pkg.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <div className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-primary/15 flex items-center justify-center text-primary">
                            <Check size={10} strokeWidth={3} />
                          </div>
                          <span className="text-sm text-foreground/75">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-5 pt-4 border-t border-border/30">
                      <p className="text-[11px] text-foreground/75 uppercase tracking-wider mb-1">Ideal for</p>
                      <p className="text-xs text-foreground/70 italic">{pkg.ideal}</p>
                    </div>

                    <p className="text-[11px] text-foreground/70 italic mb-4 text-center">
                      Vinyl wrap customization available upon request.
                    </p>

                    <Button
                      data-testid={`button-select-${pkg.id}`}
                      onClick={() => handleSelectPackage(pkg.id)}
                      className={cn(
                        "w-full font-serif tracking-wide",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : pkg.highlight
                          ? "bg-primary/20 text-primary border border-primary/40 hover:bg-primary hover:text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary border border-border/40"
                      )}
                    >
                      {isSelected ? "Selected ✓" : `Choose ${pkg.name}`}
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Divider ── */}
          <div className="max-w-6xl mx-auto mb-16 flex items-center gap-6">
            <div className="flex-1 h-px bg-border/40" />
            <span className="text-primary text-lg">◆</span>
            <div className="flex-1 h-px bg-border/40" />
          </div>

          {/* ── Booking Form ── */}
          <div ref={formRef} className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto scroll-mt-32">
            {/* Left Column: Form */}
            <div className="lg:col-span-2">
              <Card className="border-border/60 shadow-gold bg-card">
                <CardContent className="p-8">
                  <h3 className="font-serif text-xl font-semibold mb-6 text-foreground/90">Complete Your Request</h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} className="bg-background/70 border-border" data-testid="input-name" />
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
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="john@example.com" {...field} className="bg-background/70 border-border" data-testid="input-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="(555) 123-4567" {...field} className="bg-background/70 border-border" data-testid="input-phone" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="eventType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Event Type</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-background/70 border-border" data-testid="select-event-type">
                                    <SelectValue placeholder="Select event type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-card border border-border shadow-lg">
                                  <SelectItem value="wedding">Wedding</SelectItem>
                                  <SelectItem value="corporate">Corporate Event</SelectItem>
                                  <SelectItem value="birthday">Birthday Party</SelectItem>
                                  <SelectItem value="gala">Gala / Fundraiser</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="eventDate"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Event Date</FormLabel>
                              <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      data-testid="button-date-picker"
                                      className={cn(
                                        "w-full pl-3 text-left font-normal bg-background/70 border-border",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>Pick a date</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0 bg-card border border-border" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={(date) => {
                                      field.onChange(date);
                                      setCalendarOpen(false);
                                    }}
                                    disabled={[
                                      ...disabledDates,
                                      { before: isPreLaunch ? new Date(2026, 6, 1) : new Date() }
                                    ]}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormDescription>Check calendar for availability.</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="packageId"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Package Selection</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-background/70 border-border" data-testid="select-package">
                                    <SelectValue placeholder="Select a package" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-card border border-border shadow-lg">
                                  <SelectItem value="basic">The Essential ($1,250)</SelectItem>
                                  <SelectItem value="advanced">The Classic ($1,500)</SelectItem>
                                  <SelectItem value="premium">The Gala ($2,500)</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Notes or Questions</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your venue, theme, or any special requests..."
                                className="resize-none min-h-[120px] bg-background/70 border-border"
                                {...field}
                                value={field.value || ""}
                                data-testid="textarea-notes"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {submitError && (
                        <div className="bg-red-950/50 border border-red-800/50 text-red-400 rounded-lg px-4 py-3 text-sm">
                          <strong>Submission failed:</strong> {submitError}
                        </div>
                      )}

                      <Button
                        type="submit"
                        size="lg"
                        data-testid="button-submit"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-serif text-lg py-6"
                        disabled={createBooking.isPending}
                      >
                        {createBooking.isPending ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Request Booking"
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Info */}
            <div className="space-y-8">
              <div className="bg-primary/10 p-8 rounded-xl border border-primary/20">
                <h3 className="font-serif text-xl font-bold mb-4 text-primary">What happens next?</h3>
                <ol className="space-y-4 text-sm text-foreground/75 list-decimal pl-4">
                  <li><strong className="text-foreground">Review:</strong> We'll check our availability for your specific date.</li>
                  <li><strong className="text-foreground">Contract:</strong> We'll email you a rental agreement and invoice.</li>
                  <li><strong className="text-foreground">Deposit:</strong> A 50% retainer secures your date.</li>
                  <li><strong className="text-foreground">Design:</strong> We'll work with you to design your custom print template.</li>
                </ol>
              </div>

              <div className="bg-card p-8 rounded-xl border border-border/50">
                <h3 className="font-serif text-xl font-bold mb-4">Availability</h3>
                <p className="text-sm text-foreground/75 mb-4">
                  {isPreLaunch ? (
                    <><strong className="text-primary">Availability begins July 1st, 2026.</strong> Book now to secure your preferred date for the upcoming season!</>
                  ) : (
                    <>Dates marked in gray on the calendar are already booked. We recommend booking 3–6 months in advance for peak wedding season (May–Oct).</>
                  )}
                </p>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <div className="w-3 h-3 rounded-full bg-foreground/20"></div>
                  <span>Booked</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70 mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span>Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
