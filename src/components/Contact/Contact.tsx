const contactData = {
  title: "Subscribe for Updates",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam nisi quisquam odio fugiat vitae",
};

function Contact() {
  return (
    <section id="contact" className="bg-primary py-16 | tabM:my-10">
      <div className="container flex flex-col gap-5 | tabM:items-center tabM:flex-row">
        <div className="space-y-4 tabM:flex-1 ">
          <h2 className="section__title text-xl">{contactData.title}</h2>
          <p className="text-sm | tabM:max-w-lg">{contactData.description}</p>
        </div>

        <div className="flex flex-col gap-3 tabM:flex-row tabM:flex-1">
          <input type="email" placeholder="email address" className="p-2 text-black rounded-lg outline-none | tabM:w-full"/>
          <a href="#" className="flex items-center justify-center gap-2 btn bg-black hover:opacity-75 text-white">Subscribe</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
