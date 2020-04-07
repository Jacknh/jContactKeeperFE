import React, {useState} from 'react'

const Login = () => {
  const [user, setUser] = useState({email: '', password: ''});

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user)
  }

  const onChange = e => setUser({...user, [e.target.name]: e.target.value})

  const {email, password} = user;

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
}

export default Login
