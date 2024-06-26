import React, { useState, useEffect } from 'react';
import { getLocationTagById } from '../api/Client';
import '../styles/ReportsComponent.css';
import PropTypes from 'prop-types';

export default function ReportsComponent({ report, winstonImage }) {
  ReportsComponent.propTypes = {
    report: PropTypes.shape({
      location_tag_id: PropTypes.number.isRequired,
      date_submitted: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status_id: PropTypes.number.isRequired,
      report_image: PropTypes.arrayOf(
        PropTypes.shape({
          image: PropTypes.shape({
            cloudinary_id: PropTypes.string.isRequired,
          }).isRequired,
        }),
      ),
    }).isRequired,
    winstonImage: PropTypes.string.isRequired,
  };

  const { location_tag_id, date_submitted, title, description, status_id, report_image } = report;
  const [showDescriptionPopup, setShowDescriptionPopup] = useState(false);
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [locationTag, setLocationTag] = useState(null);

  useEffect(() => {
    async function fetchLocationTag() {
      try {
        const locationTagId = location_tag_id;
        const locationTagData = await getLocationTagById(locationTagId);
        setLocationTag(locationTagData);
      } catch (error) {
        console.error('Error fetching location tag:', error);
      }
    }

    fetchLocationTag();
  }, [location_tag_id]);

  const toggleDescriptionPopup = () => {
    setShowDescriptionPopup(!showDescriptionPopup);
  };

  const toggleImagePopup = () => {
    setShowImagePopup(!showImagePopup);
  };

  const getStatusClass = () => {
    switch (status_id) {
      case 1:
        return 'dot-unread';
      case 2:
        return 'dot-resolved';
      case 3:
        return 'dot-rejected';
      case 4:
        return 'dot-in-progress';
      default:
        return 'dot-default';
    }
  };

  const submittedDate = new Date(date_submitted);
  const formattedDate = submittedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className='report'>
      <div className='report-top'>
        <h3 className='report-location'>
          {locationTag ? `${locationTag.building}, ${locationTag.room}` : 'Loading...'}
        </h3>
        <h3 className='report-date'>{formattedDate}</h3>
      </div>
      <div className='report-bottom'>
        <div className='report-bottom-left'>
          <p className='report-title'>{title.length > 15 ? `${title.slice(0, 15)}...` : title}</p>
          <div className='description' onClick={toggleDescriptionPopup}>
            <span className="description-text">{description.length > 128 ? `${description.slice(0, 128)}...` : description}</span>
          </div>
        </div>
        <div className='report-bottom-right'>
          <div className='report-bottom-right-top'>
            {status_id === 1 && <span className='report-bottom-right-span'>Unread</span>}
            {status_id === 2 && <span className='report-bottom-right-span'>Resolved</span>}
            {status_id === 3 && <span className='report-bottom-right-span'>Rejected</span>}
            {status_id === 4 && <span className='report-bottom-right-span'>In Progress</span>}
            <div className={`status-dot ${getStatusClass()}`} />
          </div>
          {report_image && report_image[0] && report_image[0].image ? (
            <img className='report-image' src={report_image[0].image.cloudinary_id} alt='Report Image' onClick={toggleImagePopup} />
          ) : (
            <img className='report-image' src={winstonImage} alt='Winston Image' onClick={toggleImagePopup} />
          )}
        </div>
      </div>
      {showDescriptionPopup && (
        <div className='popup'>
          <div className='popup-content'>
            <div className='close' onClick={toggleDescriptionPopup}>
              &times;
            </div>
            <div className='popup-description-content'>
              <p className='popup-description'>{description}</p>
            </div>
          </div>
        </div>
      )}
      {showImagePopup && (
        <div className='popup'>
          <div className='popup-content'>
            <div className='close' onClick={toggleImagePopup}>
              &times;
            </div>
            <div className='popup-description-content'>
              <img className='popup-image' src={report_image && report_image[0] && report_image[0].image ? report_image[0].image.cloudinary_id : winstonImage} alt='Report Image' />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
