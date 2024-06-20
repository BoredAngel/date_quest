'use client'
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const mainCursor = useRef(null);
    const [msg,setMsg] = useState('Returning')
    const [showMsg,setShowMsg] = useState('hidden')
    const { push } = useRouter();

    useEffect(() => {
        document.addEventListener('mousemove', (event) => {
            const { clientX, clientY } = event;

            const mouseX = clientX;
            const mouseY = clientY;

            
            try{
              mainCursor.current.style.transform = `translate3d(${mouseX - mainCursor.current.clientWidth/2}px, ${mouseY - mainCursor.current.clientHeight/2}px, 0)`;
            }
            catch(e){

            }
            
        
            
            return () => {}
        })
    },[])
    
    const shot = () => {

      let audio = document.getElementById('gunShot');
      audio.play();

      setShowMsg('block')
      let n = 1;
      setInterval(()=>{
        let msg = 'Returning' + ".".repeat(n%4);
        setMsg(msg)
        n += 1;
      },1000)

      setTimeout(()=>{
        push('/');
      },7000)
      

    }

    return (
      <main className="relative overflow-hidden bg-gradient-to-b from-black to-red cursor-none" >
        <div className="flex min-h-screen flex-col items-center justify-between p-12">
          <h1 className="text-4xl font-bold mb-4 text-red text-center">
            why. why? why!? why!!?<br></br>
            WHY!!?
          </h1>
  
          <div className="relative h-64 w-[100%] beatingHeart z-30">
            <img className="absolute left-[50%] -translate-x-1/2 translate-y-1/2 bottom-[100%] w-[20%]" 
            src="/heart.png"
            alt="logo"
            onClick={shot}
            />
          </div>
          
        </div>
        
        
        <div className="origin-left -rotate-90 absolute wid -bottom-[40%] left-[5%] overflow-hidden">
          <h1 className="text-xl font-bold text-red textAnim21">I HATE YOU I HATE YOU I HATE YOU I HATE YOU I HATE YOU I HATE YOU I HATE YOU I HATE YOU I HATE YOU I HATE YOU</h1>
          <h1 className="text-xl font-bold text-red textAnim22">I HATE YOU I HATE YOU I HATE YOU I HATE YOU I HATE YOU I HATE YOU I HATE YOU I HATE YOU I HATE YOU I HATE YOU</h1>
        </div>
  
        <div className=" origin-right rotate-90 absolute -bottom-[40%] right-[5%] overflow-hidden">
          <h1 className="text-xl font-bold text-red textAnim21">I HATE YOU I HATE YOU I HATE YOU I HATE YOU I HATE YOU I HATE YOU I HATE YOU I HATE YOU I HATE YOU I HATE YOU</h1>
          <h1 className="text-xl font-bold text-red textAnim22">I HATE YOU I HATE YOU I HATE YOU I HATE YOU I HATE YOU I HATE YOU I HATE YOU I HATE YOU I HATE YOU I HATE YOU</h1>
        </div>
        
        
        
        <div ref={mainCursor} className="absolute h-40 w-40 left-0 top-0">
            <div className="relative size-full">
                <svg  className="absolute left-[50%] -translate-x-1/2 translate-y-1/2 bottom-[50%]"
                    width="82%" 
                    height="82%" 
                    viewBox="0 0 15 15"
                    fill="rgb(255,0,0)"
                    opacity={0.6}
                    xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 0C7.77614 0 8 0.223858 8 0.5V1.80687C10.6922 2.0935 12.8167 4.28012 13.0068 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H12.9888C12.7094 10.6244 10.6244 12.7094 8 12.9888V14.5C8 14.7761 7.77614 15 7.5 15C7.22386 15 7 14.7761 7 14.5V13.0068C4.28012 12.8167 2.0935 10.6922 1.80687 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H1.78886C1.98376 4.21166 4.21166 1.98376 7 1.78886V0.5C7 0.223858 7.22386 0 7.5 0ZM8 12.0322V9.5C8 9.22386 7.77614 9 7.5 9C7.22386 9 7 9.22386 7 9.5V12.054C4.80517 11.8689 3.04222 10.1668 2.76344 8H5.5C5.77614 8 6 7.77614 6 7.5C6 7.22386 5.77614 7 5.5 7H2.7417C2.93252 4.73662 4.73662 2.93252 7 2.7417V5.5C7 5.77614 7.22386 6 7.5 6C7.77614 6 8 5.77614 8 5.5V2.76344C10.1668 3.04222 11.8689 4.80517 12.054 7H9.5C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8H12.0322C11.7621 10.0991 10.0991 11.7621 8 12.0322Z"
                            fill="rgb(255,0,0)"
                        />
                </svg>

                <svg  className="absolute left-[50%] -translate-x-1/2 translate-y-1/2 bottom-[50%]"
                    width="80%" 
                    height="80%" 
                    viewBox="0 0 15 15"
                    fill="rgb(0,0,0)"
                    opacity={0.6}
                    xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.5 0C7.77614 0 8 0.223858 8 0.5V1.80687C10.6922 2.0935 12.8167 4.28012 13.0068 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H12.9888C12.7094 10.6244 10.6244 12.7094 8 12.9888V14.5C8 14.7761 7.77614 15 7.5 15C7.22386 15 7 14.7761 7 14.5V13.0068C4.28012 12.8167 2.0935 10.6922 1.80687 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H1.78886C1.98376 4.21166 4.21166 1.98376 7 1.78886V0.5C7 0.223858 7.22386 0 7.5 0ZM8 12.0322V9.5C8 9.22386 7.77614 9 7.5 9C7.22386 9 7 9.22386 7 9.5V12.054C4.80517 11.8689 3.04222 10.1668 2.76344 8H5.5C5.77614 8 6 7.77614 6 7.5C6 7.22386 5.77614 7 5.5 7H2.7417C2.93252 4.73662 4.73662 2.93252 7 2.7417V5.5C7 5.77614 7.22386 6 7.5 6C7.77614 6 8 5.77614 8 5.5V2.76344C10.1668 3.04222 11.8689 4.80517 12.054 7H9.5C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8H12.0322C11.7621 10.0991 10.0991 11.7621 8 12.0322Z"
                            fill="#000000"
                        />
                </svg>
            </div>
        </div>

        <div className={showMsg + " bg-black size-full absolute z-50 left-0 top-0"}>
          <div className="relative size-full">
            <h1 className="absolute left-[50%] -translate-x-1/2 translate-y-1/2 bottom-[50%] text-2xl text-center font-bold text-red">{msg}</h1>
          </div>
        </div>

        <audio src="/heartBeat.m4a" className="hidden" autoPlay loop></audio>
        <audio id="gunShot" src="/gunShot.m4a" className="hidden"></audio>

      </main> 
      
    );
  }
  
  