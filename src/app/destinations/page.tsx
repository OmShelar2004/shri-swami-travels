import { DestinationSlider } from "@/components/destination-slider";
import { SiteLayout } from "@/components/site-layout";
import { destinationSlides } from "@/config/content";

export default function DestinationsPage() {
  return (
    <SiteLayout>
      <main>
        <DestinationSlider slides={destinationSlides} />
      </main>
    </SiteLayout>
  );
}
