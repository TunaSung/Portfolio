import Typewriter from 'typewriter-effect';

function LoadingScreen() {
    return (
        <div className="w-screen h-screen fixed inset-0 bg-[#121435] flex justify-center items-center">
            <h1 className="text-lg md:text-2xl  lg:text-4xl text-[#D35EF4] font-orbitron
            max-sm:text-lg">
                <Typewriter
                    onInit={(typewriter) => {
                    typewriter
                        .typeString('<WELCOME TO MY WORLD ')
                        .pauseFor(400)
                        .typeString('❤️ />')
                        .pauseFor(300)
                        .start();
                    }}
                    options={{
                        delay: 100
                    }}
                />
            </h1>
        </div>
    )
}

export default LoadingScreen