import "../css/Login.css";
import {Link} from 'react-router-dom';

function Login({setUserName, userName}) {
  const handleChange = (ev) => {
    ev.preventDefault()
    setUserName(ev.target.value);
  }

 const handleSubmit = (ev) => {
   ev.preventDefault();
  console.log(userName);
   setUserName(ev.target.value);
 };


  return (
    <div className="container py-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-xl-10">
          <div className="card rounded-3 text-black">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-body p-md-5 mx-md-4">
                  <div className="text-center">
                    <h1 className="mt-1 mb-5 pb-1">Welcome!</h1>
                  </div>
                  <form>
                    <p className="prompt">Please login to your account:</p>
                    <div className="form-outline mb-4">
                      <input value={userName}
                        type="text"
                        onChange={handleChange}
                        id="form2Example11"
                        className="form-control custom-border"
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example22"
                        className="form-control custom-border"
                        placeholder="Password"
                      />
                    </div>
                    <div className="text-center pt-1 mb-5 pb-1">
                      <Link to="/home">
                      <button
                        className="btn button2 btn-primary btn-block fa-lg mb-3"
                        type="button"
                      >
                        Log in
                      </button>
                      </Link>
                      <a className="text-muted" href="#!">
                        Forgot password?
                      </a>
                    </div>

                    <div className="d-flex align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2">
                        Don't have an account?&nbsp;&nbsp;
                      </p>
                      <button
                        type="button"
                        className="btn btn-create btn-outline-danger"
                      >
                        Create new
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h1 className="mb-4">Happening Now!</h1>
                  <h2 className="small mb-0">Join Tweeter Today!</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
