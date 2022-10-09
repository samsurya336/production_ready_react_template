import React from 'react'

type Props = {
  exampleProp : string
}

function Protected({ exampleProp }: Props) {
  return (
    <div>Protected</div>
  )
}

export default Protected