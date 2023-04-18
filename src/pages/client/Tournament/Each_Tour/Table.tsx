import Clouds from "@/assets/Cloudy.svg";
import { useAppSelector } from "@/hooks/hook";
import index from "../../register/Login";

type Props = {
}

const Body = (props: Props) => {

    const { teams, loading } = useAppSelector(state => state.teams)

    return (
        <section className="py-32 px-14  font-dmsans">
            <div className="bg-light-blue rounded-lg p-4">
                <h4 className="text-center text-xl"><strong>League Of Fruits </strong></h4>

                {/* TABLE */}
                {loading ?
                    <div className="grid grid-cols-3 gap-4 py-7 h-full w-full animate-pulse">
                        <div className="relative rounded-lg overflow-hidden hover:drop-shadow-ok ">
                            <img src={Clouds} alt="tournament" loading="lazy" />
                        </div>
                    </div>
                    :
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full text-left text-sm font-light">
                                        <thead className="border-b font-medium dark:border-neutral-500">
                                            <tr>
                                                <th scope="col" className="px-6 py-4">#</th>
                                                <th scope="col" className="px-6 py-4">Team Logo</th>
                                                <th scope="col" className="px-6 py-4">Team Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {teams.map((each, index) => (
                                                <tr
                                                    className="border-b transition duration-300 ease-in-out hover:bg-white dark:border-neutral-500 dark:hover:bg-neutral-600" key={index}>
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white">
                                                            <img className="h-full w-full object-cover" src={each.photo_img} alt="user" />
                                                        </div></td>
                                                    <td className="whitespace-nowrap px-6 py-4">{each.name}</td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}

export default Body