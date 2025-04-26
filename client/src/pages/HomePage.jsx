import ImageSlider from "../components/ImageSlider";
import Navbar from "../components/Navbar";
import OfferSection from "../components/OfferSection";

export default function HomePage() {
  const slides = [
    "https://plus.unsplash.com/premium_photo-1744991859949-6297ee4b8f96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1745172366995-a55968e94797?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1744762567611-dee68f42ecc9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div className="h-full w-full">
      <Navbar />
      <ImageSlider images={slides} autoPlay interval={4000} />

      <div className="flex flex-col md:flex-row">
        {/* ABOUT */}
        <div className="w-full md:w-1/2 h-[800px] bg-black text-white flex flex-col items-center justify-center">
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
      <div className="features">
        <h1 className="text-4xl mt-12 mb-10 md:mt-24 md:mb-20 text-center">What we do!</h1>
        <OfferSection />
      </div>
    </div>
  );
}
