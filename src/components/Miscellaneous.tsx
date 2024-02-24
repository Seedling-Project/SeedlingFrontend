import MiscCard from './MiscCard'

const Miscellaneous = () => {
  return (
    <>
      <div id="row" className="flex justify-around w-full">
        <div id="leftCol" className="w-1/3 px-2">
          <MiscCard id="50" />
        </div>
        <div id="middleCol" className="w-1/3 px-2">
          <MiscCard id="39" />
        </div>
        <div id="rightCol" className="w-1/3 px-2">
          <MiscCard id="103" />
        </div>
      </div>
    </>
  )
}

export default Miscellaneous
