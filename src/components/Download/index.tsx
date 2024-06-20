import type {NextPage} from 'next';
import useLightBox from 'hooks/useLightBox';
import Link from "next/link";
import Image from "next/image";

const ShowDownload: NextPage = () => {

    const fileList = [
        { id: 1, color: 'yellow', category: 'PEQ', title: 'MIEC PEQ', image: '/img/imageFile/PEQ.jpg',
            code: "/downloadFiles/PEQ_MIEC.png", download1: "/downloadFiles/PEQ_MIEC.pdf"}
    ];

    useLightBox();
    return (
        <section className="wrapper bg-light">
            <div className="container py-14 py-md-17">
                <div className="row mb-8 text-center">
                    <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
                        <h2 className="fs-16 text-uppercase text-primary mb-3">我们的文档</h2>
                        <h3 className="display-4">下载所需文档</h3>
                    </div>
                </div>

                <div className="grid grid-view projects-masonry">
                    <div className="row gx-md-8 gy-10 gy-md-13 isotope">
                        {fileList.map(({id, image, title, category, color, code, download1}) => (
                            <div className="project item col-md-6 col-xl-4 product" key={id}>
                                <figure className="lift rounded mb-6">
                                    <Link href="#" passHref legacyBehavior>
                                        <a>
                                            <Image
                                                width={1300}
                                                height={1132}
                                                src={image}
                                                alt={title}
                                                style={{width: '100%', height: 'auto'}}
                                            />
                                        </a>
                                    </Link>
                                </figure>

                                <div className="project-details d-flex justify-content-center flex-column">
                                    <div className="post-header">
                                        <div className={`post-category mb-2 text-${color}`}>{category}</div>
                                        <h2 className="post-title h3">{title}</h2>
                                        <p style={{color: 'black', fontWeight: 'bold'}}>
                                            <a style={{marginRight: "1rem"}} href={download1}>下载PDF</a>
                                            <a href={code}>下载固定二维码</a>
                                        </p>
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


export default ShowDownload;
