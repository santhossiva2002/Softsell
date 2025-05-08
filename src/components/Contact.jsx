import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from "lucide-react";
import ContactForm from "@/components/ui/contact-form"; 
export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get a Free Valuation</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and our team will provide a no-obligation quote for your unused software licenses.
            </p>
          </div>
          
          <div className="bg-background rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="p-8 lg:col-span-2 bg-primary text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <p className="font-medium">Email</p>
                      <p className="mt-1">info@softsell.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <p className="font-medium">Phone</p>
                      <p className="mt-1">+1 (888) 555-0123</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <p className="font-medium">Office</p>
                      <p className="mt-1">123 Tech Park, Suite 500<br/>San Francisco, CA 94107</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-primary-foreground/80 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-white hover:text-primary-foreground/80 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-white hover:text-primary-foreground/80 transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-8 lg:col-span-3">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
