import { StyledSubtitle, StyledTitle } from "../../styles/Title";
import { textFromLeft } from "../../styles/animations";
import {
  StyledImg,
  StyledItems,
  StyledList,
  StyledThumb,
  StyledWrapperLink,
} from "./Project.styled.js";
import { HiLink } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import {
  StyledLink,
  StyledTech,
  StyledSpan,
  StyledSubtitlePr,
} from "./Project.styled.js";
import { StyledText } from "../../styles/Title.js";
import rentcar from "../../assets/img/rentcar.jpg";
import bookshelf from "../../assets/img/bookshelf.jpg";
import moneyguard from "../../assets/img/moneyguard.jpg";
import carptrevel from "../../assets/img/carptrevel.jpg";

export const Projects = () => {
  return (
    <>
      <StyledTitle>Projects</StyledTitle>
      <StyledSubtitle
        initial="hidden"
        whileInView="visible"
        custom={1}
        variants={textFromLeft}
      >
        Things I&apos;ve built so far
      </StyledSubtitle>
      <StyledList>
        <StyledItems>
          <StyledImg src={rentcar} alt="rentcar website" />
          <StyledThumb>
            <StyledSubtitlePr>CarRentals</StyledSubtitlePr>
            <StyledText>
              This web application is designed to help users easily find and
              rent cars of various configurations. It&apos;s built using Vite,
              providing a seamless experience for users looking to rent a car.
            </StyledText>
            <StyledTech>
              <StyledSpan> Tech stack: </StyledSpan>
              HTML, JavaScript, React
            </StyledTech>
            <StyledWrapperLink>
              <StyledLink to="https://rent-car-project.vercel.app/">
                <HiLink />
                Live Preview
              </StyledLink>
              <StyledLink to="https://github.com/IrynaDidkivska/rent-car-project">
                <AiFillGithub style={{ width: "26px", height: "26px" }} />
                View Code
              </StyledLink>
            </StyledWrapperLink>
          </StyledThumb>
        </StyledItems>
        <StyledItems>
          <StyledImg src={carptrevel} alt="mountains" />
          <StyledThumb>
            <StyledSubtitlePr>CarpTrevel</StyledSubtitlePr>
            <StyledText>
              This web application, powered by Next.js and styled with Tailwind
              CSS unlocks the mystical beauty and cultural richness of the
              Carpathian Mountains.
            </StyledText>
            <StyledTech>
              <StyledSpan> Tech stack: </StyledSpan>
              React, Next.js, Tailwind
            </StyledTech>
            * TODO //change the link//
            <StyledWrapperLink>
              <StyledLink to="https://rent-car-project.vercel.app/">
                <HiLink />
                Live Preview
              </StyledLink>
              <StyledLink to="https://github.com/IrynaDidkivska/CarpTravel">
                <AiFillGithub style={{ width: "26px", height: "26px" }} />
                View Code
              </StyledLink>
            </StyledWrapperLink>
          </StyledThumb>
        </StyledItems>
        <StyledItems>
          <StyledImg src={bookshelf} alt="home page bookshelf website" />
          <StyledThumb>
            <StyledSubtitlePr>Bookshelf</StyledSubtitlePr>
            <StyledText>
              It is a team-project. A bookshelf-themed website with a responsive
              layout created using JavaScript and SASS can provide an engaging
              and user-friendly experience for book enthusiasts. Authorization
              features can allow users to create personalized accounts, save
              their favorite books, and even write reviews. Pagination helps in
              organizing a vast library of books into manageable pages, making
              it easy for users to explore a diverse collection.
            </StyledText>
            <StyledTech>
              <StyledSpan> Tech stack: </StyledSpan>
              HTML, JavaScript, SASS
            </StyledTech>
            <StyledWrapperLink>
              <StyledLink to="https://oandrijchuk.github.io/book_shelf/">
                <HiLink />
                Live Preview
              </StyledLink>
              <StyledLink to="https://github.com/OAndrijchuk/book_shelf">
                <AiFillGithub style={{ width: "26px", height: "26px" }} />
                View Code
              </StyledLink>
            </StyledWrapperLink>
          </StyledThumb>
        </StyledItems>
        <StyledItems>
          <StyledImg src={moneyguard} alt="page of money guard website" />
          <StyledThumb>
            <StyledSubtitlePr>MoneyGuard</StyledSubtitlePr>
            <StyledText>
              Money Guard is a team project created using React and JavaScript
              technologies for online financial management. The application
              allows you to register or log in, record financial transactions,
              display the balance and view the transaction history. In addition,
              a section displaying the current exchange rate from Monobank has
              been implemented. We have worked on optimizing page loading speed
              to provide users with a fast and convenient browsing experience.
            </StyledText>
            <StyledTech>
              <StyledSpan> Tech stack: </StyledSpan>
              HTML, JavaScript, React
            </StyledTech>
            <StyledWrapperLink>
              <StyledLink to="https://apazient.github.io/wallet">
                <HiLink />
                Live Preview
              </StyledLink>
              <StyledLink to="https://github.com/apazient/wallet">
                <AiFillGithub style={{ width: "26px", height: "26px" }} />
                View Code
              </StyledLink>
            </StyledWrapperLink>
          </StyledThumb>
        </StyledItems>
      </StyledList>
    </>
  );
};
