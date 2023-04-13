import { FC, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../assets/styles/navbar.scss'
import useScroll from '../hooks/useScroll'

const Navbar: FC = () => {
	const scrolled: boolean = useScroll((y) => y !== 0)
	const [navOpened, setNavOpened] = useState(false)

	return (
		<nav id='nav' className={scrolled ? 'sticky' : ''}>
			<ul>
				<li className='nav__link'>
					<NavLink to='/'>Asosiy</NavLink>
				</li>
				<li className='nav__link'>
					<NavLink to='/interview'>Intervyu</NavLink>
				</li>
				<li>
					<Link to='/'>
						<svg width='278px' height='48px' viewBox='0 0 279 48' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
							<g clipPath='url(#clip0_218_384)'>
								<path
									d='M42.5928 0.609257C42.5057 0.957443 42.3938 1.24345 42.3441 1.26832C42.3068 1.29319 42.0705 1.91496 41.8467 2.67351C41.6228 3.41962 41.399 4.06625 41.3493 4.10356C41.312 4.14086 41.0508 4.86211 40.7897 5.72014C40.5285 6.57817 40.2798 7.32428 40.2177 7.39889C40.1679 7.46107 39.9441 8.1077 39.7202 8.82895C39.5088 9.55019 39.285 10.1844 39.2228 10.259C39.1731 10.3212 38.9493 10.9678 38.7254 11.689C38.514 12.4103 38.2902 13.0445 38.228 13.1191C38.1783 13.1813 37.9544 13.8279 37.7306 14.5492C37.5192 15.2704 37.2829 15.9046 37.2332 15.9792C37.1835 16.0414 36.9596 16.7129 36.7358 17.4714C36.512 18.2175 36.2632 18.9512 36.1762 19.088C36.1016 19.2248 35.8404 19.946 35.6166 20.7046C35.4052 21.4507 35.1689 22.0973 35.1192 22.1346C35.0695 22.172 34.8456 22.8061 34.6218 23.5647C34.398 24.3108 34.1866 24.9574 34.1368 24.9947C34.0871 25.0321 33.8384 25.7533 33.5772 26.6113C33.3285 27.4569 33.0798 28.1906 33.0301 28.2279C32.9803 28.2652 32.7565 28.8994 32.5202 29.658C32.2964 30.4041 32.0726 31.0507 32.0228 31.088C31.9855 31.1253 31.7617 31.7595 31.5379 32.5056C31.314 33.2517 31.0529 33.9357 30.9534 34.0227C30.829 34.1595 30.3192 34.1968 28.7897 34.1968H26.7876V34.8808V35.5647H32.0726H37.3575V34.8808V34.1968H35.1068H32.8684L32.9555 33.9108C33.0052 33.7616 33.0798 33.6124 33.1171 33.5751C33.1669 33.5378 33.3907 32.8663 33.6145 32.0828C33.8384 31.2994 34.0622 30.6279 34.112 30.5906C34.1617 30.5533 34.3855 29.8818 34.6094 29.0984C34.8332 28.315 35.057 27.6435 35.1068 27.6061C35.1565 27.5688 35.343 26.9844 35.542 26.3004C35.7285 25.6165 35.9648 24.8828 36.0643 24.6839C36.1513 24.4725 36.313 24.0621 36.4 23.7512L36.5617 23.1916L41.4239 23.1543C45.2166 23.1295 46.3109 23.1668 46.4104 23.2787C46.4726 23.3657 46.7088 24.087 46.9327 24.8704C47.1441 25.6538 47.4052 26.4621 47.4923 26.6735C47.5793 26.8725 47.8404 27.7181 48.0518 28.5388C48.2757 29.3595 48.4995 30.0559 48.5493 30.0932C48.599 30.1305 48.8228 30.8517 49.0467 31.7098C49.2829 32.5678 49.5068 33.289 49.5689 33.3264C49.6187 33.3761 49.7057 33.5751 49.743 33.7989L49.8301 34.1968H47.6912H45.5648V34.8808V35.5647H52.2798H58.9949V34.8808V34.2093L57.1669 34.172L55.3389 34.1346L55.0529 33.1398C54.8912 32.5927 54.6923 31.9834 54.5928 31.772C54.4933 31.573 54.2695 30.8393 54.0829 30.1554C53.8964 29.4714 53.6974 28.887 53.6477 28.8497C53.598 28.8124 53.3741 28.116 53.1503 27.2953C52.914 26.4745 52.6902 25.7782 52.6404 25.7409C52.5907 25.7036 52.3669 25.0072 52.143 24.1865C51.9192 23.3657 51.6954 22.6694 51.6456 22.6321C51.5959 22.5947 51.3472 21.8113 51.086 20.8911C50.8249 19.9709 50.5762 19.1875 50.5265 19.1502C50.4767 19.1129 50.2529 18.4165 50.0291 17.5958C49.8052 16.7751 49.5689 16.0787 49.5192 16.0414C49.4695 16.0041 49.2581 15.3326 49.0342 14.5492C48.8228 13.7657 48.599 13.0569 48.5493 12.9947C48.4871 12.9201 48.2384 12.1367 47.9897 11.2538C47.7285 10.3585 47.4798 9.57506 47.4177 9.51288C47.3679 9.43827 47.1441 8.7419 46.9202 7.95848C46.7088 7.17506 46.485 6.50356 46.4353 6.46625C46.398 6.42895 46.1741 5.73257 45.9379 4.91185C45.7016 4.09112 45.4778 3.39475 45.428 3.35744C45.3783 3.32014 45.1544 2.62376 44.9306 1.80304C44.7068 0.982314 44.4456 0.2362 44.371 0.149153C44.284 0.0621064 43.9109 -6.97449e-05 43.4881 -6.97449e-05H42.7544L42.5928 0.609257ZM42.3814 10.3709C42.4809 10.5823 42.7171 11.3409 42.9037 12.0621C43.0902 12.7834 43.2892 13.3927 43.3389 13.43C43.3886 13.4673 43.6 14.1388 43.8239 14.9222C44.0353 15.7056 44.3461 16.688 44.5078 17.0984C44.657 17.5087 44.9182 18.3419 45.0798 18.9637C45.229 19.573 45.4031 20.1077 45.4404 20.145C45.5524 20.2196 45.8135 21.003 45.8135 21.2144C45.8135 21.3637 45.0301 21.3885 41.4612 21.3885C39.0736 21.3885 37.1088 21.3388 37.1088 21.289C37.1088 21.2393 37.1586 21.1398 37.2208 21.0777C37.2829 21.003 37.5068 20.3315 37.7306 19.5854C37.9544 18.8269 38.1658 18.1927 38.2156 18.1554C38.2653 18.1181 38.4643 17.5336 38.6508 16.8497C38.8498 16.1657 39.0736 15.4942 39.1607 15.3574C39.2353 15.2207 39.484 14.4994 39.7078 13.7409C39.9316 12.9947 40.1555 12.3232 40.2177 12.2486C40.2674 12.1865 40.5285 11.4279 40.7772 10.5699C41.0384 9.71185 41.2871 8.9906 41.3368 8.9533C41.399 8.91599 41.486 8.66729 41.5358 8.39371L41.6228 7.8963L41.9088 8.94086C42.0705 9.52532 42.2819 10.172 42.3814 10.3709Z'
								/>
								<path
									d='M225.602 0.0621659C225.564 0.0994716 225.191 0.186518 224.769 0.26113C223.028 0.534705 221.175 1.33056 219.471 2.52434C218.576 3.1461 216.437 5.28496 215.902 6.08082C215.691 6.3917 215.455 6.71502 215.368 6.77719C215.281 6.8518 215.069 7.18755 214.895 7.53574C214.709 7.89636 214.497 8.25698 214.398 8.35647C214.298 8.44351 214.037 9.0031 213.813 9.57512C213.577 10.1596 213.353 10.657 213.303 10.6943C213.154 10.7938 212.607 13.1316 212.445 14.3005C212.358 14.885 212.246 15.457 212.184 15.5689C212.035 15.8549 212.035 20.2072 212.184 20.4933C212.246 20.6052 212.358 21.1772 212.433 21.7616C212.607 23.0549 213.154 25.5171 213.291 25.6041C213.353 25.6414 213.577 26.1886 213.801 26.8228C214.025 27.457 214.261 27.9793 214.311 28.0041C214.36 28.029 214.609 28.4269 214.858 28.9119C215.691 30.5036 216.835 31.9337 218.302 33.2269C219.26 34.0601 220.28 34.8186 220.478 34.8186C220.516 34.8186 220.69 34.9306 220.852 35.0549C221.026 35.1917 221.56 35.428 222.058 35.5772C222.555 35.7264 223.015 35.8881 223.077 35.9378C223.463 36.2114 224.98 36.373 227.305 36.373C229.643 36.373 230.613 36.2736 231.409 35.9378C231.546 35.8881 232.018 35.714 232.466 35.5523C233.2 35.3036 234.928 34.3585 235.276 34.0228C235.351 33.9482 235.774 33.5751 236.209 33.2021C237.328 32.2445 238.995 30.1679 239.641 28.9119C239.815 28.5637 240.002 28.2653 240.052 28.228C240.101 28.1907 240.325 27.6933 240.549 27.1088C240.785 26.5243 241.009 26.0269 241.071 25.9896C241.183 25.9026 241.892 23.0425 241.991 22.2093C242.041 21.8611 242.141 21.5005 242.215 21.401C242.402 21.1523 242.402 15.4072 242.215 15.1585C242.141 15.0591 242.041 14.686 241.991 14.3254C241.88 13.4673 241.208 10.7938 241.071 10.7067C241.021 10.6694 240.785 10.1471 240.561 9.53781C240.325 8.94092 240.101 8.45595 240.052 8.45595C240.002 8.45595 239.865 8.21968 239.728 7.93367C239.504 7.44869 238.733 6.30465 237.975 5.34714C237.316 4.52641 235.637 2.90983 234.891 2.39999C233.685 1.56683 231.994 0.770974 230.849 0.497399C230.265 0.360611 229.556 0.198953 229.258 0.124342C228.723 -1.02948e-05 225.726 -0.0497512 225.602 0.0621659ZM229.419 1.75336C229.979 1.89015 230.078 1.92745 231.223 2.4746C232.118 2.8974 233.187 3.81761 233.523 4.46424C233.635 4.70051 233.834 4.99895 233.958 5.12331C234.17 5.35958 234.829 7.15025 234.829 7.51087C234.829 7.61035 234.878 7.70983 234.953 7.7347C235.189 7.80932 235.824 12.2363 235.824 13.8031C235.824 14.1513 235.886 14.4249 235.973 14.4497C236.184 14.5243 236.197 24.1492 235.985 24.2114C235.898 24.2487 235.824 24.4725 235.824 24.7212C235.824 25.7161 235.177 28.9492 234.966 29.0984C234.903 29.1357 234.767 29.4715 234.642 29.8445C234.369 30.6777 233.983 31.4611 233.846 31.4611C233.797 31.4611 233.685 31.5979 233.61 31.772C233.374 32.2694 232.454 33.1772 231.583 33.7616C230.663 34.3834 229.457 34.7565 227.989 34.8808C226.311 35.03 223.96 34.5451 223.077 33.8736C222.866 33.7119 222.617 33.5751 222.555 33.5751C222.394 33.5751 220.777 31.8839 220.777 31.7223C220.777 31.6601 220.702 31.5233 220.603 31.4363C220.367 31.1876 220.043 30.5409 219.77 29.7451C219.645 29.372 219.484 28.999 219.421 28.9243C219.16 28.5886 218.688 26.0269 218.576 24.3482C218.539 23.6767 218.452 23.1295 218.389 23.1295C218.24 23.1295 218.265 16.4518 218.414 16.3523C218.489 16.315 218.539 15.8425 218.539 15.3202C218.539 14.2756 218.812 11.2663 219.036 9.886C219.247 8.54299 220.304 5.22279 220.516 5.22279C220.566 5.22279 220.702 5.02382 220.814 4.78755C221.075 4.2404 222.207 3.03419 222.692 2.77305C222.903 2.67356 223.301 2.4746 223.575 2.33781C223.848 2.21346 224.159 2.0518 224.271 1.98963C224.458 1.89015 225.44 1.69118 226.311 1.56683C226.858 1.49222 228.835 1.61657 229.419 1.75336Z'
								/>
								<path
									d='M0.424815 1.20615C0.424815 1.46729 0.337768 3.38231 0.238286 5.47143C0.138804 7.56055 0.0517578 9.63724 0.0517578 10.0973V10.9429H0.72326H1.39476L1.48181 10.4082C1.63103 9.48801 2.06627 7.83413 2.16575 7.83413C2.21549 7.83413 2.2901 7.6849 2.32741 7.48594C2.43932 6.96366 2.91186 5.74501 3.08595 5.55848C3.16057 5.48387 3.37197 5.16055 3.55849 4.84967C4.08077 3.95433 5.34917 2.99682 6.4559 2.68594C7.3388 2.4248 9.16678 2.2134 10.2113 2.26314L11.1191 2.28801V18.2424V34.1968H8.94295H6.76678V34.8808V35.5647H13.8549H20.9429V34.8808V34.1968H18.829H16.715L16.7398 18.2424L16.7771 2.30045L18.3316 2.32532C20.8559 2.37506 22.3979 2.89734 23.7036 4.16573C24.0269 4.47661 24.3875 4.91185 24.4994 5.13568C24.6113 5.34708 24.7481 5.55848 24.8103 5.59579C24.9471 5.68283 25.3823 6.72739 25.544 7.36159C25.6186 7.66003 25.7554 8.05796 25.8424 8.26936C25.9419 8.46832 26.0787 9.02791 26.1533 9.51288C26.4269 11.0797 26.3398 10.9429 27.1108 10.9429H27.7948L27.7202 9.66211C27.6455 8.35641 27.4093 1.76573 27.4093 1.10667V0.746044H13.917H0.424815V1.20615Z'
								/>
								<path
									d='M61.606 1.49216V2.23827H63.5956H65.5852V18.2175V34.1968H63.5956H61.606V34.8808V35.5647H69.4775C74.0039 35.5647 77.7842 35.515 78.3935 35.4403C79.55 35.3036 80.5573 35.1046 80.9427 34.9429C81.0795 34.8932 81.6391 34.6942 82.1863 34.5077C84.2256 33.8113 86.9117 31.772 88.1179 29.9688C88.3293 29.658 88.5655 29.3471 88.6402 29.2849C88.7272 29.2103 88.9759 28.8248 89.1997 28.4144C89.436 28.0041 89.6598 27.6435 89.7096 27.6061C89.7593 27.5688 89.9832 27.0714 90.1946 26.487C90.4184 25.9025 90.6547 25.3678 90.7168 25.2932C90.8661 25.1067 91.4381 22.7067 91.6619 21.2269C91.9355 19.5357 91.9355 16.0289 91.6619 14.3378C91.4256 12.8331 90.8661 10.4207 90.7293 10.3212C90.6671 10.2839 90.4433 9.79889 90.2194 9.22687C89.9956 8.66729 89.7718 8.20718 89.722 8.20718C89.6847 8.20718 89.4609 7.87143 89.237 7.46107C89.0008 7.05071 88.7894 6.71496 88.7396 6.71496C88.6899 6.71496 88.4661 6.44138 88.2298 6.11806C87.8319 5.57091 85.8671 3.7305 85.6806 3.7305C85.6308 3.7305 85.3448 3.55641 85.0464 3.35744C84.1262 2.72325 82.1241 1.86522 80.8184 1.5419C80.1345 1.36781 79.3759 1.18128 79.1396 1.1191C78.0578 0.820656 76.1427 0.746044 69.1044 0.746044H61.606V1.49216ZM76.3044 2.36262C77.8961 2.49941 79.5251 2.79786 80.0101 3.04656C80.1842 3.13361 80.694 3.36988 81.1541 3.59371C82.2236 4.09112 83.7282 5.52117 84.151 6.42895C84.3127 6.78957 84.4992 7.15019 84.5738 7.23724C84.8971 7.6476 85.4816 10.259 85.4816 11.316C85.4816 11.5896 85.5438 11.8134 85.6433 11.8383C85.8547 11.9129 85.8671 24.0621 85.6557 24.5098C85.5687 24.6714 85.4443 25.3802 85.3697 26.0766C85.1832 27.6932 84.9966 28.3274 84.3003 29.6207C83.2433 31.6227 81.5396 32.916 79.1521 33.5253C77.7718 33.8859 74.6878 34.1968 72.5863 34.1968H71.0567V18.2175V2.23827H72.9593C73.9914 2.23827 75.5085 2.30045 76.3044 2.36262Z'
								/>
								<path
									d='M96.1763 1.49216V2.23827H98.0416H99.9068V18.2175V34.1968H98.0416H96.1763V34.8808V35.5647H103.998C112.976 35.5647 113.847 35.5025 116.334 34.6942C117.142 34.4207 118.062 34.0725 118.361 33.8984C119.48 33.2766 120.587 32.4559 120.985 31.9585C121.121 31.7844 121.37 31.4984 121.544 31.3118C121.718 31.1378 122.029 30.6279 122.228 30.1927C122.439 29.7699 122.638 29.372 122.701 29.3346C122.9 29.1854 123.173 27.3574 123.186 26.1139C123.186 24.9077 122.912 23.3036 122.688 23.1295C122.638 23.0922 122.439 22.744 122.228 22.3336C121.768 21.4383 119.952 19.5854 119.094 19.1502C118.771 18.9885 118.299 18.7274 118.062 18.5782C117.515 18.2424 114.717 17.2849 114.257 17.2849C113.71 17.2849 114.008 17.1357 115.177 16.8497C117.067 16.3647 119.107 15.2207 120.077 14.1015C120.301 13.8279 120.549 13.5543 120.636 13.4922C120.723 13.4175 121.047 12.8082 121.37 12.1367C121.955 10.9181 121.955 10.8808 122.017 9.38853C122.091 7.57299 121.955 6.86418 121.283 5.50874C120.35 3.60615 118.323 2.13879 115.625 1.41755C113.287 0.795785 112.74 0.758479 104.172 0.758479L96.1763 0.746044V1.49216ZM112.342 2.54915C113.474 2.77299 114.767 3.40718 115.115 3.91703C115.264 4.11599 115.414 4.31496 115.463 4.35226C115.799 4.6134 116.321 6.3792 116.321 7.29941C116.321 7.58542 116.384 7.859 116.446 7.8963C116.52 7.93361 116.57 8.46832 116.57 9.07765C116.57 9.68698 116.52 10.2217 116.446 10.259C116.384 10.2963 116.321 10.5823 116.321 10.8808C116.321 11.9253 115.787 14.0642 115.476 14.3004C115.426 14.3378 115.289 14.5118 115.165 14.6984C115.053 14.8849 114.705 15.2082 114.394 15.4196C113.237 16.2155 111.273 16.5388 107.617 16.5388H105.378V9.3761V2.20097L108.4 2.27558C110.315 2.32532 111.745 2.4248 112.342 2.54915ZM111.969 18.2922C112.28 18.3668 112.591 18.4414 112.678 18.4538C112.765 18.4663 112.877 18.516 112.914 18.5657C112.964 18.6155 113.088 18.6528 113.2 18.6528C113.312 18.6528 113.735 18.8144 114.145 19.0134C114.978 19.3989 115.923 20.3315 116.197 21.0155C116.296 21.2517 116.421 21.488 116.483 21.5253C116.794 21.7367 117.092 23.6269 117.155 25.7409C117.254 29.3346 116.794 31.3367 115.588 32.5554C115.128 33.0279 114.158 33.5004 113.237 33.7118C112.156 33.9606 109.308 34.1968 107.343 34.1968H105.378V26.089V17.9937L108.4 18.0683C110.054 18.1181 111.658 18.2051 111.969 18.2922Z'
								/>
								<path d='M127.513 1.49216V2.23827H129.751H131.989V18.2175V34.1968H129.751H127.513V34.8808V35.5647H134.725H141.938V34.8808V34.1968H139.699H137.461V18.2175V2.23827H139.699H141.938V1.49216V0.746044H134.725H127.513V1.49216Z' />
								<path
									d='M145.668 1.47972V2.23826H147.596H149.523V18.2175V34.1968H147.471H145.419V34.8807V35.5647H152.197H158.974V34.8807V34.1968H156.922H154.87V25.8528V17.5087L157.084 17.5709C158.787 17.6206 159.509 17.6828 160.267 17.8942C161.461 18.2051 162.791 19.0134 163.6 19.8839C164.147 20.4808 164.694 21.5999 164.694 22.1346C164.694 22.259 164.744 22.3958 164.806 22.4331C164.98 22.545 165.055 23.1668 165.254 25.9149C165.44 28.489 165.763 30.9637 165.925 31.088C165.962 31.1253 166.161 31.6476 166.36 32.2569C166.572 32.8538 166.796 33.4134 166.858 33.5004C166.932 33.5751 167.144 33.8735 167.33 34.1595C167.828 34.9305 168.375 35.3782 169.419 35.888C170.277 36.3232 170.452 36.3605 171.695 36.4103C173.287 36.4725 174.493 36.2984 175.911 35.801C176.47 35.602 176.955 35.4403 176.968 35.4403C176.992 35.4403 177.005 35.0797 177.005 34.632C177.005 33.7864 176.968 33.7243 176.57 33.9854C176.309 34.1595 175.55 34.3833 174.729 34.5077C173.958 34.632 172.926 34.3585 172.466 33.8984C171.596 33.0528 171.471 32.4186 171.285 27.8548C171.21 25.9771 171.111 24.6714 171.036 24.6466C170.961 24.6217 170.912 24.4973 170.912 24.373C170.912 23.9999 170.302 22.1595 170.116 21.9854C170.029 21.8859 169.817 21.5875 169.643 21.3139C169.233 20.6673 168.288 19.7595 167.43 19.1875C167.057 18.9388 166.609 18.6403 166.435 18.5284C166.261 18.4165 165.788 18.1927 165.378 18.0434C164.968 17.8942 164.47 17.6953 164.259 17.5958C164.06 17.5087 163.525 17.3595 163.077 17.2725C162.033 17.0735 161.909 16.9491 162.655 16.8621C164.918 16.5761 166.771 16.1284 167.828 15.5937C169.718 14.6238 171.098 13.3802 171.72 12.0497C171.931 11.6144 172.13 11.2289 172.168 11.1916C172.528 10.9181 172.677 7.63516 172.379 6.5906C171.683 4.15329 169.407 2.2507 166.186 1.4051C165.54 1.23101 164.781 1.03205 164.508 0.957436C164.197 0.882825 160.665 0.808213 154.845 0.783343L145.668 0.733602V1.47972ZM162.692 2.53671C164.209 2.84759 165.353 3.54396 165.689 4.35225C165.776 4.55122 165.888 4.72531 165.938 4.72531C166.124 4.72531 166.472 6.31702 166.559 7.58541C166.696 9.61236 166.41 12.3108 166.012 12.7212C165.938 12.7958 165.788 13.0569 165.701 13.2683C165.49 13.7906 164.582 14.6238 163.898 14.9098C162.394 15.5564 159.757 15.9046 156.213 15.917H154.87V9.06521V2.20096L158.327 2.27557C160.64 2.32531 162.07 2.41236 162.692 2.53671Z'
								/>
								<path d='M180.114 1.49216V2.23827H182.103H184.093V18.2175V34.1968H182.103H180.114V34.8808V35.5647H186.767H193.419V34.8808V34.1968H191.554H189.689V18.2175V2.23827H191.554H193.419V1.49216V0.746044H186.767H180.114V1.49216Z' />
								<path
									d='M199.389 1.49216V2.23827H201.515H203.641L202.659 3.25796C202.112 3.82998 201.167 4.8248 200.558 5.459C199.948 6.10563 199.252 6.83931 199.016 7.08801C198.779 7.34915 198.021 8.14501 197.337 8.89112C196.653 9.6248 195.733 10.6072 195.285 11.0673C194.837 11.5398 193.905 12.5222 193.208 13.2683C192.512 14.002 191.492 15.0839 190.945 15.6683C189.801 16.8745 189.739 17.0984 190.311 17.8569C190.51 18.1181 190.858 18.5906 191.069 18.9015C191.293 19.2124 191.53 19.5108 191.604 19.5854C191.691 19.6476 191.915 19.9336 192.114 20.2072C192.698 20.9906 193.532 22.0476 193.78 22.3212C193.905 22.458 194.129 22.7688 194.29 23.0051C194.452 23.2414 194.638 23.4901 194.713 23.5647C194.8 23.6269 195.049 23.9626 195.285 24.3108C195.521 24.6466 195.758 24.9574 195.82 24.9699C195.869 24.9947 196.093 25.2808 196.305 25.5916C196.529 25.915 196.765 26.2258 196.839 26.3004C196.926 26.3626 197.15 26.6486 197.349 26.9222C197.548 27.1958 197.772 27.4694 197.847 27.544C197.921 27.6061 198.17 27.9295 198.381 28.2652C198.605 28.5885 198.916 28.9989 199.09 29.1854C199.264 29.372 199.501 29.6828 199.612 29.8694C199.724 30.0683 199.849 30.2175 199.898 30.2175C199.948 30.2175 200.11 30.4165 200.272 30.6652C200.421 30.9139 200.682 31.2621 200.856 31.4486C201.018 31.6227 201.329 32.0207 201.54 32.3315C201.751 32.6424 201.988 32.9409 202.062 33.0155C202.249 33.1771 202.871 34.0352 202.871 34.1222C202.871 34.1595 201.95 34.1968 200.819 34.1968H198.767V34.8808V35.5647L205.519 35.5398L212.259 35.5025L212.296 35.1419C212.321 34.9429 212.309 34.5947 212.259 34.3585L212.184 33.9481H210.643H209.101L208.752 33.4383C208.566 33.1523 208.292 32.8041 208.143 32.6549C208.006 32.5181 207.733 32.1574 207.534 31.859C207.347 31.573 207.148 31.3367 207.098 31.3367C207.049 31.3367 206.85 31.1004 206.663 30.8144C206.464 30.516 206.178 30.1429 206.017 29.9688C205.581 29.4963 204.5 28.0911 204.263 27.6932C204.151 27.5067 204.015 27.3574 203.965 27.3574C203.915 27.3574 203.691 27.0963 203.48 26.7606C203.256 26.4372 203.007 26.1388 202.92 26.089C202.833 26.0269 202.609 25.7409 202.41 25.43C202.224 25.1191 202.025 24.8704 201.975 24.8704C201.925 24.8704 201.714 24.6093 201.49 24.2735C201.279 23.9502 201.03 23.6269 200.955 23.5647C200.868 23.4901 200.645 23.2165 200.446 22.9429C200.247 22.6694 200.023 22.3834 199.948 22.3212C199.874 22.2466 199.65 21.973 199.451 21.6994C199.252 21.4258 199.028 21.1398 198.953 21.0777C198.829 20.9657 198.493 20.5429 197.362 19.0507C197.175 18.802 196.852 18.4165 196.665 18.1927C196.466 17.9813 196.205 17.6331 196.081 17.4217C195.957 17.2103 195.807 17.0362 195.758 17.0362C195.708 17.0362 195.509 16.7999 195.297 16.5015C195.098 16.203 194.763 15.7802 194.551 15.5564C194.34 15.3326 194.166 15.0839 194.166 14.9968C194.166 14.9222 194.601 14.3999 195.136 13.8528C196.019 12.9201 197.847 10.9802 200.321 8.34397C200.868 7.75952 201.54 7.05071 201.814 6.7647C202.92 5.62066 205.345 3.02169 205.668 2.6362L206.004 2.23827H207.981H209.959V1.49216V0.746044H204.674H199.389V1.49216Z'
								/>
								<path
									d='M246.767 1.49221V2.23832H248.694H250.622V18.2176V34.1969H248.57H246.518V34.8808V35.5647H253.295H260.072V34.8808V34.1969H258.021H255.969V25.8528V17.4964L258.244 17.571C261.602 17.6829 262.821 18.0808 264.475 19.6352C265.059 20.1948 265.668 21.2269 265.668 21.6622C265.668 21.7865 265.718 21.886 265.78 21.886C265.967 21.886 266.166 23.2663 266.352 25.8653C266.564 28.7751 266.638 29.4342 266.787 29.7824C266.85 29.9191 266.986 30.4539 267.111 30.9637C267.36 32.0704 267.745 33.2269 267.894 33.3264C267.944 33.3637 268.131 33.6373 268.317 33.9482C268.777 34.744 269.449 35.3409 270.493 35.8881C271.376 36.3357 271.476 36.3606 272.856 36.4103C274.261 36.4601 276.164 36.2238 276.711 35.9378C276.835 35.8881 277.183 35.7388 277.519 35.6269L278.104 35.4155V34.6197C278.104 33.7865 278.066 33.7243 277.668 33.9855C277.407 34.1596 276.636 34.3834 275.853 34.5077C275.281 34.5948 274.137 34.371 273.776 34.0974C273.614 33.9855 273.391 33.7119 273.279 33.5129C273.167 33.3015 273.03 33.115 272.993 33.0777C272.756 32.8787 272.607 31.8715 272.495 29.7824C272.296 25.6912 272.16 24.1989 271.961 23.8134C271.849 23.6021 271.762 23.3782 271.762 23.2912C271.762 23.0922 271.165 21.7243 271.04 21.6373C270.991 21.6 270.767 21.3388 270.555 21.0404C270.083 20.3813 268.951 19.3865 268.18 18.9513C267.857 18.7647 267.509 18.5409 267.409 18.4539C267.31 18.3668 266.887 18.1803 266.477 18.0311C266.066 17.8943 265.643 17.7202 265.519 17.658C265.221 17.4964 263.878 17.1606 263.505 17.1606C262.883 17.1606 263.181 16.9243 263.903 16.8497C266.725 16.5513 268.989 15.8052 270.605 14.6114C271.339 14.0767 272.358 12.9575 272.657 12.3855C272.794 12.1119 272.955 11.8508 273.005 11.8135C273.179 11.6891 273.515 10.458 273.614 9.5005C273.677 8.96578 273.689 8.12019 273.639 7.63521C273.54 6.80205 273.179 5.48392 273.018 5.34713C272.968 5.30982 272.769 5.02381 272.57 4.71293C271.612 3.24558 269.337 1.84039 267.161 1.35542C266.787 1.28081 266.34 1.16889 266.166 1.10672C265.308 0.820706 263.219 0.746094 255.26 0.746094H246.767V1.49221ZM263.803 2.5492C265.382 2.87252 266.526 3.61863 267.098 4.71293C267.832 6.14299 267.857 11.1295 267.136 12.7461C266.638 13.8653 265.581 14.7855 264.4 15.1337C264.039 15.2331 263.467 15.4072 263.144 15.5067C262.485 15.6932 259.476 15.9046 257.312 15.9171H255.969V9.06526V2.20102L259.426 2.27563C261.751 2.32537 263.169 2.41242 263.803 2.5492Z'
								/>
								<path d='M102.941 43.573C102.904 43.6849 102.879 44.4311 102.904 45.2269C102.941 46.4207 103.003 46.7813 103.202 47.1295C103.886 48.3108 105.776 48.286 106.497 47.1046C106.709 46.744 106.746 46.4704 106.746 45.0404V43.3865L106.41 43.4238L106.062 43.4611L106 45.115C105.938 46.6818 105.925 46.7937 105.639 47.0176C105.229 47.3533 104.371 47.3409 104.06 46.9927C103.861 46.7689 103.811 46.4704 103.762 45.0901L103.699 43.4611L103.351 43.4238C103.127 43.3989 102.991 43.4487 102.941 43.573Z' />
								<path d='M111.347 43.772V44.1451H112.591C113.275 44.1451 113.834 44.1699 113.834 44.2073C113.834 44.257 113.275 44.9782 112.591 45.8238C111.745 46.8684 111.347 47.4653 111.347 47.6891V48H113.212H115.078V47.6269V47.2539H113.772C113.051 47.2539 112.466 47.229 112.466 47.1917C112.466 47.142 113.026 46.4207 113.71 45.5751C114.555 44.5306 114.953 43.9337 114.953 43.7098V43.399H113.15H111.347V43.772Z' />
								<path d='M119.554 45.6995V48H120.711C121.332 48 122.079 47.9378 122.352 47.8756C123.372 47.6394 123.757 46.5824 123.061 45.8984C122.738 45.5751 122.738 45.5503 122.937 45.3264C123.235 45.0155 123.223 44.3813 122.912 43.9834C122.576 43.5606 121.967 43.399 120.648 43.399H119.554V45.6995ZM122.215 44.344C122.464 44.5927 122.464 44.9409 122.228 45.1399C122.128 45.2269 121.643 45.3264 121.171 45.3637L120.3 45.4259V44.7793V44.1451H121.158C121.78 44.1451 122.079 44.1948 122.215 44.344ZM122.414 46.2591C123.024 46.8684 122.588 47.2539 121.283 47.2539H120.3V46.6321V46.0104H121.233C122.004 46.0104 122.215 46.0601 122.414 46.2591Z' />
								<path d='M128.01 45.6995V48H129.627H131.243V47.6269V47.2539H130H128.756V46.6321V46.0104H129.813H130.87V45.6373V45.2642H129.813H128.756V44.7047V44.1575L129.975 44.1202C131.169 44.0829 131.181 44.0829 131.181 43.772V43.4611L129.602 43.4238L128.01 43.3865V45.6995Z' />
								<path d='M135.845 45.6995V48.0125L136.193 47.9751C136.504 47.9378 136.529 47.8881 136.566 47.3036C136.591 46.8062 136.678 46.5948 136.939 46.3461L137.287 46.0104L138.12 47.0052C138.829 47.8259 139.028 48 139.339 48C139.538 48 139.7 47.9503 139.7 47.8881C139.7 47.8259 139.277 47.2663 138.755 46.6446L137.809 45.513L138.692 44.5555C139.177 44.0207 139.575 43.5482 139.575 43.486C139.575 43.4363 139.414 43.399 139.227 43.399C138.954 43.399 138.643 43.6352 137.735 44.5555L136.603 45.7244L136.566 44.5928L136.529 43.4612L136.193 43.4238L135.845 43.3865V45.6995Z' />
								<path d='M144.052 45.6995V48.0125L144.4 47.9751L144.736 47.9378V45.6995V43.4612L144.4 43.4238L144.052 43.3865V45.6995Z' />
								<path d='M150.17 43.6104C149.088 44.1451 149.188 45.4135 150.356 45.8239C150.692 45.9358 151.19 46.1223 151.488 46.2218C151.936 46.3835 152.01 46.4581 152.01 46.7565C152.01 47.0177 151.936 47.142 151.737 47.2042C151.289 47.341 150.419 47.2788 150.008 47.055C149.685 46.8933 149.598 46.8809 149.511 47.0301C149.299 47.3534 149.411 47.5151 149.971 47.7762C150.854 48.1617 151.886 48.0498 152.408 47.5275C152.707 47.2415 152.806 47.0301 152.806 46.6943C152.806 46.0601 152.358 45.6622 151.314 45.3762C150.406 45.1275 150.133 44.9037 150.232 44.5182C150.356 44.0581 151.103 43.9959 152.209 44.3316C152.408 44.3938 152.495 44.3565 152.545 44.1327C152.644 43.7596 152.582 43.685 152.035 43.5234C151.376 43.3493 150.642 43.3741 150.17 43.6104Z' />
								<path d='M156.611 43.772V44.1451H157.357H158.104V46.085V48.0125L158.452 47.9751L158.787 47.9378L158.825 46.0352L158.862 44.1451H159.608C160.354 44.1451 160.354 44.1451 160.317 43.7969L160.28 43.4612L158.452 43.4238L156.611 43.3865V43.772Z' />
								<path d='M165.739 43.5482C165.453 43.9959 163.737 47.8756 163.799 47.9254C163.836 47.9627 163.998 48 164.16 48C164.383 48 164.508 47.8632 164.719 47.4404L164.993 46.8808H166.1H167.194L167.443 47.4404C167.654 47.9254 167.741 48 168.052 48C168.263 48 168.425 47.9503 168.425 47.8881C168.425 47.8383 167.977 46.8187 167.443 45.6249C166.585 43.7223 166.423 43.4611 166.149 43.4238C165.975 43.399 165.789 43.4611 165.739 43.5482ZM166.535 45.3513L166.92 46.2591H166.112C165.341 46.2591 165.304 46.2466 165.378 45.9979C165.503 45.6 166.087 44.3689 166.124 44.4187C166.137 44.4435 166.336 44.8663 166.535 45.3513Z' />
								<path d='M172.653 45.7119V48.0125L173.001 47.9751L173.337 47.9378L173.374 46.4083L173.411 44.8788L174.667 46.4456C176.433 48.6342 176.446 48.6218 176.446 45.6995V43.4612L176.11 43.4238L175.774 43.3865L175.737 44.9534L175.699 46.5202L174.456 44.9658C173.536 43.8093 173.138 43.4114 172.939 43.399H172.653V45.7119Z' />
							</g>
							<defs>
								<clipPath id='clip0_218_384'>
									<rect width='278px' height='48' fill='white' transform='translate(0.0517578)' />
								</clipPath>
							</defs>
						</svg>
					</Link>
				</li>
				<li className='nav__link'>
					<NavLink to='/about'>Loyiha</NavLink>
				</li>
				<li className='nav__link'>
					<NavLink to='/contacts'>Aloqa</NavLink>
				</li>
			</ul>
			<div className='dropdown'>
				<button id='dropdown-btn'>OʻZ
					<svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289Z'
						/>
					</svg>
				</button>
				<ul>
					<li>
						<a href='#'>RU</a>
					</li>
					<li>
						<a href='#'>EN</a>
					</li>
					<li>
						<a href='#'>O'Z</a>
					</li>
				</ul>
			</div>
			<button
				id='toggle-menu'
				className={'toggle-menu' + (navOpened ? ' checked' : '')}
				onClick={() => {
					setNavOpened(!navOpened)
				}}
			>
				<span className='bar'></span>
				<span className='bar'></span>
				<span className='bar'></span>
			</button>
			<ul id='mobile__nav' className={'mobile__nav' + (navOpened ? ' active' : '')}>
				<li className='nav__link'>
					<NavLink to='/'>Asosiy</NavLink>
				</li>
				<li className='nav__link'>
					<NavLink to='/interview'>Intervyu</NavLink>
				</li>
				<li className='nav__link'>
					<NavLink to='/about'>Loyiha</NavLink>
				</li>
				<li className='nav__link'>
					<NavLink to='/contacts'>Aloqa</NavLink>
				</li>
				<li>
					<button>RU</button>
					<button>EN</button>
					<button>O'Z</button>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar