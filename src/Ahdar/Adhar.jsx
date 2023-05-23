import React from "react";

import './Adhar.css'
const Adhar =()=>{
  const Adress ={
    AdressType : 'Office',
    doorNo:'44-1-9',
    street:"Dharavari Street",
    landmark:'sivalayam temple',
    city :'Ongole',
    Pincode:'523105'

  }

    return(
        <div className="bg-container">
         <div className="container1">
              
         </div>
         <div className="container2">
            <img src="https://cdn.vox-cdn.com/thumbor/zD4ZTTBKutLuKAYr6CV1L3cjS0c=/0x0:2864x1200/1200x800/filters:focal(799x609:1257x1067)/cdn.vox-cdn.com/uploads/chorus_image/image/53591117/kongyell.0.jpg" className="img"/>
            <h1 className="heading">King Kong</h1>
            <p className="para">Agent</p>
            <p className="para">Skull island</p>
            {/* <h1 className="heading2">KycCompleted</h1> */}
            <div className="con-2">Kyc Completed</div>
         </div>
         <div className="container3">
           <div className="container3-1">
             <img src="data:image/png;base64,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" className="Img2"/>
             {/* <h1 className="heading3">Adhar verified</h1> */}
             <div className="con3-1">Adhar Verified</div>
           </div>
           <div className="container3-2">
               <img src="https://img.freepik.com/premium-photo/gst-with-red-arrow-going-up_698953-12234.jpg?w=2000" className="Img2"/>
             {/* <h1 className="heading3">Gst verified</h1> */}
             <div className="con3-2">
                   Gst verified
             </div>
           </div>
           <div>
          <div className="container3-3">
  <h2 className="heading0">Address Details</h2>
  <p>
    <strong>Address Type</strong> <span>:</span> {Adress.AdressType}
  </p>
  <p>
    <strong>Door No/Building No</strong> <span>:</span> {Adress.doorNo}
  </p>
  <p>
    <strong>Street</strong> <span>:</span> {Adress.street}
  </p>
  <p>
    <strong>Landmark</strong> <span>:</span> {Adress.landmark}
  </p>
  <p>
    <strong>City</strong> <span>:</span> {Adress.city}
  </p>

  <p>
    <strong>Pincode</strong> <span>:</span> {Adress.Pincode}
  </p>
          </div>   
           </div>
          <div className="container3-4">
          <h1 className="heading3-4">Routes Operating<hr/></h1>
          <p className="pa">Maharashtra,Karnataka</p>
          
          
        </div>
         </div>
         


        </div>
    )
}
export default Adhar;