import React from 'react'
import { useState } from 'react'

const SpeechSDK = window.SpeechSDK

// curl -X POST -d '' -H 'Content-Type: application/json' -H 'Ocp-Apim-Subscription-Key: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' https://westus.api.cognitive.microsoft.com/sts/v1.0/issueToken
// const tokenResponse = process.env.AZURE_TOKEN
// FOR DEMO
const tokenResponse = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJyZWdpb24iOiJ3ZXN0dXMiLCJzdWJzY3JpcHRpb24taWQiOiI5OGZjN2IyOGY1ZWU0YjY2ODM2NDRjNGMwOGI4MTcwNSIsInByb2R1Y3QtaWQiOiJTcGVlY2hTZXJ2aWNlcy5GcmVlIiwiY29nbml0aXZlLXNlcnZpY2VzLWVuZHBvaW50IjoiaHR0cHM6Ly9hcGkuY29nbml0aXZlLm1pY3Jvc29mdC5jb20vaW50ZXJuYWwvdjEuMC8iLCJhenVyZS1yZXNvdXJjZS1pZCI6IiIsInNjb3BlIjoic3BlZWNoc2VydmljZXMiLCJhdWQiOiJ1cm46bXMuc3BlZWNoc2VydmljZXMud2VzdHVzIiwiZXhwIjoxNTgyNDM4MTUwLCJpc3MiOiJ1cm46bXMuY29nbml0aXZlc2VydmljZXMifQ.816AU25z8cb2BcjFnGHffxsM2hhKo47gk6ucdj80h9g'
const token = JSON.parse(atob(tokenResponse.split(".")[1]));
const authorizationToken = tokenResponse;
const speechConfig = SpeechSDK.SpeechConfig.fromAuthorizationToken(authorizationToken, token.region)
speechConfig.speechRecognitionLanguage = "en-US"
const audioConfig  = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput()

export default ({setText}) => {
  const [listening, setListening] = useState(false);

  let recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);

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
