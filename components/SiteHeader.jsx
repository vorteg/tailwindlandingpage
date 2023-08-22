import Link from 'next/link'

function SiteHeader() {
    return (
        <header className='wrapper'>
            <nav className='h-20 flex items-center justify-between'>
                <Link href="/" className='w-1/3 max-w-[140px]'>
                    <img src='logo.svg' alt='logo' className='w-full' />
                </Link>
                <input type='checkbox' id="menu" className='peer hidden' />
                <label htmlFor='menu' className='bg-open-menu w-6 
                h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu 
                transition-all z-50 md:hidden'></label>

                <div className='fixed inset-0 bg-gradient-to-b from-white/70 to-black/70 translate-x-full 
                peer-checked:translate-x-0 transition-transform z-40
                 md:static md:bg-none md:translate-x-0'>
                    <ul className='absolute inset-x-0 top-24 p-12 bg-white w-[90%] 
                    mx-auto rounded-md h-max text-center 
                    grid gap-6 font-bold text-dark-blue 
                    shadow-2xl md:w-max md:bg-transparent 
                    md:p-0 md:grid-flow-col md:static'>
                        <li>
                            <Link href={"/"}>Pricing</Link>
                        </li>
                        <li>
                            <Link href={"/"}>Product</Link>
                        </li>
                        <li>
                            <Link href={"/"}>About Us</Link>
                        </li>
                        <li>
                            <Link href={"/"}>Careers</Link>
                        </li>
                        <li>
                            <Link href={"/"}>Community</Link>
                        </li>
                    </ul>

                </div>
                <Link href={"/"}
                    className='button shadow-sm shadow-bright-red/30 hidden py-3 md:block'
                >Get Started</Link>
            </nav>
        </header>
    )
}

export default SiteHeader