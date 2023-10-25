import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import '../styles/main.css'
import { AiOutlineCaretRight } from "react-icons/ai";

export default function Privacy() {
  const [formattedDate,setformattedDate]= useState(null)
    useEffect(()=>{
        const currentDate = new Date();
        const format = new Date(currentDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
        setformattedDate(format)
    }, [])
  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page
  }, []);
  
  return (
    <div style={{backgroundColor:"#F5F5F5"}}>
         <div  style={{height:"200px",alignItems:"end",paddingTop:"100px"}} className='gradi text-start px-2' >
        <div className='text-start text-white text-14 px-2 py-1' style={{backgroundColor:"rgba(0, 0, 0, .8)",display:"inline-block",maxWidth:"90%"}}>
          <Link style={{textDecoration:"none",color:"white"}} to='/' >Home</Link>
          <AiOutlineCaretRight size={13} className='mx-2' color='#FC01AC'/>
          <span>PRIVACY POLICY & TERMS AND CONDITIONS</span>
        </div>
        <div className='px-2 py-1 my-2'  style={{backgroundColor:"hsla(0, 0%, 100%, .5)",width:"100px",fontSize:"11px"}}>{formattedDate}</div>

       </div>
          <div className='mdWidth75 my-4 text-start mx-auto'>
            <div className='row' >
                <div className='col-md-5 col-12'>
                    <p className='h2' style={{fontWeight:"700",color: "#2D2D2D"}} >Privacy Policy</p>
                    <div  className='my-3' style={{ width:"49px",backgroundColor:"#CCCCCC",height:"4px"}} ></div>
                    <div className='para my-4'>This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.</div>
                    <div className='para my-4'>What personal information do we collect from the people that visit our website ?</div>
                    <div className='para my-4'>When visiting or registering on our site, as appropriate, you may be asked to enter your name, email address, phone number or other details to help you with your experience.</div>
                    <p className='para heading' >When do we collect information?</p>
                    <div className='para my-4' >We collect information from you when you request a quote, fill out a form, Use Live Chat, Open a Support Ticket or enter information on our site.</div>
                    <p className='para heading'>How do we use your information?</p>
                    <div className='para'>We may use the information we collect from you when you request a quote, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:</div>
                    <div className='para'>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</div>
                    <div className='para'>To improve our website in order to better serve you.</div>
                    <div className='para'>To allow us to better respond to your customer service requests.</div>
                    <div className='para'>To send periodic emails regarding your order or other products and services.</div>
                    <div className='para'>To follow up with them after correspondence (live chat, email or phone inquiries)</div>
                    <p className='para heading my-4'>How do we protect your information?</p>
                    <div className='para'>We do not use vulnerability scanning and/or scanning to PCI standards.</div>
                    <div className='para'>We only provide articles and information. We never ask for credit card numbers.</div>
                    <div className='para'>We do not use Malware Scanning.</div>
                    <div className='para'>We do not use an SSL certificate.</div>
                    <p className='para heading my-4' >Do we use 'cookies'?</p>
                    <div className='para' >Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enable the site's or service provider's systems to recognize your browser and capture and remember certain information.</div>
                    <div className='para' >They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</div>
                    <div className='para mt-4' >We use cookies to:</div>
                    <div className='para' >• Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf.</div>
                    <div className='para my-4' >You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.</div>
                    <div className='para my-4' >If users disable cookies in their browser:</div>
                    <div className='para my-4' >If you turn cookies off, Some of the features that make your site experience more efficient may not function properly.Some of the features that make your site experience more efficient and may not function properly.</div>
                    <p  className='para heading my-4'>Third-party disclosure</p>
                    <div  className='para my-4'>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.</div>
                    <p  className='para heading my-4'>Third-party links</p>
                    <div  className='para my-4'>We do not include or offer third-party products or services on our website.</div>
                    <p  className='para heading my-4'>Google</p>
                    <div  className='para my-4'>Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users.We use Google AdSense Advertising on our website.</div>
                    <div  className='para my-4'>Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.</div>
                    <div  className='para mt-4'>We have implemented the following:</div>
                    <div  className='para'>• Demographics and Interests Reporting</div>
                    <div  className='para my-4'>We, along with third-party vendors such as Google use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together to compile data regarding user interactions with ad impressions and other ad service functions as they relate to our website.</div>
                    <p  className='para heading'>Opting-out:</p>
                    <div  className='para'>Users can set preferences for how Google advertises to you using the Google Ad Settings page. Alternatively, you can opt out by visiting the Network Advertising Initiative Opt Out page or by using the Google Analytics Opt Out Browser add on.</div>
                    <div className='para mt-4'>We agree to the following:</div>
                    <div className='para'>Users can visit our site anonymously.</div>
                    <div className='para'>Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website.</div>
                    <div className='para'>Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above.</div>
                    <div className='para mt-4'>You will be notified of any Privacy Policy changes:</div>
                    <div className='para'>• On our Privacy Policy Page Can change your personal information:</div>
                    <div className='para'>• By emailing us</div>
                    <div className='para'>• By chatting with us or by sending us a support ticket</div>
                    <p className='para heading mt-4'>How does our site handle Do Not Track signals?</p>
                    <div className='para'>We honor Do Not Track signals and Do Not Track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.</div>
                    <p className='para heading mt-4'>Does our site allow third-party behavioral tracking?</p>
                    <div className='para'>It's also important to note that we do not allow third-party behavioral tracking</div>
                    <div className='para'>In order to be in line with fair information practices we will take the following responsive </div>
                    <div className='para'>action, should a data breach occur:</div>
                    <div className='para'>We will notify you via email</div>
                    <div className='para'>• Within 7 business days</div>
                    <div className='para mt-4'>We also agree that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law. This means not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.</div>
                    <div className='para mt-4'>We collect your email address in order to:</div>
                    <div className='para'>• Send information, respond to inquiries, and/or other requests or questions</div>
                    <div className='para mt-4'>We agree to the following:</div>
                    <div className='para'>• Not use false or misleading subjects or email addresses.</div>
                    <div className='para'>• Identify the message as an advertisement in some reasonable way.</div>
                    <div className='para'>• Include the physical address of our business or site headquarters.</div>
                    <div className='para'>• Monitor third-party email marketing services for compliance, if one is used.</div>
                    <div className='para'>• Honor opt-out/unsubscribe requests quickly.</div>
                    <div className='para'>• Allow users to unsubscribe by using the link at the bottom of each email.</div>
                    <div className='para mt-4'>If at any time you would like to unsubscribe from receiving future emails, you can email us at</div>
                    <div className='para'>• Follow the instructions at the bottom of each email. and we will promptly remove you from ALL correspondence.</div>
                </div>
                <div className='col-1' ></div>
                <div className='col-md-5 col-12' >
                    <p className='h2' style={{fontWeight:"700",color: "#2D2D2D"}} >TERMS AND CONDITIONS</p>
                    <div  className='my-3' style={{ width:"49px",backgroundColor:"#CCCCCC",height:"4px"}} ></div>
                    <p className='para heading mt-4'>Introduction</p>
                    <div className='para'>The Terms & Conditions mentioned here will be applied fully and affect to your use of this Website. By using this website, you agreed to accept all terms and conditions and must not use this website if you disagree with any of these Terms and Conditions.</div>
                    <p className='para heading mt-4'>Intellectual Property Rights</p>
                    <div className='para'>Other than the content you own, under these Terms, Printsmith and/or its licensors own all the intellectual property rights and materials contained in this Website.You are granted limited license only for purposes of viewing the material contained on this Website.</div>
                    <p className='para heading'>Restrictions</p>
                    <div className='para'>You are specifically restricted from all of the following</div>
                    <ul>
                        <li className='para'>Publishing any website material in any other media</li>
                        <li className='para'>Selling, sub-licensing and/or otherwise commercializing any website material</li>
                        <li className='para'>Publicly performing and/or showing any website material</li>
                        <li className='para'>Using this website in any way that impacts user access to this website</li>
                        <li className='para'>Using this website contrary to applicable laws and regulations, or in any way that may cause harm to the website, or to any person or business entity</li>
                        <li className='para'>Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this website</li>
                        <li className='para'>Using this website to engage in any advertising or marketing</li>
                        <li className='para'>Certain areas of this website are restricted from being access by you and Printsmith may further restrict access by you to any areas of this website, at any time, in absolute discretion. Any user ID and password you may have for this website are confidential and you must maintain confidentiality as well.</li>
                    </ul>
                    <p className='para heading m-0'>Your Content</p>
                    <div className='para '>In these Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this website. By displaying your content, you grant Printsmith a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.Your content must be your own and must not be invading any third-party’s rights. Printsmith reserves the right to remove any of your content from this website at any time without notice.</div>
                    <p className='para heading m-0'>No warranties</p>
                    <div className='para'>This Website is provided “as is,” with all faults, and Printsmith expresses no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this website shall be interpreted as advising you.</div>
                    <p className='para heading m-0'>Limitation of liability</p>
                    <div className='para' >In no event shall Printsmith, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. Printsmith, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this website.</div>
                    <p className='para heading m-0'>Indemnification</p>
                    <div className='para' >You hereby indemnify to the fullest extent Printsmith from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.</div>
                    <p className='para heading m-0'>Severability</p>
                    <div className='para' >If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.</div>
                    <p>Variation of Terms</p>
                    <div className='para' >Printsmith is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.</div>
                    <p className='para heading m-0'>Assignment</p>
                    <div className='para' >Printsmith is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.</div>
                    <p className='para heading m-0'>Entire Agreement</p>
                    <div className='para' >These Terms constitute the entire agreement between Printsmith and you in relation to your use of this website, and supersede all prior agreements and understandings.</div>
                    <p className='para heading m-0'>Governing Law & Jurisdiction</p>
                    <div className='para' >These Terms will be governed by and interpreted in accordance with the laws of the State of Haryana, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Haryana for the resolution of any disputes.</div>


                </div>

            </div>


          </div>
    </div>
  )
}












