const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div>
          <img src="/logo.webp" alt="Book Store Logo" className="w-32 h-32" />
          <p className="font-bold">
            Boi Bitan <br /> Your favorite place for books since 2024
          </p>
          <p>© 2024 All rights reserved</p>
        </div>

        <div className="grid grid-flow-col gap-4">
          <a href="#" className="link link-hover">
            About us
          </a>
          <a href="#" className="link link-hover">
            Contact
          </a>
          <a href="#" className="link link-hover">
            Jobs
          </a>
          <a href="#" className="link link-hover">
            Press kit
          </a>
        </div>

        <div>
          <div className="grid grid-flow-col gap-4">
            {/* x  */}
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.611 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.956-2.178-1.554-3.594-1.554-2.717 0-4.92 2.203-4.92 4.917 0 .386.044.762.128 1.124-4.09-.205-7.719-2.164-10.148-5.144-.424.725-.666 1.561-.666 2.457 0 1.695.863 3.191 2.175 4.068-.802-.025-1.556-.246-2.212-.616v.062c0 2.366 1.684 4.342 3.918 4.788-.41.111-.843.171-1.287.171-.314 0-.623-.031-.923-.089.623 1.947 2.432 3.364 4.576 3.403-1.676 1.314-3.785 2.099-6.076 2.099-.394 0-.783-.023-1.168-.069 2.165 1.387 4.733 2.197 7.496 2.197 8.997 0 13.916-7.454 13.916-13.916 0-.212-.005-.425-.014-.636.955-.689 1.785-1.55 2.444-2.532z"></path>
              </svg>
            </a>

            {/* facebook  */}
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 2.163c-5.494 0-9.938 4.444-9.938 9.937 0 4.403 3.016 8.091 7.092 9.397v-6.626h-2.148v-2.771h2.148v-2.11c0-2.13 1.292-3.301 3.211-3.301.914 0 1.7.067 1.926.098v2.233h-1.32c-1.037 0-1.238.493-1.238 1.216v1.584h2.475l-.323 2.771h-2.152v6.626c4.075-1.306 7.092-4.994 7.092-9.397 0-5.493-4.444-9.937-9.938-9.937z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
