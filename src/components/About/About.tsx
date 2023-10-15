const aboutData = {
  title:"We will Stop your Hunger! Burger Hub",
  description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus laborum provident minus maiores deserunt possimus ab recusandae, nulla modi perspiciati.",
  features:['Quality First', 'Fresh', 'Unique', 'Authentic', 'Healthy', 'customizability'],
  imageName:'about.jpg'
}

function About() {
  return (
    <section id="about">
      <div className="container flex flex-col gap-10 | tabM:flex-row tab:items-center">
        <div className="flex-1">
          <img src={`/images/${aboutData.imageName}`} alt="about img" className="rounded-lg"/>
        </div>
        <div className="flex-1">
          <h2 className="about__title">{aboutData.title}</h2>
          <div className="seperator"/>
          <p className="para__text">{aboutData.description}</p>
          <ul className="grid grid-cols-2 py-5 space-y-1">
            {aboutData.features.map((feature) => (
              // add an icon : secondary icon color
              <li className="text-xs text-textPara">{feature}</li>
            ))}
          </ul>
        </div>
      </div>      
    </section>
  )
}

export default About