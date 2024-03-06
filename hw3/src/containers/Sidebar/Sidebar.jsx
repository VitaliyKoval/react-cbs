import './Sidebar.scss'
import data from '../../data/data.json'
import { Topics } from '../../components/Topics';

export function Sidebar() {
    console.log(data);
    return (
        <div className='Sidebar'>
            <Topics data={data}/>
        </div>
    )
}