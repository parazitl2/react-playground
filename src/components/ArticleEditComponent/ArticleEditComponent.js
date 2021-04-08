import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectArticles } from '../../ducks/article/selectors';
import { Input } from 'reactstrap';

export const ArticleEditComponent = (props) => {
  const { id } = useParams();
  const article = useSelector(selectArticles)[id];
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const handleChange = useCallback((event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFormData((prev) => ({ ...prev, [name]: value }));
  }, [setFormData]);

  return (
    <Form>
      <label>
        Title:
        <input 
          name='title' 
          type='text' 
          onChange={handleChange} 
          value={formData.title} 
        />
      </label>
      <label>
        Content:
        <input 
          name='content' 
          type='text' 
          onChange={handleChange} 
          value={formData.content} 
        />
      </label>
      <div>{article.user ? article.user.username : "Fuck"}</div>
      <div>{article.createdAt}</div>
      {
        article.imageUrl
          ? <img src={article.imageUrl} alt="Alt" />
          : article.imageUrl
      }
    </Form>
  );
};

// ArticleOverviewComponent.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string
// };