import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="font-serif text-4xl font-bold mb-2">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-10">Last updated: March 2026</p>

          <div className="prose prose-slate max-w-none space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">1. Services</h2>
              <p>Experience Vending LLC provides luxury photo booth rental services for private and corporate events. By submitting a booking request, you agree to these Terms & Conditions.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">2. Booking & Payment</h2>
              <p>All bookings are subject to availability and confirmation by Experience Vending LLC. A 50% non-refundable deposit is required to secure your date. The remaining balance is due prior to the event date. Submitting a booking request does not guarantee availability until confirmed in writing.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">3. Cancellations & Refunds</h2>
              <p>Cancellations made more than 30 days before the event will receive a refund of any amounts paid beyond the deposit. Cancellations within 30 days of the event are non-refundable. Experience Vending LLC reserves the right to cancel a booking due to circumstances beyond our control, in which case a full refund will be issued.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">4. SMS Communications</h2>
              <p>By providing your phone number and submitting a form on our website, you consent to receive SMS messages from Experience Vending LLC regarding your booking or inquiry. Message frequency varies based on your activity. Message and data rates may apply. You may opt out at any time by replying STOP. For assistance, reply HELP or contact us at jared@experiencevending.com.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">5. Client Responsibilities</h2>
              <p>The client is responsible for providing a suitable space for the photo booth setup, including adequate power supply and sufficient space as communicated prior to the event. Experience Vending LLC is not liable for any damage caused by unsuitable venue conditions.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">6. Limitation of Liability</h2>
              <p>Experience Vending LLC's liability is limited to the total amount paid for services. We are not responsible for indirect, incidental, or consequential damages arising from the use of our services.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">7. Contact</h2>
              <p>For questions regarding these Terms & Conditions, contact us at <a href="mailto:jared@experiencevending.com" className="text-primary underline">jared@experiencevending.com</a>.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
