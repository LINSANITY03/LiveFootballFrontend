import Clouds from "@/assets/Cloudy.svg";
import { useAppSelector } from "@/hooks/hook";
import { useNavigate } from "react-router-dom";

type Props = {}

const Body = (props: Props) => {

    const { tournaments, loading } = useAppSelector(state => state.tourn)
    const navigate = useNavigate();

    return (
        <section className="py-32 px-14">
            <div className="bg-light-blue rounded-lg p-4">

                <h4 className="text-center text-xl"><strong>Tournament</strong></h4>

                {loading ?
                    <div className="grid grid-cols-3 gap-4 py-7 h-full w-full animate-pulse">
                        <div className="relative rounded-lg overflow-hidden hover:drop-shadow-ok ">
                            <img src={Clouds} alt="tournament" loading="lazy" />
                        </div>
                    </div>
                    :

                    <div className="grid grid-cols-3 gap-4 py-7 h-full w-full">
                        {tournaments.map((tournament) => (
                            <div onClick={() => navigate(`/tournament/${tournament.id}`)} className="relative rounded-lg overflow-hidden hover:drop-shadow-ok" key={tournament.id}>
                                <img src={tournament.photo_img} alt="tournament" loading="lazy" />
                                <h3 className="absolute md:text-2xl  sm:text-sm text-white bottom-4 left-1/2 -translate-x-1/2">
                                    {tournament.name}</h3>
                            </div>

                        ))}

                    </div>
                }

            </div>
        </section>
    )
}

export default Body