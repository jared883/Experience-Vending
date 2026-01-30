import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Loader2, CheckCircle2 } from "lucide-react";
import { insertBookingSchema, type InsertBooking } from "@shared/schema";
import { useBookings, useCreateBooking } from "@/hooks/use-bookings";
import { api } from "@shared/routes";
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

export default function Book() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const preselectedPackage = searchParams.get("package") || "advanced";
  
  const { data: bookings } = useBookings();
  const createBooking = useCreateBooking();
  const [isSuccess, setIsSuccess] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  
  // Check if we're before July 1st, 2026 (pre-launch period)
  const isPreLaunch = new Date() < new Date(2026, 6, 1);

  // Derive disabled dates from existing bookings
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

  const onSubmit = (data: InsertBooking) => {
    createBooking.mutate(data, {
      onSuccess: () => setIsSuccess(true)
    });
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
            <h2 className="font-serif text-3xl font-bold mb-4">Request Received!</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Thank you for choosing Experience Vending. We've received your booking request for 
              <span className="font-semibold text-foreground"> {form.getValues().eventDate && format(form.getValues().eventDate, "MMMM do, yyyy")}</span>.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
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
          <SectionHeader title="Secure Your Date" subtitle="Booking" className="mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Left Column: Form */}
            <div className="lg:col-span-2">
              <Card className="border-border/60 shadow-soft">
                <CardContent className="p-8">
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
                                <Input placeholder="John Doe" {...field} className="bg-white/50" />
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
                                <Input placeholder="john@example.com" {...field} className="bg-white/50" />
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
                                <Input placeholder="(555) 123-4567" {...field} className="bg-white/50" />
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
                                  <SelectTrigger className="bg-white/50">
                                    <SelectValue placeholder="Select event type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
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
                                        "w-full pl-3 text-left font-normal bg-white/50",
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
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={(date) => {
                                      field.onChange(date);
                                      setCalendarOpen(false);
                                    }}
                                    disabled={[
                                      ...disabledDates, 
                                      { before: isPreLaunch ? new Date(2026, 6, 1) : new Date() } // Before July 1st 2026 during pre-launch, otherwise just past dates
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
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-white/50">
                                    <SelectValue placeholder="Select a package" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="basic">The Essential ($750)</SelectItem>
                                  <SelectItem value="advanced">The Classic ($999)</SelectItem>
                                  <SelectItem value="premium">The Gala ($1950)</SelectItem>
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
                                className="resize-none min-h-[120px] bg-white/50" 
                                {...field} 
                                value={field.value || ""} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        size="lg" 
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
              <div className="bg-primary/5 p-8 rounded-xl border border-primary/20">
                <h3 className="font-serif text-xl font-bold mb-4 text-primary-dark">What happens next?</h3>
                <ol className="space-y-4 text-sm text-muted-foreground list-decimal pl-4">
                  <li><strong className="text-foreground">Review:</strong> We'll check our availability for your specific date.</li>
                  <li><strong className="text-foreground">Contract:</strong> We'll email you a rental agreement and invoice.</li>
                  <li><strong className="text-foreground">Deposit:</strong> A 50% retainer secures your date.</li>
                  <li><strong className="text-foreground">Design:</strong> We'll work with you to design your custom print template.</li>
                </ol>
              </div>

              <div className="bg-muted/30 p-8 rounded-xl border border-border">
                <h3 className="font-serif text-xl font-bold mb-4">Availability</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {isPreLaunch ? (
                    <><strong className="text-primary">Availability begins July 1st, 2026.</strong> Book now to secure your preferred date for the upcoming season!</>
                  ) : (
                    <>Dates marked in gray on the calendar are already booked. We recommend booking 3-6 months in advance for peak wedding season (May-Oct).</>
                  )}
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                  <span>Booked</span>
                </div>
                <div className="flex items-center gap-2 text-sm mt-1">
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
