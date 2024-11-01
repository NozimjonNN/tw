import React from "react";
import './styles/Home.css'

import logo from '../images/logo.png'
import tmlogo from '../images/logoTM.png'

export default function Home() {
    return(
        <>
            <div className="bg">
                <h1>Serious water problems in Uzbekistan.</h1>
                <p>Water problems in Uzbekistan, peoples' reports</p>
            </div>
            <div className="blackArea">
                <div className='flex textArea'>

                    <div className='p50'>
                        <center><h1 className='h11'>Welcome to UZBnews</h1></center><br />
                        <p className='p1'>Welcome to UZBnews, your go-to source for the latest news and updates about Uzbekistan. Our site is dedicated to bringing you accurate, timely, and relevant information, all in English, to keep you connected with what's happening across the country. <br /><br />We invite you to explore our stories and dive deep into the issues that matter to Uzbekistan and its people. Beyond the news, UZBnews is also a platform for positive change—now you can join us in supporting impactful projects that make a difference for those in need. Currently, we’re focused on addressing the water crisis that affects many communities across Uzbekistan. Your donations go directly toward essential projects to improve water accessibility and quality, helping create a healthier and more sustainable future for all. <br /><br />Thank you for your support, and happy reading!</p><br />
                        <div className='btnGroup'>
                            <button className='btn'>Donate</button>
                            <button className='btn'>Donaters list</button>
                            <button className='btn'>Donations list</button>
                        </div>
                    </div>
                    <div className='right'><img className='imgLogo' src={ logo } alt="logo"  /></div>
                </div>

                <div className='flex textArea'>
                    <div className='right'><img src={ tmlogo } alt="logo" /></div>
                    <div className='p50'>
                        <center><h1 className='h11'>CODERS™</h1></center><br />
                        <p className='p1'>Welcome to our team page! We’re a passionate group of developers excited to make a difference through our work. While we’re still a small team, we’re growing fast and have big plans to expand. <br /><br /> If you’d like to support us, you can donate through this site or contribute with materials, funds, or simply by sharing our mission. We’re also looking for new members with skills in development, design, or project management—if you’re interested, let us know! <br /> <br /> <br /> Meet Our Team (click a name to view the GitHub profile):
                        <ul>
                            <li><a href='https://github.com/NozimjonNN'>Nozimjon</a></li>
                            <li><a href='https://github.com/DDiyorbek975'>Diyorbek</a></li>
                            <li><a href='https://github.com/Asadbek888'>Asadbek</a></li>
                            <li><a href='https://github.com/FarruhSadullayev'>Farruh</a></li>
                            <li><a href='https://github.com/ruxsoo'>Ruxsora</a></li>
                        </ul>
                        </p><br />
                        <div className='btnGroup'>
                            <button className='btn'>About team</button>
                            <button className='btn'>About project</button>
                            <button className='btn'>Project's gitHub page</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
