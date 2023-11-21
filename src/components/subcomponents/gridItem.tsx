export default function GridItem({
  number,
  plus,
  text,
}: {
  number: number;
  plus: boolean;
  text: string;
}) {
  return (
    <div className="gridItem px-4 pb-7">
      <div className="flex items-center justify-center">
        <div className="flex counterBox items-center justify-center">
          <span className="counterText font-semibold text-2xl">{number}</span>
          <span className="counterPlus font-semibold text-2xl ml-1">
            {plus ? "+" : ""}
          </span>
        </div>
        <h6 className="align-middle text-sm font-normal">
          {text}
        </h6>
      </div>
    </div>
  );
}