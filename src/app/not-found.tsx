import Link from 'next/link';
import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col">
            <HeaderNavigation />
            <div className="flex-1 flex flex-col items-center justify-center bg-[#FAF7F2] px-5 py-32 text-center">
                <h1 className="font-display text-8xl md:text-[120px] font-bold text-[#1A1A1A] mb-4">
                    404
                </h1>
                <h2 className="font-display text-2xl md:text-4xl font-semibold text-[#D4AF37] mb-6">
                    Page Not Found
                </h2>
                <p className="font-body text-lg text-[#4A4A4A] max-w-md mx-auto mb-10">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link
                    href="/"
                    className="bg-[#D4AF37] text-white px-10 py-4 rounded-[4px] font-medium transition-transform hover:scale-105"
                >
                    Return Home
                </Link>
            </div>
            <Footer />
        </main>
    );
}
