import logo from "@/assets/football.png";
import { SyntheticEvent, useState } from "react";
import { register } from "@/hooks/Auth";
import { useAppDispatch, useAppSelector } from "@/hooks/hook";
import { Navigate } from "react-router-dom";

type Props = {
}

const index = (props: Props) => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { loading, registered } = useAppSelector(state => state.user)
    const dispatch = useAppDispatch();

    let SignUpUser = async (e: SyntheticEvent) => {
        e.preventDefault();
        dispatch(register({ username, password }));

    }

    if (registered) return <Navigate to='/' />;

    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src={logo}
                        alt="logo"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Create new account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={SignUpUser}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label className="block font-semibold">Username</label>
                            <input value={username} onChange={(e) => setUsername(e.target.value)} name="username" type="text" placeholder="Username" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" />
                        </div>
                        <div>
                            <label className="block font-semibold">Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder="Password" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {loading ?
                                <div
                                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                    role="status">
                                    <span
                                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                    >Loading...</span>
                                </div> : 'Sign Up'}

                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default index