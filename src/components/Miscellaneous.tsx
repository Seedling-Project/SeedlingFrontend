import MiscCard from './MiscCard'

const Miscellaneous = () => {
  return (
    <>
      <div id="row" className="flex flex-wrap justify-around w-full ">
        <div id="leftCol" className="xs:w-4/5 md:w-4/5 lg:w-4/5 px-2 xl:w-1/3">
          <MiscCard id="50" />
        </div>
        <div
          id="middleCol"
          className="xs:w-4/5 md:w-4/5 lg:w-4/5 xl:w-1/3 px-2 "
        >
          <MiscCard id="39" />
        </div>
        <div id="rightCol" className="xs:w-4/5 md:w-4/5 lg:w-4/5 xl:w-1/3 px-2">
          <MiscCard id="103" />
        </div>
      </div>
    </>
  )
}

export default Miscellaneous
