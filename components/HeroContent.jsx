import Link from 'next/link'

function HeroContent() {
    return (
        <section className='wrapper grid gap-8
          justify-items-center items-center pb-12
          md:grid-cols-2 md:py-24
        '>
            <img src="illustration-intro.svg"
                alt="Graficas intro"
                className='w-[320] md:order-1'
            />

            <article className='text-center space-y-6 md:text-left md:space-y-8'>
                <h1 className='text-4xl font-bold text-very-dark-blue md:text-5xl'>
                    Bring everyone together to build
                    better products.
                </h1>
                <p className='text-dark-grayish-blue'>
                    Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
                </p>
                <Link href={"/"} className='button mx-auto shadow-xl shadow-bright-red/30 md:mx-0'>
                    Get Started
                </Link>

            </article>
        </section>
    )
}

export default HeroContent