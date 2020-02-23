import React from 'react'
import { useState, useEffect } from 'react'
import { configureSpeechSDK } from '../utils/azure'

const SpeechSDK = window.SpeechSDK

const selectChoice = (selections, navigation, speechText) => {
  const choice = selections.find(({ matches }) =>
    matches.some(m => speechText.match(m))
  )

  if(choice){
    choice.onSelect()
    return choice.name
  }

  if( [/previous/i, /back/i, /back/].find(pattern => speechText.match(pattern)) ) {
    return navigation.back()
  }
  if( [/next/i, /submit/i].find(pattern => speechText.match(pattern)) ) {
    return navigation.next()
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

        const choice = selectChoice(selections, navigation, localBuffer)
        window.console.log(result, 'chose selection:', choice);

        if(choice){
          setDebug(localBuffer + '\nchose selection: ' + choice)
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
      <div className="tile">
        <h1><i className="fa fa-microphone"></i></h1>
      </div>
      <div style={{ backgroundColor: '#E0E0E0'   }} className="DEBUG-ONLY">{debug}</div>
    </div>
  )
}
