import { FC, FormEvent, useState } from 'react';
import FigureImage from 'components/reuseable/FigureImage';
import { TFunction } from 'next-i18next';
import { renderString } from 'components/reuseable/links/NextLink';
import Link from 'next/link';

type ContactProps = {
  t: TFunction;
};

const Contact1: FC<ContactProps> = ({ t }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email);
  };

  return (
    <>
      <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center" id="contact-us">
        <div className="col-md-8 col-lg-6 position-relative">
          <div className="shape bg-dot primary rellax w-17 h-21" style={{ top: '-2rem', left: '-1.9rem' }} />
          <div
            className="shape rounded bg-soft-primary rellax d-md-block"
            style={{ width: '85%', height: '90%', right: '-1.5rem', bottom: '-1.8rem' }}
          />

          <figure className="rounded">
            <img src="/img/MIEC/Montreal.png" srcSet="/img/MIEC/Montreal@2x.png 2x" alt="" />
          </figure>
        </div>

        <div className="col-lg-5 col-xl-4 offset-lg-1">
          <h2 className="fs-16 text-uppercase text-line text-primary mb-3">{t('contactUsTitle')}</h2>
          <h2 className="display-4 mb-8">{renderString(t('contactUsSubtitle'))}</h2>

          <div className="d-flex flex-row">
            <div>
              <div className="icon text-primary fs-28 me-6 mt-n1">
                <i className="uil uil-location-pin-alt" />
              </div>
            </div>

            <div>
              <h5 className="mb-1">{t('contactDetails.addressTitle')}</h5>
              <address>
                {t('contactDetails.address1')}
                <br className="d-none d-md-block" />
                {t('contactDetails.address2')}
              </address>
            </div>
          </div>

          {/* <div className="d-flex flex-row">
          <div>
            <div className="icon text-primary fs-28 me-6 mt-n1">
              <i className="uil uil-phone-volume" />
            </div>
          </div>
          <div>
            <h5 className="mb-1">Phone</h5>
            <p>+1 (123) 456 78 90</p>
          </div>
        </div> */}

          <div className="d-flex flex-row">
            <div>
              <div className="icon text-primary fs-28 me-6 mt-n1">
                <i className="uil uil-envelope" />
              </div>
            </div>
            <div>
              <h5 className="mb-1">{t('contactDetails.emailTitle')}</h5>
              <p className="mb-0">
                <a href="mailto:Info@miec-uuoc.ca" className="link-body">
                  Info@miec-uuoc.ca
                </a>
              </p>
            </div>
          </div>
          <div className="mt-10">
            <a
              className="btn btn-expand btn-soft-primary rounded-pill me-5"
              data-bs-toggle="modal"
              data-bs-target="#modal-02"
            >
              <i className="uil uil-arrow-right" />
              <span>联系我们</span>
            </a>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal-02" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content text-center">
            <div className="modal-body">
              <button className="btn-close" data-bs-dismiss="modal" aria-label="Close" />

              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <figure className="mb-6">
                    <img src="/img/MIEC/school/MIEC.png" alt="" />
                  </figure>
                </div>
              </div>
              <h2 className="mb-6">现在联系我们</h2>
              {/* 
              <p className="mb-6">
                Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor
                fringilla.
              </p> */}

              <div className="newsletter-wrapper">
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <div id="mc_embed_signup">
                      <form onSubmit={handleSubmit} className="text-start mb-3">
                        <div className="form-floating mb-4">
                          <input
                            id="name"
                            type="text"
                            value={name}
                            placeholder="Name"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                          />
                          <label htmlFor="name">Name</label>
                        </div>

                        <div className="form-floating mb-4">
                          <input
                            type="email"
                            value={email}
                            id="loginEmail"
                            placeholder="Email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label htmlFor="loginEmail">Email</label>
                        </div>

                        <button type="submit" className="btn btn-primary rounded-pill btn-login w-100 mb-2">
                          提交
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact1;
