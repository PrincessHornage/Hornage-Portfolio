import React from 'react'
import { TypewriterTitle, VideoBackground } from './components/helpers';
import { Introduction } from './components/helpers';
import { Footer } from './components/helpers';

//Variables 
  
export default function Home() {
    return (
        <main>
            <VideoBackground videoSrc="/pth3035/portfolio-site/homepage-bg-video.mp4" />
            <TypewriterTitle/>

            <div className="section">
                <Introduction/>
               
            </div>
            <Footer/>
        </main>
    )
}