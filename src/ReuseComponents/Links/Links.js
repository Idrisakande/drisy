import AnchorLink from "react-anchor-link-smooth-scroll";

// Nav Link
export const NavLink = ({ icon, page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-blue" : "text-gray"
      } hover:text-blue transition duration-500 flex flex-col gap-[0.2rem] justify-center items-center sm:gap-0`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {icon} {page}
    </AnchorLink>
  );
};

// Dot Link
export const DotLink = ({ page, selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-blue before:absolute before:w-4 before:h-4 before:rounded-full
      before:border-2 before:border-blue before:left-[-50%] before:top-[-50%]`;
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? selectedStyles : "bg-gray"
      } w-2 h-2 rounded-full`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    />
  );
};
