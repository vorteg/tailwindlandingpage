import Link from 'next/link'
import React from 'react'

function Simplify() {
    return (
        <section className="bg-bright-red font-bold">

            <div className="wrapper py-24 text-center grid gap-6 md:grid-cols-[40%_40%] md:justify-between md:items-center md:text-left">

                <h2 className="text-4xl text-very-pale-red">Simplify how your team works today.
                </h2>

                <Link href="#" className="button text-bright-red bg-vary-light-gray mx-auto md:mx-0 md:justify-self-end">Get Started</Link>

            </div>

        </section>
    )
}

export default Simplify