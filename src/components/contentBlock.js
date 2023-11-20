import React from "react";

function ContentBlock({ content, index }) {
  const isImageLeft = index % 2 === 0;
  return (
    <div className='d-flex'>
      {isImageLeft && (
        <div className='col-6'>
          <img src={content.image} className='w-100 h-100' alt={`Content ${index}`} />
        </div>
      )}
      <div className='col-6 d-flex align-items-end justify-content-between p-2'>
        <span className='content-text'>{content.title}</span>
        <span className='content-number'>{index + 1}</span>
      </div>
      {!isImageLeft && (
        <div className='col-6'>
          <img src={content.image} className='w-100 h-100' alt={`Content ${index}`} />
        </div>
      )}
    </div>
  );
}
export default ContentBlock;