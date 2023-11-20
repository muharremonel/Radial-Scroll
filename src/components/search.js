import React, { useState } from 'react';

const Search = ({ onClose }) => {
  const [openMenu, setOpenMenu] = useState("none");

  return (
    <div className="position-fixed top-0 end-0 vw-100 vh-100 bg-dark text-white overflow-auto content-z-index">
      <div className='d-flex justify-content-end mt-4'>
        <button onClick={onClose} className="btn-close btn-close-white position-absolute top-0 end-0 m-3" aria-label="Close"></button>
      </div>
      <div className='search'>
        <img src='https://cpm.com.tr/wp-content/uploads/2021/07/cpm-logo-yerli-beyaz.webp'/>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6">
                <div className="form">
                <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="27" viewBox="0 0 29 27" fill="none">
                        <line x1="26.6917" y1="25.5127" x2="21.3549" y2="20.7689" stroke="#808285" strokeWidth="2" strokeLinecap="round"/>
                        <circle cx="12.3182" cy="11.9217" r="10.9217" stroke="#808285" strokeWidth="2"/>
                        </svg>
                </span>
                <input
                    type="text"
                    className="form-control form-input"
                    placeholder="Aramak için buraya yazınız..."
                />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Search;
