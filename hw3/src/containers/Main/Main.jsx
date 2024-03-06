import { Articles } from '../../components/Articles'
import './Main.scss'
import data from '../../data/data.json'

export function Main() {
    return (
        <div className='Main'>
            <Articles data={data}/>
        </div>
    )
}