import MiscCard from './MiscCard'

const Research = () => {
  return (
    <>
      <div id="row" className="flex justify-around w-full">
        <div id="leftCol" className="w-1/3 px-2">
          <MiscCard id="9" />
        </div>
        <div id="middleCol" className="w-1/3 px-2">
          <MiscCard id="10" />
        </div>
        <div id="rightCol" className="w-1/3 px-2">
          <MiscCard id="11" />
        </div>
      </div>
    </>
  )
}

export default Research
