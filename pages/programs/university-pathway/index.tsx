import type {NextPage} from 'next';
import {Navbar} from 'components/blocks/navbar';
import useLightBox from 'hooks/useLightBox';
import PageProgress from 'components/common/PageProgress';
import RoundContainer from 'components/MIEC/Round-Container';
import {Footer9} from 'components/blocks/footer';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';
import Accordion from "../../../src/components/reuseable/accordion";
import {Fragment} from "react";

const Teams: NextPage = () => {
    const {t: navt} = useTranslation('nav');
    const {t: footert} = useTranslation('footer');
    const {t: ossdt} = useTranslation('ossd')

    const upTitle = {
        mainTitle: ossdt("upTitle.mainTitle"),
        subTitle: ossdt("upTitle.subTitle"),
        otherTitle: ossdt("upTitle.otherTitle"),
        mapInfo: ossdt("upTitle.mapInfo"),
        mapTitle: ossdt("upTitle.mapTitle"),
        mapBody: ossdt("upTitle.mapBody"),
        mapButton: ossdt("upTitle.mapButton"),
        schoolName: ossdt("upTitle.schoolName")
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

                    <div className="row gx-md-8 gx-xl-12 gy-10 mt16">
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

                    <div className="row gx-0 align-items-center">

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5766.88446945405!2d-79.41293298758713!3d43.72213917097842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b32e3916a70a7%3A0x123dd9e4f110b02d!2z5Yue5YCr5pav5ZyS5aSn5a245a246Zmi!5e0!3m2!1szh-CN!2sca!4v1712603334957!5m2!1szh-CN!2sca"
                            width="600" height="450" className="col-lg-6 image-wrapper bg-image bg-cover rounded-4"
                            style={{border: "0"}} allowFullScreen={false} loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>

                        <div className="col-lg-6">
                            <div className="p-10 p-md-11 p-lg-13">
                                <h2 className="display-4 mb-3">{upTitle.schoolName}</h2>

                                <p className="lead fs-lg">
                                    {upTitle.mapTitle}
                                </p>

                                <p>
                                    {upTitle.mapBody}
                                </p>

                                <a href="https://maps.app.goo.gl/yvk7QpFZ8TPT2AtbA" target={"_blank"}
                                   className="btn btn-primary rounded-pill mt-2">
                                    {upTitle.mapButton}
                                </a>
                            </div>
                        </div>
                    </div>

                    <Fragment>
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
                    </Fragment>
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
            ...(await serverSideTranslations(locale, ['common', 'nav', 'ossd', 'footer']))
            // Will be passed to the page component as props
        }
    };
}

export default Teams;
