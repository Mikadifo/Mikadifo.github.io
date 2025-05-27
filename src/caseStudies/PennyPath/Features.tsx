import { H2, P } from "../ResponsiveTags";
import pennyPathInputs from "./imgs/pennyPathInputs.webp";
import pennyPathSuggestions from "./imgs/pennyPathSuggestions.webp";
import pennyPathErrors from "./imgs/pennyPathErrors.webp";

export default function Features() {
  return (
    <div>
      <H2>Features & How It Works</H2>

      <div className="flex flex-col gap-8">
        <P>
          In order to generate meaningful AI suggestions, we first need some
          user information such as an estimated budget, location and a spending
          category. However, flexibility was a very important part in our
          project, so we decided to let the user type in any location like a
          country, city or even something more specific as a street or town. We
          didn’t want the user to only have a set of specific categories to
          choose from, so we added a “Custom Category” input. These two changes
          were easy to implement with our current AI integration.
        </P>
        <img src={pennyPathInputs} alt="PennyPath Home Webpage User Inputs" />

        <P>
          Once we had all the user information we needed, we passed those
          parameters to GeminiAI to generate 3 meaningful spending suggestions
          based on the given inputs. Again, to keep the application flexible, we
          added two more options. The first to generate more suggestions based
          on the same inputs and the other to go back to the categories section
          to select a different category.
        </P>
        <img
          src={pennyPathSuggestions}
          alt="PennyPath Home Webpage User Inputs"
        />

        <P>
          Because of the freedom we allowed the user to have, we needed to do
          multiple validations on both the client and server side before
          generating the AI suggestions.
        </P>
        <img src={pennyPathErrors} alt="PennyPath Home Webpage User Inputs" />

        <P>
          We decided to do an early deployment when the application was working
          but it still didn’t have all the features we wanted to. This was done
          to make sure we had something to submit in the final day of the
          Hackathon. This also allowed us to work on one feature at a time, and
          deploy new versions as we go.
        </P>
      </div>
    </div>
  );
}
