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
  const [allyOutput, setAllyOutput] = useState('');
  const [listening, setListening] = useState(false);
  const [speechConfig, setSpeechConfig] = useState(null);
  const [audioConfig, setAudioConfig] = useState(null);

  // const { selections, navigation } = a11yAssistant
  const selections = a11yAssistant.selections
  const navigation = a11yAssistant.navigation

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
    setAllyOutput('Listening...')
    recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig)
    recognizer.recognizeOnceAsync(
      result => {
        localBuffer += result.text

        const choices = selectChoice(selections, navigation, localBuffer)
        window.console.log(result, 'chose selections:', choices.map(c => c.name));

        if(choices){
          setAllyOutput(localBuffer + '\nchose selections: ' + choices.map(c => c.name))
        }

        recognizer.close();
        setListening(false)
      },
      err => {
        setAllyOutput(err.toString())
        window.console.log(err);

        recognizer.close();
        setListening(false)
      });
  }

  return (
    <div className={`air-ally-assistant-container air-ally-assistant-speechselection-container ${listening ? 'air-ally-assistant-container-listening':''}`}>
      <div className={`speech-button ${listening ? 'speech-button-listening':''}`} onClick={listen}>
        <span className="speech-button-text"><i className="fas fa-microphone"></i> Air Ally Assistant</span>
      </div>
      <div className="air-ally-assistant-output"><span>{allyOutput}</span></div>
    </div>
  )
}
