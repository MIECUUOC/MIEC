import Image from 'next/image';
import { FC } from 'react';

// =================================================
type CardItemProps = {
  name: string;
  image: string;
  review: string;
  shadow?: boolean;
  hideRating?: boolean;
};
// =================================================

const CardItem: FC<CardItemProps> = (props) => {
  const { name, image, review, hideRating, shadow } = props;

  return (
    <div className={`card ${shadow ? 'shadow-lg' : ''}`}>
      <div className="card-body">
        {!hideRating && <span className="ratings five mb-3" />}

        <blockquote className="icon mb-0">
          <ul className="list-group list-group-flush">
            {review.split('\n').map((item, key) => (
              <li className="list-group-item fs-15" key={key}>
                {item}
              </li>
            ))}
          </ul>

          <div className="blockquote-details mt-2">
            <figure className="w-12 overflow-hidden">
              <Image width={100} height={100} src={image} alt="team" style={{ width: '100%', height: 'auto' }} />
            </figure>

            <div className="info">
              <h5 className="mb-0">{name}</h5>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  );
};

export default CardItem;
