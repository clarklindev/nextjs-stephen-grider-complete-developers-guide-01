import Image from 'next/image';

import homeImg from 'public/home.jpg';

export default function Home() {
    return (
        <div className="absolute -z-10 inset-0">
            <Image alt="car factory" src={homeImg} fill style={{ objectFit: 'cover' }} />
        </div>
    );
}
