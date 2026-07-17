import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 text-secondary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="mb-4 inline-flex items-center gap-2">
              <Image src={`${basePath}/images/logo.png`} alt="Ardas Samaj Kalyan Logo" width={120} height={40} className="h-10 w-auto object-contain" priority/>
              <span className="font-logo-text text-xl font-bold text-foreground">
                Ardas Samaj Kalyan
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              A non-profit organization committed to empowering marginalized communities through education, skill development, and comprehensive support.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              NITI Aayog Unique ID: <span className="font-medium text-foreground">UA 2020 0259841</span>
            </p>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="relative transition-colors duration-300 hover:text-[hsl(20,85%,49%)] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[hsl(20,85%,49%)] after:transition-all after:duration-300 hover:after:w-full">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="relative transition-colors duration-300 hover:text-[hsl(20,85%,49%)] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[hsl(20,85%,49%)] after:transition-all after:duration-300 hover:after:w-full">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="relative transition-colors duration-300 hover:text-[hsl(20,85%,49%)] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[hsl(20,85%,49%)] after:transition-all after:duration-300 hover:after:w-full">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/contact" className="relative transition-colors duration-300 hover:text-[hsl(20,85%,49%)] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[hsl(20,85%,49%)] after:transition-all after:duration-300 hover:after:w-full">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-primary shrink-0" />
                <span>33/4/1 Patel Nagar, Saharanpur Road, Dehradun, Uttarakhand</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:asktrust.in@gmail.com" className="transition-all duration-300 hover:text-[hsl(20,85%,49%)] hover:drop-shadow-[0_0_8px_rgba(234,88,12,0.8)]">
                  asktrust.in@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+917017075603" className="transition-all duration-300 hover:text-[hsl(20,85%,49%)] hover:drop-shadow-[0_0_8px_rgba(234,88,12,0.8)]">
                  +91 7017075603
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-6 text-center text-muted-foreground text-sm">
          <p>&copy; {year} Ardas Samaj Kalyan NGO. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}