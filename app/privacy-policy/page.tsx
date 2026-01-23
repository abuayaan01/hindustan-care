import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2">Last updated: January 2024</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Hindustan Care ("Company", "we", "our", or "us") operates the Hindustan Care website and mobile application. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Information Collection and Use</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-3">Types of Data Collected:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Personal Data:</strong> Phone number, email address, name, address, and location information</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our Service</li>
              <li><strong>Cookie Data:</strong> Information stored in cookies and similar tracking technologies</li>
              <li><strong>Device Information:</strong> Device type, operating system, and browser information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Use of Data</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hindustan Care uses the collected data for various purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>To provide and maintain our Service</li>
              <li>To process your booking requests and service appointments</li>
              <li>To notify you about changes to our Service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical and security issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Security of Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
              <li>Email: <a href="mailto:info@hindustancare.com" className="text-primary hover:underline">info@hindustancare.in</a></li>
              <li>Phone: <a href="tel:+917488606493" className="text-primary hover:underline">+91-7488-606-493</a></li>
              <li>Address: Ranchi, Jharkhand, India</li>
            </ul>
          </section>
        </div>

        {/* Back to Home Button */}
        <div className="mt-12 pt-8 border-t border-border">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </main>

    </div>
  )
}
