import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenText, Handshake, HeartHandshake, Users } from "lucide-react";
import type { Metadata } from "next";

// 🌟 1. Create dynamic variables so the code adapts to where it is hosted
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://asktrust.in";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// 🌟 2. The upgraded metadata object
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ardas Samaj Kalyan NGO | Empowering Communities",
  description: "Official website of Ardas Samaj Kalyan NGO: skill development, prisoner rehabilitation, women's SHG empowerment, youth development, community initiatives.",
  keywords: [
    "NGO", "Ardas Samaj Kalyan", "community development", "women empowerment", "skill development", "youth programs", "rehabilitation", "Uttarakhand NGO"
  ],
  openGraph: {
    title: "Ardas Samaj Kalyan NGO",
    description: "Empowering communities through education, skills, and social upliftment.",
    url: `${siteUrl}${basePath}`,
    siteName: "ASK Trust",
    images: [
      { 
        // 🎯 Dynamically builds the absolute URL for link sharing previews
        url: `${siteUrl}${basePath}/images/home1.png`, 
        width: 1200, 
        height: 630, 
        alt: "Ardas Samaj Kalyan Hero" 
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ardas Samaj Kalyan NGO",
    description: "Empowering communities through education, skills, and social upliftment.",
    images: [`${siteUrl}${basePath}/images/home1.png`],
  },
};
import Image from "next/image";
import { Testimonials } from "@/components/common/testimonials";
import Link from "next/link";

export default function Home() {
  // 1. Declare the environment variable at the top of the function
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <>
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
        <Image
          src={`${basePath}/images/home1.png`}
          alt="Community members working together"
          fill
          priority
          className="absolute z-0 object-cover"
          data-ai-hint="community help"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="z-20 p-4 max-w-4xl">
          
          {/* 🌟 1. HEADING: Smoothly shimmers into solid white */}
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold !text-[hsl(20,85%,49%)] drop-shadow-lg opacity-0 animate-heading-shimmer">
            Empowering Communities, Transforming Lives
          </h1>
          
          {/* 🌟 2. PARAGRAPH: Fades in after a 200ms delay */}
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto !text-white/90 drop-shadow-md opacity-0 animate-pure-fade-in [animation-delay:200ms]">
            Ardas Samaj Kalyan is dedicated to fostering social upliftment through education, skill development, and community support.
          </p>
          
          {/* 🌟 3. BUTTONS PACK: The entire button group fades up gently together after a 400ms delay */}
          <div className="mt-8 flex justify-center gap-4 opacity-0 animate-pure-fade-in [animation-delay:400ms]">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/get-involved?tab=donate">Donate Now</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/get-involved?tab=volunteer">Be a Volunteer</Link>
            </Button>
          </div>
          
        </div>
      </section>

      <section id="mission" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold">Our Mission</h2>
          <div className="flex justify-center">
            <div className="mt-4 h-1 w-24 bg-primary rounded-full"></div>
          </div>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            To create a self-reliant society by empowering individuals from marginalized communities. We focus on providing essential skills, education, and support systems that enable sustainable growth and a brighter future for all.
          </p>
        </div>
      </section>

      <section id="impact" className="py-12 md:py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-2xl md:text-3xl font-semibold text-center mb-2">Our Impact</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 text-sm md:text-base">
            Tangible outcomes created with community partners, volunteers, and beneficiaries.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-1">
            {[
               { label: 'Awareness Camps', value: '50+' },
               { label: 'Inmates Trained', value: '1000+' },
               { label: 'Lives Impacted', value: '50000+' },
               { label: 'Volunteers Engaged', value: '500+' },
              { label: 'Trees Planted', value: '2500+' },
               { label: 'Meals Distributed', value: '10000+' },
               { label: 'Free Health Camp Beneficiaries', value: '500+' },
              { label: 'Youth Mentored', value: '1000+' },
             { label: 'Women Trained', value: '1500+' },
            ].map(stat => (
              <div key={stat.label} className="text-center group">
                <div className="font-headline text-3xl md:text-4xl font-bold text-primary tracking-tight group-hover:scale-105 transition-transform">{stat.value}</div>
                <div className="mt-2 text-xs md:text-sm uppercase tracking-wide text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-[11px] md:text-xs text-muted-foreground/70 text-center mt-8">* Figures are cumulative estimates across initiatives and core programs.</p>
        </div>
      </section>

      <section id="programs" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-center">Our Core Programs</h2>
          <p className="text-center mt-2 text-muted-foreground">Driving change where it matters most.</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
 <Link href="/programs#core-prisoners" className="block h-full">
  <Card className="h-full text-center bg-background transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg hover:bg-gradient-to-br hover:from-background hover:to-[rgba(249,138,20,0.20)] cursor-pointer">
    <CardHeader>
      <div className="mx-auto bg-primary/20 text-primary rounded-full w-16 h-16 flex items-center justify-center">
        <BookOpenText className="w-8 h-8" />
      </div>
      <CardTitle className="font-headline mt-4">Skills for Prisoners</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">Providing technical and soft skills to inmates for rehabilitation and successful reintegration into society.</p>
    </CardContent>
  </Card>
</Link>

<Link href="/programs#core-shg" className="block h-full">
  <Card className="h-full text-center bg-background transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg hover:bg-gradient-to-br hover:from-background hover:to-[rgba(249,138,20,0.20)] cursor-pointer">
    <CardHeader>
      <div className="mx-auto bg-primary/20 text-primary rounded-full w-16 h-16 flex items-center justify-center">
        <Users className="w-8 h-8" />
      </div>
      <CardTitle className="font-headline mt-4">Women's SHG Support</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">Empowering women's Self-Help Groups with training and resources to foster financial independence.</p>
    </CardContent>
  </Card>
</Link>

<Link href="/programs#core-youth" className="block h-full">
  <Card className="h-full text-center bg-background transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg hover:bg-gradient-to-br hover:from-background hover:to-[rgba(249,138,20,0.20)] cursor-pointer">
    <CardHeader>
      <div className="mx-auto bg-primary/20 text-primary rounded-full w-16 h-16 flex items-center justify-center">
        <HeartHandshake className="w-8 h-8" />
      </div>
      <CardTitle className="font-headline mt-4">Youth Development</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">Supporting and guiding the youth towards positive pathways through mentorship and skill-building programs.</p>
    </CardContent>
  </Card>
</Link>
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-primary text-lg">
              <Link href="/programs">Learn More About Our Programs &rarr;</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Injected the adaptive basePath rules to your Testimonials array items */}
      <Testimonials
        showText={false}
        items={[
          { id: "img-1", quote: "", name: "", imageSrc: `${basePath}/images/testimonial-1.jpg` },
          { id: "img-2", quote: "", name: "", imageSrc: `${basePath}/images/testimonial-2.jpg` },
        ]}
      />

      <section id="initiatives" className="py-12 bg-primary/5 border-y border-primary/10">
  <div className="container mx-auto px-4">
    <h2 className="font-headline text-2xl md:text-3xl font-semibold text-center mb-2">Community Initiatives</h2>
    <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8 text-sm md:text-base">
      From COVID food relief to tree plantation and cyber safety, we respond to real community needs with focused action.
    </p>
    <div className="flex flex-wrap justify-center gap-3">
  {[
    // 🎯 REMOVED the first 3 core programs. Now strictly targeting the 9 community initiatives.
    { id: 'covid-food', title: 'COVID Relief: Food Distribution' },
    { id: 'tree-plantation', title: 'Tree Plantation Drive' },
    { id: 'cyber-security', title: 'Cyber Security Awareness' },
    { id: 'traffic-awareness', title: 'Traffic Awareness Campaign' },
    { id: 'summer-camp', title: 'Summer Camp (Children)' },
    { id: 'smartphone-photography', title: 'Smartphone Photography Workshop' },
    { id: 'artisan-camp', title: 'Artisan Skill Camp' },
    { id: 'multispeciality-camp', title: 'बहुदेशीय शिविर (Multi-speciality Camp)' },
    { id: 'drugs-cyber-awareness', title: 'Drugs and Cyber Awareness Campaign' }
  ].map(init => (
    <Link 
      key={init.id} 
      href={`/programs#${init.id}`}
      className="bg-card border border-border/50 px-4 py-1.5 rounded-full text-xs md:text-sm text-muted-foreground transition-all duration-300 ease-in-out hover:text-foreground hover:border-primary/40 hover:scale-[1.05] hover:shadow-md hover:bg-gradient-to-br hover:from-card hover:to-[rgba(249,138,20,0.20)] cursor-pointer"
    >
      {init.title}
    </Link>
  ))}
</div>
    <div className="text-center mt-8">
      <Button asChild variant="ghost" size="sm" className="text-primary">
        <Link href="/programs">Explore All Programs →</Link>
      </Button>
    </div>
  </div>
</section>

      <section id="get-involved" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold">Join Us in Making a Difference</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Your support can change lives. Whether you donate, volunteer, or partner with us, you become a vital part of our mission.
          </p>
          <div className="mt-8 flex justify-center items-center gap-8">
             <div className="text-center">
                <HeartHandshake className="h-12 w-12 text-primary mx-auto"/>
                <h3 className="text-xl font-semibold mt-2">Donate</h3>
                <p className="text-muted-foreground mt-1">Your contribution helps us fund our programs.</p>
             </div>
             <div className="text-center">
                <Handshake className="h-12 w-12 text-primary mx-auto"/>
                <h3 className="text-xl font-semibold mt-2">Partner</h3>
                <p className="text-muted-foreground mt-1">Collaborate with us to expand our reach.</p>
             </div>
          </div>
           <div className="mt-10">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                 <Link href="/get-involved">Get Involved Today</Link>
              </Button>
           </div>
        </div>
      </section>
   
    </>
  );
}