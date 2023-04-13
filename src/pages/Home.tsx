import { FC } from 'react'
import { Link } from 'react-router-dom'
import json from '../assets/people.json'
import '../assets/styles/home-page.scss'
import PeopleList from '../components/PeopleList'

const HomePage: FC = () => {
	return (
		<>
			<header>
				<div className='info'>
					<h1>Biznes haqidagi barcha yangiliklarni Tadbirkor jurnalida oʻqing</h1>
					<Link to='/'>Batafsil
						<svg width='17' height='16' viewBox='0 0 17 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
							<path d='M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z' />
						</svg>
					</Link>
				</div>
			</header>

			<section>
				<div className='container'>
					<div className='people__info'>
						<h2>Qahramonlarimiz hikoyalari</h2>
						<PeopleList people={json.slice(0, 8)} />
					</div>
					<Link className='btn__primary' to='/all-people'>Barchasini koʻrish</Link>
				</div>
			</section>

			<section className='info__section'>
				<div className='container'>
					<div className='big__slides'>
						<div className='big__slide'>
							<div className='info'>
								<h2>Ўзбекистон савдо - саноат палатаси хакида<br />ва унинг вазифалари</h2>
								<p>Ўзбекистон Республикаси Савдо-саноат палатаси тадбиркорлик субъектларини
									бирлаштирувчи нодавлат нотижорат ташкилоти хисобланади.
									Ўз фаолиятини Республиканинг "Узбекистон Республикаси
									Савдо-саноат палатаси тугрисида"ги конуни ва савдо-саноат
									палатасининг устави асосида амалга оширади.</p>
								<Link className='btn__primary' to='savdo-sanoat'>Batafsil</Link>
							</div>
						</div>
						<div className='big__slide'>
							<div className='info'>
								<h2>Президентнинг «Тадбиркор - Ўзбекистон»
									журналини тайёрлаш ва чоп этиш
									ташаббуси хакида</h2>
								<p>Ўзбекистон Республикаси Президентининг 2022 йил 19 августдаги "Фаол тадбиркор" кукрак нишонини
									таъсис этиш тўгрисида"ги ПК- 356-сон карорига асосан, хар йили 20 август - Тадбиркорлар куни
									арафасида "Фаол тадбиркор" кукрак нишони билан такдирланган
									тадбиркорлик субъектини узида акс эттирган китоб
									чоп этиб борилиши белгиланган.</p>
								<Link className='btn__primary' to='journal'>Batafsil</Link>
							</div>
						</div>
					</div>
					<div className='small__slides'>
						<div className='small__slide'>
							<div className='info'>
								<h3>Мамлакатимизда
									тадбиркорлик ва бизнес
									юритиш натижадорлиги
									тўғрисида тахлилий
									маълумот</h3>
								<p>Сунгги йилларда тадбиркорлик ва бизнес юритиш
									буйича давлатимиз рахбари бошчилигида тадбиркорлик
									сохасида бир канча енгиллик ва преференциялар
									жорий этилди, бизнес йулидаги катор ғов ва тусиклар
									бекор килинди, тадбиркорлар хукукини химоя килиш, уларнинг
									ташки иктисодий ва экспорт фаолиятини кенгайтириш
									борасида самарали ва ишончли тизим яратилди.</p>
								<Link className='btn__primary' to='analytic-information'>Batafsil</Link>
							</div>
						</div>
						<div className='small__slide'>
							<div className='info'>
								<h3>Ўзбекистон Республикаси
									Президентининг тадбиркорлар
									билан «Очиқ мулоқоти» тадбири
									ва унинг натижадорлиги
									туғрисида</h3>
								<p>Узбекистон Республикаси Президентининг
									тадбиркорлар билан "очик мулокот" ида белгиланган
									вазифаларни амалга ошириш юзасидан
									давлат рахбарининг ПК-364-сон карори кабул
									килинди ва ушбу карор билан 42 та банддан иборат
									"йул харитаси" тасдикланди хамда унга асосан
									тадбиркорликни ривожлантириш ва кўллаб-қувватлаш
									буйича 55 та хужжат кабул килиш белгиланди.</p>
								<Link className='btn__primary' to='open-dialogue'>Batafsil</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default HomePage
