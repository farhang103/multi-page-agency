import Locations from "../../components/Locations";
import Form from "../../components/contact/Form";
import React from "react";

export const metadata = {
    title: "Contact",
};

const Contact = () => {
    return (
        <section className="pageWrapper flex flex-col md:gap-[7.5rem]">
            <Form />
            <Locations />
        </section>
    );
};

export default Contact;
