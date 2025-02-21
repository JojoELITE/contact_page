import Image from "next/image";
import { Button } from "@/components/ui/button";

function VisionSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <span className="text-primary">Know more about</span>
        <h2 className="text-4xl font-bold mt-2 mb-4">Our mission & vision</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Together we, the people, achieve more than any single person could ever do alone.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[1, 2, 3].map((item) => (
            <div key={item} className="space-y-4">
              <Image
                src="/placeholder.svg"
                alt={`Political Image ${item}`}
                width={350}
                height={250}
                className="rounded-lg mx-auto"
              />
              <h3 className="font-bold text-xl">Equality and solidarity</h3>
              <p className="text-gray-600">
                Together we, the people, achieve more than any single person could ever do alone.
              </p>
              <Button variant="outline" className="mt-4">
                READ PLAN
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VisionSection;
