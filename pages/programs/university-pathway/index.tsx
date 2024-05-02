import type {NextPage} from 'next';
import {Navbar} from 'components/blocks/navbar';
import useLightBox from 'hooks/useLightBox';
import PageProgress from 'components/common/PageProgress';
import RoundContainer from 'components/MIEC/Round-Container';
import {Footer9} from 'components/blocks/footer';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';
import Accordion from "../../../src/components/reuseable/accordion";
import ContactForms from "../../../src/components/otherBlocks/ContactForms";
import {renderString} from "../../../src/components/reuseable/links/NextLink";

const UniversityPathway: NextPage = () => {
    const {t: navt} = useTranslation('nav');
    const {t: footert} = useTranslation('footer');
    const {t: ossdt} = useTranslation('ossd')
    const {t: contactformst} = useTranslation('contactForms')

    const currentPage = "University-Pathway - 名校直通车"

    const upTitle = {
        mainTitle: ossdt("upTitle.mainTitle"),
        subTitle: ossdt("upTitle.subTitle"),
        otherTitle: ossdt("upTitle.otherTitle"),
        mapInfo: ossdt("upTitle.mapInfo"),
        mapTitle: ossdt("upTitle.mapTitle"),
        mapBody: ossdt("upTitle.mapBody"),
        mapButton: ossdt("upTitle.mapButton"),
        schoolName: ossdt("upTitle.schoolName"),
        m1School1: "麦吉尔大学",
        m1School2: "麦吉尔大学是顶尖的大学之一, 在世界大学排名中位列第31位",
        m1School3: "作为加拿大历史最悠久的大学, 麦吉尔大学以其卓越的教学质量和研究成就而闻名于世. 麦吉尔大学致力于培养具有全球视野、创新精神和社会责任感的领导者",
        m2School1: "多伦多大学",
        m2School2: "多伦多大学是加拿大最大的研究型大学, 世界大学排名中位列第26位",
        m2School3: "作为一所世界级的顶尖学府, 多伦多大学以其广泛的学科设置和尖端的研究成果而享誉全球, 多伦多大学注重培养学生的创新能力和全球公民意识",
        m3School1: "蒙特利尔高等商学院",
        m3School2: "蒙特利尔高等商学院是加拿大顶尖的商学院之一, 在世界大学商学院排名中位列第79位",
        m3School3: "作为北美地区第一所获得三重认证（AACSB、EQUIS和AMBA）的商学院, HEC Montréal以其创新的教学模式和卓越的研究成就而闻名于世, 学院致力于培养具有全球视野、创业精神和社会责任感的商界领袖",
        m4School1: "国王中学",
        m4School2: "国王中学是加拿大安大略省伦敦市著名的私立高中之一, 创建于1878年,为9-12年级学生提供优质的学术课程",
        m4School3: "学校以精英教育和高大学升学率著称, 采用小班教学, 注重发掘学生的个人潜力. 国王中学致力于培养兼具领导力、创造力和国际视野的杰出学子, 帮助他们成功申请到加拿大、美国、英国等国顶尖大学",
        m5School1: "威尔士国际中学",
        m5School2: "威尔士国际中学坐落于加拿大第一大城市多伦多北郊, 是一所享誉海内外的公立高中. 作为安大略省顶尖国际化中学, 这里吸引了来自世界各地的优秀留学生",
        m5School3: "学校为国际学生提供英语强化课程(ESL), 帮助他们尽快适应加拿大的学习和生活. 威尔士国际中学重视学生的全人发展, 不仅提供高水准的学术项目, 还开设了丰富多彩的艺术和体育课, 培养学生成为德智体美劳全面发展的国际化人才"
    }

    const accordions = [
        {
            no: 'One',
            expand: true,
            heading: ossdt("accordions.0.heading"),
            body: ossdt("accordions.0.body")
        },
        {
            no: 'Two',
            expand: false,
            heading: ossdt("accordions.1.heading"),
            body: ossdt("accordions.1.body")
        },
        {
            no: 'Three',
            expand: false,
            heading: ossdt("accordions.2.heading"),
            body: ossdt("accordions.2.body")
        }
    ];

    const forStudents = [
        {
            id: 'fs1',
            title: ossdt("forStudents.0.title"),
            body: ossdt("forStudents.0.body")
        },
        {
            id: 'fs3',
            title: ossdt("forStudents.1.title"),
            body: ossdt("forStudents.1.body")
        },
        {
            id: 'fs2',
            title: ossdt("forStudents.2.title"),
            body: ossdt("forStudents.2.body")
        },
        {
            id: 'fs4',
            title: ossdt("forStudents.3.title"),
            body: ossdt("forStudents.3.body")
        }
    ]

    const questions = {
        contentTitle: ossdt("questions.contentTitle"),
        mainTitle: ossdt("questions.mainTitle"),

        questionList: [
            [
                {
                    no: 'One',
                    expand: false,
                    heading: ossdt("questions.questionList.0.0.heading"),
                    body: ossdt("questions.questionList.0.0.body")
                },
                {
                    no: 'Two',
                    expand: false,
                    heading: ossdt("questions.questionList.0.1.heading"),
                    body: ossdt("questions.questionList.0.1.body")
                },
                {
                    no: 'Three',
                    expand: false,
                    heading: ossdt("questions.questionList.0.2.heading"),
                    body: ossdt("questions.questionList.0.2.body")
                },
            ],
            [
                {
                    no: 'Four',
                    expand: false,
                    heading: ossdt("questions.questionList.1.0.heading"),
                    body: ossdt("questions.questionList.1.0.body")
                },
                {
                    no: 'Five',
                    expand: false,
                    heading: ossdt("questions.questionList.1.1.heading"),
                    body: ossdt("questions.questionList.1.1.body")
                },
                {
                    no: 'Six',
                    expand: false,
                    heading: ossdt("questions.questionList.1.2.heading"),
                    body: ossdt("questions.questionList.1.2.body")
                }
            ]
        ]
    }

    useLightBox();
    return (
        <div className="page-frame bg-pale-primary">
            <PageProgress/>
            {/* ========== header section ========== */}
            <header className="wrapper">
                <Navbar language t={navt}/>
            </header>

            <main className="content-wrapper">
                <RoundContainer>
                    <div className="col mb-n15">
                        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-8 mb-md-12" id="about-us">
                            <div className="col-lg-7 order-lg-2 d-flex justify-content-end align-items-center">
                                <figure>
                                    <img className="w-auto img-fluid rounded-4" src="/img/MIEC/About.png"
                                         srcSet="/img/MIEC/programs/school3.jpg" alt=""/>
                                </figure>
                            </div>

                            <div className="col-lg-5">
                                <h3 className="display-4 mt-xxl-8 mb-3">{upTitle.mainTitle}</h3>
                                <p className="lead fs-lg lh-sm mb-6">{upTitle.subTitle}</p>

                                <div className="accordion accordion-wrapper" id="accordionExample">
                                    {accordions.map((item) => (
                                        <Accordion
                                            type="plain"
                                            key={item.no}
                                            no={item.no}
                                            heading={item.heading}
                                            body={item.body}
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
                                        <h3 className="display-4 mb-10">{upTitle.otherTitle}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row gx-md-8 gx-xl-12 gy-10">
                        {forStudents.map((item) => (
                            <div className="col-lg-6" key={item.id}>
                                <div className="d-flex flex-row">
                                    <div>
                                      <span className="icon btn btn-sm btn-circle btn-primary pe-none me-5">
                                        <i className="uil uil-comment-exclamation"/>
                                      </span>
                                    </div>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p className="mb-0">{item.body}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="container mt-16 pb-9 ">
                        <div className="row">
                            <div className="mx-auto">
                                <h3 className="display-4 mb-10">{upTitle.mapInfo}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row gx-0 align-items-center mb-14">
                        <a className="col-lg-6 px-4"
                           href="https://www.mcgill.ca/continuingstudies/community/scs-our-partners" target="_blank">
                            <img className="image-wrapper bg-image object-fit-cover rounded-4 w-100"
                                 src="/img/MIEC/programs/school4.jpg" alt="Photo"/>
                        </a>

                        <div className="col-lg-6 px-2 mt-lg-0 mt-md-0 pt-4">
                            <div>
                                <h2 className="display-4 mb-3">{upTitle.schoolName}</h2>

                                <p className="fs-lg">
                                    {renderString(upTitle.mapTitle)}
                                </p>

                                <p>
                                    {upTitle.mapBody}
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="row gx-0 align-items-center flex-column-reverse flex-lg-row mb-14">

                        <div className="col-lg-6 px-2 mt-lg-0 mt-md-0 pt-4">
                            <div>
                                <h2 className="display-4 mb-3">{upTitle.m1School1}</h2>

                                <p className="fs-lg">
                                    {upTitle.m1School2}
                                </p>

                                <p>
                                    {upTitle.m1School3}
                                </p>

                            </div>
                        </div>

                        <a className="col-lg-6 px-4"
                           href="https://www.mcgill.ca/" target="_blank">
                            <img className="image-wrapper bg-image object-fit-cover rounded-4 w-100"
                                 src="/img/MIEC/programs/ss3.jpg" alt="Photo"/>
                        </a>
                    </div>

                    <div className="row gx-0 align-items-center mb-14">
                        <a className="col-lg-6 px-4"
                           href="https://www.utoronto.ca/" target="_blank">
                            <img className="image-wrapper bg-image object-fit-cover rounded-4 w-100"
                                 src="/img/MIEC/programs/ss2-min.jpg" alt="Photo"/>
                        </a>

                        <div className="col-lg-6 px-2 mt-lg-0 mt-md-0 pt-4">
                            <div>
                                <h2 className="display-4 mb-3">{upTitle.m2School1}</h2>

                                <p className="fs-lg">
                                    {upTitle.m2School2}
                                </p>

                                <p>
                                    {upTitle.m2School3}
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="row gx-0 align-items-center flex-column-reverse flex-lg-row mb-14">

                        <div className="col-lg-6 px-2 mt-lg-0 mt-md-0 pt-4">
                            <div>
                                <h2 className="display-4 mb-3">{upTitle.m3School1}</h2>

                                <p className="fs-lg">
                                    {upTitle.m3School2}
                                </p>

                                <p>
                                    {upTitle.m3School3}
                                </p>

                            </div>
                        </div>

                        <a className="col-lg-6 px-4"
                           href="https://www.hec.ca/" target="_blank">
                            <img className="image-wrapper bg-image object-fit-cover rounded-4 w-100"
                                 src="/img/MIEC/programs/ss1.jpg" alt="Photo"/>
                        </a>
                    </div>





                    <div className="row gx-0 align-items-center mb-14">
                        <a className="col-lg-6 px-4"
                           href="https://iceapkingsway.ca/" target="_blank">
                            <img className="image-wrapper bg-image object-fit-cover rounded-4 w-100"
                                 src="/img/MIEC/programs/k2.png" alt="Photo"/>
                        </a>

                        <div className="col-lg-6 px-2 mt-lg-0 mt-md-0 pt-4">
                            <div>
                                <h2 className="display-4 mb-3">{upTitle.m4School1}</h2>

                                <p className="fs-lg">
                                    {upTitle.m4School2}
                                </p>

                                <p>
                                    {upTitle.m4School3}
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="row gx-0 align-items-center flex-column-reverse flex-lg-row mb-18">

                        <div className="col-lg-6 px-2 mt-lg-0 mt-md-0 pt-4">
                            <div>
                                <h2 className="display-4 mb-3">{upTitle.m5School1}</h2>

                                <p className="fs-lg">
                                    {upTitle.m5School2}
                                </p>

                                <p>
                                    {upTitle.m5School3}
                                </p>

                            </div>
                        </div>

                        <a className="col-lg-6 px-4"
                           href="https://wp.walescollege.ca/" target="_blank">
                            <img className="image-wrapper bg-image object-fit-cover rounded-4 w-100"
                                 src="/img/MIEC/programs/ss2.jpg" alt="Photo"/>
                        </a>
                    </div>

                    <div className="mb-10">
                        <h2 className="fs-15 text-uppercase text-muted mb-3 text-center mt-16">{questions.contentTitle}</h2>
                        <h3 className="display-4 mb-10 px-lg-12 px-xl-15 text-center">
                            {questions.mainTitle}
                        </h3>

                        <div className="accordion-wrapper" id="accordion">
                            <div className="row">
                                {questions.questionList.map((items, i) => {
                                    return (
                                        <div className="col-md-6" key={i}>
                                            {items.map((item) => (
                                                <div key={item.no} className={`card shadow-lg accordion-item`}>
                                                    <div className="card-header" id={`heading${item.no}`}>
                                                        <button
                                                            data-bs-toggle="collapse"
                                                            aria-controls={`collapse${item.no}`}
                                                            data-bs-target={`#collapse${item.no}`}
                                                            aria-expanded={item.expand ? 'true' : 'false'}
                                                            className={item.expand ? 'accordion-button' : 'collapsed'}
                                                        >
                                                            {item.heading}
                                                        </button>
                                                    </div>

                                                    <div
                                                        id={`collapse${item.no}`}
                                                        aria-labelledby={`heading${item.no}`}
                                                        data-bs-parent="#accordionExample"
                                                        className={`accordion-collapse collapse ${item.expand && 'show'}`}
                                                    >
                                                        <div className="card-body">
                                                            <p>{item.body}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <ContactForms t={contactformst} pageInfo={{p: currentPage}}/>

                </RoundContainer>
            </main>
            <Footer9 t={footert}/>
        </div>
    );
};

export async function getStaticProps({locale}: { locale: string }) {
    console.log(`Current locale: ${locale}`);
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'nav', 'contactForms', 'ossd', 'footer']))
            // Will be passed to the page component as props
        }
    };
}

export default UniversityPathway;
