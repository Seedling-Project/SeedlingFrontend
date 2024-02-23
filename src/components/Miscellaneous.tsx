import MiscCard from './MiscCard'

const Miscellaneous = () => {
  return (
    <>
      <div id="row" className="flex justify-around w-full">
        <div id="leftCol" className="w-1/3 px-2">
          <MiscCard id="32" />
        </div>
        <div id="middleCol" className="w-1/3 px-2">
          <MiscCard id="32" />
        </div>
        <div id="rightCol" className="w-1/3 px-2">
          <MiscCard id="32" />
        </div>
      </div>
    </>
  )
}

export default Miscellaneous
