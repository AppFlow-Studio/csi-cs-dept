'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SmoothScrollHandler() {
    const pathname = usePathname();

    useEffect(() => {
        // Handle hash navigation with smooth scrolling
        const handleHashScroll = () => {
            const hash = window.location.hash;
            if (hash) {
                // Remove the hash symbol
                const id = hash.substring(1);
                const element = document.getElementById(id);

                if (element) {
                    // Small delay to ensure page is rendered
                    setTimeout(() => {
                        element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        });
                    }, 100);
                }
            }
        };

        // Run on mount and when pathname changes
        handleHashScroll();

        // Also listen for hash changes
        window.addEventListener('hashchange', handleHashScroll);

        return () => {
            window.removeEventListener('hashchange', handleHashScroll);
        };
    }, [pathname]);

    return null;
}
