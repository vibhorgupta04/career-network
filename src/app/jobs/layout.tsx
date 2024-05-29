import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  );
}
