import StaticCard from './StaticCard'
import AnimatedCard from './AnimatedCard'

const Miscellaneous = () => {
  return (
    <>
      <div id="row" className="flex justify-around w-full">
        <div id="leftCol" className="w-1/3 px-2">
          <AnimatedCard id="30" />
        </div>
        <div id="middleCol" className="w-1/3 px-2">
          <AnimatedCard id="31" />
        </div>
        <div id="rightCol" className="w-1/3 px-2">
          <AnimatedCard id="32" />
        </div>
      </div>
    </>
  )
}

export default Miscellaneous
