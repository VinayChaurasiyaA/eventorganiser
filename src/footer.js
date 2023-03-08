import React from 'react'
import { FaDiscord, FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa";

export default function Footer() {
  return (
    <div className='footer'>
      <h5 className='college'>MSG-SGKM College of Arts, Science and Commerce</h5>
      <h5 className='followus'>Follow us on</h5>
      <div>
        <a href="https://youtu.be/2DM8Msy19zM" target="_blank" rel='noreferrer' >
        <FaYoutube className='icons'></FaYoutube>
        </a>
      </div>
      <div>
        <a href="https://instagram.com/universalmsgsgkmcollege?igshid=YmMyMTA2M2Y="target="_blank" rel='noreferrer'>
        <FaInstagram className='icons'></FaInstagram>
        </a>
      </div>
      <div>
        <a href="https://m.facebook.com/UniversalMSGSGKMCollege/?_rdr"target="_blank" rel='noreferrer'>
        <FaFacebook className='icons'></FaFacebook>
        </a>
      </div>
    </div>
    
  )
}
