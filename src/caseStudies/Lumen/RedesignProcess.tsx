import { H2, H3, P } from "../ResponsiveTags";
import LumenLoginBefore from "./imgs/lumenLoginBefore.webp";
import LumenLoginAfter from "./imgs/lumenLoginAfter.webp";
import LumenCoursesBefore from "./imgs/lumenCoursesBefore.webp";
import LumenCoursesAfter from "./imgs/lumenCoursesAfter.webp";
import LumenHWBefore from "./imgs/lumenHWBefore.webp";
import LumenHWAfter from "./imgs/lumenHWAfter.webp";
import LumenHWExampleBefore from "./imgs/lumenHWExampleBefore.webp";
import LumenHWExampleAfter from "./imgs/lumenHWExampleAfter.webp";
import LumenHWExample2Before from "./imgs/lumenHWExample2Before.webp";
import LumenHWExample2After from "./imgs/lumenHWExample2After.webp";

export default function Features() {
  return (
    <div>
      <H2>Redesign Process</H2>

      <H3>Pain Point 1: Login</H3>
      <div className="flex flex-col gap-8">
        <P>
          The first pain point was identified in the login screen, even though
          it’s a relatively simple and straight forward screen. The main issue
          was having too many unorganized links in the bottom and they were hard
          to read. Another problem was that the error messages didn’t have good
          visibility.
          <br />
          <br />
          To improve this, I decided to move the “Forgot Username” and “Forgot
          Password” links to their respective fields in the login form. I also
          added some contrast in the error messages since the current red wasn’t
          visible over the blue background. Finally, I updated the overall
          design of the screen, including background texture, colors and font
          size.
        </P>

        <div>
          <img
            src={LumenLoginBefore}
            alt="Lumen Login Screen Before Redesign"
          />
          <p className="text-lg text-dark-75 mt-3">Before Redesign</p>
        </div>

        <div>
          <img src={LumenLoginAfter} alt="Lumen Login Screen After Redesign" />
          <p className="text-lg text-dark-75 mt-3">After Redesign</p>
        </div>
      </div>
      <br />

      <H3>Pain Point 2: Course/Class Selection</H3>
      <div className="flex flex-col gap-8">
        <P>
          The problem in this class selection screen was that the links were too
          small and I often clicked on the wrong class and had to go back and do
          select another class again. Also the hide icon was representing the
          incorrect action, it was an “X” icon instead of something like an
          “eye” or even a text. The final issue was that there existed a
          dedicated button to change the order of the courses.
          <br />
          <br />
          To solve this pain points, I expanded the focus main area which was
          the courses selection box and adjusted the spacing to avoid selecting
          the incorrect class. I also changed the hide icon to an “eye” icon and
          added a small text next to it for more clarity. Next, I added an icon
          that is often used to represent that an item can be moved while
          holding it, instead of having an extra button for that. Finally, I
          made some color, spacing and position adjustments in the whole screen
          to provide a more efficient user flow.
        </P>

        <div>
          <img
            src={LumenCoursesBefore}
            alt="Lumen Courses Screen Before Redesign"
          />
          <p className="text-lg text-dark-75 mt-3">Before Redesign</p>
        </div>

        <div>
          <img
            src={LumenCoursesAfter}
            alt="Lumen Courses Screen After Redesign"
          />
          <p className="text-lg text-dark-75 mt-3">After Redesign</p>
        </div>
      </div>
      <br />

      <H3>Pain Point 3: Homework Selection</H3>
      <div className="flex flex-col gap-8">
        <P>
          I’ll admit, this pain point was very hard for me to solve at that
          time, and I believe that the solution I went with is not the best.
          <br />
          <br />
          Here the problem was that the screen itself was chaos, the ability for
          professors to choose multiple colors ended up in contrast and
          readability issues, button labels that were not clear on their
          actions, homework progression wasn’t clear enough on how it worked,
          everything was too close to each other and groups looked like regular
          elements.
          <br />
          <br />
          My approach was to first add a lot of breathing spacing where needed
          and limit the colors two a small variation of the primary color
          instead of having multiple ones. Add three main colors for homework
          status and progress, green indicates that it’s been completed, red
          means past due date and yellow is used to show that it’s in progress.
          Finally I added a breadcrumb system to improve navigation and updated
          the font size so it’s more readable.
        </P>

        <div>
          <img
            src={LumenHWBefore}
            alt="Lumen Homework Screen Before Redesign"
          />
          <p className="text-lg text-dark-75 mt-3">Before Redesign</p>
        </div>

        <div>
          <img src={LumenHWAfter} alt="Lumen Homework Screen After Redesign" />
          <p className="text-lg text-dark-75 mt-3">After Redesign</p>
        </div>
      </div>
      <br />

      <H3>Pain Point 4: Completing Homework</H3>
      <div className="flex flex-col gap-8">
        <P>
          The main focus for this screen was the user experience, since it was
          the main feature of the app and was very important that the user can
          focus on completing their homework faster.
          <br />
          <br />
          The first screen one was a preview of the assignment and options to
          start or exit. However, the layout no longer matched with the new
          design so it needed to be updated.
          <br />
          <br />
          The second screen was where the user would answer questions related to
          the assignment, it’s important to mention that this application/tool
          was specifically used for math problems, so I had to have that in mind
          for the redesigned. The problem here was that some important help
          options like tutorials or help from tutors were too small and hard to
          find, which could definitely affect the student performance and time
          to solve the problem. Also, the submit question button could be
          pressed even if everything was left blank, and it was graded as an
          incorrect attempt which was frustrating when you clicked it by
          accident. Finally, the font size was too small and I often had to zoom
          in to use the app more efficiently.
          <br />
          <br />
          The fix was straight forward, make important buttons more visible,
          increment the font size, make better use of the empty space on the
          right side and disable the submit button when a question hasn’t been
          answered yet. This, along with general color and other UI improvements
          helped with the user experience and would allow users to complete
          their assignments more efficiently.
        </P>

        <div>
          <img
            src={LumenHWExampleBefore}
            alt="Lumen Homework Preview Screen Before Redesign"
          />
          <p className="text-lg text-dark-75 mt-3">
            Before Redesign: Assignment Preview Screen
          </p>
        </div>

        <div>
          <img
            src={LumenHWExample2Before}
            alt="Lumen Homework Example Screen Before Redesign"
          />
          <p className="text-lg text-dark-75 mt-3">
            Before Redesign: Assignment Question Screen
          </p>
        </div>

        <div>
          <img
            src={LumenHWExampleAfter}
            alt="Lumen Homework Preview Screen After Redesign"
          />
          <p className="text-lg text-dark-75 mt-3">
            After Redesign: Assignment Preview Screen
          </p>
        </div>

        <div>
          <img
            src={LumenHWExample2After}
            alt="Lumen Homework Example Screen After Redesign"
          />
          <p className="text-lg text-dark-75 mt-3">
            After Redesign: Assignment Question Screen
          </p>
        </div>
      </div>
    </div>
  );
}
