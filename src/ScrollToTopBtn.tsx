import { useEffect, useState } from 'react';
import { Lineicons } from '@lineiconshq/react-lineicons';
import { AngleDoubleUpBulk } from '@lineiconshq/free-icons';

interface ScrollToTopProps {

};

function ScrollToTopBtn({ }: ScrollToTopProps) {

    const [isVisible, setIsVisible] = useState(false);

    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    function handleScroll() {
        setIsVisible(window.scrollY > 300);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button onClick={scrollToTop} className={isVisible ? "fixed bottom-4 right-4 bg-gray-900/80 text-white p-2 rounded-full shadow-lg hover:bg-gray-900/100 transition duration-300 cursor-pointer z-2" : "hidden"}>
            <Lineicons icon={AngleDoubleUpBulk} className="" />
        </button>
    )

}

export default ScrollToTopBtn;