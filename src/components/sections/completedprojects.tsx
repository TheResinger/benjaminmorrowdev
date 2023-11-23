import Carousel from "../subcomponents/carousel";
import { forwardRef } from "react";

const CompletedProjects = forwardRef<HTMLElement>(({}, ref) => {
  return (
    <section id="completedProjects" className="pb-4 pt-2" ref={ref}>
      <div className="grid grid-cols-3 md:grid-cols-4 px-3 pb-4">
        <div className="col-start-1 col-end-5">
          <h5 className="text-2xl text-center">Completed Projects</h5>
        </div>
      </div>
      <Carousel />
    </section>
  );
});

export default CompletedProjects;
