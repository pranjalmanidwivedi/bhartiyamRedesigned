import { useState } from "react";

const Card = ({ image, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full md:w-100 p-4">
      <div className="border rounded-lg overflow-hidden shadow-md">
        <img src={image} alt={title} className="w-full h-48 object-cover" />

        <div className="flex items-center justify-between bg-yellow-400 px-4 py-3 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <h2 className="text-lg font-bold text-white">{title}</h2>
          <span className="text-2xl text-white">{isOpen ? "-" : "+"}</span>
        </div>

        {isOpen && (
          <div className="px-4 py-3 bg-gray-50 text-gray-700">
            <p className="text-sm">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const OfferSection = () => {
  return (
    <div className="flex items-center justify-center flex-col md:flex-row flex-wrap">
      <Card
        image="https://your-image-url-1.jpg"
        title="Special Education"
        description="Planned and systematically monitored arrangement of teaching procedures, adapted equipment and materials settings."
      />
      <Card
        image="https://your-image-url-2.jpg"
        title="Laboratories"
        description="State-of-the-art laboratories where curiosity meets practical learning across sciences and technology."
      />
      <Card
        image="https://your-image-url-3.jpg"
        title="Qualified Teachers"
        description="Experienced and passionate educators dedicated to nurturing and guiding students towards excellence."
      />
      <Card
        image="https://your-image-url-3.jpg"
        title="Events"
        description="Experienced and passionate educators dedicated to nurturing and guiding students towards excellence."
      />
      <Card
        image="https://your-image-url-3.jpg"
        title="Pre Classes"
        description="Experienced and passionate educators dedicated to nurturing and guiding students towards excellence."
      />
      <Card
        image="https://your-image-url-3.jpg"
        title="Smart Classes"
        description="Experienced and passionate educators dedicated to nurturing and guiding students towards excellence."
      />
    </div>
  );
};

export default OfferSection;
