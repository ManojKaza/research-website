import React ,{link} from 'react';
import './Card.css'; // Import your custom CSS file

const Card = ({ imageUrl, children, url }) => {
  const hasParagraph = React.Children.toArray(children).some(
    (child) => child.type === 'p'
  );
  const cardStyles = {
    width: hasParagraph ? '320px' : '240px',
    height: hasParagraph ? '300px' : '300px',
  };
  return (
    <a href={url}>
      <div className="card" style={cardStyles}>
        <div className = 'image'>
          <img src={imageUrl} alt=''/>
          <div className='children-overlay'>
            {children}
            <i className='fa fa-arrow-right'></i>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;

