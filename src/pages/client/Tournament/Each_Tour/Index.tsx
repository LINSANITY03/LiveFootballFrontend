import Navbar from '@/Components/Navbar';
import { useEffect } from 'react';
import { useAppDispatch } from "@/hooks/hook";
import Table from './Table';
import { getTeams } from '@/hooks/Auth';

type Props = {
    tournId: string
}

const Index = (props: Props) => {
    const dispatch = useAppDispatch();
    const tournId = props.tournId;
    console.log('this is tourn Id', tournId);

    useEffect(() => {
        dispatch(getTeams(tournId))
    }, [])

    return (
        <div>
            <Navbar />
            <Table />
        </div>
    )
}

export default Index