import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
import BlogDetailsTemplate from 'components/common/BlogDetailsTemplate';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const BlogDetailsOne: NextPage = () => {
  const { t: navt } = useTranslation('nav');
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper">
        <Navbar language t={navt} />
      </header>

      <main className="content-wrapper">
        {/* ========== title section ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
            <div className="row">
              <div className="col-md-10 col-xl-8 mx-auto">
                <div className="post-header">
                  <div className="post-category text-line">
                    <NextLink href="#" className="hover" title="Teamwork" />
                  </div>

                  <h1 className="display-1 mb-4">Commodo Dolor Bibendum Parturient Cursus Mollis</h1>

                  <ul className="post-meta mb-5">
                    <li className="post-date">
                      <i className="uil uil-calendar-alt" />
                      <span>5 Jul 2022</span>
                    </li>

                    <li className="post-author">
                      <i className="uil uil-user" />
                      <NextLink href="#" className="text-reset" title={<span>By Sandbox</span>} />
                    </li>

                    <li className="post-comments">
                      <i className="uil uil-comment" />
                      <NextLink
                        href="#"
                        className="text-reset"
                        title={
                          <Fragment>
                            3 <span>Comments</span>
                          </Fragment>
                        }
                      />
                    </li>

                    <li className="post-likes">
                      <i className="uil uil-heart-alt" />
                      <NextLink
                        href="#"
                        className="text-reset"
                        title={
                          <Fragment>
                            3 <span>Likes</span>
                          </Fragment>
                        }
                      />
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
                  <BlogDetailsTemplate />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  console.log(`Current locale: ${locale}`);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'nav']))
      // Will be passed to the page component as props
    }
  };
}

export async function getStaticPaths() {
  // Fetch or define your list of post IDs here
  const postIds = ['1', '2', '3'];

  // Generate the paths array with these post IDs
  const paths = postIds.map((postId) => ({
    params: { postId }
  }));

  // Return the paths and fallback strategy
  return {
    paths,
    fallback: false // Can also be 'blocking' or true, depending on your needs
  };
}

export default BlogDetailsOne;
