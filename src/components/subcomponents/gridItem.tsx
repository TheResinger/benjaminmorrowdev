interface ComponentTypes {
  number: number
  plus: boolean
  text: string
}

const GridItem = ({ number, plus, text }: ComponentTypes): JSX.Element => {
  return (
    <div className="gridItem px-4">
      <div className="flex items-center justify-center">
        <div className="flex counterBox items-center justify-center">
          <span className="counterText font-semibold text-2xl">{number}</span>
          <span className="counterPlus font-semibold text-2xl ml-1">{plus ? '+' : ''}</span>
        </div>
        <h2 className="align-middle text-center text-sm font-normal">{text}</h2>
      </div>
    </div>
  )
}

GridItem.displayName = 'GridItem'

export default GridItem
