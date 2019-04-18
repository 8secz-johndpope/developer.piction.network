const React = require('react');

const Footer = ({config}) => {
  const {baseUrl, footerIcon, title, copyright} = config;

  return (
    <footer className="nav-footer" id="footer">
      <section className="sitemap">
        <a href={baseUrl} className="nav-home">
          {footerIcon && (
            <img
              src={baseUrl + footerIcon}
              alt={title}
              width="66"
              height="58"
            />
          )}
        </a>
        <div>
          <h5>Community</h5>
          <a
            href="https://t.me/pictionnetwork"
            target="_blank"
            rel="noreferrer noopener">
            Telegram channel
          </a>
          <a
            href="https://open.kakao.com/o/gyVQbDM/"
            target="_blank"
            rel="noreferrer noopener">
            Kakaotalk
          </a>
        </div>
        <div>
          <h5>More</h5>
          <a href="https://medium.com/piction">Medium</a>
          <a href="https://github.com/piction-protocol">GitHub</a>
        </div>
      </section>

      <section className="copyright">{copyright}</section>
    </footer>
  )
}

module.exports = Footer;
