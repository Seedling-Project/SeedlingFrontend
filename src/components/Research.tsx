import StaticCard from './StaticCard'
import AnimatedCard from './AnimatedCard'

const Research = () => {
  return (
    <>
      <div id="row" className="flex justify-around w-full">
        <div id="leftCol" className="w-1/3 px-2">
          <StaticCard id="9" />
        </div>
        <div id="middleCol" className="w-1/3 px-2">
          <AnimatedCard id="10" />
        </div>
        <div id="rightCol" className="w-1/3 px-2">
          <StaticCard id="10" />
        </div>
      </div>
    </>
  )
}

export default Research
