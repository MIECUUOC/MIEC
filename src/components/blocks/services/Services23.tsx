import { renderString } from 'components/reuseable/links/NextLink';
import { ProcessList2 } from 'components/reuseable/process-list';
import { TFunction } from 'next-i18next';
import { FC } from 'react';
type ServiceProps = {
  t: TFunction;
};
const Services23: FC<ServiceProps> = ({ t }) => {
  const HermesList = [
    {
      no: '1',
      className: 'me-lg-6',
      title: '独家学院资源',
      subtitle: '魁北克政府认证的专科学院，多样化专业课程'
    },
    {
      no: '2',
      title: '学费价格低',
      className: 'ms-lg-13 mt-6',
      subtitle: '提供多样化专业，学费显著低于加拿大其他城市'
    },
    {
      no: '3',
      title: '加速移民魁北克',
      className: 'mx-lg-6 mt-6',
      subtitle: 'MIEC旗下拥有的众多院校，提供专为PEQ项目量身定制的1800课时职业培训课程'
    }
  ];

  const ExamCenterList = [
    {
      no: '1',
      className: 'me-lg-6',
      title: '确保高通过率',
      subtitle: '优质的教学资源让您轻松应对法语B2'
    },
    {
      no: '2',
      title: '考前模拟',
      className: 'ms-lg-13 mt-6',
      subtitle: '提供在职法语口语面试官考前突击模拟考试'
    },
    {
      no: '3',
      title: '法语培训',
      className: 'mx-lg-6 mt-6',
      subtitle: '精选教师团队,覆盖各阶段学员冲刺考试'
    }
  ];

  const LawerList = [
    {
      no: '1',
      className: 'me-lg-6',
      title: 'Stanislav Belevici',
      subtitle: `现任加拿大移民监管委员会主席<br />蒙特利尔国际教育中心首席移民事务官`
    },
    {
      no: '2',
      title: '行业顶级团队',
      className: 'ms-lg-13 mt-6',
      subtitle: '由加拿大移民监管委员会主席Stanislav Belevici先生亲领的律师团队进行审核和签约客户'
    },
    {
      no: '3',
      title: '为您的移民保驾护航',
      className: 'mx-lg-6 mt-6',
      subtitle: '律师服务将涵盖PEQ申请的咨询和案件成功落幕的整个过程'
    }
  ];

  return (
    <section className="wrapper bg-light" id="why-us">
      <div className="container py-15 py-md-17">
        <div className="row text-center mb-10">
          <div className="col-md-10 col-lg-9 col-xxl-8 mx-auto">
            <h2 className="fs-16 text-uppercase text-muted mb-3">{t('advantagesTitle')}</h2>
            <h3 className="display-3 px-xl-10 mb-0">{t('advantagesDescription')}</h3>
          </div>
        </div>

        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
          <div className="col-lg-7">
            <figure>
              <img className="w-auto" src="/img/SchoolList2.png" alt="" />
            </figure>
          </div>

          <div className="col-lg-5">
            <h3 className="display-4 mb-7">{t('collegesTitle')}</h3>
            {HermesList.map((item, index) => (
              <ProcessList2
                no={item.no}
                title={t(`collegesList.${index}.title`)}
                subtitle={t(`collegesList.${index}.subtitle`)}
                key={item.no}
                className="icon btn btn-circle btn-soft-primary pe-none me-5"
              />
            ))}
          </div>
        </div>

        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="row gx-md-5 gy-5">
              <div className="col-md-6">
                <figure className="rounded">
                  <img src="/img/MIEC/exam3.png" srcSet="/img/MIEC/exam3@2x.png 2x" alt="" />
                </figure>
              </div>

              <div className="col-md-6 align-self-end">
                <figure className="rounded">
                  <img src="/img/MIEC/exam2.png" srcSet="/img/MIEC/exam2@2x.png 2x" alt="" />
                </figure>
              </div>

              <div className="col-12">
                <figure className="rounded mx-md-5">
                  <img src="/img/MIEC/exam1.png" srcSet="/img/MIEC/exam1@2x.png 2x" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="display-4 mb-7">{renderString(t('examinationCentersTitle'))}</h3>
            {ExamCenterList.map((item, index) => (
              <ProcessList2
                no={item.no}
                title={t(`examinationCentersList.${index}.title`)}
                subtitle={t(`examinationCentersList.${index}.subtitle`)}
                key={item.no}
                className="icon btn btn-circle btn-soft-primary pe-none me-5"
              />
            ))}
          </div>
          {/* <div className="row gx-lg-8 gx-xl-12 gy-6 mb-md-n15 mt-md-10">
            <h3 className="display-4 px-xl-10 mb-5 text-center">{t('examinationCentersTitle')}</h3>
            {aboutList3.map(({ id, title, description }) => (
              <div className="col-lg-4" key={id}>
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon btn btn-circle pe-none btn-soft-primary me-4">
                      <span className="number fs-18">{id}</span>
                    </div>
                  </div>

                  <div>
                    <h4>{title}</h4>
                    <p className="mb-2">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>

        {/* <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
          <div className="col-lg-7">
            <figure>
              <img className="w-auto" src="/img/MIEC/Lawer.png" srcSet="/img/MIEC/Lawer@2x.png 2x" alt="" />
            </figure>
          </div>

          <div className="col-lg-5">
            <h3 className="display-4 mb-7">MIEC拥有顶级律师团队</h3>
            {LawerList.map((item) => (
              <ProcessList2 {...item} key={item.no} className="icon btn btn-circle btn-soft-primary pe-none me-5" />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Services23;
