import { H2, P } from "../ResponsiveTags";
import reelrLogin from "./imgs/reelrLogin.webp";
import reelrCollection from "./imgs/reelrCollection.webp";
import reelrMoviePage from "./imgs/reelrMoviePage.webp";
import reelrCreateMovie from "./imgs/reelrCreateMovie.webp";

export default function Features() {
  return (
    <div>
      <H2>Features & How It Works</H2>

      <div className="flex flex-col gap-8">
        <P>
          To keep track of each users’ movies, it’s necessary to have an
          account. I just needed some basic data like username and password
          which are unique.
        </P>
        <img src={reelrLogin} alt="Reelr Login Form" />

        <P>
          Users can add new movies to the platform through a dialog form that
          requires a title, release year, genre, rating and image. When creating
          a movie, users can choose a visibility setting that determines whether
          the movie and its associated lists are visible only to them or can be
          viewed by other users.
        </P>
        <img src={reelrCreateMovie} alt="Reelr create movie dialog form" />

        <P>
          Users can add movies and TV series to their personal collection within
          the platform. The application allows users to create and manage custom
          lists, helping them organize their collection in a structured way. For
          example, users can create lists for genres, watch-later items, or
          personal favorites, making it easier to keep track of their media and
          navigate their library.
        </P>
        <img src={reelrCollection} alt="Reelr Movies collection and lists" />

        <P>
          Each movie page provides detailed information about the film,
          including its title, release year, rating, genre and visibility. Users
          can also see which lists the movie belongs to and add it to existing
          lists or create a new one directly from the there.
        </P>

        <img src={reelrMoviePage} alt="Reelr Movie Detail Page" />
      </div>
    </div>
  );
}
