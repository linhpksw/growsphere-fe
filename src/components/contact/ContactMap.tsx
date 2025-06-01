import React from 'react';

const ContactMap = () => {
    return (
        <div className="bd-google__map-area pb-125">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-10 col-xl-11">
                        <iframe
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.976980105728!2d105.5235083!3d21.0127367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134530104c1e7b5%3A0x9d3a29288b6a0e7d!2sFPT%20University!5e0!3m2!1svi!2s!4v1717239374655!5m2!1svi!2s"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMap;
