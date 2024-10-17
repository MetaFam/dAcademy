const Footer = () => {
  return (
    <footer className="footer bg-transparent text-base-content p-10 mt-24">
      <nav>
        <h6 className="footer-title">dAcademy</h6>
        <a className="link link-hover">Docs</a>
        <a className="link link-hover">Charmverse</a>
        <a className="link link-hover">Gitcoin</a>
        <a className="link link-hover">Giveth</a>
      </nav>
      <nav>
        <h6 className="footer-title">Socials</h6>
        <a className="link link-hover">Farcaster</a>
        <a className="link link-hover">Lens</a>
        <a className="link link-hover">GitHub</a>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item" />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  )
}

export default Footer