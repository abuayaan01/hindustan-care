import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Terms of Service</h1>
          <p className="text-muted-foreground mt-2">Last updated: January 2024</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using the Hindustan Care website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Hindustan Care's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              The materials on Hindustan Care's website are provided on an "as is" basis. Hindustan Care makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitations of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall Hindustan Care or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Hindustan Care's website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Accuracy of Materials</h2>
            <p className="text-muted-foreground leading-relaxed">
              The materials appearing on Hindustan Care's website could include technical, typographical, or photographic errors. Hindustan Care does not warrant that any of the materials on its website are accurate, complete, or current. Hindustan Care may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Service Booking Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you book a service through Hindustan Care:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>You agree to provide accurate and complete information</li>
              <li>You are responsible for ensuring access to your home/appliance at the scheduled time</li>
              <li>Cancellations must be made at least 2 hours before the scheduled appointment</li>
              <li>A service fee may apply for cancellations made within 2 hours</li>
              <li>All repairs come with a 1-year warranty on parts and labor</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Payment Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Payment is accepted upon completion of service. We accept cash, card payments, and digital payment methods. A detailed invoice will be provided upon completion of work. No additional charges will be levied without prior consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitation of Warranty</h2>
            <p className="text-muted-foreground leading-relaxed">
              While we strive to provide quality service, we cannot guarantee that repairs will resolve all issues. Warranty coverage is limited to defects in workmanship within the service period and does not cover damage due to misuse, accidents, or natural wear and tear.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions regarding these Terms of Service, please contact us at:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
              <li>Email: <a href="mailto:info@hindustancare.com" className="text-primary hover:underline">info@hindustancare.in</a></li>
              <li>Phone: <a href="tel:+917488606493" className="text-primary hover:underline">+91-7488-606-493</a></li>
              <li>Address: Ranchi, Jharkhand, India</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Revisions and Errata</h2>
            <p className="text-muted-foreground leading-relaxed">
              The materials appearing on Hindustan Care's website and services are subject to change. We reserve the right to modify or update these Terms of Service at any time. Your continued use of the service constitutes acceptance of any modifications.
            </p>
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
