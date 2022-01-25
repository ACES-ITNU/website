import React from 'react'

const TeamCard = ({ name, position, image ,link}) => {
  return (
    <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
      <div className="h-full flex items-center border-orange-600 border p-4 rounded-lg ">
        <a href={link?link:'#'} target={link && '_blank'} rel="noreferrer" >

        <img
          alt="team"
          className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 transform hover:transition hover:duration-300 hover:scale-125 hover:cursor-pointer"
          src={image.src}
          />
          </a>
        <div className="flex-grow">
          <h2 className="text-gray-800 title-font font-medium mb-2">{name}</h2>
          {/* <br></br> */}
          <p className="text-gray-600">{position}</p>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
