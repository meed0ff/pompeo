import "./LogReg.css";

export default function LogReg() {
  return (
    <>
      <div className="log-reg">
        <div className="container">
          <form>
            <div>
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
            <label htmlFor="sign-up">
              <input type="checkbox" id="sign-up" />
              Sign up for our newsletter
            </label>
          </form>
        </div>
      </div>
    </>
  );
}
