import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/archibike/Navbar";
import ScrollProgress from "@/components/archibike/ScrollProgress";
import Hero from "@/components/archibike/Hero";
import Models from "@/components/archibike/Models";
import Technology from "@/components/archibike/Technology";
import Story from "@/components/archibike/Story";
import Newsletter from "@/components/archibike/Newsletter";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Models />
      <Technology />
      <Story />
      <Newsletter />
    </main>
  );
}
