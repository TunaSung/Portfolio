function Hero({children, bgc}){
    return(
        <div className="w-full py-20 max-sm:py-10 2xl:py-30"
        style={{backgroundColor: bgc}}>
            {children}
        </div>
    )
}

export default Hero