import GridItem from "../subcomponents/gridItem";

const StatsGrid = () => {
  return (
    <section id="statsGrid" className="py-4">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4 px-4">
        <GridItem number={3} plus={true} text="Years Experience" />
        <GridItem number={35} plus={false} text="Projects Completed" />
        <GridItem number={22} plus={false} text="Happy Customers" />
        <GridItem number={1} plus={false} text="Full-Stack Bootcamp" />
      </div>
    </section>
  );
};

StatsGrid.displayName = 'StatsGrid';

export default StatsGrid;
