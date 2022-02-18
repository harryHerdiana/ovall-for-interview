import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '@component/Layout'

interface IHomepageProps {
	description: string
	title: string
}

const HomePage: React.FC<IHomepageProps> = ({ description, title }) => (
	<Layout description={description} title={title}>
		<div>
			<h1>Ovall HomePage</h1>
			<p>{description}</p>
		</div>
	</Layout>
)

export const getStaticProps: GetStaticProps = async () => ({
	props: {
		description: 'Tbd'
	}
})

export default HomePage
