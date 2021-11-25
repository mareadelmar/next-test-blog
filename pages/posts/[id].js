import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData }) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h1 className={utilStyles.headingXl}>{postData.title}</h1>
				<div className={utilStyles.lightText}>
					<Date dateString={postData.date} />
				</div>
				<div
					dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
				/>
			</article>
		</Layout>
	);
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
	const postData = await getPostData(params.id);

	return {
		props: {
			postData,
		},
	};
}
/**
 * paths contiene el array de paths que retorna getAllPostIds
 *
 * fallback: false --> qué es?
 *
 * cómo sabe getStaticProps que la key se llama id? Por el nombre del archivo.
 */
