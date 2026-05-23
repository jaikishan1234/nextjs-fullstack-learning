import React from 'react'

const AboutPage = () => {
  return (
    <div>
      {/* 
        Hydration Errors (Important Interview Topic)

        Hydration errors happen when:
        Server HTML !== Client HTML

        Example:
        {Math.random()} generates different values
        on server and client, causing mismatch.
      */}

      {Math.random()}
    </div>
  )
}

export default AboutPage