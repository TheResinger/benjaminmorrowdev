import Slider from "react-slick";
import ProjectItem from "./projectItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
    // This should eventually move over to a database or a dedicated json file, however currently unnecessary.
    const data = [
    {
      projectName: "Typing Speed Test",
      imagePath: "/tst.png",
      projectDescription:
        "A web application designed to test a users touch typing speed.",
      githubPath: "https://github.com/TheResinger/TypingSpeedTest",
      deployedPath: "https://theresinger.github.io/TypingSpeedTest/",
      deployed: true,
      codebase: true,
    },
    {
      projectName: "SkyBeat",
      imagePath: "/skybeat.png",
      projectDescription:
        "Skybeat is a new social media for music enthuasists.",
      githubPath: "https://github.com/TheResinger/SkyBeat",
      deployedPath: "https://google.com",
      deployed: false,
      codebase: true,
    },
    {
      projectName: "Cards",
      imagePath: "/placeholder.png",
      projectDescription: "An online Cards Against Humanity game",
      githubPath: "https://github.com/TheResinger/cards",
      deployedPath: "https://cards.resinger.dev",
      deployed: false,
      codebase: true,
    },
    {
      projectName: "Placeholder",
      imagePath: "/placeholder.png",
      projectDescription: "Placeholder",
      githubPath: "https://github.com/TheResinger/cards",
      deployedPath: "https://cards.resinger.dev",
      deployed: false,
      codebase: false,
    },
    {
      projectName: "Cards",
      imagePath: "/placeholder.png",
      projectDescription: "Placeholder",
      githubPath: "https://github.com/TheResinger/cards",
      deployedPath: "https://cards.resinger.dev",
      deployed: false,
      codebase: false,
    },
  ];

  const settings = {
    accessibility: true,
    // adaptiveHeight: true,
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
  };

  return (
    <div className="w-[85%] mx-auto ">
      <Slider {...settings}>
        {data.map((item, index) => {
          return (
            <ProjectItem
              key={index}
              imagePath={item.imagePath}
              imageClickPath={item.deployedPath}
              projectName={item.projectName}
              projectDescription={item.projectDescription}
              githubLink={item.githubPath}
              deployedLink={item.deployedPath}
              deployed={item.deployed}
              codebase={item.codebase}
            />
          );
        })}
      </Slider>
    </div>
  );
}
