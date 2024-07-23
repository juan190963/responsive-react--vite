import './App.css'
import logo from "../src/img/default-logo.png"
import check from "../src/img/check.png"
import imgUX from "../src/img/vvv.jpg"
import phone from "../src/img/phone-2-min.png"
function App() {

  return (
    <>
      <header className='header flex p-2-1-1-1 ml-17p '>
        <a href="home"><img src={logo} className='logo w-14' alt='' /></a>

        <svg className="menu w-6 fill-blue-800	 hover:fill-orange-500	ml-70p cursor-pointer	" version="1.1" id="menu-hamburger" viewBox="0 0 16 16" x="0px" y="0px">
          <g>
            <rect y="1" width="16" height="2"></rect>
            <rect y="7" width="16" height="2"></rect>
            <rect y="13" width="16" height="2"></rect>
          </g>
        </svg>

        {/* <nav className="menu-navegacion  ">
          <ul>
            <li className='menu_item'>
              <div className='menu_button'>
                <a href="#Contactos" className='menu_link'>Home</a>
              </div>
              
              </li>
          </ul>
        </nav> */}
      </header>


      <section className='section__MobileApp'>
        <div className='MobileApp__Container '>
          <div className='MobileApp__Content flex flex-row items-end bg-center bg-cover pt-96 pb-28'>
            <div className='MobileApp__Text pl-40'>
              <h1 className='MobileApp__Title text-8xl font-extrabold	w-2/3 text-white	'>Mobile App Development</h1>
              <p className='MobileApp__Parrafo text-white font-extrabold	'>Image from <a href="https://www.freepik.com/photos/business" className='MobileApp__Parrafo'>Freepik</a></p>
            </div>
            <div className='MobileApp__List--Container'>
              <div className='MobileApp__List--Content grid pr-44  gap-6 relative justify-center'>
                <div className='MobileApp_List-- fill-blue-800 bg-white	w-60 h-48 flex items-center justify-center flex-col rounded-xl'>
                  <span className='icon--estrategia w-20  rounded-full bg-gray-200	 p-5 '>
                    <svg className="icon--estrategia " viewBox="0 0 512 512" x="0px" y="0px" id="svg-d293">
                      <g>
                        <g>
                          <path d="M386.607,304.394L367.213,285l19.393-19.393c5.859-5.858,5.859-15.356,0-21.214c-5.857-5.858-15.355-5.858-21.213,0L346,263.787l-19.394-19.394c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213L324.787,285l-19.393,19.393c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0L346,306.213l19.394,19.394c5.857,5.857,15.355,5.858,21.213,0C392.465,319.749,392.465,310.252,386.607,304.394z" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M206.607,184.394L187.213,165l19.393-19.393c5.858-5.858,5.858-15.355,0-21.213c-5.857-5.858-15.355-5.858-21.213,0L166,143.787l-19.394-19.394c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213L144.787,165l-19.393,19.393c-5.859,5.858-5.859,15.356,0,21.214c5.857,5.857,15.355,5.858,21.213,0L166,186.213l19.394,19.394c5.857,5.857,15.355,5.858,21.213,0C212.465,199.749,212.465,190.252,206.607,184.394z" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M416.606,124.394l-30-30c-0.029-0.029-0.06-0.052-0.089-0.081c-5.916-5.822-15.373-5.668-21.124,0.081l-30,30c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.858,15.355,5.858,21.213,0l4.394-4.394V180H256c-8.284,0-15,6.716-15,15v75h-32.58c-6.192-17.459-22.865-30-42.42-30c-24.813,0-45,20.187-45,45s20.187,45,45,45c19.555,0,36.228-12.541,42.42-30H256c8.284,0,15-6.716,15-15v-75h105c8.284,0,15-6.716,15-15v-53.787l4.394,4.394C398.322,148.535,402.161,150,406,150s7.678-1.465,10.606-4.393C422.464,139.749,422.464,130.252,416.606,124.394z M166,300c-8.271,0-15-6.729-15-15s6.729-15,15-15s15,6.729,15,15S174.271,300,166,300z" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M467,0H45C20.187,0,0,20.187,0,45c0,19.555,12.541,36.228,30,42.42V345c0,24.813,20.187,45,45,45h166v34.58c-17.459,6.192-30,22.865-30,42.42c0,24.813,20.187,45,45,45s45-20.187,45-45c0-19.555-12.541-36.228-30-42.42V390h166c24.813,0,45-20.187,45-45V87.42c17.459-6.192,30-22.865,30-42.42C512,20.187,491.813,0,467,0z M256,482c-8.271,0-15-6.729-15-15s6.729-15,15-15s15,6.729,15,15S264.271,482,256,482z M452,345c0,8.271-6.729,15-15,15H75c-8.271,0-15-6.729-15-15V90h392V345z M467,60H45c-8.271,0-15-6.729-15-15s6.729-15,15-15h422c8.271,0,15,6.729,15,15S475.271,60,467,60z" />
                        </g>
                      </g>
                    </svg>
                  </span>
                  <h4 className='MobileApp_List--Title text-xl	font-normal	pt-3'>STRATEGY</h4>
                </div>
                <div className='MobileApp_List-- fill-blue-800 bg-white	w-60 h-48 flex items-center justify-center flex-col rounded-xl'>
                  <span className="icon--diseño w-20  rounded-full bg-gray-200	p-5 ">
                    <svg className="icon--diseño  " viewBox="0 0 512 512" x="0px" y="0px" id="svg-ddc0"
                    >
                      <g>
                        <g>
                          <path d="M497,0h-60c-8.284,0-15,6.716-15,15v15H298.42C292.228,12.542,275.555,0,256,0s-36.228,12.542-42.42,30H90V15c0-8.284-6.716-15-15-15H15C6.716,0,0,6.716,0,15v60c0,8.284,6.716,15,15,15h60c8.284,0,15-6.716,15-15V59.8h62.377c-54.116,34.274-87.012,92.175-90.969,153.642C43.738,219.518,31,236.294,31,256c0,24.813,20.187,45,45,45s45-20.187,45-45c0-19.38-12.315-35.938-29.53-42.26c5.326-70.647,56.198-131.494,124.226-148.758C223.07,79.794,238.361,90,256,90c17.639,0,32.93-10.206,40.304-25.017c68.029,17.264,118.9,78.111,124.226,148.758C403.315,220.062,391,236.62,391,256c0,24.813,20.187,45,45,45s45-20.187,45-45c0-19.706-12.738-36.482-30.408-42.558C446.627,151.852,413.633,94.207,359.623,60H422v15c0,8.284,6.716,15,15,15h60c8.284,0,15-6.716,15-15V15C512,6.716,505.284,0,497,0z M60,60H30V30h30V60z M76,271c-8.271,0-15-6.729-15-15s6.729-15,15-15s15,6.729,15,15S84.271,271,76,271z M256,60c-8.271,0-15-6.729-15-15s6.729-15,15-15s15,6.729,15,15S264.271,60,256,60z M436,241c8.271,0,15,6.729,15,15s-6.729,15-15,15s-15-6.729-15-15S427.729,241,436,241z M482,60h-30V30h30V60z" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M388.48,307.679l-120-179.999c-0.004-0.006-0.009-0.012-0.013-0.019c-0.043-0.064-0.09-0.125-0.134-0.188c-0.206-0.299-0.423-0.587-0.649-0.868c-6.321-7.854-18.357-7.324-24.017,0.868c-0.044,0.063-0.091,0.124-0.134,0.188c-0.004,0.007-0.009,0.012-0.013,0.019l-120,180c-3.967,5.949-3.182,13.871,1.874,18.927c29.927,29.927,48.975,69.047,54.164,110.901c-2.329,1.883-4.578,3.899-6.71,6.081C158.759,458.001,151,476.97,151,497c0,8.284,6.716,15,15,15h180c8.284,0,15-6.716,15-15c0-20.03-7.759-38.999-21.847-53.412c-2.133-2.182-4.381-4.198-6.711-6.081c5.188-41.856,24.236-80.976,54.163-110.9C391.662,321.551,392.447,313.628,388.48,307.679z M256,301c8.271,0,15,6.729,15,15s-6.729,15-15,15s-15-6.729-15-15S247.729,301,256,301z M183.558,482c6.241-17.833,23.159-31,42.442-31h60c19.283,0,36.201,13.167,42.442,31H183.558z M304.245,423.283C298.345,421.777,292.229,421,286,421h-60c-6.229,0-12.345,0.777-18.245,2.284c-7.02-40.429-25.251-78.221-52.65-108.899L241,185.542v88.039c-17.459,6.192-30,22.865-30,42.42c0,24.813,20.187,45,45,45s45-20.187,45-45c0-19.555-12.541-36.228-30-42.42v-88.039l85.896,128.843C329.496,345.06,311.264,382.853,304.245,423.283z" />
                        </g>
                      </g>
                    </svg>
                  </span>
                  <h4 className='MobileApp_List--Title'>UX DESIGN</h4>
                </div>

                <div className='MobileApp_List-- fill-blue-800 bg-white	w-60 h-48 flex items-center justify-center flex-col rounded-xl'>
                  <span className="icon--desarrollo  w-20 	rounded-full bg-gray-200	 p-5">
                    <svg className="icon--desarrollo" viewBox="0 0 512 512" x="0px" y="0px" id="svg-ce99">
                      <g>
                        <g>
                          <path d="M0,15.845v420.259h164.332v30.049h-30.036v30.001h243.407v-30.001h-30.036v-30.049H512V15.845H0z M317.665,466.153 H194.334v-30.049h123.332V466.153z M481.999,406.103H30.001v-60.075h451.997V406.103z M481.999,316.027H30.001V45.847h451.997 V316.027z" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <polygon points="203.943,126.712 182.729,105.498 107.29,180.937 182.729,256.375 203.943,235.161 149.718,180.937 " />
                        </g>
                      </g>
                      <g>
                        <g>
                          <polygon points="329.271,105.498 308.057,126.712 362.282,180.937 308.057,235.161 329.271,256.375 404.709,180.937 " />
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect x="166.742" y="165.947" transform="matrix(0.1951 -0.9808 0.9808 0.1951 28.5815 396.7237)" width="178.511" height="30.002" />
                        </g>
                      </g>
                    </svg>
                  </span>
                  <h4 className='MobileApp_List--Title pt-3'>DEVELOPMENT</h4>
                </div>

                <div className='MobileApp_List-- fill-blue-800 bg-white	w-60 h-48 flex items-center justify-center flex-col rounded-xl'>
                  <span className="icon--pruebas  w-20 rounded-full bg-gray-200	 p-5">
                    <svg className="icon--pruebas" viewBox="0 0 24 24" id="svg-4417">
                      <path d="m22.25 20h-20.5c-.965 0-1.75-.785-1.75-1.75v-12.5c0-.965.785-1.75 1.75-1.75h1.68c.414 0 .75.336.75.75s-.336.75-.75.75h-1.68c-.136 0-.25.114-.25.25v12.5c0 .136.114.25.25.25h20.5c.136 0 .25-.114.25-.25v-12.5c0-.136-.114-.25-.25-.25h-1.68c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.68c.965 0 1.75.785 1.75 1.75v12.5c0 .965-.785 1.75-1.75 1.75z"></path>
                      <path d="m16.25 24h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5c.414 0 .75.336.75.75s-.336.75-.75.75z"></path>
                      <path d="m12 24c-.414 0-.75-.336-.75-.75v-4c0-.414.336-.75.75-.75s.75.336.75.75v4c0 .414-.336.75-.75.75z"></path>
                      <path d="m14 4.5h-4c-.414 0-.75-.336-.75-.75 0-1.517 1.233-2.75 2.75-2.75s2.75 1.233 2.75 2.75c0 .414-.336.75-.75.75zm-3-1.5h2c-.229-.304-.591-.5-1-.5s-.771.196-1 .5z"></path>
                      <path d="m13.601 3.3c-.069 0-.139-.01-.208-.029-.398-.115-.628-.53-.513-.929.397-1.379 1.68-2.342 3.12-2.342.414 0 .75.336.75.75s-.336.75-.75.75c-.775 0-1.466.518-1.679 1.258-.095.328-.395.542-.72.542z"></path>
                      <path d="m10.399 3.3c-.326 0-.625-.214-.72-.542-.213-.74-.904-1.258-1.679-1.258-.414 0-.75-.336-.75-.75s.336-.75.75-.75c1.44 0 2.723.963 3.121 2.342.115.398-.115.813-.513.929-.07.019-.14.029-.209.029z"></path>
                      <path d="m14.75 7c-.336 0-.642-.228-.727-.568-.101-.401.144-.809.545-.909l1.666-.416.846-1.691c.186-.371.636-.521 1.006-.336.371.186.521.636.335 1.006l-1 2c-.098.196-.276.34-.489.393l-2 .5c-.061.014-.122.021-.182.021z"></path>
                      <path d="m17.75 12c-.275 0-.54-.151-.671-.415l-.886-1.771-1.771-.858c-.373-.181-.528-.629-.348-1.002s.629-.527 1.002-.348l2 .97c.149.072.27.191.344.34l1 2c.185.37.035.82-.335 1.006-.107.053-.222.078-.335.078z"></path>
                      <path d="m9.25 7c-.06 0-.121-.007-.182-.022l-2-.5c-.213-.053-.391-.197-.489-.393l-1-2c-.185-.37-.035-.82.335-1.006.372-.185.821-.035 1.006.336l.846 1.691 1.666.416c.402.101.646.508.545.909-.084.341-.391.569-.727.569z"></path>
                      <path d="m6.25 12c-.113 0-.227-.025-.335-.079-.371-.186-.521-.636-.335-1.006l1-2c.074-.148.195-.268.344-.34l2-.97c.372-.178.821-.025 1.001.348.181.373.025.821-.348 1.002l-1.77.858-.886 1.771c-.131.265-.397.416-.671.416z"></path>
                      <path d="m12 13c-1.93 0-3.5-1.57-3.5-3.5v-5.75c0-.414.336-.75.75-.75h5.5c.414 0 .75.336.75.75v5.75c0 1.93-1.57 3.5-3.5 3.5zm-2-8.5v5c0 1.103.897 2 2 2s2-.897 2-2v-5z"></path>
                      <path d="m12 13c-.414 0-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75s.75.336.75.75v8.5c0 .414-.336.75-.75.75z"></path>
                    </svg>
                  </span>

                  <h4 className='MobileApp_List--Title pt-3'>TESTING</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section__Designs bg-gray-200'>
        <div className='Designs__Container'>
          <div className='Desing__Content'>
            <div className='Desing__Text'>
              <h2 className='Desing__Title text-6xl	font-normal	text-center pt-28	leading-3'>We create super-awesome designs</h2>
              <p className='Desing__Parrafo text-lg	font-semibold	leading-7 text-center ml-96 pr-3 pt-16 w-2/4	'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
            <div className='Desing__List--Container grid  gap-5 '>
              <div className='Desing__List flex bg-white rounded-2xl p-6 pl-10'>
                <span ><img src={check} alt="" className='Desing__img rounded-full bg-blue-800 p-3 w-24' /></span>
                <div className='Desing_containers'>
                  <h5 className='Desing__Sub--Title pl-5 text-xl	font-normal	'>Amazing Design</h5>
                  <p className='Desing__Parrafo pl-5 text-lg	font-normal pt-10 pb-5'>Sample text. Click to select the text box. Click again or double click
                    to start editing the text.</p>
                </div>
              </div>

              <div className='Desing__List flex bg-white rounded-2xl p-6 pl-10'>
                <span><img src={check} alt="" className='Desing__img rounded-full bg-blue-800 p-3 w-24' /></span>
                <div className='Desing_containers'>
                  <h5 className='Desing__Sub--Title pl-5 text-xl	font-normal'>Copywriting</h5>
                  <p className='Desing__Parrafo pl-5 text-lg	font-normal pt-10 pb-5'>Sample text. Click to select the text box. Click again or double click
                    to start editing the text.</p>
                </div>
              </div>

              <div className='Desing__List flex bg-white rounded-2xl p-6 pl-10'>
                <span><img src={check} alt="" className='Desing__img rounded-full bg-blue-800 p-3 w-24' /></span>
                <div className='Desing_containers'>
                  <h5 className='Desing__Sub--Title pl-5 text-xl	font-normal'>Development</h5>
                  <p className='Desing__Parrafo pl-5 text-lg	font-normal pt-10 pb-5'>Sample text. Click to select the text box. Click again or double click
                    to start editing the text.</p>
                </div>
              </div>

              <div className='Desing__List flex bg-white rounded-2xl p-6 pl-10'>
                <span><img src={check} alt="" className='Desing__img rounded-full bg-blue-800 p-3 w-24' /></span>
                <div className='Desing_containers'>
                  <h5 className='Desing__Sub--Title pl-5 text-xl	font-normal'>24/7 Support</h5>
                  <p className='Desing__Parrafo pl-5 text-lg	font-normal pt-10 pb-5'>Sample text. Click to select the text box. Click again or double click
                    to start editing the text.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section__UX'>
        <div className='UX__Container'>
          <div className='UX__Containers relative'>
            <div className='UX_Text w-7/12	 ml-48 mt-16 bg-blue-800 rounded-2xl p-5 text-white	pt-14 pl-24 pb-25'>
              <h3 className='UX__Title text-4xl	pt-12 font-normal	 w-7/12 leading-10'> Why choose UX studio as your
                app design partner?</h3>
              <p className='UX__Parrafo pt-8 text-lg	w-7/12'>Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu
                fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia
                deserunt.
                <br /><br />
                Image from <a href="https://www.freepik.com/photos/woman" className='UX__Parrafo hover:no-underline	'>Freepik</a>
              </p>
              <a href="home" className='UX__Button bg-transparent border-2 rounded-3xl	text-center tracking-wider	font-semibold	text-base	uppercase inline-block mt-10 hover:bg-white hover:text-black'>learn more</a>
            </div>
            <div className='UX__Img'>
              <img src={imgUX} alt="" className='UX__Img block object-cover bg-no-repeat	w-3/5 h-600p rounded-3xl	 ' />
            </div>
          </div>
        </div>
      </section>

      <section className='section__Build'>
        <div className='Build__Container flex ml-36 mt-52 mb-52'>
          <div className='Build__Circle relative pr-7'>
            <div className='circle absolute top-14 w-327w h-327h -z-1 bg-blue-800 rounded-full'></div>
          </div>
          <img src={phone} alt="" className='Build__phone h-auto w-72 object-cover' />
          <div className='Build__Text'>
            <h5 className='Build__sub--Title'>ABOUT US</h5>
            <h2 className='Build__Title'> Build your dream website today</h2>
            <p className='Build__Parrafo'>Article evident arrived express highest men did boy. Mistress sensible entirely
              am so.  Quick can manor smart money hopes worth too. Comfort produce husband boy her had
              hearing. Law
              others theirs passed but wishes. You day real less till dear read.
            </p>
            <ul className='Build__Ul'>
              <li className='Build__Li'>
                <div className='Build__Icon'>
                  <div xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve"
                    className="Build-svg" > ►</div>
                </div>
                Support via E-mail and Phone
              </li>

              <li>
                <div className='Build__Icon'>
                  <div xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve"
                  className="Build-svg" > ►</div>
                </div>
                Multi-Language Support
              </li>
            </ul>
            <a href="home" className='Build__Button'>Read more</a>
            <p className='Build__Sub--Parrafo'>Image from<a href="https://www.freepik.com/psd/mockup" className='Build__Sub--Parrafo'>Freepik</a></p>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
