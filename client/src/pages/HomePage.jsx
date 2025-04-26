import ImageSlider from "../components/ImageSlider";
import Navbar from "../components/Navbar";
import OfferSection from "../components/OfferSection";
import Footer from "../components/FooterSection";
import InfiniteCards from "../components/InfiniteCards";

export default function HomePage() {
  const slides = [
    "../images/slider_image_1.jpg",
    "../images/slider_image_2.jpg",
    "../images/slider_image_3.jpg",
  ];

  const data = [
    { quote: "Stay hungry, stay foolish.", name: "Steve Jobs", title: "Apple Founder" },
    { quote: "Believe you can and you're halfway there.", name: "Theodore Roosevelt", title: "Former President" },
    { quote: "Do what you can, with what you have.", name: "Theodore Roosevelt", title: "Leader" },
  ];
  
  return (
    <div className="h-full w-full">
      <Navbar />
      <ImageSlider images={slides} autoPlay interval={4000} />

      <div className="flex flex-col md:flex-row">
        {/* ABOUT */}
        <div className="w-full md:w-1/2  h-[800px] bg-black text-white flex flex-col items-center justify-center">
          <h1 className="text-4xl mb-24">About Us</h1>
          <p className="w-4/5 text-xl text-center md:text-left">
            Located in Beohari, Shahdol (M.P.), Bhartiyam School is dedicated to
            child‑centred, value‑based education. Our passionate faculty blends
            rigorous academics with sports, arts and life‑skills so every
            student grows into a confident, compassionate and resilient
            individual. In safe, well‑equipped classrooms and labs, curiosity
            thrives; in our playgrounds and clubs, talents blossom. At
            Bhartiyam, we don’t just teach for exams—we nurture minds and
            character, preparing children to lead and serve in a rapidly
            changing world.
          </p>
        </div>

        {/* CONTACT */}
        <div className="w-full md:w-1/2 h-[800px] flex flex-col border items-center justify-center">
          <h1 className="text-4xl mb-24">Get In Touch</h1>

          <form className="w-4/5">
            <input
              type="text"
              className="w-full h-14 font-medium border mb-5 text-center rounded-4xl"
              placeholder="Enter Your Name"
            />
            <input
              type="email"
              className="w-full h-14 font-medium border mb-5 text-center rounded-4xl"
              placeholder="Enter Your Email"
            />
            <input
              type="tel"
              className="w-full h-14 font-medium border mb-8 text-center rounded-4xl"
              placeholder="Enter Your Contact"
            />
            <button
              type="submit"
              className="w-full h-14 font-medium text-xl bg-yellow-500 rounded-4xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <h1 className="text-4xl mt-12 mb-10 md:mt-24 md:mb-20 text-center">
        What we do!
      </h1>
      <OfferSection />
      <InfiniteCards items={data} direction="left" speed="normal" />
      <Footer />
    </div>
  );
}
