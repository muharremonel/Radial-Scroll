import { useState } from 'react'
import Hamburger from '../components/hamburger';
import Search from '../components/search';
import ContentBlock from '../components/contentBlock';
import OneSliderImg from '../components/oneSliderImg';
import DemoForm from '../components/demoForm';
import SupportForm from '../components/support';
import ContactForm from '../components/contact';


function ContentPage() {
    const [isHamburgerOpen, setHamburgerOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);

    const toggleHamburger = (e) => {
        e.preventDefault();
        setHamburgerOpen(!isHamburgerOpen);
    };
    const toggleSearch = (e) => {
        e.preventDefault();
        setSearchOpen(!isSearchOpen);
    };
    const contentData = [
        { title: 'E-Dönüşüm', image: 'https://demo.anibalbilisim.com/gorsel/gorsel1.png' },
        { title: 'Ar-Ge Yönetimi', image: 'https://demo.anibalbilisim.com/gorsel/gorsel2.png' },
        { title: 'İnsan Kaynakları Yönetimi', image: 'https://demo.anibalbilisim.com/gorsel/gorsel3.png' },
        { title: 'E-Dönüşüm', image: 'https://demo.anibalbilisim.com/gorsel/gorsel1.png' },
        { title: 'E-Dönüşüm', image: 'https://demo.anibalbilisim.com/gorsel/gorsel2.png' },
        { title: 'E-Dönüşüm', image: 'https://demo.anibalbilisim.com/gorsel/gorsel3.png' },
       
      ];
  return (
    <>
    <div className='d-flex' style={{ height: '100vh'}}>
        <div className='content-scroll'>
            {/* Çoklu Görsel Tasarım */}
            {contentData.map((content, index) => (
                    <ContentBlock key={index} content={content} index={index} />
            ))}

            {/* Tek Görsel Tasarım */}
            {/* <OneSliderImg/> */}

            {/* Demo Talep Tasarım */}
            {/* <DemoForm/> */}

            {/* Destek Form Tasarım */}
           {/*  <SupportForm/> */}

            {/* İletişim Form Tasarım */}
            {/* <ContactForm/> */}
        </div>
        <div className='p-2 content-right-menu' style={{ height: '100vh', position: 'relative' }}>
            <div className='mb-5'>
                <a href=''  onClick={toggleHamburger}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="6" viewBox="0 0 34 6" fill="none">
                        <circle cx="3" cy="3" r="3" fill="#808285"/>
                        <circle cx="17" cy="3" r="3" fill="#808285"/>
                        <circle cx="31" cy="3" r="3" fill="#808285"/>
                    </svg>
                </a>
            </div>
            <div className='mb-5 text-center'>
                <a href=''  onClick={toggleSearch}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="27" viewBox="0 0 29 27" fill="none">
                    <line x1="26.6917" y1="25.5127" x2="21.3549" y2="20.7689" stroke="#808285" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12.3182" cy="11.9217" r="10.9217" stroke="#808285" strokeWidth="2"/>
                    </svg>
                </a>
            </div>
            <div className='text-center'>
                <a href='#' className='content-language'>
                    EN
                </a>
            </div>
        </div>
    </div>
    {isHamburgerOpen && <Hamburger onClose={() => setHamburgerOpen(false)} />}
    {isSearchOpen && <Search onClose={() => setSearchOpen(false)} />}
    </>
  );
}
export default ContentPage;