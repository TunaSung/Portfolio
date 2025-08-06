function Hero({children, bgc}){
    return(
        <div className="w-full py-20 2xl:py-40"
        style={{backgroundColor: bgc}}>
            {children}
        </div>
    )
}

export default Hero