import Tournament from "@/assets/angry_fruit.jpg";

type Props = {}

const Body = (props: Props) => {
    return (
        <section className="py-32 px-14">
            <div className="bg-light-blue rounded-lg p-4">
                <h4 className="text-center text-xl"><strong>Tournament</strong></h4>

                <div className="grid grid-cols-3 gap-4 py-7 h-full w-full">
                    <div className="relative rounded-lg overflow-hidden hover:drop-shadow-ok">
                        <img src={Tournament} alt="tournament" />
                        <h3 className="absolute md:text-2xl  sm:text-sm text-white bottom-4 left-1/2 -translate-x-1/2">
                            League Of Fruits</h3>
                    </div>

                    <div className="relative rounded-lg overflow-hidden hover:drop-shadow-ok">
                        <img src={Tournament} alt="tournament" />
                        <h3 className="absolute md:text-2xl  sm:text-sm text-white bottom-4 left-1/2 -translate-x-1/2">
                            League Of Fruits</h3>
                    </div>

                    <div className="relative rounded-lg overflow-hidden hover:drop-shadow-ok">
                        <img src={Tournament} alt="tournament" />
                        <h3 className="absolute md:text-2xl  sm:text-sm text-white bottom-4 left-1/2 -translate-x-1/2">
                            League Of Fruits</h3>
                    </div>

                    <div className="relative rounded-lg overflow-hidden hover:drop-shadow-ok">
                        <img src={Tournament} alt="tournament" />
                        <h3 className="absolute md:text-2xl  sm:text-sm text-white bottom-4 left-1/2 -translate-x-1/2">
                            League Of Fruits</h3>
                    </div>

                    <div className="relative rounded-lg overflow-hidden hover:drop-shadow-ok">
                        <img src={Tournament} alt="tournament" />
                        <h3 className="absolute md:text-2xl  sm:text-sm text-white bottom-4 left-1/2 -translate-x-1/2">
                            League Of Fruits</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Body