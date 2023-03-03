import React from 'react'
import logo from "./logo.png"

export default function SideMenu() {
    return (
        <div className="side-menu">
            <div style={{ alignItems: 'center', textAlign: "center", marginTop: "100px", textDecorationColor: "white" }}>
                <img alt="logo" style={{ objectFit: 'cover', position: "relative", alignItems: 'center' }} src={logo} width={'200px'} height={'200px'} />
                <div style={{ color: "white", lineHeight: '0.5' }}>
                    <emphasize><h2>NIT DELHI</h2></emphasize>
                    <emphasize><p>Training and Placement Cell</p></emphasize>
                    <p style={{ fontSize: "12px", lineHeight: "1", margin:"0px 4px"}}> An autonomous institute under the aegis of Ministry of Education, Govt. of India</p>
                    <br />
                    <br />
                    <p style={{ fontSize: "14px", lineHeight: "1.5" }} > National Institute of Technology <br />
                        Plot No. FA7,Zone P1, <br />
                        GT Karnal Road, Delhi-110036 </p>
                </div>
            </div>
        </div>
    )
}