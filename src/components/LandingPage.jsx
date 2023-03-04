import React from 'react'
import Button from './Button'

const LandingPage = () => {
    const onClick = (title) => {
        alert(title)
    }
  return (
    <div className='LandingPage'>
          {/* <Button onClick={onClick} title={"Student"} />
          <Button onClick={()=> onClick("working")} title={"District"}/> */}

    </div>
  )
}

export default LandingPage
