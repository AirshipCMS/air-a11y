import React from 'react'
import 'react-dates/initialize'
import moment from 'moment'
import { DateRangePicker } from 'react-dates'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { useStateValue } from '../components/StateProvider'
import 'react-dates/lib/css/_datepicker.css'

// xq .IATA_AirShoppingRS.Response.OffersGroup.CarrierOffers.Offer[].OfferItem.Price.BaseAmount
// xq .IATA_AirShoppingRS.Response.DataLists.OriginDestList.OriginDest
const offersXmlToJson = response => [...response.getElementsByTagName('Offer')].map(offer => ({
  price: {
    base: offer.getElementsByTagName('BaseAmount')[0].textContent,
    total: offer.getElementsByTagName('TotalAmount')[0].textContent,
  },
  service: {
    WCHC: Math.random() < .4,
    BLIND: Math.random() < .1,
    DEAF: Math.random() < .1,
  },
  segments: [...response.getElementsByTagName('OriginDest')].map(od => ({
    origin: od.getElementsByTagName('OriginCode')[0].textContent,
    destination: od.getElementsByTagName('DestCode')[0].textContent
  }))
}))

export default () => {
  let history = useHistory()

  const [{ needs }] = useStateValue();
  const [results, setResults] = useState([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment());
  const [focusedInput, setFocusedInput] = useState(null);

  const headers = new Headers();
  headers.append("Content-Type", "application/xml");
  headers.append("Authorization-Key", process.env.IATA_AUTH_KEY);

  const searchFlights = () =>
    // PRODUCTION
    // fetch("http://iata.api.mashery.com/athena/ndc192api", {
    //   method: 'POST',
    //   headers,
    //   body: requestXML(startDate, endDate, from, to),
    //   redirect: 'follow'
    // })
    // .then(res => res.text())
    // .then(str => (new window.DOMParser()).parseFromString(str,"text/xml"))
    // .then(res => setResults(res))
    // .catch(console.error)

    // DEMO
    fetch("/api/search.xml")
      .then(res => res.text())
      .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
      .then(offersXmlToJson)
      .then(res => setResults(res))
      .catch(console.error)

  const matchesPrefs = service => Object.entries(needs)
    .filter(([_, v]) => v)
    .every(([k, _]) => service[k])

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Search Flights</h1>
        <section className="section">
          <div className="container">
            <div className="tile is-ancestor">
              <div className="field">
                <p className="control has-icons-left">
                  <input className="input" type="text" placeholder="From" onChange={e => setFrom(e.target.value)} />
                  <span className="icon is-small is-left">
                    <i className="fas fa-plane-departure"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input className="input" type="text" placeholder="To" onChange={e => setTo(e.target.value)} />
                  <span className="icon is-small is-left">
                    <i className="fas fa-plane-arrival"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="tile is-ancestor">
              <div className="field">
                <p className="title has-icons-left">
                  <span className="icon is-small is-left">
                    <i className="fas fa-calendar-day"></i>
                  </span>
                  Date
                </p>

                <DateRangePicker
                  startDate={startDate} // momentPropTypes.momentObj or null,
                  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                  endDate={endDate} // momentPropTypes.momentObj or null,
                  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                  onDatesChange={({ startDate, endDate }) => {
                    setStartDate(startDate)
                    setEndDate(endDate)
                  }} // PropTypes.func.isRequired,
                  focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                  onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
                  initialVisibleMonth={() => moment()} // PropTypes.func or null,
                />

              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h1 className="title">Results</h1>
            {
              results.map(({ price: { base }, service, segments }, i) =>
                <div key={i}>
                  <div className="segments">
                    {
                      segments.map(({ origin, destination }, k) =>
                        <div className={
                          `box segment ${service.WCHC ? 'svc-WCHC' : ''} ${service.BLIND ? 'svc-BLIND' : ''} ${service.DEAF ? 'svc-DEAF' : ''} ${matchesPrefs(service) && 'a11y-match'}`
                        }>
                          <article className="media">
                            <div className="media-left">
                              <figure className="image is-64x64">
                                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
                              </figure>
                            </div>
                            <div className="media-content">
                              <div className="content">
                                <div class="columns">
                                  <div class="column">
                                    <p className="">7:45am - 6:00pm</p>
                                    <p>Airline</p>
                                  </div>
                                  <div class="column">
                                    <p>6h 15m</p>
                                    <p className="">{origin}-{destination}</p>
                                  </div>
                                  <div class="column">
                                    <p className="">Nonstop</p>
                                  </div>
                                  <div class="column">
                                    <p className="price">${base}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                      )
                    }
                  </div>
                </div>
              )
            }
          </div>
        </section>
        <section>
          <button onClick={searchFlights} className="button is-fullwidth">Search Flights</button>
        </section>
      </div>
    </div >
  )
}

const requestXML = (startDate, endDate, from, to) => `<?xml version="1.0" encoding="UTF-8"?>
<IATA_AirShoppingRQ xmlns="http://www.iata.org/IATA/2015/00/2019.2/IATA_AirShoppingRQ">
    <MessageDoc>
        <RefVersionNumber>1.0</RefVersionNumber>
    </MessageDoc>
    <Party>
        <Participant>
            <Aggregator>
                <AggregatorID>88888888</AggregatorID>
                <Name>JR TECHNOLOGIES</Name>
            </Aggregator>
        </Participant>
        <Sender>
            <TravelAgency>
                <AgencyID>9A</AgencyID>
                <IATA_Number>12312312</IATA_Number>
                <Name>Gods Travel</Name>
            </TravelAgency>
        </Sender>
    </Party>
    <PayloadAttributes>
        <EchoTokenText>a14cce97-c859-476d-b383-e08111dd9e0f</EchoTokenText>
        <Timestamp>2001-12-17T09:30:47+05:00</Timestamp>
        <TrxID>transaction${Date.now().toString().substr(0, 3)}</TrxID>
        <VersionNumber>2019.2</VersionNumber>
    </PayloadAttributes>

    <Request>
        <FlightCriteria>
            <OriginDestCriteria>
                <DestArrivalCriteria>
                    <IATA_LocationCode>${to}</IATA_LocationCode>
                </DestArrivalCriteria>
                <OriginDepCriteria>
                    <Date>${startDate.format("YYYY-MM-DD")}</Date>
                    <IATA_LocationCode>${from}</IATA_LocationCode>
                </OriginDepCriteria>
            </OriginDestCriteria>
            <OriginDestCriteria>
                <DestArrivalCriteria>
                    <IATA_LocationCode>${from}</IATA_LocationCode>
                </DestArrivalCriteria>
                <OriginDepCriteria>
                    <Date>${endDate.format("YYYY-MM-DD")}</Date>
                    <IATA_LocationCode>${to}</IATA_LocationCode>
                </OriginDepCriteria>
                <PreferredCabinType>
                    <CabinTypeCode>M</CabinTypeCode>
                </PreferredCabinType>
            </OriginDestCriteria>
        </FlightCriteria>
        <Paxs>
            <Pax>
                <PaxID>Pax1</PaxID>
                <PTC>ADT</PTC>
            </Pax>
        </Paxs>
    </Request>
</IATA_AirShoppingRQ>`
