function Hero({children, bgc}){
    return(
        <div className="w-full py-20 max-sm:py-10"
        style={{backgroundColor: bgc}}>
            {children}
        </div>
    )
}

export default Hero