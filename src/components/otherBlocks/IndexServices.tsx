import { ProcessList2 } from 'components/reuseable/process-list';
import { TFunction } from 'next-i18next';
import { FC } from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";
type ServiceProps = {
    t: TFunction;
};
const IndexServices: FC<ServiceProps> = ({ t }) => {
    // get current locale
    const router = useRouter();
    const { locale } = router;

    const ServicesContent = {
        servicesPart: "MIEC",
        mainTitle: t("ServicesContent.mainTitle"),
        subTitle: t("ServicesContent.subTitle"),
        projectTitle: t("ServicesContent.projectTitle"),
        projectDetails: t("ServicesContent.projectDetails")
    }

    const ServicesList = [
        {
            no: "1",
            className: "me-lg-6",
            title: t("ServicesList.0.title"),
            subtitle: t("ServicesList.0.subtitle")
        },
        {
            no: "2",
            className: "ms-lg-13 mt-6",
            title: t("ServicesList.1.title"),
            subtitle: t("ServicesList.1.subtitle")
        },
        {
            no: "3",
            className: "ms-lg-13 mt-6",
            title: t("ServicesList.2.title"),
            subtitle: t("ServicesList.2.subtitle")
        },
        {
            no: "4",
            className: "mx-lg-6 mt-6",
            title: t("ServicesList.3.title"),
            subtitle: t("ServicesList.3.subtitle")
        }
    ];

    const buttonsList = [
        {
            no: "bs1",
            url: "/programs/peq",
            button: t("buttonsList.0.button"),
            image: "/img/MIEC/project/PEQ@2x.png"
        },
        {
            no: "bs2",
            url: `/${locale}/programs/university-pathway`,
            button: t("buttonsList.1.button"),
            image: "/img/MIEC/project/uoc@2x.png"
        },
        {
            no: "bs3",
            url: `/${locale}/programs`,
            button: t("buttonsList.2.button"),
            image: "/img/MIEC/project/Canada5.png"
        }
    ]

    return (
        <section className="wrapper bg-light" id="why-us">
            <div className="container py-15 py-md-17">
                <div className="row text-center mb-10">
                    <div className="col-md-10 col-lg-9 col-xxl-8 mx-auto">
                        <h2 className="fs-16 text-uppercase text-muted mb-3">{ServicesContent.servicesPart}</h2>
                        <h3 className="display-3 px-xl-10 mb-0">{ServicesContent.mainTitle}</h3>
                    </div>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-6 mb-md-9 align-items-center">
                    <div className="col-lg-7">
                        <figure>
                            <img className="w-auto" src="/img/SchoolList2.png" alt=""/>
                        </figure>
                    </div>

                    <div className="col-lg-5">
                        <h3 className="display-4 mb-7">{ServicesContent.subTitle}</h3>
                        {ServicesList.map((item, index) => (
                            <ProcessList2
                                no={item.no}
                                title={item.title}
                                subtitle={item.subtitle}
                                key={item.no}
                                className="icon btn btn-circle btn-soft-primary pe-none me-5"
                            />
                        ))}

                    </div>
                </div>

                <div className="row mb-8 text-center mt-14">
                    <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
                        <h2 className="fs-16 text-uppercase text-primary mb-3">{ServicesContent.projectTitle}</h2>
                        <h3 className="display-4">{ServicesContent.projectDetails}</h3>
                    </div>
                </div>

                <div className="grid grid-view projects-masonry">
                    <div className="row gx-md-8 gy-10 gy-md-13 isotope">
                        {buttonsList.map(({no, image, button, url}) => (
                            <div className="project item col-md-6 col-xl-4 product" key={no}>
                                <figure className="lift rounded mb-6">
                                    <Link href={url} passHref legacyBehavior>
                                        <a>
                                            <Image
                                                width={1300}
                                                height={1132}
                                                src={image}
                                                alt={button}
                                                style={{width: '100%', height: 'auto'}}
                                            />
                                        </a>
                                    </Link>
                                </figure>

                                <div className="project-details d-flex justify-content-center flex-column">
                                    <div className="post-header">
                                        <div className={`post-category mb-2`}></div>
                                        <h2 className="post-title h3 text-center">{button}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndexServices;
