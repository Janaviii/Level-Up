import React from 'react'

function Testimonial() {
    return (
        <div>
            <section className=" text-white-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-white'  >Customer Reviews</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10 text-white'  >What our <span className=' text-amber-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <p className="leading-relaxed text-white">"I've been using this gaming platform for a while now, and it's been nothing short of amazing. The selection of games is vast, the graphics are stunning, and the gameplay is incredibly smooth. I particularly enjoy the competitive gaming feature that allows me to challenge my friends or team up with players from around the world. The customer support is also top-notch, always ready to help with any issues. Overall, it's a fantastic platform for gamers of all levels."</p>
                                <span className="inline-block h-1 w-10 rounded bg-amber-500 mt-6 mb-4" />
                                <h2 className="text-white font-medium title-font tracking-wider text-sm uppercase">Bibin</h2>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <p className="leading-relaxed text-white">"This online gaming platform has been a source of endless entertainment for me. Whether I'm into action, strategy, or casual games, I can always find something to enjoy. The community is friendly, and I've made great friends here. However, I'd love to see more frequent updates and new game releases to keep the excitement going. Nevertheless, it's a great place to unwind and have fun after a long day."</p>
                                <span className="inline-block h-1 w-10 rounded bg-amber-500 mt-6 mb-4" />
                                <h2 className=" text-white font-medium title-font tracking-wider text-sm uppercase">Janavi</h2>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <p className="leading-relaxed text-white">"I primarily use this gaming platform on my mobile device, and I must say, the mobile gaming experience is impressive. The app is well-designed, and the games are optimized for touch controls. I can play on the go and never miss out on the action. The only drawback is the occasional connectivity issues, but they're not a deal-breaker. I've spent countless hours immersed in these games, and it's been a blast."</p>
                                <span className="inline-block h-1 w-10 rounded bg-amber-500 mt-6 mb-4" />
                                <h2 className=" text-white font-medium title-font tracking-wider text-sm uppercase">Vinita</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial