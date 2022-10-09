import React from 'react'

type Props = {
  exampleProp : string
}

function Private({exampleProp}: Props) {
  return (
    <div>Private</div>
  )
}

export default Private