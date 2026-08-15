import company1 from '../assets/slack-logo-svgrepo-com.svg';
import company2 from '../assets/google-icon-logo-svgrepo-com.svg';
import company3 from '../assets/microsoft-logo-svgrepo-com.svg';
import company4 from '../assets/arrow_icon (1).svg';
import company5 from '../assets/tinder-1-logo-svgrepo-com.svg';

const TrustedBy = () => {
    return (
        <div className="flex flex-col items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white/80">
            <h3 className="font-semibold">Trusted By Leading Companies</h3>

            <div className="flex items-center justify-center flex-wrap gap-10 m-4">
                <img src={company1} alt="Company 1" className="max-h-16 sm:max-h-17 dark:drop-shadow" />
                <img src={company2} alt="Company 2" className="max-h-16 sm:max-h-17 dark:drop-shadow" />
                <img src={company3} alt="Company 3" className="max-h-16 sm:max-h-17 dark:drop-shadow" />
                <img src={company4} alt="Company 4" className="max-h-16 sm:max-h-17 dark:drop-shadow" />
                <img src={company5} alt="Company 5" className="max-h-16 sm:max-h-17 dark:drop-shadow" />
            </div>
        </div>
    )
}

export default TrustedBy;