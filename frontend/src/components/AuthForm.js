import { Form, Link, useActionData, useNavigation, useSearchParams } from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {

  // we get the submitted data 
  const data = useActionData();

  // this gives us a navigation obj to let us know the state if we are submitting 
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';


  // usesearch params allows us to set and use parameters in the url 
  const [searchParams] =  useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';


  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        {/* this will display anyt errors that were encountered  */}
        {data && data.errors &&( 
          <ul>
            {Object.values(data.errors).map(err => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button disabled={isSubmitting}>{isSubmitting ? 'Submitting' : 'Save'}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
