function Hero({children, bgc}){
    return(
        <div className="w-full py-10 lg:py-20 2xl:py-30"
        style={{backgroundColor: bgc}}>
            {children}
        </div>
    )
}

export default Hero