import Layout from "../../components/layout";
import { getAllPostIds } from "../../lib/posts";

export default function Post() {
	return <Layout>...</Layout>;
}

export async function getStaticPaths() {
	// Return a list of possible value for id

	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	// Fetch necessary data for the blog post using params.id
}

/**
 * paths contiene el array de paths que retorna getAllPostIds
 *
 * fallback: false --> qué es?
 */
