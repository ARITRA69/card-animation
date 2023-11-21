import Image from "next/image";
import { cars } from "@/data";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center mb-64 mt-64">
      <div>
        {cars.map((car, index) => (
          <Card key={index} {...car} />
        ))}
      </div>
    </main>
  );
}
