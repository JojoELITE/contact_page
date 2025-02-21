import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import Image from "next/image";

function PresidentMessage() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr,2fr] gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-[3/4] w-full max-w-[320px] mx-auto">
                <Image src="/2.jpg" alt="Thomas IBINGA MBOUGOU" fill className="object-cover rounded-lg shadow-xl" />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-8 py-2 rounded-full shadow-lg">
                <h3 className="text-primary font-semibold whitespace-nowrap">Président du PLC</h3>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">Mot du Président</h2>
                <div className="w-20 h-1 bg-primary"></div>
              </div>
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 h-8 w-8 text-primary/20" />
                <blockquote className="pl-8 text-lg text-gray-700 italic">
                  En tant que Président du PLC - Pour Le Changement, je m&apos;engage à porter la voix du renouveau et
                  de l&apos;espoir...
                </blockquote>
              </div>
              <div className="space-y-2 pt-4">
                <h3 className="text-2xl font-bold text-gray-900">Thomas IBINGA MBOUGOU</h3>
                <p className="text-primary font-medium">Président du PLC - Pour Le Changement</p>
              </div>
              <div className="flex gap-4 pt-4">
                <Button className="bg-primary hover:bg-primary/90">Notre Programme</Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  En savoir plus
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PresidentMessage;