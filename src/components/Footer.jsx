export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-col">
          <div className="footer-logo">Precision<span>Auto</span></div>
          <p>
            Family-owned and operated since 1998, Precision Auto Works has been the trusted name
            in automotive repair. Our ASE-certified technicians combine decades of experience with
            state-of-the-art diagnostic equipment to keep you safely on the road.
          </p>
        </div>
        <div className="footer-col">
          <h4>Hours</h4>
          <ul className="footer-hours">
            <li>Mon – Fri <span>8:00 AM – 6:00 PM</span></li>
            <li>Saturday <span>9:00 AM – 3:00 PM</span></li>
            <li>Sunday <span>Closed</span></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li>
              <svg viewBox="0 0 24 24"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"/></svg>
              <span>123 Auto Lane, Garage City, ST 12345</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.7 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1.1L6.6 10.8z"/></svg>
              <span>(555) 012-3456</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <span>hello@precisionautoworks.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Precision Auto Works. All rights reserved.</p>
        <div className="footer-socials">
          <a href="#" aria-label="Facebook">
            <svg viewBox="0 0 24 24"><path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.3 9.1 7.8 10.5v-7.4H6.7V12h3.1V9.6c0-3.1 1.8-4.8 4.6-4.8 1.3 0 2.7.2 2.7.2v3H15c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.1H13v7.4c4.5-1.4 7.8-5.5 7.8-10.5z"/></svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.3.1 2.2.4 3 .8.8.4 1.5.9 2.1 1.5.6.6 1.1 1.3 1.5 2.1.4.8.7 1.7.8 3 .1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.3-.4 2.2-.8 3-.4.8-.9 1.5-1.5 2.1-.6.6-1.3 1.1-2.1 1.5-.8.4-1.7.7-3 .8-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-1.3-.1-2.2-.4-3-.8-.8-.4-1.5-.9-2.1-1.5-.6-.6-1.1-1.3-1.5-2.1-.4-.8-.7-1.7-.8-3-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.3.4-2.2.8-3 .4-.8.9-1.5 1.5-2.1C3.4 3.4 4.1 2.9 4.9 2.5c.8-.4 1.7-.7 3-.8 1.3-.1 1.7-.1 4.9-.1zM12 0C8.7 0 8.3 0 7.1.1c-1.3.1-2.4.4-3.4.8-1 .4-1.9 1-2.6 1.8C.3 3.4-.2 4.3-.6 5.3c-.4 1-.7 2.1-.8 3.4C-1 9.9-1 10.3-1 12s0 2.1.1 3.3c.1 1.3.4 2.4.8 3.4.4 1 1 1.9 1.8 2.6.8.8 1.7 1.3 2.7 1.7 1 .4 2.1.7 3.4.8C8.3 23.9 8.7 24 10 24s2.1 0 3.3-.1c1.3-.1 2.4-.4 3.4-.8 1-.4 1.9-1 2.6-1.8.8-.8 1.3-1.7 1.7-2.7.4-1 .7-2.1.8-3.4.1-1.3.1-1.7.1-5s0-3.7-.1-4.9c-.1-1.3-.4-2.4-.8-3.4-.4-1-1-1.9-1.8-2.6-.8-.8-1.7-1.3-2.7-1.7-1-.4-2.1-.7-3.4-.8C14.1 0 13.7 0 12 0z"/><path d="M12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/><circle cx="18.4" cy="5.6" r="1.4"/></svg>
          </a>
          <a href="#" aria-label="Twitter / X">
            <svg viewBox="0 0 24 24"><path d="M18.2 2.2h3.3l-7.2 8.3 8.5 11.3h-6.6l-5.2-6.8-5.9 6.8H2.2l7.7-8.8L1.8 2.2h6.8l4.7 6.2 5.4-6.2h-.5zm-1.2 17.7h1.8L7.1 4.1H5.2l11.8 15.8z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24"><path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.2V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.2 2.3 4.2 5.3v6.3zM5.3 7.4c-1.2 0-2.1-1-2.1-2.1s.9-2.1 2.1-2.1 2.1 1 2.1 2.1-.9 2.1-2.1 2.1zM7.1 20.4H3.6V9h3.5v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.8v20.4c0 1 .8 1.8 1.8 1.8h20.4c1 0 1.8-.8 1.8-1.8V1.8c0-1-.8-1.8-1.8-1.8z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
