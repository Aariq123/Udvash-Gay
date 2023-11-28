import { Button, Card, CardMedia } from "@mui/material";
import { useEffect, useRef, useState } from "react";


const Home = () => {
    const oneRef = useRef(null)
    const twoRef = useRef(null)
    const threeRef = useRef(null)
    const deviceWidth = useRef(null)
    const [ width, setWidth ] = useState(1000)
   
    
    const animate = () => {
        if(oneRef.current && twoRef.current && threeRef.current){
            oneRef.current.className = 'one bottom-0 left-0 absolute'
            twoRef.current.className = "two top-0 left-1/4 absolute"
            threeRef.current.className ='three top-2/4 right-0 absolute'
            setTimeout(()=>{
                oneRef.current.className = 'one bottom-0 left-1/4 absolute'
                twoRef.current.className = "two left-0 top-1/4 absolute"
                threeRef.current.className ='three top-0 right-0 absolute'
            }, 2000)
        }
    }


    const interval = ()=>setInterval(()=>animate(), 4000)


    useEffect(()=>{
        if(deviceWidth.current){
            if(deviceWidth.current.clientWidth < 769){
                clearInterval(interval)
                oneRef.current.className = 'static mt-2 one'
                twoRef.current.className = "static mt-2 two"
                threeRef.current.className ='static mt-2 three'
            }else{
                interval()
            }
        }
    },[deviceWidth.current])

    return (
        <div>
            <div ref={deviceWidth} className="md:h-screen flex flex-col items-center align-end">
                <div className="container relative flex flex-col md:flex-row items-center align-end justify-evenly">
                    <div className="my-20 md:m-0 z-10">
                        <p className="text-2xl sm:text-4xl font-bold">Welcome to Udvash</p>
                        <p className="text-lg sm:text-2xl my-4">Only suffering awaits</p>
                        <Button variant="contained" sx={{ backgroundColor: 'red' }}><a href="https://udvash.com/HomePage">Suffer Now</a></Button>
                    </div>
                    <div className="display flex md:flex-none flex-wrap justify-evenly relative md:overflow-hidden">
                        <img ref={oneRef} className="one bottom-0 left-1/4 absolute" src={require('../resources/mair.jpg')}></img>
                        <img ref={twoRef} className="two left-0 top-1/4 absolute" src={require('../resources/download.jpg')}></img>
                        <img ref={threeRef} className="three top-0 right-0 absolute" src={require('../resources/images.jpg')}></img>
                    </div>
                </div>
                <div className="bg-neutral-300 py-2 w-full flex flex-wrap justify-evenly">
                    <div className="m-4">
                        <p>"Changed my life"</p>
                        <p className="mt-2 ml-10">-some nigga</p>
                    </div>
                    <div className="m-4">
                        <p>"Changed my life too"</p>
                        <p className="mt-2 ml-10">-another nigga</p>
                    </div>
                    <div className="m-4">
                        <p>"Udvash gay"</p>
                        <p className="mt-2 ml-10">-my nigga</p>
                    </div>
                </div>
            </div>

            <div>
                <p className="mt-16 sm:my-16 text-center text-2xl ">Take a look at our courses:</p>
                <div className="container flex justify-evenly flex-wrap">
                    <div className="mx-4 my-6 scale-75 md:scale-100">
                        <Card sx={{ width: 300, boxShadow: '3px 3px black', border: 1, borderRadius: 5 }}>
                            <CardMedia sx={{ height: 300 }} image={require('../resources/medic.jpg')}>

                            </CardMedia>
                            <div className="p-2 bg-neutral-300">
                                <p className="text-lg my-2 font-bold">Medical course</p>
                                <p>Guaranteed for public medical</p>
                                <p className="my-2">-69 hour class</p>
                                <p>-speedrun only</p>
                            </div>
                        </Card>
                    </div>
                    <div className="mx-4 my-6 scale-75 md:scale-100">
                        <Card sx={{ width: 300, boxShadow: '3px 3px black', border: 1, borderRadius: 5 }}>
                            <CardMedia sx={{ height: 300 }} image={require('../resources/engine.jpg')}>

                            </CardMedia>
                            <div className="p-2 bg-neutral-300">
                                <p className="text-lg my-2 font-bold">Engineering course</p>
                                <p>Guaranteed for public engineering</p>
                                <p className="my-2">-69 hour class</p>
                                <p>-speedrun only</p>
                            </div>
                        </Card>
                    </div>
                    <div className="mx-4 my-6 scale-75 md:scale-100">
                        <Card sx={{ width: 300, boxShadow: '3px 3px black', border: 1, borderRadius: 5 }}>
                            <CardMedia sx={{ height: 300 }} image={require('../resources/varsity.jpg')}>

                            </CardMedia>
                            <div className="p-2 bg-neutral-300">
                                <p className="text-lg my-2 font-bold">Varsity course</p>
                                <p>Guaranteed for public varsity</p>
                                <p className="my-2">-69 hour class</p>
                                <p>-speedrun only</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>


            <div className="bg-neutral-300 py-8 sm:py-16 mt-6">
                <p className="m-0 sm:mb-6 text-center text-2xl ">Some of our success:</p>
                <div className="container flex justify-evenly flex-wrap">
                    <div className="m-2 sm:mx-4 sm:my-6 scale-75 md:scale-100">
                        <Card sx={{ width: 300, height:400, border: 1, borderRadius: 5, paddingY:8, borderColor:'red' }}>
                            <CardMedia sx={{ height: 100, border:1, borderColor:'red', width:100, borderRadius:50, margin:'auto' }} image={require('../resources/osama.jpg')}>

                            </CardMedia>
                            <div className="p-2 text-center">
                                <p className="my-2">Osama Bin Laden</p>
                                <p className="my-2 text-rose-600">Al-Qaeda University</p>
                                <p className="my-2">9/11</p>
                                <p>Hide and seek world champion for 10 years</p>
                            </div>
                        </Card>
                    </div>
                    <div className="m-2 sm:mx-4 sm:my-6 scale-75 md:scale-100 ">
                        <Card sx={{ width: 300, height:400, border: 1, borderRadius: 5, paddingY:8, borderColor:'blue' }}>
                            <CardMedia sx={{ height: 100, border:1, borderColor:'blue', width:100, borderRadius:50, margin:'auto' }} image={require('../resources/oq.jpg')}>
                            </CardMedia>
                            <div className="p-2 text-center">
                                <p className="my-2">Obaidul Qader</p>
                                <p className="my-2 text-sky-500">7 College</p>
                                <p className="my-2">1st</p>
                                <p>Shob meye candidate er crush</p>
                            </div>
                        </Card>
                    </div>
                    <div className="m-2 sm:mx-4 sm:my-6 scale-75 md:scale-100">
                        <Card sx={{ width: 300, height:400, border: 1, borderRadius: 5, paddingY:8, borderColor:'yellow' }}>
                            <CardMedia sx={{ height: 100, border:1, borderColor:"yellow", width:100, borderRadius:50, margin:'auto' }} image={require('../resources/at.png')}>

                            </CardMedia>
                            <div className="p-2 text-center">
                                <p className="my-2">Andrew tate</p>
                                <p className="my-2 text-yellow-500">Hustler University</p>
                                <p className="my-2">1st</p>
                                <p>Udvash is the matrix</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;