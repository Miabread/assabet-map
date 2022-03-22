import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
    return (
        <div className="grid place-items-center h-screen">
            <Image
                src="/floor1.jpg"
                alt=""
                width={2200}
                height={1700}
                className="h-screen"
            ></Image>
        </div>
    );
};

export default Home;
