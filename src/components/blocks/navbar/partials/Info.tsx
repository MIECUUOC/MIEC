import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
import { FC, Fragment, ReactElement } from 'react';

// ========================================================
type InfoProps = {
  title?: string;
  phone?: string;
  description?: string;
  address?: string | ReactElement;
};
// ========================================================

const Info: FC<InfoProps> = (props) => {
  const { title, description, address, phone } = props;

  const otherPages = [
    { title: '关于我们', url: '#about-us' },
    { title: '选择我们', url: '#why-us' },
    { title: '我们团队', url: '#teams' },
    { title: '联系我们', url: '#contact-us' }
  ];

  return (
    <div className="offcanvas offcanvas-end text-inverse" id="offcanvas-info" data-bs-scroll="true">
      <div className="offcanvas-header">
        <h3 className="text-white fs-30 mb-0">{title}</h3>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>

      <div className="offcanvas-body pb-6">
        <div className="widget mb-8">
          <p>{description}</p>
        </div>

        <div className="widget mb-8">
          <h4 className="widget-title text-white mb-3">联系方式</h4>
          <address>{address}</address>
          <NextLink title="Zhou@miec-uuoc.ca" className="link-inverse" href="mailto:Zhou@miec-uuoc.ca" />
          {/* <br />
          <NextLink href="tel:0123456789" title={phone!} /> */}
        </div>

        <div className="widget mb-8">
          <h4 className="widget-title text-white mb-3">了解更多</h4>
          <ul className="list-unstyled">
            {otherPages.map((item) => (
              <li key={item.title}>
                <NextLink href={item.url} title={item.title} />
              </li>
            ))}
          </ul>
        </div>

        <div className="widget">
          <h4 className="widget-title text-white mb-3">Follow Us</h4>
          <SocialLinks className="nav social social-white" />
        </div>
      </div>
    </div>
  );
};

// set default props
Info.defaultProps = {
  title: '蒙特利尔国际教育中心',
  phone: '(123) 456 78 90',
  description: `蒙特利尔国际教育中心(MIEC)，是得到加拿大总理特鲁多和联邦政府官方表彰的唯一加拿大国际教育组织, 并一系列加拿大顶尖大学建立了稳固的长期签约合作关系`,
  address: <Fragment>266 Notre-Dame St W, Level 5, Montreal, Quebec, Canada</Fragment>
};

export default Info;
