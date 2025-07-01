import HomeBanner from "@/components/ui/homebanner";
import FeatureSection from "@/components/ui/featuresection";
import ServiceSection from "@/components/ui/servicesection";
import DataCenterSection from "@/components/ui/datacentersection";
import HostingFeatureArea from "@/components/ui/hostingfeaturearea";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <FeatureSection />
      <ServiceSection />
      <DataCenterSection />
      <HostingFeatureArea />
    </>
  );
}
