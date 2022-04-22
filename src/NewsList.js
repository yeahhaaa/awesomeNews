import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

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

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false); //api요청 대기중인지 판별하기위함
  //useEffect에 등록하는 함수에 async붙여서는 안됨. useEffect가 반환해야 하는 값은 뒷정리 함수이기 때문임... useEffect내부에서 async/await사용하고 싶으면 함수 내부에 async붙은 또 다른 함수 만들어 사용해줘야함.
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=kr&apiKey=391c06f3d0754ed3997aec23d6dda0a2',
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  //대기중일때
  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }
  //아직 articles값이 설정되지 않았을 때
  if (!articles) {
    return null;
  } //map함수를 사용하기 전에 꼭 !articles 조회해 해당 값이 현재 null이 아닌지 검사해야함. 이 작업 하지 않으면 아직 데이터가 없을 때 null에는 map함수가 없기에 렌더링 과정에서 오류가 발생함.. 그래서 애플리케이션이 제대로 나타나지 않고 흰 페이지만 보이게 됨.

  //articles값이 유효할 때
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
