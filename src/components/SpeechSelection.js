import React from 'react'
import { useState, useEffect } from 'react'
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
export default ({selections, navigation}) => {
  const [debug, setDebug] = useState('');
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
    setDebug('Listening...')
    recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig)
    recognizer.recognizeOnceAsync(
      result => {
        localBuffer += result.text

        const choices = selectChoice(selections, navigation, localBuffer)
        window.console.log(result, 'chose selections:', choices.map(c => c.name));

        if(choices){
          setDebug(localBuffer + '\nchose selections: ' + choices.map(c => c.name))
        }

        recognizer.close();
      },
      err => {
        setDebug(err.toString())
        window.console.log(err);

        recognizer.close();
      });
  }

  return (
    
    <div className="speech-button" onClick={listen}>
      <span className="speech-button-text"><i class="fas fa-microphone"></i> Air Ally Assistant</span>
      <div className="DEBUG-ONLY"><span>{debug}</span></div>
    </div>
  )
}
