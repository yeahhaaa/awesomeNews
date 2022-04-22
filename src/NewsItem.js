import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 200px;
      height: 180px;
      object-fit: cover;
      border: 1px solid gray;
      @media screen and (max-width: 768px) {
        width: 150px;
        height: 150px;
      }
    }
  }
  .contents {
    h2 {
      margin: 0;
      font-size: 25px;
      @media screen and (max-width: 768px) {
        font-size: 15px;
      }
      a {
        color: black;
        text-decoration: none;
        &:hover {
          color: #495057;
        }
      }
    }
    p {
      margin: 0;
      font-size: 16px;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
      &:hover {
        color: #495057;
      }
      @media screen and (max-width: 768px) {
        font-size: 12px;
      }
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;
const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
