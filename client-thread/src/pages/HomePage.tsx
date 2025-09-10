import PostList from '../components/containers/PostList/PostList.tsx'
import PostAdd from '../components/elements/PostAdd/PostAdd.tsx'
import Layout from './Layout.tsx'

const HomePage = () => {
	return (
		<>
			<Layout>
				<PostAdd />
				<PostList />
			</Layout>
		</>
	)
}

export default HomePage
