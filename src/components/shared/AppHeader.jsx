import { useContext, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import logoFire from "../../images/logo-fire.svg";
import { motion } from "framer-motion";
import { ProductFilterContext } from "../../context/filterContext";

const AppHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { setFilter } = useContext(ProductFilterContext);

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  function handleChatEnter(e) {
    if (e.keyCode === 13) {
      const searchKeyword = e?.target?.value;
      setFilter((prev) => {
        return { ...prev, searchKeyword };
      });
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto"
    >
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
        {/* Header menu links and small screen hamburger menu */}
        <div className="flex justify-between items-center px-4 sm:px-0">
          <div>
            <Link
              to="/"
              onClick={() => {
                setFilter((prev) => {
                  return { ...prev, searchKeyword: "" };
                });
                const elem = document.querySelector(`#searchKeywordInput`);
                elem.value = "";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                }}
              >
                <img
                  style={{
                    maxHeight: "40px",
                    maxWidth: "40px",
                  }}
                  src={logoFire}
                  className="w-36"
                  alt="Dark Logo"
                />
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    fontFamily: "HanSans",
                  }}
                >
                  불꽃장터
                </div>
              </div>
            </Link>
          </div>

          {/* Header links large screen */}
          <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
            <Link
              to="/projects"
              className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
              aria-label="Projects"
            >
              중고거래
            </Link>
            <Link
              to="/about"
              className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
              aria-label="About Me"
            >
              마이페이지
            </Link>
          </div>

          {/* Small screen hamburger menu */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
              aria-label="Hamburger Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
              >
                {showMenu ? (
                  <FiX className="text-3xl" />
                ) : (
                  <FiMenu className="text-3xl" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Header links small screen */}
        <div
          className={
            showMenu
              ? "block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
              : "hidden"
          }
        >
          <Link
            to="/products"
            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="Projects"
          >
            중고거래
          </Link>
          <Link
            to="/mypage"
            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
            aria-label="About Me"
          >
            마이페이지
          </Link>
          <div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
            <Link
              to="/chats"
              className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
              aria-label="chats"
            >
              채팅목록
            </Link>
          </div>
        </div>

        {/* Header right section buttons */}
        <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
          <input
            id="searchKeywordInput"
            placeholder={"물품을 검색해보세요."}
            onKeyUp={handleChatEnter}
            style={{
              padding: "5px 10px 5px 10px",
              borderRadius: "4px",
              backgroundColor: "rgba(0,0,0,0.1)",
              color: "rgba(0,0,0,0.5)",
              fontSize: "1rem",
              marginBottom: "0px",
              outline: "none",
            }}
          ></input>
          <Link
            to="/chats"
            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
            aria-label="About Me"
            style={{
              padding: "5px 10px 5px 10px",
              border: "1px solid rgb(51,51,51)",
              borderRadius: "4px",
              color: "rgb(64,64,64)",
              fontSize: "1rem",
              marginBottom: "0px",
            }}
          >
            채팅목록
          </Link>
        </div>
      </div>
      {/* Hire me modal */}
      {/* <div>
        {showModal ? (
          <HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} />
        ) : null}
        {showModal ? showHireMeModal : null}
      </div> */}
    </motion.nav>
  );
};

export default AppHeader;
