import React from 'react';

const LoginPage: React.FC = () => {

  const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // logic to handle login here
    console.log('Login form submitted:', formData);
    // Reset form data after submission
    setFormData({ email: '', password: '' });
  };


  return (
    <div>
      <h1>Login Page</h1>
      {/* Login form*/}
    </div>
  );
}

export default LoginPage;
