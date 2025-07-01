import HomeBanner from "@/components/ui/homebanner";
import FeatureSection from "@/components/ui/featuresection";
import ServiceSection from "@/components/ui/servicesection";
import DataCenterSection from "@/components/ui/datacentersection";
import HostingFeatureArea from "@/components/ui/hostingfeaturearea";
import SecureManagement from "@/components/ui/securemanagement";
import EliteHostFeatureArea from "@/components/ui/elitehostingfeaturearea";
import Testimonials from "@/components/ui/testimonials";
import LatestBlog from "@/components/ui/latestblog";
import HostingFaq from "@/components/ui/hostingfaq";
import Newsletter from "@/components/ui/newsletter";


export default function Home() {
  return (
    <>
      <HomeBanner />
      <FeatureSection />
      <ServiceSection />
      <DataCenterSection />
      <HostingFeatureArea />
      <SecureManagement />
      <EliteHostFeatureArea />  
      <Testimonials />
      <LatestBlog />
      <HostingFaq />
      <Newsletter />
    </>
  );
}
