import { FC } from 'react';
import Accordion from 'components/reuseable/accordion';

const About23: FC = () => {
  const accordions = [
    {
      no: 'One',
      expand: true,
      heading: '总理特鲁多及联邦政府官方表彰教育机构',
      body: '中心自成立以来，致力于推动全方位，多渠道的加拿大国际教育的合作交流，在众多的加拿大国际教育机构中，唯一受到了总理特鲁多及联邦政府官方表彰并特别批准成立旗下的：加拿大联合大学（Union University），加拿大大学预科中心（Canadian University Preparatory Center）加拿大联合学院 （Union College）加拿大大学预科中心。政府批准号：1171853188。'
    },
    {
      no: 'Two',
      expand: false,
      heading: '中国教育部签约机构',
      body: 'MIEC除了同世界其他国家一些大学建立了广泛合作外，同时还作为和中国教育部陵水教育园区签约的唯一国际机构。'
    },
    {
      no: 'Three',
      expand: false,
      heading: '在加拿大拥有考试中心',
      body: '蒙特利尔同样作为全球最大的英法双语城市，法语第二大城市。MIEC 主导成立了有一批加拿大大学参加：国际法语教育联盟（加拿大），旗下的 Edu-inter，则是加拿大第一大的法语教学与考试中心。'
    }
  ];
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10">
      <div className="col-lg-7 order-lg-2">
        <figure>
          <img
            alt="choose-us"
            className="w-auto"
            src="/img/illustrations/i12.png"
            srcSet="/img/illustrations/i12@2x.png 2x"
          />
        </figure>
      </div>

      <div className="col-lg-5">
        <h3 className="fs-16 text-uppercase text-muted mt-xxl-8 mb-3">Why Choose Us?</h3>
        <h3 className="display-4 mb-6">We bring solutions to make life easier for our clients.</h3>
        <div className="accordion accordion-wrapper" id="accordionExample">
          {accordions.map((item) => (
            <Accordion type="plain" key={item.no} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About23;
