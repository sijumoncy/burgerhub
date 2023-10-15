

function Hero() {
  return (
    <section id="home">
        <div className="container flex flex-col gap-10 items-center | tabM:flex-row">
            <div className="mx-auto animate-upDown | tabM:basis-1/2 | lap:basis-2/5">
                <img src="/images/hero-img.png" alt="hero img" className="w-60 | tabM:w-full"/>
            </div>

            <div className="text-center | tabM:basis-1/2 tabM:text-start | lap:basis-3/5">
                <h1 className="main__title">TITLE : Yummy Big Stacked Burgers</h1>
                {/* seperator */}
                <div className="seperator mx-auto | tabM:mx-0"/>
                <p className="para__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit consectetur error dolor, facilis quaerat asperiores nemo eveniet fugit impedit repudiandae qui fugiat delectus natus itaque, obcaecati quia magnam quisquam. Architecto?</p>

                {/* icons or points unique */}
                <div className="flex text-base items-center justify-center gap-4 py-10 | tabM:justify-start tabM:gap-20">
                    <div className="text-center">
                    {/* add icons for each : text-seconday text-4xl */}
                    <span className="">
                        Delicious
                        </span>
                    </div>
                    <div>
                    {/* add icons for each */}
                    <span className="">
                        Delicious
                        </span>
                    </div>
                    <div>
                    {/* add icons for each */}
                    <span className="">
                        Delicious
                        </span>
                    </div>
                </div>
                {/* button : call to action */}

                <a href="#" className="btn btn-primary">Explore</a>
            </div>
        </div>
    </section>
  )
}

export default Hero