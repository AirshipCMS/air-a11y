import moment from 'moment'

const SpeechSDK = window.SpeechSDK

// const AZURE_TOKEN = process.env.AZURE_TOKEN
// FOR DEMO
const AZURE_TOKEN = 'be871cf336744c91a75431b68af603d5'

const getToken = () => new Promise((resolve, reject) => {
  if( window.localStorage.azureToken && window.localStorage.azureTokenExpires > Date.now() ){
    return resolve(window.localStorage.azureToken)
  }

  fetch('https://westus.api.cognitive.microsoft.com/sts/v1.0/issueToken', {
     method: 'post',
     headers: {
       'Content-Type':'application/json',
       'Ocp-Apim-Subscription-Key': AZURE_TOKEN
     },
     body: {}
    })
    .then(res => res.text())
    .then(token => {
      window.localStorage.setItem('azureToken', token)
      window.localStorage.setItem('azureTokenExpires', moment().add(9, 'minutes').valueOf())
      return token
    })
    .then(resolve)
    .catch(reject)
})

export const configureSpeechSDK = () => new Promise((resolve, reject) => {
  getToken()
    .then(tokenResponse => {

      const token = JSON.parse(atob(tokenResponse.split(".")[1]));
      const authorizationToken = tokenResponse;
      const speechConfig = SpeechSDK.SpeechConfig.fromAuthorizationToken(authorizationToken, token.region)
      speechConfig.speechRecognitionLanguage = "en-US"
      const audioConfig  = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput()

      return resolve({
        speechConfig,
        audioConfig,
      })
    })
    .catch(reject)
})

