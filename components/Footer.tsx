import React from 'react'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import Image from 'next/image'


const Footer = () => {
    return (
        <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Ready to take <span className="text-purple">your</span> digital presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">Reach out to me today and let&apos;s discuss how can I help you to achieve your goals.</p>
                <a href="mailto:shahalamabir21@gmail.com">
                    <MagicButton
                        title = "Let's get in touch"
                        icon = {<FaLocationArrow />}
                        position = "right"
                    />
                </a>
            </div>

            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="text-white-200 md:font-normal font:light md:text-base text-sm">© 2024 Abir Shah Alam. All rights reserved.</p>
            </div>

            <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((profile) => (
                    <div key={profile.id} className="w-10 h-10 cursor-pointer flex items-center justify-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                        <Image src={profile.img} alt="socmed" width={20} height={20}/>
                    </div>
                ))}
            </div>
        </footer>
    )
}

export default Footer;