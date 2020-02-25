import React from 'react'
import { useState, useEffect } from 'react'
import { useStateValue } from './StateProvider'
import { configureSpeechSDK } from '../utils/azure'

const SpeechSDK = window.SpeechSDK

const selectChoice = (selections, navigation, speechText) => {
  const choices = selections.filter(({ matches }) =>
    matches.some(m => speechText.match(m))
  )

  if(choices.length){
    choices.forEach(choice => choice.onSelect())
    return choices
  }

  if( [/previous/i, /back/i, /back/].find(pattern => speechText.match(pattern)) ) {
    return navigation.back()
  }
  if( [/next/i, /submit/i].find(pattern => speechText.match(pattern)) ) {
    return navigation.next()
  }

  return []
}

// @TODO need localBuffer for long text area
const speechParser = (localBuffer, setLocalBuffer, setA11yOutput, selections, navigation) => (sender, recognition) => {
  window.console.log(recognition.result.text);
  setA11yOutput(recognition.result.text) // don't destructure result

  const choices = selectChoice(selections, navigation, recognition.result.text)
  window.console.log(recognition.result.text, 'chose selections:', choices.map(c => c.name));

  if(choices){
    setA11yOutput(recognition.result.text + '\nchose selections: ' + choices.map(c => c.name))
    // reset localBuffer
    // setLocalBuffer('')
  } else {
    // setLocalBuffer(recognition.result.text)
  }

}

/*
 * selections : [
 *   {
 *      name: 'internal cat',
 *      matches: [
 *        'cat',
 *        /kit/i
 *      ],
 *      onSelect: () => {}
 *   },
 *   {
 *      name: 'dog',
 *      matches: [
 *        'dog'
 *        'doggo'
 *        'puppy'
 *        'puppo'
 *      ],
 *      onSelect: () => {}
 *   },
 * ]
 *
 * navigations : {
 *   back: () => {}
 *   next: () => {}
 * }
 *
 * back <- /previous/i /back/i /back/
 * next <- /next/i /submit/i
 */
export default () => {
  const [{ a11yAssistant }] = useStateValue();
  const [localBuffer, setLocalBuffer] = useState('') // what we use to parse
  const [a11yOutput, setA11yOutput] = useState('') // what is displayed to user
  const [listening, setListening] = useState(false);
  const [recognizer, setRecognizer] = useState(null);

  const { selections, navigation } = a11yAssistant

  useEffect(() => {
    configureSpeechSDK()
      .then(({speechConfig, audioConfig}) => {
        const recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig)
        recognizer.recognizing = speechParser(localBuffer, setLocalBuffer, setA11yOutput, selections, navigation)
        setRecognizer(recognizer)
      })
  }, [localBuffer, selections, navigation])


  const toggleListen = () => {
    if(!listening){
      setListening(true)
      recognizer.startContinuousRecognitionAsync(
        () => {
          setA11yOutput('Listening...')
        },
        err => {
          setA11yOutput(err.toString())
          window.console.log(err);

          recognizer.close();
          setListening(false)
        })
    } else {
      setListening(false)
      recognizer.stopContinuousRecognitionAsync(
        () => {
          setA11yOutput('Stopped Listening...')
        },
        err => {
          setA11yOutput(err.toString())
          window.console.log(err);

          recognizer.close();
          setListening(false)
        })
    }

  }

  return (
    <div className={`air-ally-assistant-container air-ally-assistant-speechselection-container ${listening ? 'air-ally-assistant-container-listening':''}`}>
      <div className={`speech-button ${listening ? 'speech-button-listening':''}`} onClick={toggleListen}>
        <span className="speech-button-text"><i className="fas fa-microphone"></i> Air Ally Assistant</span>
      </div>
      <div className="air-ally-assistant-output"><span>{a11yOutput}</span></div>
    </div>
  )
}
