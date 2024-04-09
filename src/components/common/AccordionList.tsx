import { FC } from 'react';
import Accordion from 'components/reuseable/accordion';
// -------- data -------- //
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

const AccordionList: FC = () => {
  return (
    <div className="accordion accordion-wrapper" id="accordionExample">
      {accordions.map((item) => (
        <Accordion type="plain" key={item.no} {...item} />
      ))}
    </div>
  );
};

export default AccordionList;
