import HomeBanner from "@/components/ui/homebanner";
import FeatureSection from "@/components/ui/featuresection";
import ServiceSection from "@/components/ui/servicesection";
import DataCenterSection from "@/components/ui/datacentersection";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <FeatureSection />
      <ServiceSection />
      <DataCenterSection />
    </>
  );
}
