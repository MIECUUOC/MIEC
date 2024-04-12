import type { NextPage } from 'next';
import { Navbar } from 'components/blocks/navbar';
import useLightBox from 'hooks/useLightBox';
import PageProgress from 'components/common/PageProgress';
import RoundContainer from 'components/MIEC/Round-Container';
import { Footer9 } from 'components/blocks/footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation} from 'next-i18next';
import {Fragment} from "react";
import Link from "next/link";
import Image from "next/image";

const Teams: NextPage = () => {
    const { t: navt } = useTranslation('nav');
    const { t: footert } = useTranslation('footer');

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

    const programsList = [
        {
            id: "pl01",
            no: "5298",
            img: "/img/programs/pl-qx.jpg",
            name: "汽车机械"
        },
        {
            id: "pl05",
            no: "5750",
            img: "/img/programs/pl-gyzt.jpg",
            name: "住宅与商业制图"
        },
        {
            id: "pl02",
            no: "5858",
            img: "/img/programs/pl-hl.jpg",
            name: "家庭护理"
        },
        {
            id: "pl03",
            no: "5295",
            img: "/img/programs/pl-dg.jpg",
            name: "电气技术"
        },
        {
            id: "pl04",
            no: "5229",
            img: "/img/programs/pl-jsjzc.jpg",
            name: "计算机支持"
        },
        {
            id: "pl12",
            no: "",
            img: "/img/programs/pl-cs.jpg",
            name: "西餐厨师和糕点"
        },
        {
            id: "pl09",
            no: "5225",
            img: "/img/programs/pl-gysj.jpg",
            name: "工业设计"
        },
        {
            id: "pl10",
            no: "5250",
            img: "/img/programs/pl-jzsj.jpg",
            name: "建筑设计"
        },
        {
            id: "pl06",
            no: "5319",
            img: "/img/programs/pl-mg.jpg",
            name: "木工技术"
        },
        {
            id: "pl11",
            no: "5857",
            img: "/img/programs/pl-wm.jpg",
            name: "文秘专业"
        },
        {
            id: "pl07",
            no: "5333",
            img: "/img/programs/pl-gn.jpg",
            name: "管道和供暖"
        },
        {
            id: "pl08",
            no: "5195",
            img: "/img/programs/pl-hj.jpg",
            name: "焊接与装配"
        }
    ]

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
                        <h2 className="display-3 px-xxl-10 mb-4 text-center">我们的学院</h2>
                        <h2 className="fs-18 text-uppercase text-muted text-center mb-8">{peqContents.iconTitle}</h2>
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

                    <div className="container py-4 py-md-5">
                        <div className="row mb-8 text-center">
                            <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
                                <h2 className="fs-16 text-uppercase text-primary mb-3">提供专业</h2>
                                <h3 className="display-4 mb-8">我们拥有最全面的专业及最专业的学校讲师</h3>
                            </div>
                        </div>

                        <div className="grid grid-view projects-masonry">
                            <div className="row gx-md-8 gy-10 gy-md-13 isotope">
                                {programsList.map(({id, img, name}) => (
                                    <div className="project item col-md-6 col-xl-4 product" key={id}>
                                        <figure className="lift rounded mb-6">
                                            <Link href="#" passHref legacyBehavior>
                                                <a>
                                                    <Image
                                                        width={1300}
                                                        height={1132}
                                                        src={img}
                                                        alt={name}
                                                        style={{width: '100%', height: 'auto'}}
                                                    />
                                                </a>
                                            </Link>
                                        </figure>

                                        <div className="project-details d-flex justify-content-center flex-column">
                                            <div className="post-header">
                                                <div className={`post-category mb-2`}></div>
                                                <h2 className="post-title h3 text-center">{name}</h2>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
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
            ...(await serverSideTranslations(locale, ['common', 'nav', 'footer']))
            // Will be passed to the page component as props
        }
    };
}

export default Teams;
