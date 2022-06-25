import React from 'react';
import PropTypes from 'prop-types';
const ContentItem = ({ items, clickPage }) => {
  const { thumbnails, title } = items;

  console.log(thumbnails.medium.url);
  return (
    <>
      <li
        onClick={() => {
          clickPage(items);
        }}
      >
        <div className="thumbnails">
          <img src={thumbnails.medium.url} alt={'유투브!'} />
          <div>{title}</div>
        </div>
      </li>
    </>
  );
};

ContentItem.propTypes = {
  items: PropTypes.object,
  clickPage: PropTypes.func,
};
export default ContentItem;