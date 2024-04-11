import { FC, FormEvent, useState } from 'react';
import { TFunction } from 'next-i18next';

type ContactProps = {
  t: TFunction;
};

const Contact1: FC<ContactProps> = ({ t }) => {
  const contacts = {
    result1: t("result1"),
    result2: t("result2"),
    formText1: t("formText1"),
    formText2: t("formText2"),
    formText3: t("formText3"),
    formText4: "266 Notre-Dame St W, Level 5,",
    formText5: "Montreal, Quebec, Canada",
    formText6: t("formText6"),
    formText7: t("formText7"),
    email: "Info@miec-uuoc.ca",
    form1: t("form1"),
    form2: t("form2"),
    form3: t("form3"),
    form4: t("form4"),
    form5: t("form5"),
    form6: t("form6"),
    form7: t("form7"),
    form8: t("form8"),
    form9: t("form9")
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [content, setContent] = useState('');
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setContent('');
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(contacts.result1);

    const formData = new FormData(event.currentTarget);
    // https://web3forms.com/
    formData.append('access_key', '9ada1b14-c76d-4a01-9d72-dc7e0a301ce3');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(contacts.result2);
      clearForm();
      setTimeout(() => {
        window.location.href = '/'; // back to home page, reload page
      }, 3000);
    } else {
      setResult(data.message);
      setIsSubmitting(false);
    }
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
          <h2 className="fs-16 text-uppercase text-line text-primary mb-3">{contacts.formText1}</h2>
          <h2 className="display-4 mb-8">{contacts.formText2}</h2>

          <div className="d-flex flex-row">
            <div>
              <div className="icon text-primary fs-28 me-6 mt-n1">
                <i className="uil uil-location-pin-alt" />
              </div>
            </div>

            <div>
              <h5 className="mb-1">{contacts.formText3}</h5>
              <address>
                {contacts.formText4}
                <br className="d-none d-md-block" />
                {contacts.formText5}
              </address>
            </div>
          </div>

          <div className="d-flex flex-row">
            <div>
              <div className="icon text-primary fs-28 me-6 mt-n1">
                <i className="uil uil-envelope" />
              </div>
            </div>
            <div>
              <h5 className="mb-1">{contacts.formText6}</h5>
              <p className="mb-0">
                <a href={`mailto: ${contacts.email}`} className="link-body">
                  {contacts.email}
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
              <span>{contacts.formText7}</span>
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
              <h2 className="mb-6">{contacts.formText7}</h2>

              <div className="newsletter-wrapper">
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <div id="mc_embed_signup">
                      <form onSubmit={onSubmit} className="text-start mb-3">
                        <div className="form-floating mb-4">
                          <input
                              id="name"
                              required
                              type="text"
                              value={name}
                              name="name"
                              placeholder={contacts.form2}
                              className="form-control"
                              onChange={(e) => setName(e.target.value)}
                          />
                          <label htmlFor="name">{contacts.form1}</label>
                        </div>

                        <div className="form-floating mb-4">
                          <input
                              type="email"
                              value={email}
                              name="email"
                              id="loginEmail"
                              placeholder={contacts.form6}
                              className="form-control"
                              onChange={(e) => setEmail(e.target.value)}
                          />
                          <label htmlFor="loginEmail">{contacts.form5}</label>
                        </div>

                        <div className="form-floating mb-4">
                          <input
                              type="tel"
                              name="phone"
                              value={phone}
                              id="loginPhone"
                              placeholder={contacts.form4}
                              className="form-control"
                              onChange={(e) => setPhone(e.target.value)}
                          />
                          <label htmlFor="loginPhone">{contacts.form3}</label>
                        </div>

                        <div className="col-12">
                          <div className="form-floating mb-4">
                        <textarea
                            required
                            name="message"
                            id="frm_message"
                            placeholder={contacts.form8}
                            className="form-control border-0"
                            value={content}
                            style={{height: 150}}
                            onChange={(e) => setContent(e.target.value)}
                        />

                            <label htmlFor="frm_message">{contacts.form7}</label>
                          </div>
                        </div>

                        <button disabled={isSubmitting} type="submit" className="btn btn-primary rounded-pill btn-login w-100 mb-2">
                          {contacts.form9}
                        </button>
                      </form>
                      <span>{result}</span>
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
