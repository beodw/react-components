import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/button/button'

function App() {
  const [count, setCount] = useState(0)


  let leadingIcon = (
          <svg className='h-10 w-10' id="Icon_ionic-ios-checkmark-circle-outline" data-name="Icon ionic-ios-checkmark-circle-outline" xmlns="http://www.w3.org/2000/svg" width="139.485" height="139.485" viewBox="0 0 139.485 139.485">
            <path id="Path_4627" data-name="Path 4627" d="M82.256,18.678l-5.9-6.069a1.269,1.269,0,0,0-.939-.4h0a1.218,1.218,0,0,0-.939.4L33.57,53.817,18.683,38.93a1.3,1.3,0,0,0-1.878,0L10.837,44.9a1.336,1.336,0,0,0,0,1.911L29.614,65.586A5.938,5.938,0,0,0,33.537,67.5a6.222,6.222,0,0,0,3.889-1.844h.034l44.83-45.064A1.433,1.433,0,0,0,82.256,18.678Z" transform="translate(23.229 29.907)" fill="#ffcc38"/>
            <path id="Path_4628" data-name="Path 4628" d="M73.117,12.763A60.364,60.364,0,0,1,115.8,115.8,60.364,60.364,0,0,1,30.434,30.434a59.955,59.955,0,0,1,42.684-17.67m0-9.388A69.742,69.742,0,1,0,142.86,73.117,69.732,69.732,0,0,0,73.117,3.375Z" transform="translate(-3.375 -3.375)" fill="#ffcc38"/>
          </svg>
        );
  let trailingIcon = (
          <svg className="w-10 h-10 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.242 37.375">
            <path id="Vector" d="M37.121.25C16.62.25,0,8.617,0,18.938S16.62,37.625,37.121,37.625s37.121-8.367,37.121-18.688S57.623.25,37.121.25Zm0,34.425c-18.883,0-34.191-7.046-34.191-15.737S18.238,3.2,37.121,3.2s34.191,7.046,34.191,15.737S56,34.675,37.121,34.675ZM32.44,15.659V12.708H42.912v2.951h-3.77v9.508H36.211V15.659Zm23.113-2.951V25.167h-2.93L47.308,17.75v7.417h-2.93V12.708h2.93l5.315,7.417V12.708ZM18.6,25.167V12.708h2.93l3.256,5.042,3.256-5.042h2.929V25.167H28.044V18.12l-2.223,3.44H23.755l-2.223-3.44v7.047Z" transform="translate(0 -0.25)"/>
          </svg>
        );

  return (
    <div className="App">
    
      <Button
      disabled={true}
        leadingIcon={leadingIcon}
        trailingIcon={trailingIcon}
        cursorClasses={"cursor-progress"}
        onClick={()=> alert("You clicked this button")}
        text={"This is a test button"}
        textClasses={"text-white"}
        borderClasses={"rounded-lg"}
        marginClasses={"my-4 mx-4"}
        // paddingClasses={"p-0"}
        backgroundClasses={"bg-black"}
      />

    </div>
  )
}

export default App
