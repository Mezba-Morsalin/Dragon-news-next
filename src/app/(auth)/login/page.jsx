import React from 'react';
export const metadata = {
  title: 'Dragon News - login',
}

const LoginPage = () => {
    return (
        <div className='max-w-3xl mx-auto'>
            <form className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 flex flex-col justify-center">
                <h2 className='text-4xl font-bold'>Login your account</h2>
  <label className="label">Email Address</label>
  <input type="email" className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input type="password" className="input" placeholder="Password" />

  <button className="btn btn-neutral mt-4 w-80">Login</button>
</form>
        </div>
    );
};

export default LoginPage;