import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer mt-50">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-4 col-sm-6 text-center text-md-start">
                <Link href="/">
                  <span className="text-heading-2 color-brand-1">AGA26</span>
                </Link>
              </div>
              <div className="col-md-8 col-sm-6 text-center text-md-end">
                <span className="color-gray-900 text-heading-6 mr-30 text-mb-sm-20">
                  Ready to get started?
                </span>
                <Link href="/registration" className="btn btn-square">
                  Register Now
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 width-20 mb-30">
              <h4 className="text-heading-5">Contact</h4>
              <div className="mt-20 text-body-text color-gray-600 mb-20">
                AGA26 Conference
              </div>
              <div className="mt-20 text-body-text color-gray-600">
                info@aga26.com.hr
              </div>
              <div className="text-body-text color-gray-600">aga26.com.hr</div>
            </div>
            <div className="col-lg-3 width-20 mb-30">
              <h4 className="text-heading-5">Conference</h4>
              <ul className="menu-footer mt-20">
                <li>
                  <Link href="/iamuc">IAMUC</Link>
                </li>
                <li>
                  <Link href="/iamus">IAMUS</Link>
                </li>
                <li>
                  <Link href="/programs">Programs</Link>
                </li>
                <li>
                  <Link href="/committees">Committees</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 width-20 mb-30">
              <h4 className="text-heading-5">Participation</h4>
              <ul className="menu-footer mt-20">
                <li>
                  <Link href="/registration">Registration</Link>
                </li>
                <li>
                  <Link href="/travel">Travel</Link>
                </li>
                <li>
                  <Link href="/programs">Call for Papers</Link>
                </li>
                <li>
                  <Link href="/programs">Schedule</Link>
                </li>
                <li>
                  <Link href="/committees">Organizing Committee</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 width-16">
              <h4 className="text-heading-5">Resources</h4>
              <ul className="menu-footer mt-20">
                <li>
                  <Link href="/archives">Archives</Link>
                </li>
                <li>
                  <Link href="/about">Conference History</Link>
                </li>
                <li>
                  <Link href="/programs">Proceedings</Link>
                </li>
                <li>
                  <Link href="/about">News & Updates</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom mt-20">
            <div className="row">
              <div className="col-md-6">
                <span className="color-gray-400 text-body-lead">
                  © AGA26 Conference 2025
                </span>
                <Link
                  href="/about"
                  className="text-body-text color-gray-400 ml-50"
                >
                  Privacy policy
                </Link>
                <Link
                  href="/about"
                  className="text-body-text color-gray-400 ml-50"
                >
                  Terms of service
                </Link>
              </div>
              <div className="col-md-6 text-center text-lg-end text-md-end">
                <div className="footer-social">
                  <Link href="#" className="icon-socials icon-facebook"></Link>
                  <Link href="#" className="icon-socials icon-twitter"></Link>
                  <Link href="#" className="icon-socials icon-instagram"></Link>
                  <Link href="#" className="icon-socials icon-linkedin"></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
