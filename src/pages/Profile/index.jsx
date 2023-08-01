import { useState } from 'react';
import { BodyWrapper, ListOfInfo, Overview, ProfileTitle, TabItem, Tabs } from './style';

import Dashboard from '../../components/Dashboard';

import temp from '../../Intersect.png';


export default function Profile() {

	const [currentTab, setCurrentTab] = useState('overview');
	const [isLoading, setIsLoading] = useState(false);

	const tabs = [
		{
			title: 'overview',
			label: 'Visão Geral'
		},
		{
			title: 'teams',
			label: 'Teams'
		},
		{
			title: 'powers',
			label: 'Powers'
		},
	];

	return (
		<Dashboard isLoading={isLoading}>
			
			<ProfileTitle>
				<span className='label'>Perfil</span>
				<span className='slash'> /</span>
				<span className='name'>A-Bomb</span>
			</ProfileTitle>

			<Tabs>
				{tabs.map(tab => (
					<TabItem key={tab.title}>
						<button className={currentTab === tab.title && 'selected'} onClick={() => setCurrentTab(tab.title)}>
							{tab.label}
						</button>
					</TabItem>
				))}
			</Tabs>

			<BodyWrapper>

				{currentTab === 'overview' && (
					<Overview>
						<img src={temp} alt="" />

						<div className="text-wrapper">
							<h2 className='title'>
								A-Bomb (HAS)
							</h2>

							<p className="description">
								Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he's a premiere member of both the X-Men and the Avengers.
							</p>
						</div>
					</Overview>
				)}


				{currentTab === 'teams' && (
					<ListOfInfo>
						<li>Avengers</li>
						<li>Defenders</li>
						<li>Fantastic Four</li>
					</ListOfInfo>
				)}

				{currentTab === 'Powers' && (
					<ListOfInfo>
						<li>Avengers</li>
						<li>Defenders</li>
						<li>Fantastic Four</li>
					</ListOfInfo>
				)}


			</BodyWrapper>
		</Dashboard>
	);
}
