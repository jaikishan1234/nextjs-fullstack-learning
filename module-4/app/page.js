import React from 'react'

const HomePage = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos')
  const res = await data.json()
  console.log(res)

  return (
    <div>
      {JSON.stringify(res)}
    </div>
  )
}

export default HomePage