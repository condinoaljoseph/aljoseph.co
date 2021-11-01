import algoliasearch from 'algoliasearch/lite';
import {
	InstantSearch,
	SearchBox,
	Hits,
	Highlight
} from 'react-instantsearch-dom';

const searchClient = algoliasearch(
	'D2ZWFPPC3M',
	'730b6be763c6bdc577c5e73a68328893'
);

const Hit = (props) => {
	return (
		<article>
			<h1>
				<Highlight attribute="name" hit={props.hit} />
			</h1>
			<p>
				<Highlight attribute="description" hit={props.hit} />
			</p>
		</article>
	);
};

const Search = () => {
	return (
		<InstantSearch searchClient={searchClient} indexName="aljoseph.co">
			<SearchBox />
			<Hits hitComponent={Hit} />
		</InstantSearch>
	);
};

export default Search;
