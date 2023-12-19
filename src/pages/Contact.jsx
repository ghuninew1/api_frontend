import ToTop from "#components/ToTop";

import Observer from "#components/Observer";

const Contact = () => {
    const length = 30;
    const refs = Object.keys(Array.from({ length }));

    return (
        <div className="contact">
            <div className="contact__container">
                <h1 className="contact__title">Contact</h1>
                <div className="contact__content">
                    <div className="contact__content__left">
                        <div className="contact__content__left__container">
                            <div className="contact__content__left__container__title">
                                <h2>Get in touch</h2>
                            </div>
                            <div className="contact__content__left__container__content">
                                <p>
                                    I'm currently looking for new opportunities,
                                    my inbox is always open. Whether you have a
                                    question or just want to say hi, I'll try my
                                    best to get back to you!
                                </p>
                                <p>
                                    <a
                                        href="mailto:

                                    "
                                    >
                                        Send me an email
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="contact__content__right">
                        <div className="contact__content__right__container">
                            <div className="contact__content__right__container__title">
                                <h2>Let's work together</h2>
                            </div>
                            <div className="contact__content__right__container__content">
                                <p>
                                    I'm currently looking for new opportunities,
                                    my inbox is always open. Whether you have a
                                    question or just want to say hi, I'll try my
                                    best to get back to you!
                                </p>
                                <p>
                                    <a
                                        href="mailto:

                                    "
                                    >
                                        Send me an email
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToTop />
        </div>
    );
};

export default Contact;
