
export const Statistics = ({stats}) => {
    return (
        <ul className="stat-list">
       {stats.map(d =>
     (<li className="item" key={d.id}>
               <span className="label">{d.label}</span>
               <span className="percentage">{d.percentage}</span>
    </li>))}
        </ul>
        )
}