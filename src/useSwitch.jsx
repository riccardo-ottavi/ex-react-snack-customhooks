import { useState } from "react";

function useSwitch(defaultValue = false){
    const [isOn, setIsOn] = useState(defaultValue);

  const toggle = () => {
    setIsOn(prev => !prev);
  };

  return [ isOn, toggle ];
}

export default useSwitch