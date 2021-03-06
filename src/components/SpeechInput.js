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
    setListening(true)
    localBuffer = ''
    recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig)
    recognizer.recognizeOnceAsync(
      result => {
        localBuffer += result.text
        setText(localBuffer)
        window.console.log(result);

        recognizer.close();
        setListening(false)
      },
      err => {
        setText(err.toString())
        window.console.log(err);

        recognizer.close();
        setListening(false)
      })
  }


  return (
    <div className={`air-ally-assistant-container air-ally-assistant-speechinput-container ${listening ? 'air-ally-assistant-container-listening':''}`}>
      <div className={`speech-button ${listening ? 'speech-button-listening':''}`} onClick={listen}>
        <span className="speech-button-text"><i class="fas fa-microphone"></i> Air Ally Assistant</span>
      </div>
    </div>
  )
}
