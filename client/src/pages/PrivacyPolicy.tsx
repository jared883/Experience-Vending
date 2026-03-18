import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="font-serif text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-10">Last updated: March 2026</p>

          <div className="prose prose-slate max-w-none space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">1. Information We Collect</h2>
              <p>When you submit a booking request or contact form on our website, we collect personal information including your name, email address, phone number, event date, and any additional details you provide. We collect this information solely to respond to your inquiry and fulfill your booking.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>We use the information you provide to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Process and confirm your photo booth booking</li>
                <li>Communicate with you about your event details</li>
                <li>Send invoices and contracts related to your booking</li>
                <li>Respond to inquiries and customer service requests</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">3. SMS Communications</h2>
              <p>By submitting a booking or inquiry form, you consent to receive SMS notifications from Experience Vending LLC related to your booking. Message frequency varies. Message and data rates may apply. Reply STOP to opt out at any time. Reply HELP for help.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">4. Information Sharing</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties. Your information is used exclusively by Experience Vending LLC for the purposes described above.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">5. Data Security</h2>
              <p>We take reasonable precautions to protect your personal information. Your data is stored securely and accessed only by authorized personnel for the purpose of fulfilling your booking.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3">6. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:jared@experiencevending.com" className="text-primary underline">jared@experiencevending.com</a>.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
