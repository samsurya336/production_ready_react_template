import {useState} from 'react'

type Props = {
  exampleProp : string
}

function useAuth({exampleProp}: Props) {
  const [_exState, _setExState] = useState("");

  const getExState = () => {
    return _exState
  };

  const setExState = (newState : string) => {
    _setExState(newState)
  }
  return {
    getExState,
    setExState
  }
}

export default useAuth