import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Beta",
      price: "Free",
      features: [
        "Unlimited presentations",
        "All templates",
        "Full feature access",
        "Community support",
      ],
      cta: "Join Beta"
    },
    {
      name: "Hobby",
      price: "$TBD/month",
      features: [
        "Coming soon",
        "Features to be announced",
      ],
      cta: "Stay Tuned",
      isDisabled: true
    },
    {
      name: "Pro",
      price: "$TBD/month",
      features: [
        "Coming soon",
        "Features to be announced",
      ],
      cta: "Stay Tuned",
      isDisabled: true
    }
  ];

  return (
    <div className="relative min-h-screen flex justify-center items-center p-4 font-shippori">
      <Image
        src="/pricing-background.jpg"
        alt="Pricing Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="opacity-30"
      />
      <div className="relative w-full max-w-6xl bg-[#f9f3e6]/90 border-4 border-[#2c3e50] p-8 shadow-lg">
        <header className="mb-12 relative">
          <Link href="/" className="text-4xl font-bold mb-4 tracking-wide flex items-center">
            <span className="mr-2">Gakunn</span>
            <span className="text-5xl text-[#d35400]">学</span>
          </Link>
          <h1 className="text-3xl font-bold mt-6">Join Our Beta</h1>
          <p className="mt-2 text-lg">Experience all features for free during our beta period</p>
        </header>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`border-2 border-[#2c3e50] shadow-[4px_4px_0px_0px_rgba(44,62,80,1)] transition-all duration-300 ease-in-out hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(44,62,80,1)] bg-[#f9f3e6] flex flex-col ${index !== 0 ? 'opacity-50' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-3xl font-bold mb-4">{plan.price}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full bg-[#2c3e50] text-[#f9f3e6] px-6 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(44,62,80,1)] transition-all duration-300 ease-in-out hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(44,62,80,1)] hover:bg-[#34495e] ${plan.isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={plan.isDisabled}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>

        <footer className="mt-16 pt-6 border-t-2 border-[#2c3e50] text-center">
          <p className="text-lg font-semibold mb-2">Beta Access: All features are currently free!</p>
          <p>Questions about our beta? <Link href="/contact" className="underline hover:text-[#d35400] transition-colors duration-300">Contact us</Link></p>
          <p className="mt-4">&copy; 2024 Gakunn. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
