import { getServiceBySlug, getAllServiceSlugs } from '@/lib/services';
import ServicePageClient from '@/components/ServicePageClient';

// Generate static params for all services
export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'שירות לא נמצא | Dental Care',
    };
  }

  return {
    title: `${service.title} | Dental Care`,
    description: service.fullDescription,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ServicePageClient slug={slug} />;
}
