import React from 'react'
import { Serv_Hero } from './Serv_Hero'
import ServFeatures from './ServFeatures'
import SmoothScroll from '../../component/Mouse/SmoothScroll'
import ServFaq from './ServFaq'
import ServIncen from './ServIncen'
import ServPricing from './ServPricing'
import { ServLast } from './ServLast'
import { Footer } from '../Home/Footer'

const Service = () => {
  return (
    <div>
<SmoothScroll>
        <Serv_Hero/>
        <ServFeatures/>
<ServFaq/>
<ServIncen/>
<ServPricing/>
<ServLast/>
<Footer/>
        </SmoothScroll>
    </div>
  )
}

export default Service