import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from './lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${process.env.REACT_APP_API_KEY}`,
    );
  }, [category]);
  //대기중일때
  if (loading) {
    return <NewsListBlock>로딩중...</NewsListBlock>;
  }
  //아직 response 설정되지 않았을 때
  if (!response) {
    return null;
  } //map함수를 사용하기 전에 꼭 !response 조회해 해당 값이 현재 null이 아닌지 검사해야함. 이 작업 하지 않으면 아직 데이터가 없을 때 null에는 map함수가 없기에 렌더링 과정에서 오류가 발생함.. 그래서 애플리케이션이 제대로 나타나지 않고 흰 페이지만 보이게 됨.
  // 에러 발생시
  if (error) {
    return <NewsListBlock>!error!</NewsListBlock>;
  }
  //response값이 유효할 때
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
