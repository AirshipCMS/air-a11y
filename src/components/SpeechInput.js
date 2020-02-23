import React from 'react'
import { useState, useEffect } from 'react'
import { configureSpeechSDK } from '../utils/azure'

const SpeechSDK = window.SpeechSDK

export default ({setText}) => {
  const [listening, setListening] = useState(false);
  const [speechConfig, setSpeechConfig] = useState(null);
  const [audioConfig, setAudioConfig] = useState(null);

  useEffect(() => {
    configureSpeechSDK()
      .then(({speechConfig, audioConfig}) => {
        setSpeechConfig(speechConfig)
        setAudioConfig(audioConfig)
      })
  }, [])

  let recognizer
  let localBuffer = ''
  const listen = () => {
    localBuffer = ''
    recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig)
    recognizer.recognizeOnceAsync(
      result => {
        localBuffer += result.text
        setText(localBuffer)
        window.console.log(result);

        recognizer.close();
      },
      err => {
        setText(err.toString())
        window.console.log(err);

        recognizer.close();
      })
  }


  return (
    <div className="speech-button" onClick={listen}>
      <div className="tile">
        <h1><i className="fa fa-microphone"></i></h1>
      </div>
      <div style={{ backgroundColor: '#FAFAFA'   }} className="DEBUG-ONLY">
      </div>
    </div>
  )
}
