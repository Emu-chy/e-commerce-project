import styled from "styled-components";

const Contact = () => {
    const Wrapper = styled.section`
        padding: 9rem 0 5rem 0;
        text-align: center;

        .container {
            margin-top: 6rem;

            .contact-form {
                max-width: 50rem;
                margin: auto;

                .contact-inputs {
                    display: flex;
                    flex-direction: column;
                    gap: 3rem;

                    input[type="submit"] {
                        cursor: pointer;
                        transition: all 0.2s;

                        &:hover {
                            background-color: ${({ theme }) => theme.colors.white};
                            border: 1px solid ${({ theme }) => theme.colors.btn};
                            color: ${({ theme }) => theme.colors.btn};
                            transform: scale(0.9);
                        }
                    }
                }
            }
        }
    `;

    return (
        <Wrapper>
            <h2 className="common-heading">Contact Page</h2>
            <iframe
                title="This is a unique title"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1420863343947!2d90.42205061441892!3d23.81354599227928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fb95f16c1%3A0xb333248370356dee!2sJamuna%20Future%20Park!5e0!3m2!1sen!2sbd!4v1681335522317!5m2!1sen!2sbd"
                width="100%"
                height="400"
                style={{ border: "0" }}
                allowFullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="container">
                <div className="contact-form">
                    <form
                        action="https://formspree.io/f/xvonvwwe"
                        method="POSt"
                        className="contact-inputs"
                    >
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter Username"
                            required
                            autoComplete="off"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            required
                            autoComplete="Off"
                        />
                        <textarea
                            name="message"
                            cols="30"
                            rows="10"
                            placeholder="Enter A Message"
                        ></textarea>
                        <input type="submit" value="send" />
                    </form>
                </div>
            </div>
        </Wrapper>
    );
};

export default Contact;
