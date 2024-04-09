import { FC } from 'react';
// -------- custom hook -------- //
import CardItem from 'components/MIEC/Card';
import useIsotope from 'hooks/useIsotope';
import { TFunction } from 'next-i18next';
// -------- data -------- //
type ProjectProps = {
  t: TFunction;
};
const Testimonial17: FC<ProjectProps> = ({ t }) => {
  // used for masonry grid layout

  const testimonialList = [
    {
      id: 1,
      name: 'Veritas College',
      image: '/img/MIEC/school/veritas.png',
      review: `5750 RESIDENTIAL AND COMMERCIAL DRAFTING\n5750 住宅与商业制图 1800小时\n5858 INSTITUTIONAL AND HOME CARE ASSISTANCE\n5858护理 一年/两个学期`
    },
    {
      id: 2,
      name: 'Aviron College',
      image: '/img/MIEC/school/Aviron.png',
      review: `5295 DEP ÉLECTRICITÉ\n5295 电工 两年/四个学期\n5298 MÉCANIQUE AUTOMOBILE\n5298 汽修\n5229 SOUTIEN INFORMATIQUE\n5229 计算机支持`
    },
    {
      id: 3,
      name: 'Herzing College',
      image: '/img/MIEC/school/herzing.jpeg',
      review: `5225 Dessin Industriel\n5225 工业制图 18或24个月(含3周实习)\n5229 Soutien Informatique\n5229 计算机支持 18或24个月(含7周实习)`
    },
    {
      id: 4,
      name: 'College Superieur de Montreal',
      image: '/img/MIEC/school/CSM.png',
      review: `5857 文秘 1485小时\n5726 法律秘书 450小时\n5874 医务秘书 450小时`
    },
    {
      id: 5,
      name: 'Ecole hoteliere de la capital',
      image: '/img/MIEC/school/EHC.jpeg',
      review: `西餐厨师 1470小时\n甜品 525小时`
    }
  ];
  useIsotope();
  return (
    <section className="wrapper">
      <div className="container  pb-5 pb-md-10">
        <div className="row text-center">
          <div className="col-lg-8 offset-lg-2">
            {/* <h2 className="fs-16 text-uppercase text-primary mb-3">培训专业</h2> */}
            <h3 className="display-3 mb-10 px-xxl-10">{t('majorListTitle')}</h3>
          </div>
        </div>

        <div className="grid">
          <div className="row isotope gy-6">
            {testimonialList.map((item) => (
              <div className="item col-md-6 col-xl-4" key={item.id}>
                <CardItem {...item} shadow hideRating />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial17;
