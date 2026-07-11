import { Suspense } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GetInvolvedTabs } from '@/components/get-involved-tabs';

export default function GetInvolvedPage() {

  return (
    <>
  
{/* 🌟 Old div animation wrapper stripped and replaced with a clean Fragment */}
      <section className="bg-primary/10 py-12">
        <div className="container mx-auto px-4 text-center">
          
          {/* 🌟 Isolated heading shimmer added here */}
          <h1 className="font-headline text-4xl md:text-5xl font-bold opacity-0 animate-heading-shimmer">
            Get Involved
          </h1>
          
          {/* 🌟 Staggered pure fade-in added here */}
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground opacity-0 animate-pure-fade-in [animation-delay:300ms]">
         Your support is crucial to our mission. Discover the different ways you can contribute and make a real impact.
          </p>
          
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
           <Suspense fallback={
             <Card>
               <CardHeader>
                 <CardTitle>Loading...</CardTitle>
                 <CardDescription>Please wait while we load the content.</CardDescription>
               </CardHeader>
               <CardContent>
                  <div className="h-40 w-full animate-pulse bg-secondary/50 rounded-md"></div>
               </CardContent>
             </Card>
           }>
            <GetInvolvedTabs />
          </Suspense>
        </div>
      </section>
    </>
  );
}
