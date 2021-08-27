const Footer = () => {
  return (
    <div>
      <footer class="p-10 footer bg-base-200 text-base-content">
        <div>
          <img
            src="https://helascript.com/wp-content/uploads/2021/08/hela-sript-new-02-1-300x222.png"
            className="w-48"
          ></img>
        </div>
        <div>
          <span class="footer-title">Services</span>
          <a class="link link-hover">Web Designing</a>
          <a class="link link-hover">Content Writing</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Our Projects</a>
          <a class="link link-hover">Contact Us</a>
          <a class="link link-hover">Blog</a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <div class="p-4 footer bg-base-300 text-base-content footer-center">
        <p>Copyright © 2021 - All right reserved by HelaScript</p>
      </div>
    </div>
  );
};

export default Footer;
