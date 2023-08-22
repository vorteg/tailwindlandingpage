import React from 'react'

function CustomFooter() {
    return (
        <section className="wrapper grid gap-12 justify-items-center footer-area md:footer-area-md md:grid-cols-3 md:justify-items-stretch">
            <form className="flex gap-4 w-full min-w-[100px] [grid-area:form]">
                <input type="email" placeholder="Updates in your inbox…" className="min-w-[50px] flex-1 rounded-full px-4" />

                <input type="submit" value="GO" className="py-3 px-8 bg-bright-red rounded-full text-white" />
            </form>
            <nav className="grid 
            grid-cols-[max-content_max-content] gap-y-4 justify-between text-white w-4/5 [grid-area:navigation] md:w-full">
                <a href="#">Home</a>
                <a href="#">Pricing</a>
                <a href="#">Products</a>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Community</a>
                <a href="#">Privacy Policy</a>
            </nav>
            <div className="flex flex-wrap gap-4 justify-between w-full [grid-area:social-media]">

                <a href="#">
                    <img src="icon-facebook.svg" className="w-8" />
                </a>
                <a href="#">
                    <img src="icon-youtube.svg" className="w-8" />
                </a>
                <a href="#">
                    <img src="icon-twitter.svg" className="w-8" />
                </a>
                <a href="#">
                    <img src="icon-pinterest.svg" className="w-8" />
                </a>
                <a href="#">
                    <img src="icon-instagram.svg" className="w-8" />
                </a>

            </div>

            <a href="#" className="[grid-area:logo]">
                <img src="logo-white.svg" />
            </a>
            <p className="text-dark-grayish-blue text-center [grid-area:copy] md:text-right">Copyright 2020. All Rights Reserved</p>

        </section>
    )
}

export default CustomFooter