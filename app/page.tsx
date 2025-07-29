import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CompanyInfo from '@/components/CompanyInfo';
import ContactForm from '@/components/ContactForm';
import Warning from '@/components/Warning';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Warning />
      <ContactForm />
      <CompanyInfo />
    </main>
  );
} 