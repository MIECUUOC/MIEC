import { FC } from 'react';
import Image from 'next/image';
import Carousel from 'components/reuseable/Carousel';
import NextLink from 'components/reuseable/links/NextLink';
import Accordion from 'components/reuseable/accordion';
import { TFunction } from 'next-i18next';

type AboutProps = {
  t: TFunction;
};

const About7: FC<AboutProps> = ({ t }) => {
  const accordions = [
    {
      no: 'One',
      expand: true
      // heading: '总理特鲁多及联邦政府官方表彰教育机构',
      // body: '中心自成立以来，致力于推动全方位，多渠道的加拿大国际教育的合作交流，在众多的加拿大国际教育机构中，唯一受到了总理特鲁多及联邦政府官方表彰并特别批准成立旗下的：加拿大联合大学（Union University），加拿大大学预科中心（Canadian University Preparatory Center）加拿大联合学院 （Union College）加拿大大学预科中心。政府批准号：1171853188。'
    },
    {
      no: 'Two',
      expand: false
      // heading: '中国教育部签约机构',
      // body: 'MIEC除了同世界其他国家一些大学建立了广泛合作外，同时还作为和中国教育部陵水教育园区签约的唯一国际机构。'
    },
    {
      no: 'Three',
      expand: false
      // heading: '在加拿大拥有考试中心',
      // body: '蒙特利尔同样作为全球最大的英法双语城市，法语第二大城市。MIEC 主导成立了有一批加拿大大学参加：国际法语教育联盟（加拿大），旗下的 Edu-inter，则是加拿大第一大的法语教学与考试中心。'
    }
  ];
  const carouselImages = [
    {
      id: 14,
      url: '#',
      title: '中法一带一路国际教育 &nbsp;河南行',
      image: '/img/MIEC/history/p14.jpg'
    },
    {
      id: 1,
      url: '#',
      title: (
        <p>
          Federico.Pasin 蒙特利尔HEC校长
          <br />
          和HEC的合作，是MIEC同魁北克地区大学合作的基石
        </p>
      ),
      image: '/img/MIEC/history/p1.png'
    },
    {
      id: 2,
      url: '#',
      title: '魁北克省教育部，HEC和MIEC共同参加国际教育展',
      image: '/img/MIEC/history/p2.png'
    },
    {
      id: 3,
      url: '#',
      title: '刘裕佳-HEC客座讲师',
      image: '/img/MIEC/history/p3.png'
    },
    {
      id: 4,
      url: '#',
      title: '中国学生参加HEC活动',
      image: '/img/MIEC/history/p4.png'
    },
    {
      id: 5,
      url: '#',
      title: 'Pierre 加拿大驻欧盟特使 前加拿大外交部部长',
      image: '/img/MIEC/history/p5.png'
    },
    {
      id: 6,
      url: '#',
      title: 'Freeland 加拿大副总理兼财经部长',
      image: '/img/MIEC/history/p6.png'
    },
    {
      id: 7,
      url: '#',
      title: (
        <p>
          Eleni女士 联邦议员 前联邦政府司法部长 总检察长
          <br />
          Geoffrey先生 省议员 前省教育部长 公共安全部长
        </p>
      ),
      image: '/img/MIEC/history/p7.png'
    },
    {
      id: 8,
      url: '#',
      title: (
        <p>
          麦基尔国际教育学院Kevin
          <br />
          上海交通大学教育集团董校长
        </p>
      ),
      image: '/img/MIEC/history/p8.png'
    },
    {
      id: 9,
      url: '#',
      title: '陪同魁北克省经济贸易部长接见中国市长团',
      image: '/img/MIEC/history/p9.png'
    },
    {
      id: 10,
      url: '#',
      title: '前加拿大驻中国大使赵朴',
      image: '/img/MIEC/history/p10.png'
    },
    {
      id: 11,
      url: '#',
      title: '参加国际和平军事组织会议',
      image: '/img/MIEC/history/p11.png'
    },
    {
      id: 12,
      url: '#',
      title: '参加国际教育活动推介麦基尔大学',
      image: '/img/MIEC/history/p12.png'
    }
    // {
    //   id: 13,
    //   url: '#',
    //   title: 'MIEC签约加拿大汇枫集团',
    //   image: '/img/MIEC/history/p13.png'
    // }
  ];
  return (
    <div className="col mb-n15">
      <div className="row gx-lg-8 gx-xl-12 gy-10 mb-8 mb-md-12" id="about-us">
        <div className="col-lg-7 order-lg-2">
          <figure>
            <img className="w-auto img-fluid" src="/img/MIEC/About.png" srcSet="/img/MIEC/About@2x.png 2x" alt="" />
          </figure>
        </div>

        <div className="col-lg-5">
          <h3 className="display-4 mt-xxl-8 mb-3">{t('aboutUsHeading')}</h3>
          <p className="lead fs-lg lh-sm mb-6">{t('aboutUsDescription')}</p>

          <div className="accordion accordion-wrapper" id="accordionExample">
            {accordions.map((item, index) => (
              <Accordion
                type="plain"
                key={item.no}
                no={item.no}
                heading={t(`accordion.${index}.title`)}
                body={t(`accordion.${index}.content`)}
                expand={item.expand}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="container pb-9 pb-md-14">
          <div className="row">
            <div className="mx-auto">
              <h3 className="display-4 mb-10">{t('historyHeading')}</h3>
            </div>
          </div>

          <div className="swiper-container grid-view nav-bottom nav-color">
            <Carousel
              grabCursor
              slidesPerView={3}
              pagination={false}
              className="overflow-visible"
              breakpoints={{ 768: { slidesPerView: 3 }, 0: { slidesPerView: 1 } }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation={false}
            >
              {carouselImages.map(({ id, url, image, title }, index) => (
                <figure className="rounded" key={id}>
                  <Image width={1100} height={770} src={image} alt="" style={{ width: '100%', height: 'auto' }} />
                  <h2 className="post-title h6 text-center mt-md-3 mt-1">
                    <NextLink title={t(`carouselTitles.${index}`)} className="link-dark" href={url} />
                  </h2>
                </figure>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About7;
