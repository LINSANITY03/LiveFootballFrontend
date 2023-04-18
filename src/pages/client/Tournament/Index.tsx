import Navbar from '@/Components/Navbar'
import Body from './Body'
import { useEffect } from 'react'
import { useAppDispatch } from "@/hooks/hook";
import { getTouranment } from '@/hooks/Auth'

type Props = {}

const Index = (props: Props) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTouranment());
    }, [])

    return (
        <div>
            <Navbar />
            <Body />
        </div>
    )
}

export default Index