import type { NextPage } from 'next';
import { Navbar } from 'components/blocks/navbar';
import useLightBox from 'hooks/useLightBox';
import PageProgress from 'components/common/PageProgress';
import RoundContainer from 'components/MIEC/Round-Container';
import { Footer9 } from 'components/blocks/footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation} from 'next-i18next';
import {Testimonial17} from "../../../src/components/blocks/testimonial";
import {Fragment} from "react";

const Teams: NextPage = () => {
    const { t: navt } = useTranslation('nav');
    const { t: footert } = useTranslation('footer');
    const { t: projectt } = useTranslation('project');

    const peqContents = {
        iconTitle: "MIEC旗下拥有多家职业学院, 让您的移民之旅一路通畅",
        schoolInfo: [
            {
                key: "peqs01",
                name: "Veritas College",
                img: "/img/MIEC/programs/peqs1.png"
            },
            {
                key: "peqs02",
                name: "Aviron College",
                img: "/img/MIEC/programs/peqs3.png"
            },
            {
                key: "peqs03",
                name: "Herzing College",
                img: "/img/MIEC/programs/peqs5.png"
            },
            {
                key: "peqs04",
                name: "Ascent College",
                img: "/img/MIEC/programs/peqs4.png"
            },
            {
                key: "peqs05",
                name: "Academy of Learning Career College",
                img: "/img/MIEC/programs/peqs7.png"
            },
            {
                key: "peqs06",
                name: "Matrix College",
                img: "/img/MIEC/programs/peqs6.png"
            },
            {
                key: "peqs07",
                name: "Cégep de la Gaspésie et des Îles",
                img: "/img/MIEC/programs/peqs8.png"
            },
            {
                key: "peqs08",
                name: "Cégep Marie-Victorin",
                img: "/img/MIEC/programs/peqs2.png"
            },
            {
                key: "peqs09",
                name: "College Superieur de Montreal",
                img: "/img/MIEC/programs/peqs10.png"
            },
            {
                key: "peqs10",
                name: "Ecole Hoteliere de la capital",
                img: "/img/MIEC/programs/peqs9.png"
            }
        ]
    }

    useLightBox();
    return (
        <div className="page-frame bg-pale-primary">
            <PageProgress />
            {/* ========== header section ========== */}
            <header className="wrapper">
                <Navbar language t={navt} />
            </header>

            <main className="content-wrapper">
                <RoundContainer>
                    <Fragment>
                        <h2 className="fs-15 text-uppercase text-muted text-center mb-8">{peqContents.iconTitle}</h2>
                        <div className="px-lg-5 mb-14 mb-md-19">
                            <div className="row gx-0 gx-md-8 gx-xl-12 gy-8 align-items-center justify-content-center">
                                {peqContents.schoolInfo.map((item) => (
                                    <div className="col-6 col-md-4 col-lg-4 col-xl-3" key={item.key}>
                                        <figure className="px-3 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
                                            <img src={item.img} alt={item.name} className="img-fluid"/>
                                        </figure>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Fragment>

                    <Testimonial17 t={projectt}/>
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
            ...(await serverSideTranslations(locale, ['common', 'nav', 'project', 'footer']))
            // Will be passed to the page component as props
        }
    };
}

export default Teams;
