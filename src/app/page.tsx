import OverviewTabs from '@/components/starter/OverviewTabs';
import Features from '@/components/starter/Features';
import Banner from '@/components/starter/Banner';

export default function Home() {
  return (
    <main className="page-container">
      <Banner />
      <Features />
      <OverviewTabs />
    </main>
  );
}
