import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Whatsapp from "@/public/images/icons/whatsapp-white.svg";
import Image from "next/image";
import SplitText from "@/components/animations/split-text";
import FadeIn from "@/components/animations/fade-in";
import Reveal from "@/components/animations/reveal";

function ContactSection() {
  return (
    <section
      style={bgStyle}
      id="contact"
      className="py-20 md:py-32 bg-primary text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SplitText delay={0.1} className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Get Your Appliances Fixed?
        </SplitText>
        <FadeIn
          delay={0.2}
          className="text-lg mb-8 max-w-2xl mx-auto opacity-90"
        >
          Contact us today for professional, reliable, and affordable repair
          services
        </FadeIn>

        <Reveal delay={0.23}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white text-primary hover:bg-secondary hover:text-primary border-white"
            >
              <a
                href="tel:+919117770110"
                className="flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: +91 9117770110
              </a>
            </Button>
            <Button
              size="lg"
              variant="whatsapp"
              asChild
              className="rounded-full bg-[#25D366] text-white"
            >
              <a
                href="https://wa.me/919117770110?text=Hi%20Hindustan%20Care%2C%20I%20need%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  alt="hindustan_care_contact"
                  className="w-5 h-5"
                  src={Whatsapp}
                />
                WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="grid sm:grid-cols-3 gap-6 text-center bg-primary-foreground/10 rounded-xl p-6">
            <div>
              <p className="text-2xl font-bold mb-2">Service Area</p>
              <p>Ranchi & Nearby Areas in Jharkhand</p>
            </div>
            <div>
              <p className="text-2xl font-bold mb-2">Hours</p>
              <p>Monday - Sunday, 8 AM - 8 PM</p>
            </div>
            <div>
              <p className="text-2xl font-bold mb-2">Response Time</p>
              <p>Within 30 minutes in Ranchi</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ContactSection;

const bgStyle = {
  backgroundColor: "#005BBB",
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23005BBB' stroke-width='0.8' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(20.55) translate(-951.34 -713.5)'%3E%3Cuse fill='%232461bd' href='%23s' y='2'/%3E%3Cuse fill='%232461bd' href='%23s' x='1' y='2'/%3E%3Cuse fill='%233367be' href='%23s' x='2' y='2'/%3E%3Cuse fill='%233367be' href='%23s'/%3E%3Cuse fill='%233e6cc0' href='%23s' x='2'/%3E%3Cuse fill='%233e6cc0' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(20.55) translate(-951.34 -713.5)'%3E%3Cg fill='%234871c1'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(20.55) translate(-951.34 -713.5)'%3E%3Cg fill='%234871c1'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(20.55) translate(-951.34 -713.5)'%3E%3Cg fill='%235176c3'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(20.55) translate(-951.34 -713.5)'%3E%3Cg fill='%23005BBB'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23587bc4'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(20.55) translate(-951.34 -713.5)'%3E%3Cg fill='%23005BBB'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(20.55) translate(-951.34 -713.5)'%3E%3Cg fill='%23005BBB'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(20.55) translate(-951.34 -713.5)'%3E%3Cg fill='%23005BBB'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E")`,
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
};
