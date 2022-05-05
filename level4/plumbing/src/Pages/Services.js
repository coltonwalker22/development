import React, {useContext} from 'react'
import {PlumbingContext} from '../plumbingContextProvider'
import Footer from '../components/Footer'
import Service from '../components/Service';

function Services(props) {
  const {title, description} = props
  const {serviceList, setServiceList, postServices} = useContext(PlumbingContext)

  console.log(serviceList)

  return (
    <>
    <div className="service-list">
      {serviceList.map(service => (
        <Service {...service}
        key={service.title}
        />
      ))}
    </div>
    <Footer />
    </>
  )
}

export default Services