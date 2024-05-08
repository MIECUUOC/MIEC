import { FC } from 'react';
import Link from "next/link";

// ================================================================
type PricingCard1Props = {
  planName: string;
  features: string[];
  bulletBg?: boolean;
  yearlyPrice: number;
  monthlyPrice: number;
  activeYearly: boolean;
  roundedButton?: boolean;
};
// ================================================================

const PricingCard1: FC<PricingCard1Props> = (props) => {
  const { planName, features, yearlyPrice, monthlyPrice, activeYearly, roundedButton, bulletBg } = props;

  const yearClasses = activeYearly ? 'price-show' : 'price-hide price-hidden';
  const monthClasses = !activeYearly ? 'price-show' : 'price-hide price-hidden';

  return (
    <div className="pricing card shadow-lg">
      <div className="card-body pb-12">
        {/*<div className="prices text-dark">*/}
        {/*  <Price duration="mo" value={monthlyPrice} classes={monthClasses} />*/}
        {/*  <Price duration="yr" value={yearlyPrice} classes={yearClasses} />*/}
        {/*</div>*/}

        <h4 className="card-title display-6 mt-2 text-blue">{planName}</h4>

        <ul className={`icon-list ${bulletBg ? 'bullet-bg' : ''} bullet-soft-primary mt-7 mb-8`}>
          {features.map((item, i) => (
            <li key={i}>
              <i className="uil uil-check fs-21" />
              <span>
                <strong>{item.split(' ')[0]}</strong> {item.split(' ').slice(1).join(' ')}
              </span>
            </li>
          ))}
        </ul>

        <Link href="/programs/french#contact-us" className={`btn btn-primary ${roundedButton ? 'rounded' : 'rounded-pill'}`}>
          了解更多
        </Link>
      </div>
    </div>
  );
};

export default PricingCard1;
