import { FC } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/people-list.scss'

type Person = {
	image: string
	name: string
	short_desc: string
}

type PeopleListProps = { people: Person[] }

const PeopleList: FC<PeopleListProps> = ({people}) => {
	return (
		<div className='people__cards'>
			{people.map((person, i) =>
				<Link key={i} to={person.name.toLowerCase().replaceAll(' ', '-')} className='person__card'>
					<img src={`./assets/img/${person.image}`} alt={person.name} />
					<div className='person__info'>
						<h4>{person.name.split(' ')[0]}<br />{person.name.split(' ')[1]}</h4>
						<p>{person.short_desc}</p>
					</div>
				</Link>
			)}
		</div>
	)
}

export default PeopleList
