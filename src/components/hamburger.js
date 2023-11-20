import React, { useState } from 'react';

const Hamburger = ({ onClose }) => {
  const [openMenu, setOpenMenu] = useState("none");

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? "none" : menuName);
  };
  return (
    <div className="position-fixed top-0 end-0 hamburger-vh bg-dark text-white overflow-auto content-z-index">
      <div className='d-flex justify-content-end mt-4'>
        <button onClick={onClose} className="btn-close btn-close-white position-absolute top-0 end-0 m-3" aria-label="Close"></button>
      </div>
      <div className='d-flex p-3'>
        <div className="d-flex flex-column h-100 align-items-start justify-content-center p-3 gap-3">
            <ul className="list-unstyled fs-1 hamburger-menu">
                    {/* Çözümler Menu */}
                    <li onClick={() => setOpenMenu(openMenu === "solutions" ? "none" : "solutions")} className="d-flex align-items-center gap-5 mb-4">
                        <span className="fs-6">01</span>
                            Çözümler 
                        <span className="fs-1">{openMenu === "solutions" ? '-' : '+'}</span>
                    </li>
                    {openMenu === "solutions" && (
                    <ul className="list-unstyled ms-3">
                        <li>- CPM ERP</li>
                        <li>- Ürünler</li>
                        <li>- Sektörler</li>
                        <li>- CPM Ar&Ge Merkezi</li>
                        <li>- Demo Talep Et</li>
                        <li>- Destek</li>
                        <li>- Sizi Arayalım</li>
                    </ul>
                    )}
                    {/* Çözümler Menu End */}

                    {/* Kurumsal Menu */}
                    <li onClick={() => setOpenMenu(openMenu === "kurumsal" ? "none" : "kurumsal")} className="d-flex align-items-center gap-5 mb-4">
                    <span className="fs-6">02</span>
                        Kurumsal 
                    <span className="fs-1">{openMenu === "solutions" ? '-' : '+'}</span>
                    </li>
                    {openMenu === "kurumsal" && (
                    <ul className="list-unstyled ms-3">
                        <li>- Kurumsal</li>
                        <li>- Referanslarımız</li>
                        <li>- Çözüm Ortaklarımız</li>
                        <li>- Bizimle Çalışmak İster misiniz?</li>
                        <li>- Sertifika & Ödüller</li>
                        <li>- İK Politikamız</li>
                        <li>- Yönetim Sistemleri Politikamız</li>
                        <li>- Aramıza Katılın</li>
                    </ul>
                    )}
                    {/* Kurumsal Menu End */}

                    {/* Medya Menu */}
                    <li onClick={() => setOpenMenu(openMenu === "medya" ? "none" : "medya")} className="d-flex align-items-center gap-5 mb-4">
                    <span className="fs-6">03</span>
                        Medya 
                    <span className="fs-1">{openMenu === "medya" ? '-' : '+'}</span>
                    </li>
                    {openMenu === "medya" && (
                    <ul className="list-unstyled ms-3">
                        <li>- Yazılar</li>
                        <li>- Videolar</li>
                        <li>- Haberler</li>
                        <li>- E-Bülten</li>
                    </ul>
                    )}
                    {/* Medya Menu End */}

                    {/* Faaliyetler Menu */}
                    <li onClick={() => setOpenMenu(openMenu === "faliyetler" ? "none" : "faliyetler")} className="d-flex align-items-center gap-5 mb-4">
                    <span className="fs-6">03</span>
                        Faaliyetler 
                    <span className="fs-1">{openMenu === "faliyetler" ? '-' : '+'}</span>
                    </li>
                    {openMenu === "faliyetler" && (
                    <ul className="list-unstyled ms-3">
                        <li>- Eğitim İçin Herşey</li>
                        <li>- Palamut - CPM Yelken Takımı</li>
                        <li>- CPM Ralli Takımı</li>
                    </ul>
                    )}
                    {/* Faaliyetler Menu End */}

                    {/* Bağlantılar Menu */}
                    <li onClick={() => setOpenMenu(openMenu === "baglantilar" ? "none" : "baglantilar")} className="d-flex align-items-center gap-5 mb-4">
                    <span className="fs-6">05</span>
                        Bağlantılar 
                    <span className="fs-1">{openMenu === "baglantilar" ? '-' : '+'}</span>
                    </li>
                    {openMenu === "baglantilar" && (
                    <ul className="list-unstyled ms-3">
                        <li>- Kullanıcı Girişi</li>
                        <li>- Duyurular</li>
                        <li>- KVKK</li>
                        <li>- Gizlilik Politikası</li>
                    </ul>
                    )}
                    {/* Bağlantılar Menu End */}

            </ul>
            <div className="d-flex gap-4 align-items-center w-100 mt-4 pb-4">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="24" viewBox="0 0 13 24" fill="none">
                    <path d="M8.45729 6.26181V9.39302H12.4961L11.8292 13.701H8.45729V24.0006H3.8383V13.701H0V9.39302H3.8383V5.05484C3.8383 2.52555 5.89119 0.472656 8.42049 0.472656H12.757V4.37116H10.3463C9.30316 4.37116 8.45729 5.21866 8.45729 6.26181Z" fill="white"/>
                </svg>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                    <path d="M13.4547 9.31356L21.9763 0.175781H19.8933L12.5304 8.07143L6.63431 0.175781H0.0770569L8.88745 11.9744L0 21.507H2.08621L9.815 13.2165L16.0064 21.507H22.5605L13.4547 9.31356ZM10.8742 12.0835L9.94662 10.8413L3.11981 1.70036H5.87039L11.4745 9.20444L12.402 10.4434L19.521 19.9792H16.7703L10.8742 12.0835Z" fill="white"/>
                </svg>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17.1333 23.6062H7.29309C3.51929 23.6062 0.449219 20.536 0.449219 16.7623V6.9221C0.449219 3.14839 3.51929 0.078125 7.29309 0.078125H17.1333C20.907 0.078125 23.9772 3.14839 23.9772 6.9221V16.7623C23.9772 20.536 20.907 23.6062 17.1333 23.6062ZM7.29309 2.13385C4.65295 2.13385 2.50488 4.28182 2.50488 6.9221V16.7623C2.50488 19.4025 4.65295 21.5506 7.29309 21.5506H17.1333C19.7736 21.5506 21.9215 19.4025 21.9215 16.7623V6.9221C21.9215 4.28182 19.7736 2.13385 17.1333 2.13385H7.29309Z" fill="white"/>
                    <path d="M12.2131 17.8581C8.896 17.8581 6.19727 15.1594 6.19727 11.8422C6.19727 8.52496 8.896 5.82617 12.2131 5.82617C15.5303 5.82617 18.229 8.52496 18.229 11.8422C18.229 15.1594 15.5303 17.8581 12.2131 17.8581ZM12.2131 7.88188C10.0294 7.88188 8.25281 9.65845 8.25281 11.8422C8.25281 14.0259 10.0294 15.8025 12.2131 15.8025C14.3969 15.8025 16.1736 14.0259 16.1736 11.8422C16.1736 9.65845 14.3969 7.88188 12.2131 7.88188Z" fill="white"/>
                    <path d="M19.9359 5.56275C19.9359 4.76978 19.2931 4.12695 18.5001 4.12695C17.7072 4.12695 17.0645 4.76978 17.0645 5.56275C17.0645 6.35572 17.7072 6.99854 18.5001 6.99854C19.2931 6.99854 19.9359 6.35572 19.9359 5.56275Z" fill="white"/>
                </svg>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <rect x="0.453125" y="7.64648" width="4.39008" height="14.8616" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M22.1167 12.4897V22.508H17.7268V20.8747V14.5126C17.7268 12.9812 16.4761 11.7303 14.9443 11.7303C13.413 11.7303 12.156 12.9812 12.156 14.5126V15.5018V20.8747V22.508H7.76562V7.64647H12.156V9.84161C13.3621 7.75497 15.8187 6.72767 18.1543 7.3466C20.4833 7.96553 22.1104 10.0777 22.1167 12.4897Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.64807 5.36808C4.10291 5.36808 5.28979 4.18119 5.28979 2.72626C5.28979 1.26508 4.10291 0.078125 2.64807 0.078125C1.18689 0.078125 0 1.26508 0 2.72626C0 4.18119 1.18689 5.36808 2.64807 5.36808Z" fill="white"/>
                </svg>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="20" viewBox="0 0 27 20" fill="none">
                    <path d="M26.3328 4.48948C26.1599 2.44748 24.8096 1.12997 22.8191 0.901463C21.0295 0.665341 17.3333 0.558667 13.3147 0.58363C9.29614 0.558667 5.59937 0.665341 3.8103 0.901463C1.81958 1.12997 0.469483 2.44748 0.296631 4.48948C0.0983891 6.27298 -0.000243689 8.05723 4.52111e-07 9.84217C-0.000243689 11.6271 0.0983891 13.4113 0.296631 15.1948C0.469483 17.2369 1.81958 18.5544 3.8103 18.7829C5.59937 19.0189 9.29614 19.1257 13.3147 19.1007C17.3333 19.1257 21.0295 19.0189 22.8191 18.7829C24.8096 18.5544 26.1599 17.2369 26.3328 15.1948C26.5305 13.4113 26.6292 11.6271 26.6292 9.84217C26.6292 8.05723 26.5305 6.27298 26.3328 4.48948ZM10.6619 13.8375V5.84686L17.637 9.84217L10.6619 13.8375Z" fill="white"/>
                </svg>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
