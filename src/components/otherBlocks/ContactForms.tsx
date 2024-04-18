// noinspection DuplicatedCode
// noinspection DuplicatedCode

import {TFunction} from 'next-i18next';
import {FC, FormEvent, useState} from 'react';
import Email from "../../icons/lineal/Email";
import {useRouter} from "next/router";

type ServiceProps = {
    t: TFunction;
    pageInfo: PageInfo;
};

type PageInfo = {
    p: String
}

const ContactForms: FC<ServiceProps> = ({t, pageInfo}) => {
    // get current locale
    const router = useRouter();
    const {locale} = router;

    const ContactContent = {
        title1: t("title1"),
        title2: t("title2"),
        title3: t("title3"),
        title4: t("title4"),
        button: t("button"),
        form01: t("form01"),
        form02: t("form02"),
        form03: t("form03"),
        form04: t("form04"),
        form05: t("form05"),
        form06: t("form06"),
        form07: t("form07"),
        form08: t("form08"),
        form09: t("form09"),
        form10: t("form10"),
        form11: t("form11"),
        form12: t("form12"),
        result1: t("result1"),
        result2: t("result2")
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [content, setContent] = useState('');
    const [result, setResult] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);


    const clearContactForms = () => {
        setName('');
        setEmail('');
        setPhone('');
        setContent('');
    }

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult(ContactContent.result1);

        const formData = new FormData(event.currentTarget);
        // https://web3forms.com/
        formData.append('access_key', '9ada1b14-c76d-4a01-9d72-dc7e0a301ce3');

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult(ContactContent.result2);
            clearContactForms();
            setTimeout(() => {
                window.location.href = router.asPath; // back to current page, reload page
            }, 2500);
        } else {
            setResult(data.message);
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pt-10 pt-md-10 mb-10">

            {/*<h2 className="fs-15 text-uppercase text-muted mb-3 text-center">{ContactContent.title1}</h2>*/}
            {/*<h3 className="display-4 mb-10 px-lg-12 px-xl-15 text-center">*/}
            {/*    {ContactContent.title2}*/}
            {/*</h3>*/}

            <div className="card mb-8 bg-body-secondary">
                <div className="card-body py-12">
                    <div className="gx-md-8 gx-xl-12 gy-10 d-flex flex-column align-items-center justify-content-center">
                        <div className="col-lg-12 d-flex flex-column align-items-center">
                            <Email/>
                            <h2 className="display-4 mb-3 mt-3">{ContactContent.title3}</h2>
                            <p className="mb-0 mt-3 mb-8">{ContactContent.title4}</p>
                        </div>

                        <div className="col-lg-12">
                            <form onSubmit={onSubmit} className="contact-form needs-validation">
                                <div className="messages"></div>
                                <div className="row gx-4">

                                    {/*form01: "姓名",*/}
                                    {/*form02: "请输入您的姓名",*/}
                                    {/*form03: "姓名是必填选项",*/}
                                    <div className="col-md-6">
                                        <div className="form-floating mb-4">
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                id="frm_name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder={ContactContent.form02}
                                                className="form-control border-2"
                                                data-error={ContactContent.form03}
                                            />

                                            <label htmlFor="frm_name">{ContactContent.form01}</label>
                                            <div className="invalid-feedback">{ContactContent.form02}</div>
                                        </div>
                                    </div>

                                    {/*form04: "电话",*/}
                                    {/*form05: "请输入您的电话号码",*/}
                                    {/*form06: "电话号码是必填选项",*/}
                                    <div className="col-md-6">
                                        <div className="form-floating mb-4">
                                            <input
                                                required
                                                type="tel"
                                                name="phone"
                                                id="frm_phone"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                className="form-control border-2"
                                                placeholder={ContactContent.form05}
                                                data-error={ContactContent.form06}
                                            />

                                            <label htmlFor="frm_phone">{ContactContent.form04}</label>
                                            <div className="invalid-feedback">{ContactContent.form05}</div>
                                        </div>
                                    </div>

                                    {/*form07: "邮箱",*/}
                                    {/*form08: "请输入您的电子邮箱",*/}
                                    {/*form09: "电子邮箱是必填选项",*/}
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                id="frm_email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="form-control border-2"
                                                placeholder={ContactContent.form08}
                                                data-error={ContactContent.form09}
                                            />

                                            <label htmlFor="frm_email">{ContactContent.form07}</label>
                                            <div className="invalid-feedback">{ContactContent.form08}</div>
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <input
                                                type="hidden"
                                                name="page"
                                                id="frm_page"
                                                value={pageInfo.p.toString()}
                                            />
                                            <label htmlFor="frm_page"></label>
                                        </div>
                                    </div>

                                    {/*form10: "详细信息",*/}
                                    {/*form11: "请输入您想咨询的问题",*/}
                                    {/*form12: "详细信息是必填的选项",*/}
                                    <div className="col-12">
                                        <div className="form-floating mb-4">
                                            <textarea
                                                required
                                                name="message"
                                                id="frm_message"
                                                value={content}
                                                onChange={(e) => setContent(e.target.value)}
                                                placeholder={ContactContent.form11}
                                                className="form-control border-2"
                                                style={{height: 150}}
                                            />

                                            <label htmlFor="frm_message">{ContactContent.form10}</label>
                                            <div className="invalid-feedback">{ContactContent.form11}</div>
                                        </div>
                                    </div>

                                    <div className={`${isSubmitting ? 'text-blue mt-5 mb-5 fs-16 fw-bold' : ''}`}>{result}</div>


                                    <div className="col-12">
                                        <input
                                            type="submit"
                                            disabled={isSubmitting}
                                            value={ContactContent.button}
                                            className="btn btn-primary btn-send w-100 mb-3"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForms;
