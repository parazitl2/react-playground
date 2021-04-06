import { useCallback, useState } from 'react';
import { actionLogin } from '../../redux/actions';
import store from '../../redux/store';

export function Login({ ...restProps}) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = useCallback((event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFormData((prev) => ({ ...prev, [name]: value }));
  }, [setFormData]);

  const login = (username, passwd) => store.dispatch(actionLogin({ username }));

  const handleSubmit = useCallback((event) => {
    login(formData.username, formData.password);
    event.preventDefault();
  }, [formData, login]);

  return (
    <form className='customForm' onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          name='username' 
          type='text' 
          onChange={handleChange} 
          value={formData.username} 
        />
      </label>
      <label>
        Password:
        <input 
          name='password' 
          type='password' 
          onChange={handleChange} 
          value={formData.password} 
        />
      </label>
      <input type='submit'></input>
    </form>
  );
};

