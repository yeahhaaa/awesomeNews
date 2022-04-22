import Categories from '../Categories';
import NewsList from '../NewsList';
import Header from '../Header';
const NewsPage = ({ match }) => {
  //카테고리가 선택되지 않으면 기본값 all사용
  const category = match.params.category || 'all';
  return (
    <>
      <Header />
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
