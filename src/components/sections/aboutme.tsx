const AboutMe = () => {
  return (
    <section id="aboutMe" className="py-2">
      <div className="grid grid-cols-3 md:grid-cols-4 px-4 pb-4">
        <div className="col-start-1 col-end-5">
          <h3 className="text-2xl text-center">About Me</h3>
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 px-12">
        <div className="card border border-gray-200 rounded-lg shadow dark:border-gray-700 col-start-1 col-end-5">
          <div className="p-5 flex-grow">
            <div className="header">
              <h4 className="text-3xl">Hello there! 👋 I&apos;m Benjamin</h4>
            </div>
            <div>
              <p>I&apos;m a passionate and dedicated Full Stack Software Developer with a flair for crafting robust and user-friendly applications. I thrive in the dynamic world of web development, where creativity meets functionality.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutMe.displayName = 'AboutMe'

export default AboutMe
