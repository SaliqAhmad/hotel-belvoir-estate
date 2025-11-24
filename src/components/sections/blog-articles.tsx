import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ArrowIcon = () => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    <path d="M19.3359 13.2001V5.6641H11.7999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M5.91895 18.981L19.201 5.69922" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

const blogArticlesData = [
  {
    category: 'Luxury',
    date: 'Jan 15, 2025',
    title: 'How to Plan the Perfect Romantic Getaway at a Luxury Hotel',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/6787887b634290ac292cf869_Blog_20Thumbnail_20Image_-14.jpg',
    link: '#',
  },
  {
    category: 'Wellness',
    date: 'Jan 15, 2025',
    title: 'Explore the Exclusive Perk Private Villas, Spa Retreats, and Unique Excursions',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/6787885c6e66d5a79a6a10bf_Blog_20Thumbnail_20Image_-15.jpg',
    link: '#',
  },
];

const BlogArticles = () => {
  return (
    <section className="bg-light-cream py-[120px]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="mb-8 md:mb-0">
            <p className="text-sm text-primary mb-2">
              (OUR BLOG)
            </p>
            <h2 className="font-display text-[48px] font-medium text-[#1A1A1A] leading-tight">
              Hotel News & Articles
            </h2>
          </div>
          <Button asChild variant="outline" className="group rounded-[4px] border-primary text-primary h-auto px-8 py-4 hover:bg-primary hover:text-white transition-colors duration-300">
            <Link href="#">
              <span className="text-base font-medium">View All Articles</span>
              <div className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowIcon />
              </div>
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogArticlesData.map((article, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col">
              <div className="relative overflow-hidden group/image rounded-t-2xl">
                <Link href={article.link} className="block">
                  <Image
                      src={article.imageUrl}
                      alt={`Thumbnail for ${article.title}`}
                      width={596}
                      height={397}
                      className="w-full aspect-[3/2] object-cover transition-transform duration-500 ease-in-out group-hover/image:scale-110"
                  />
                </Link>
                <div className="absolute top-6 left-6 bg-primary text-white text-[12px] font-medium leading-none px-3 py-[7px] rounded-[4px]">
                  {article.category}
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted text-base mb-3">
                  {article.date}
                </p>
                <Link href={article.link} className="group/title">
                    <h3 className="font-display text-[28px] text-[#1A1A1A] leading-[1.3] group-hover/title:underline line-clamp-2">
                        {article.title}
                    </h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogArticles;