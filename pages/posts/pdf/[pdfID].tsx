import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Footer9 } from 'components/blocks/footer';
import { Navbar } from 'components/blocks/navbar';
import PageProgress from 'components/common/PageProgress';
import { TFunction, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic.js';
import { renderString } from 'components/reuseable/links/NextLink';

// -------- data -------- //
import { PdfPost, pdfPostID } from 'data/pdf-post';

interface BlogDetailsOneProps {
  post: PdfPost;
  t: TFunction;
}

const BlogDetailsOne: NextPage<BlogDetailsOneProps> = ({ post, t }) => {
  const { t: navt } = useTranslation('nav');
  const { t: footert } = useTranslation('footer');

  const PdfReader = dynamic(() => import('components/MIEC/PdfReader'), {
    ssr: false
  });

  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper">
        <Navbar t={navt} info />
      </header>

      <main className="content-wrapper">
        {/* ========== title section ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-19 pt-md-12 pb-md-20 text-center">
            <div className="row">
              <div className="col-md-10 col-xl-8 mx-auto">
                <div className="post-header">
                  <div className="post-category text-line">
                    {/* <NextLink href="#" className="hover" title="Teamwork" /> */}
                    项目介绍
                  </div>

                  <h1 className="display-1 mb-4 h1">{renderString(post.title)}</h1>

                  <ul className="post-meta mb-5">
                    <li className="post-date">
                      <i className="uil uil-calendar-alt" />
                      <span>{post.date}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== details section ========== */}
        <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-16">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="blog single mt-n17">
                  {/* <BlogDetailsTemplate /> */}
                  <PdfReader src={post.file} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer9 t={footert} />
    </Fragment>
  );
};

export async function getStaticProps({ locale, params }: { locale: string; params: { pdfID: string } }) {
  console.log(`Current locale: ${locale}`);
  const post = pdfPostID.find((p) => p.id === Number(params?.pdfID));

  if (!post) {
    return { notFound: true }; // Return a 404 if the post isn't found
  }

  return {
    props: {
      post,
      ...(await serverSideTranslations(locale, ['common', 'nav', 'footer']))
      // Will be passed to the page component as props
    }
  };
}

export async function getStaticPaths() {
  // Generate the paths array with these post IDs
  const paths = pdfPostID.map((post) => ({
    params: { pdfID: post.id.toString() } // Use pdfID to match the dynamic segment in the file name
  }));

  return {
    paths,
    fallback: false
  };
}

export default BlogDetailsOne;
