import './App.css'
import logo from "../src/img/default-logo.png"
import check from "../src/img/check.png"
import imgUX from "../src/img/vvv.jpg"
import phone from "../src/img/phone-2-min.png"
import edificio from "../src/img/ret-min.jpg"
import mujer from "../src/img/fdffffff-min.jpg"
import comillas from "../src/img/descarga.png"
import teams from "../src/img/photo-1.jpg"

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
      </header>

      {/* sm:bg-green-500 md:bg-blue-500 lg:bg-yellow-500 xl:bg-purple-500 2xl:bg-pink-500  */}
      
      <section className='section__MobileApp '>
        <div className='MobileApp__Container '>
          <div className='MobileApp__Content flex  items-end bg-center bg-cover pt-96 pb-28  	'>
            <div className='MobileApp__Text'>
              <h1 className='MobileApp__Title text-white'>Mobile App Development</h1>
              <p className='MobileApp__Parrafo text-white font-medium	pt-6  '>Image from <a href="https://www.freepik.com/photos/business" className='MobileApp__Parrafo underline hover:text-zinc-200 hover:no-underline'>Freepik</a></p>
            </div>
            <div className='MobileApp__List--Container'>
              <div className='MobileApp__List--Content grid pr-44  gap-6 relative justify-center lg:pl-9 '>
                <div className='MobileApp_List-- fill-blue-800 bg-white	w-60 h-48 flex items-center justify-center flex-col rounded-xl'>
                  <span className='icon--estrategia w-20  rounded-full bg-gray-200 p-5 '>
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

      <section className='section__Designs bg-gray-100  '>
        <div className='Designs__Container'>
            <div className='Desing__Text'>
              <h2 className='Desing__Title text-6xl	font-normal	text-center pt-28	'>We create super-awesome designs</h2>
              <p className='Desing__Parrafo--title text-lg	font-semibold	leading-7 text-center pt-16  '>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
            <div className='Desing__List--Container grid  gap-5 '>
              <div className='container__Desing flex bg-white rounded-2xl p-6 '>
                <span className='Desing__img'><img src={check} alt="" className='Desing__img rounded-full bg-blue-800 p-3 w-24 ' /></span>
                <div className='Desing_containers'>
                  <h5 className='Desing__Sub--Title pl-5 text-xl	font-normal	'>Amazing Design</h5>
                  <p className='Desing__Parrafo pl-5 text-lg	font-normal pt-10 pb-5'>Sample text. Click to select the text box. Click again or double click
                    to start editing the text.</p>
                </div>
              </div>

              <div className='container__Desing  flex bg-white rounded-2xl p-6 '>
                <span className='Desing__img '><img src={check} alt="" className='Desing__img rounded-full bg-blue-800 p-3 w-24' /></span>
                <div className='Desing_containers'>
                  <h5 className='Desing__Sub--Title pl-5 text-xl	font-normal'>Copywriting</h5>
                  <p className='Desing__Parrafo pl-5 text-lg	font-normal pt-10 pb-5'>Sample text. Click to select the text box. Click again or double click
                    to start editing the text.</p>
                </div>
              </div>

              <div className='container__Desing  flex bg-white rounded-2xl p-6 '>
                <span className='Desing__img '><img src={check} alt="" className='svg rounded-full bg-blue-800 p-3 w-24' /></span>
                <div className='Desing_containers'>
                  <h5 className='Desing__Sub--Title pl-5 text-xl	font-normal'>Development</h5>
                  <p className='Desing__Parrafo pl-5 text-lg	font-normal pt-10 pb-5'>Sample text. Click to select the text box. Click again or double click
                    to start editing the text.</p>
                </div>
              </div>

              <div className='container__Desing  flex bg-white rounded-2xl p-6 '>
                <span className='Desing__img '><img src={check} alt="" className='Desing__img rounded-full bg-blue-800 p-3 w-24' /></span>
                <div className='Desing_containers'>
                  <h5 className='Desing__Sub--Title pl-5 text-xl	font-normal'>24/7 Support</h5>
                  <p className='Desing__Parrafo pl-5 text-lg	font-normal pt-10 pb-5'>Sample text. Click to select the text box. Click again or double click
                    to start editing the text.</p>
                </div>
              </div>
            </div>
        </div>
      </section>

      <section className='section__UX'>
        <div className='UX__Container'>
          <div className='UX__Containers relative'>
          {/* w-7/12  ml-48*/}
            <div className='UX_Text 	  mt-16 bg-blue-800 rounded-2xl p-5 text-white	pt-14  pb-25 '>
              <h3 className='UX__Title text-4xl	pt-12 font-normal	  leading-10'> Why choose UX studio as your
                app design partner?</h3>
              <p className='UX__Parrafo pt-8 text-lg	'>Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu
                fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia
                deserunt.
                <br /><br />
                Image from <a href="https://www.freepik.com/photos/woman" className='UX__Parrafo underline hover:text-zinc-200 hover:no-underline'>Freepik</a>
              </p>
              <a href="home" className='UX__Button bg-transparent border-2 rounded-3xl	text-center tracking-wider	font-semibold	text-base	uppercase inline-block mt-10 hover:bg-white hover:text-black'>learn more</a>
            </div>
            <div className='UX__Img'>
            {/* w-3/5 */}
              <img src={imgUX} alt="" className='UX__Img block object-cover bg-no-repeat	  rounded-3xl	 ' />
            </div>
          </div>
        </div>
      </section>

      <section className='section__Build '>
        <div className='Build__Container flex  mt-52 mb-28 justify-items-center	'>
        {/* pr-7 */}
          
            <div className='circle absolute mt-28  -z-1 bg-blue-800 rounded-full'></div>
          <img src={phone} alt="" className='Build__phone   object-cover' />
          {/* pl-24 */}
          <div className='Build__Text '>
            <h5 className='Build__sub--Title uppercase tracking-widest font-normal	text-xl	leading-normal mt-5 mb-5'>ABOUT US</h5>
            {/* w-6/12 */}
            <h2 className='Build__Title text-6xl leading-none font-normal mt-5 mb-5 '> Build your dream website today</h2>
            {/* w-9/10 */}
            <p className='Build__Parrafo font-normal  leading-loose '>Article evident arrived express highest men did boy. Mistress sensible entirely
              am so.  Quick can manor smart money hopes worth too. Comfort produce husband boy her had
              hearing. Law
              others theirs passed but wishes. You day real less till dear read.
            </p>
            <ul className='Build__Ul text-xl font-extralight leading-loose	list-none	m-23 '>
              <li className='Build__Li '>
                <div className='Build__Icon inline-block text-orange-500	tracking-widest	'>
                  <div xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve"
                    className="Build-svg" > ►</div>
                </div>
                Support via E-mail and Phone
              </li>

              <li>
                <div className='Build__Icon inline-block text-orange-500	tracking-widest	'>
                  <div xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlSpace="preserve"
                    className="Build-svg" > ►</div>
                </div>
                Multi-Language Support
              </li>
            </ul>
            <a href="home" className='Build__Button inline-block p-11-5 uppercase mt-5 text-white bg-blue-700 border-none rounded-3xl tracking-widest hover:bg-black'>Read more</a>
            <p className='Build__Sub--Parrafo font-normal text-base	pt-4'>Image from <a href="https://www.freepik.com/psd/mockup" className='Build__Sub--Parrafo underline'>Freepik</a></p>
          </div>
        </div>
      </section>

      <section className='section__Started bg-gray-100'>
      {/* pl-40 pr-40 pt-14 pb-12k */}
        <div className='Started__Container grid '>
          {/* p-21 */}
          <div className='Started__Content flex bg-white '>
            {/* w-24 h-21 mt-16 p-5*/}
            <span className='Started__Svg  fill-white rounded-full bg-blue-800 '>
              <svg className='Started__Svg--icon' viewBox="0 0 60 60" x="0px" y="0px" id="svg-97b5" style={{ enableBackground: 'new 0 0 60 60' }}
              >
                <g>
                  <path d="M42.595,0H17.405C14.977,0,13,1.977,13,4.405v51.189C13,58.023,14.977,60,17.405,60h25.189C45.023,60,47,58.023,47,55.595 V4.405C47,1.977,45.023,0,42.595,0z M15,8h30v38H15V8z M17.405,2h25.189C43.921,2,45,3.079,45,4.405V6H15V4.405 C15,3.079,16.079,2,17.405,2z M42.595,58H17.405C16.079,58,15,56.921,15,55.595V48h30v7.595C45,56.921,43.921,58,42.595,58z"></path>
                  <path d="M30,49c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S32.206,49,30,49z M30,55c-1.103,0-2-0.897-2-2s0.897-2,2-2 s2,0.897,2,2S31.103,55,30,55z"></path>
                  <path d="M26,5h4c0.553,0,1-0.447,1-1s-0.447-1-1-1h-4c-0.553,0-1,0.447-1,1S25.447,5,26,5z"></path>
                  <path d="M33,5h1c0.553,0,1-0.447,1-1s-0.447-1-1-1h-1c-0.553,0-1,0.447-1,1S32.447,5,33,5z"></path>
                  <path d="M56.612,4.569c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414c3.736,3.736,3.736,9.815,0,13.552 c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293 C61.128,16.434,61.128,9.085,56.612,4.569z"></path>
                  <path d="M52.401,6.845c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414c1.237,1.237,1.918,2.885,1.918,4.639 s-0.681,3.401-1.918,4.638c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293 c1.615-1.614,2.504-3.764,2.504-6.052S54.017,8.459,52.401,6.845z"></path>
                  <path d="M4.802,5.983c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0c-4.516,4.516-4.516,11.864,0,16.38 c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414 C1.065,15.799,1.065,9.72,4.802,5.983z"></path>
                  <path d="M9.013,6.569c-0.391-0.391-1.023-0.391-1.414,0c-1.615,1.614-2.504,3.764-2.504,6.052s0.889,4.438,2.504,6.053 c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414 c-1.237-1.237-1.918-2.885-1.918-4.639S7.775,9.22,9.013,7.983C9.403,7.593,9.403,6.96,9.013,6.569z"></path>
                </g>
              </svg>
            </span>
            <div className='Started__Text--Container flex items-center'>
              <div className='Started__Text inline-block'>
                <h2 className='Started__Title  pt-3 text-6xl	font-normal leading-loose	'>Let's Get Started</h2>
                <h6 className='Started__Sub--title   text-2xl font-normal 	'>Have a project or partnership in mind?
                  Contact us today for a free consultation.</h6>
              </div>
              <a className='Started__Button font-semibold text-lg	rounded-3xl bg-blue-800 text-white  h-12 p-10-30 hover:bg-blue-400' href="home">Contact us</a>
            </div>
          </div>
        </div>
      </section>

      <section className='section__About'>
        <div className='About__Container '>
          <div className='About__Content relative'>
            <img src={edificio} alt="" className='About__img--edificio absolute  rounded-xl    object-cover ' />
            <div>
              <svg className="About__Svg absolute w-56 fill-blue-800   " viewBox="0 0 160 160" x="0px" y="0px" id="svg-db78">
                <path d="M114.3,152.3l38-38C144.4,130.9,130.9,144.4,114.3,152.3z M117.1,9.1l-108,108c0.8,1.6,1.7,3.2,2.7,4.8l110-110 C120.3,10.9,118.7,10,117.1,9.1z M97.5,2L2,97.5c0.4,2,1,4,1.5,5.9l99.9-99.9C101.5,2.9,99.5,2.4,97.5,2z M80,160c2,0,4-0.1,5.9-0.2 l73.9-73.9c0.1-2,0.2-3.9,0.2-5.9c0-0.6,0-1.2,0-1.9L78.1,160C78.8,160,79.4,160,80,160z M34.9,146.1c1.5,1,3,2,4.6,2.9L149,39.5 c-0.9-1.6-1.9-3.1-2.9-4.6L34.9,146.1z M132.7,19.8L19.8,132.7c1.2,1.3,2.3,2.6,3.6,3.9L136.6,23.4C135.3,22.2,134,21,132.7,19.8z M59.6,157.4l97.8-97.8c-0.5-1.9-1.1-3.8-1.7-5.7L53.9,155.6C55.8,156.3,57.7,156.9,59.6,157.4z M7.6,45.9L45.9,7.6 C29.1,15.5,15.5,29.1,7.6,45.9z M80,0c-2.6,0-5.1,0.1-7.6,0.4l-72,72C0.1,74.9,0,77.4,0,80c0,0.1,0,0.2,0,0.2L80.2,0 C80.2,0,80.1,0,80,0z"></path>
              </svg>
              <img src={mujer} alt="" className='About__img--mujer absolute 	rounded-xl  object-cover	' />
              <div className='About__Circle absolute bg-blue-800 w-56 h-56 rounded-full  mt-20  -z-1'></div>
              <div>
                <div className='About__Text absolute bg-none bg-gray-100 rounded-xl    mt-40	 pt-16   -z-1'>
                  <h3 className='About__Title text-5xl	font-normal pt-11 '>About Us</h3>
                  <p className='About__parrafo text-lg	font-normal leading-relaxed	mt-5  '>Elit ut aliquam purus sit amet luctus venenatis. Ridiculus mus mauris vitae ultricies leo
                    integer malesuada. Massa enim nec dui nunc mattis enim. Sagittis vitae et leo duis ut. Lacus
                    suspendisse faucibus interdum.
                  </p>
                  <p className='About__pie--pagina text-base	font-normal mt-5'>images from <a href="https://www.freepik.com/photos/business" className='underline'>Freepik</a></p>
                </div>
                <a href="home" className='About__Button absolute bg-blue-800 text-white rounded-3xl w-44 h-auto tracking-widest	uppercase font-medium text-sm	   p-15-60-14 hover:bg-black'>learn more</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section__Help  bg-gray-100 '>
        <div className='Help__Container'>
          <div className='Help__Text text-center	pt-20'>
            <h2 className='Help__Title text-6xl font-normal	'>How We Help People</h2>
            <p className='Help__Parrafo text-xl	 font-semibold	pt-5 	leading-relaxed	'>With serious savings, a seamless online application, and unique
              community benefits, our members have a lot to say about our loans!
            </p>
          </div>

          <div className='Help__Containers grid gap-12 p-8 mt-6 '>
            <div className='Help__Container1 bg-blue-800 rounded-3xl p-5 pb-8'>
              <span className='Help__Icon'><img src={comillas} alt="" className='object-contain	w-12 ' /></span>
              <p className='Help__Parrafo1 text-base	font-normal text-white leading-relaxed pt-10 '>
                Article evident arrived express highest men did boy. Mistress
                sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce
                husband boy her had hearing.
              </p>
            </div>

            <div className='Help__Container2  bg-blue-800 rounded-3xl p-5'>
              <span><img src={comillas} alt="" className='object-contain	w-12 ' /></span>
              <p className='Help__Parrafo1 text-base	font-normal text-white leading-relaxed pt-10 '>
                Article evident arrived express highest men did boy. Mistress
                sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce
                husband boy her had hearing.
              </p>
            </div>

            <div className='Help__Container3  bg-blue-800 rounded-3xl p-5 '>
              <span><img src={comillas} alt="" className='object-contain	w-12 ' /></span>
              <p className='Help__Parrafo1 text-base	font-normal text-white leading-relaxed pt-10 '>
                Article evident arrived express highest men did boy. Mistress
                sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce
                husband boy her had hearing.
              </p>
            </div>
          </div>

          <div className='Help__Containers--Personas flex '>
            <div className='Help__Persona1 absolute w-16 h-16 bg-cover	bg-center	bg-no-repeat	rounded-full 	'>
              <h6 className='Help__Text--personas text-lg	font-normal bg-none	whitespace-nowrap	ml-20 mt-3 '>May Smith</h6>
            </div>

            <div className='Help__Persona2 absolute w-16 h-16 bg-cover	bg-center	bg-no-repeat	rounded-full ' >
              <h6 className='Help__Text--personas text-lg	font-normal bg-none	whitespace-nowrap	ml-20 mt-3 '>Bob Perry</h6>
            </div>

            <div className='Help__Persona3 absolute w-16 h-16 bg-cover	bg-center	bg-no-repeat	rounded-full '>
              <h6 className='Help__Text--personas text-lg	font-normal bg-none	whitespace-nowrap	ml-20 mt-3 '>Marry Hudson</h6>
            </div>
          </div>
          <p className='Help__Pie--Pagina text-gray-500 text-base	font-normal text-center '>Image from <a href="https://freepik.com/photos/p" className='underline hover:no-underline'>Freepik</a></p>
        </div>
      </section>

      <section className='section__Teams bg-gray-100 pb-20'>
        <div className='Teams__Container relative pt-40 h-700'>
          <div className='Teams__Content'>
            <div>
              <div className='Teams__Cuadro absolute bg-none	bg-blue-800 rounded-xl   ml-58 mt-28'></div>
              <img src={teams} alt="" className='Teams__Img absolute 	 	rounded-3xl object-cover	' />
              <div className='Teams__Text absolute bg-none	bg-white rounded-2xl   pt-3 pl-10'>
                <h3 className='Teams__Title text-6xl	font-normal pt-12'>Effective Teams</h3>
                <p className='Teams__Parrafo text-base	font-normal leading-relaxed	mt-5	 '>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
                <p className='Teams__Pie--pagina text-base	font-normal	mt-5'>images from <a href="https://www.freepik.com/photos/business"></a>Freepik</p>
                <a href="home" className='Teams__Button absolute mt-6 bg-blue-800 text-white rounded-3xl w-44 h-12 uppercase font-semibold text-sm	pt-4 pl-10 hover:bg-black '>learn more</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section__Contact bg-none	bg-blue-800 pb-36'>
        <div className='Contact__Container'>
          <div className='Contact__Content'>
            <div className='Contact__Content--invisible absolute bg-gray-100 w-full h-60'></div>
            <div className='Contact__Container--list relative'>
              <div className='Contact__Lists flex  justify-center'>
                <div className='Contact__Office bg-white rounded-xl pt-7 mt-28'>
                  <div className='Contact__Info flex items-center  flex-col'>
                    <span className="Contact__SVG ">
                      <svg className="Contact__SVG w-16 text-blue-800 " viewBox="0 0 52 52" x="0px" y="0px" id="svg-077e">
                        <path
                          style={{ fill: 'currentColor' }}
                          d="M38.853,5.324L38.853,5.324c-7.098-7.098-18.607-7.098-25.706,0h0
                          C6.751,11.72,6.031,23.763,11.459,31L26,52l14.541-21C45.969,23.763,45.249,11.72,38.853,5.324z M26.177,24c-3.314,0-6-2.686-6-6
                          s2.686-6,6-6s6,2.686,6,6S29.491,24,26.177,24z"
                        ></path>
                      </svg>
                    </span>
                    <h4 className='Contact__Title--lists font-normal uppercase text-2xl	pt-9'>OUR MAIN OFFICE</h4>
                    <p className='Contact__Parrafo--list font-normal text-base	w-9/12	text-center pt-4'>SoHo 94 Broadway St New York, NY 1001</p>
                  </div>
                </div>
                <div className='Contact__Number bg-white rounded-2xl  pt-7 mt-28 '>
                  <div className='Contact__Info flex items-center  flex-col'>
                    <span className="Contact__SVG">
                      <svg className="Contact__SVG w-16 fill-blue-800" viewBox="0 0 513.64 513.64" x="0px" y="0px" id="svg-9786" >
                        <g>
                          <g>
                            <path
                              d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72    c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68    c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44    l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                    <h4 className='Contact__Title--lists font-normal uppercase text-2xl	pt-5'>PHONE NUMBER</h4>
                    <p className='Contact__Parrafo--list font-normal text-base	w-9/12	text-center pt-4'>234-9876-5400 888-0123-4567 (Toll Free)</p>
                  </div>
                </div>
                <div className='Contact__Fax bg-white rounded-2xl  pt-7 mt-28'>
                  <div className='Contact__Info flex items-center  flex-col'>
                    <span className="Contact__SVG">
                      <svg className="Contact__SVG w-16 fill-blue-800" viewBox="0 0 512 512" id="svg-d01e">
                        <path
                          d="m201 12.714v184.286h267v-184.286c0-7.022-5.692-12.714-12.714-12.714h-241.572c-7.022 0-12.714 5.692-12.714 12.714zm63.89 33.131h70.271c8.284 0 15 6.716 15 15s-6.716 15-15 15h-70.271c-8.284 0-15-6.716-15-15s6.715-15 15-15zm0 75.142h139.22c8.284 0 15 6.716 15 15s-6.716 15-15 15h-139.22c-8.284 0-15-6.716-15-15s6.715-15 15-15z"
                        />
                        <path
                          d="m472 227h-275c-22.091 0-40 17.909-40 40v205c0 22.091 17.909 40 40 40h275c22.091 0 40-17.909 40-40v-205c0-22.091-17.909-40-40-40zm-207.5 217.5h-20c-8.284 0-15-6.716-15-15s6.716-15 15-15h20c8.284 0 15 6.716 15 15s-6.716 15-15 15zm0-60h-20c-8.284 0-15-6.716-15-15s6.716-15 15-15h20c8.284 0 15 6.716 15 15s-6.716 15-15 15zm0-60h-20c-8.284 0-15-6.716-15-15s6.716-15 15-15h20c8.284 0 15 6.716 15 15s-6.716 15-15 15zm80 120h-20c-8.284 0-15-6.716-15-15s6.716-15 15-15h20c8.284 0 15 6.716 15 15s-6.716 15-15 15zm0-60h-20c-8.284 0-15-6.716-15-15s6.716-15 15-15h20c8.284 0 15 6.716 15 15s-6.716 15-15 15zm0-60h-20c-8.284 0-15-6.716-15-15s6.716-15 15-15h20c8.284 0 15 6.716 15 15s-6.716 15-15 15zm80 120h-20c-8.284 0-15-6.716-15-15s6.716-15 15-15h20c8.284 0 15 6.716 15 15s-6.716 15-15 15zm0-60h-20c-8.284 0-15-6.716-15-15s6.716-15 15-15h20c8.284 0 15 6.716 15 15s-6.716 15-15 15zm0-60h-20c-8.284 0-15-6.716-15-15s6.716-15 15-15h20c8.284 0 15 6.716 15 15s-6.716 15-15 15z"
                        />
                        <path
                          d="m87 227h-47c-22.091 0-40 17.909-40 40v205c0 22.091 17.909 40 40 40h47c22.091 0 40-17.909 40-40v-205c0-22.091-17.909-40-40-40z"
                        />
                      </svg>
                    </span>
                    <h4 className='Contact__Title--lists font-normal uppercase text-2xl	pt-5'>FAX</h4>
                    <p className='Contact__Parrafo--list font-normal text-base	w-9/12	text-center pt-4'>1-234-567-8900</p>
                  </div>
                </div>
                <div className='Contact__Email bg-white rounded-2xl  pt-7 mt-28'>
                  <div className='Contact__Info flex items-center  flex-col'>
                    <span className="Contact__SVG">
                      <svg className="Contact__SVG w-16 fill-blue-800" viewBox="0 0 512 512" x="0px" y="0px" id="svg-9f82">
                        <g>
                          <g>
                            <path d="M507.49,101.721L352.211,256L507.49,410.279c2.807-5.867,4.51-12.353,4.51-19.279V121 C512,114.073,510.297,107.588,507.49,101.721z"></path>
                          </g>
                        </g>
                        <g>
                          <g>
                            <path d="M467,76H45c-6.927,0-13.412,1.703-19.279,4.51l198.463,197.463c17.548,17.548,46.084,17.548,63.632,0L486.279,80.51 C480.412,77.703,473.927,76,467,76z"></path>
                          </g>
                        </g>
                        <g>
                          <g>
                            <path d="M4.51,101.721C1.703,107.588,0,114.073,0,121v270c0,6.927,1.703,13.413,4.51,19.279L159.789,256L4.51,101.721z"></path>
                          </g>
                        </g>
                        <g>
                          <g>
                            <path d="M331,277.211l-21.973,21.973c-29.239,29.239-76.816,29.239-106.055,0L181,277.211L25.721,431.49 C31.588,434.297,38.073,436,45,436h422c6.927,0,13.412-1.703,19.279-4.51L331,277.211z"></path>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <h4 className='Contact__Title--lists font-normal uppercase text-2xl	pt-5'>EMAIL</h4>
                    <p className='Contact__Parrafo--list font-extrabold text-base	w-9/12	text-center pt-4 text-blue-800'><a href="mailto:hello@theme.com">hello@theme.com</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className='Container__Layout 	'>
              <div className='Layout__Content '>
                <div className='Layout__Information '>
                  <div className='Layout__Information--contact  flex justify-center pt-20'>
                    <div className='Layout__Information--content '>
                      <h2 className='Layout__Title text-6xl	font-medium text-white leading-relaxed	'>Get in touch</h2>
                      <h6 className='Layout__Sub--title text-lg	font-bold text-white italic'>We can ensure reliability, low cost fares and most important, with safety and comfort in
                        mind.</h6>
                      <p className='Layout__Parrafo leading-loose	text-base	mt-5 	text-white 	'>Etiam sit amet convallis erat – class aptent taciti sociosqu ad litora torquent per conubia!
                        Maecenas gravida lacus. Lorem etiam sit amet convallis erat.</p>
                      <div className='Layout__Container--social flex  gap-5 mt-10'>
                        <a href="home" className='Layout__Social--url w-10 fill-white'>
                          <svg x="0px" y="0px" viewBox="0 0 112 112" id="svg-f107" className='Layout__Icon'>
                            <path d="M75.5,28.8H65.4c-1.5,0-4,0.9-4,4.3v9.4h13.9l-1.5,15.8H61.4v45.1H42.8V58.3h-8.8V42.4h8.8V32.2 c0-7.4,3.4-18.8,18.8-18.8h13.8v15.4H75.5z"></path>
                          </svg>
                        </a>

                        <a href="" className='Layout__Social--url fill-white w-10'>
                          <svg x="0px" y="0px" viewBox="0 0 112 112" id="svg-e140" className='Layout__Icon'>
                            <path d="M92.2,38.2c0,0.8,0,1.6,0,2.3c0,24.3-18.6,52.4-52.6,52.4c-10.6,0.1-20.2-2.9-28.5-8.2 c1.4,0.2,2.9,0.2,4.4,0.2c8.7,0,16.7-2.9,23-7.9c-8.1-0.2-14.9-5.5-17.3-12.8c1.1,0.2,2.4,0.2,3.4,0.2c1.6,0,3.3-0.2,4.8-0.7 c-8.4-1.6-14.9-9.2-14.9-18c0-0.2,0-0.2,0-0.2c2.5,1.4,5.4,2.2,8.4,2.3c-5-3.3-8.3-8.9-8.3-15.4c0-3.4,1-6.5,2.5-9.2 c9.1,11.1,22.7,18.5,38,19.2c-0.2-1.4-0.4-2.8-0.4-4.3c0.1-10,8.3-18.2,18.5-18.2c5.4,0,10.1,2.2,13.5,5.7c4.3-0.8,8.1-2.3,11.7-4.5 c-1.4,4.3-4.3,7.9-8.1,10.1c3.7-0.4,7.3-1.4,10.6-2.9C98.9,32.3,95.7,35.5,92.2,38.2z"></path>
                          </svg>
                        </a>

                        <a href="" className='Layout__Social--url fill-white w-10'>
                          <svg x="0px" y="0px" viewBox="0 0 112 112" id="svg-4718" className='Layout__Icon'>
                            <path d="M55.9,32.9c-12.8,0-23.2,10.4-23.2,23.2s10.4,23.2,23.2,23.2s23.2-10.4,23.2-23.2S68.7,32.9,55.9,32.9z M55.9,69.4c-7.4,0-13.3-6-13.3-13.3c-0.1-7.4,6-13.3,13.3-13.3s13.3,6,13.3,13.3C69.3,63.5,63.3,69.4,55.9,69.4z"></path>
                            <path d="M79.7,26.8c-3,0-5.4,2.5-5.4,5.4s2.5,5.4,5.4,5.4c3,0,5.4-2.5,5.4-5.4S82.7,26.8,79.7,26.8z"></path>
                            <path d="M78.2,11H33.5C21,11,10.8,21.3,10.8,33.7v44.7c0,12.6,10.2,22.8,22.7,22.8h44.7c12.6,0,22.7-10.2,22.7-22.7 V33.7C100.8,21.1,90.6,11,78.2,11z M91,78.4c0,7.1-5.8,12.8-12.8,12.8H33.5c-7.1,0-12.8-5.8-12.8-12.8V33.7 c0-7.1,5.8-12.8,12.8-12.8h44.7c7.1,0,12.8,5.8,12.8,12.8V78.4z"></path>
                          </svg>
                        </a>

                        <a href="" className='Layout__Social--url fill-white w-10'>
                          <svg x="0px" y="0px" viewBox="0 0 112 112" id="svg-438b" className='Layout__Icon'>
                            <path d="M33.8,96.8H14.5v-58h19.3V96.8z M24.1,30.9L24.1,30.9c-6.6,0-10.8-4.5-10.8-10.1c0-5.8,4.3-10.1,10.9-10.1 S34.9,15,35.1,20.8C35.1,26.4,30.8,30.9,24.1,30.9z M103.3,96.8H84.1v-31c0-7.8-2.7-13.1-9.8-13.1c-5.3,0-8.5,3.6-9.9,7.1 c-0.6,1.3-0.6,3-0.6,4.8V97H44.5c0,0,0.3-52.6,0-58h19.3v8.2c2.6-3.9,7.2-9.6,17.4-9.6c12.7,0,22.2,8.4,22.2,26.1V96.8z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className='Form--Contact__Container'>
                      <div className='Form--Contact__Content '>
                        <form action="post" className='Form '>
                          <div className='flex flex-wrap gap-10  pt-8'>
                            <div className='Form__Email'>
                              <label htmlFor="" className='Form__Label block font-bold text-base	 text-white'>Email</label>
                              <input type="email" placeholder="Enter a valid email address" className='Form__Input bg-transparent text-white outline-none ' />
                            </div>
                            <div className='Form__Name'>
                              <label htmlFor="" className='Form__Label block font-bold text-base	 text-white'>Name</label>
                              <input type="text" placeholder="Enter your Name" className='Form__Input bg-transparent text-white outline-none' />
                            </div>

                            <div className='Form__Messages'>
                              <label htmlFor="" className='Form__Label block font-bold text-base text-white'>Message</label>
                              <textarea placeholder="Enter your message" rows="4" cols="35" className='bg-transparent text-white outline-none '></textarea><br />
                              <a href="home" className='Teams__Button absolute mt-6 bg-white text-black  h-12 uppercase text-center	pt-4 hover:bg-slate-200'>Submit</a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className='Footer bg-zinc-700 text-white'>
        <div className='Footer__Container text-center	 pt-16'>
          <div className='Footer__Parrafo  '>
            <p className='text-center'>Sample text. Click to select the text box. Click again or double click to start editingthe text.</p>
          </div>
          <div className='Footer__Extra flex gap-5 pt-20  '>
            <a href="" className='Footer__Link underline  text-blue-300 hover:text-zinc-500 hover:no-underline '><span>Website Builder Software</span></a>
            <p className='Footer__Parrafo--extra'><span>created with</span></p>
            <a href="" className='Footer__Link1 underline  text-blue-300 hover:text-zinc-500 hover:no-underline '><span>Website Templates</span></a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
