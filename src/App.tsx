import { FormEvent, useRef, useState } from 'react'
import './App.scss'

function App() {
  const [grayScale, setGrayScale] = useState(0)
  const [blur, setBlur] = useState(0)
  const [brightness, setBrightness] = useState(100)
  const [contrast, setContrast] = useState(100)
  const [opacity, setOpacity] = useState(100)
  const [saturate, setSaturate] = useState(100)
  const [sepia, setSepia] = useState(0)
  const [hue, setHue] = useState(0)
  const [invert, setInvert] = useState(0)
  const [url, setUrl] = useState("")
  const reference = useRef(null)

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(url)
  }
  const resetEverything = () => {
    setGrayScale(0)
    setBlur(0)
    setBrightness(100)
    setContrast(100)
    setOpacity(100)
    setSaturate(100)
    setSepia(0)
    setHue(0)
    setInvert(0)
  }
  return (
    <div className='main'>
      <div id='header'>Image Filter App</div>
      <div className='form_value'>
        <form action="" onSubmit={(e) => submit(e)}>
          <input placeholder='Enter URL (url should endwith .png or .jpg)' value={url} className='form_input' type="text" name="" id="" defaultValue={url} onChange={(e) => (e.target.value.endsWith('.jpg') || e.target.value.endsWith('.png') || e.target.value.endsWith('.jpeg')) ? setUrl(e.target.value) : setUrl('')} />
          <button type='submit'>Enter</button>
        </form>
      </div>
      <div className="App">
        <div id='image'>
          {
            url == "" ?
              <div>Nothing to show</div> :
              <div id='image_container'>
                <img id='image_source' ref={reference} src={url} style={{ filter: `brightness(${brightness}%) grayScale(${grayScale}) blur(${blur}px) contrast(${contrast}%) hue-rotate(${hue}deg) saturate(${saturate}%) sepia(${sepia}%) invert(${invert}%) opacity(${opacity}%)` }} alt="image" />
              </div>
          }
        </div>
        <section id='controls'>
          <span>Grayscale</span>
          <input value={grayScale} defaultValue={grayScale} type="range" min={0} max={1} name="" id="" onChange={(e) => setGrayScale(parseInt(e.currentTarget.value))} />
          <span>Blur</span>
          <input value={blur} defaultValue={blur} type="range" min={0} max={20} name="" id="" onChange={(e) => setBlur(parseInt(e.currentTarget.value))} />
          <span>Brightness</span>
          <input value={brightness} defaultValue={brightness} type="range" min={5} max={100} name="" id="" onChange={(e) => setBrightness(parseInt(e.currentTarget.value))} />
          <span>Contrast</span>
          <input value={contrast} defaultValue={contrast} type="range" min={5} max={1000} name="" id="" onChange={(e) => setContrast(parseInt(e.currentTarget.value))} />
          <span>Invert</span>
          <input value={invert} defaultValue={invert} type="range" min={0} max={100} name="" id="" onChange={(e) => setInvert(parseInt(e.currentTarget.value))} />
          <span>Opacity</span>
          <input value={opacity} defaultValue={opacity} type="range" min={0} max={100} name="" id="" onChange={(e) => setOpacity(parseInt(e.currentTarget.value))} />
          <span>Saturation</span>
          <input value={saturate} defaultValue={saturate} type="range" min={0} max={100} name="" id="" onChange={(e) => setSaturate(parseInt(e.currentTarget.value))} />
          <span>Sepia</span>
          <input value={sepia} defaultValue={sepia} type="range" min={0} max={100} name="" id="" onChange={(e) => setSepia(parseInt(e.currentTarget.value))} />
          <span>Hue</span>
          <input value={hue} defaultValue={hue} type="range" min={0} max={180} name="" id="" onChange={(e) => setHue(parseInt(e.currentTarget.value))} />
          <div id='reset_button' onClick={() => resetEverything()}>Reset</div>
        </section>
      </div>
    </div>
  )
}

export default App
