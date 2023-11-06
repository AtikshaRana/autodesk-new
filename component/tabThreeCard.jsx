import React from 'react'

function TabThreeCard(props) {
   var  data = props.cardsData
  return (
    <>
      {(data).map((content, k) => {
            return (
                <div key={k} className="tab_cards bg-black rounded-lg text-white p-4 border-2 border-grey-600  w-threeCard mx-[10px] td:w-halfWidth td:mb-[20px] phd:w-full">
                    <h6>{content.subHeading}</h6>
                    <p>{content.content}</p>
                </div>)
        })}
    </>
  )
}

export default TabThreeCard
