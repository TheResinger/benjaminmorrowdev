import Slider from 'react-slick'
import ProjectItem from './projectItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import data from '../../data/projectData.json' //This should eventually be moved to a database call.

const Carousel = () => {
  const settings = {
    accessibility: true,
    adaptiveHeight: true,
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 7500,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }
  return (
    <div className="w-[85%] mx-auto">
      <Slider {...settings}>
        {data.map((item, index) => {
          return <ProjectItem key={index} imagePath={item.imagePath} imageClickPath={item.deployedPath} projectName={item.projectName} projectDescription={item.projectDescription} githubLink={item.githubPath} deployedLink={item.deployedPath} deployed={item.deployed} codebase={item.codebase} />
        })}
      </Slider>
    </div>
  )
}

Carousel.displayName = 'Carousel'

export default Carousel
