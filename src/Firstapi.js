import React, { useEffect, useState } from "react";

const FirstApi = ({ onApiDataChange }) => {
  const [watchData, setWatchData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);
    fetch('https://api.algobook.info/v1/watches/search/rolex')
      .then(response => response.json())
      .then(data => {
        setWatchData(data);
        setLoading(false);
        onApiDataChange(data);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData(); 
  }, [onApiDataChange]);

  return (
    <div className='api-tool'>
      <h1>About Us</h1>
      <p className="Apara">Welcome to WristAssessories  Elevate Your Style with Timeless Elegance!

At WristAssessories, we take pride in offering a curated collection of Rolex watches that transcend mere timekeeping – they are a symbol of enduring craftsmanship, precision, and unparalleled sophistication. As an authorized retailer of Rolex timepieces, we bring you the epitome of luxury wristwear.

Discover a World of Excellence:
Immerse yourself in the world of horological mastery with our meticulously selected range of Rolex watches. From the iconic Submariner to the timeless Datejust, each piece is a testament to the brand's legacy of innovation and unwavering commitment to quality.

Quality You Can Trust:
At WristAssessories, we understand that a Rolex is more than just a watch; it's a reflection of your individuality and success. Rest assured that every Rolex watch we offer is genuine, crafted with the finest materials, and undergoes rigorous testing to ensure its precision and longevity.

Expert Guidance:
Choosing the perfect Rolex is a personal journey, and our team of knowledgeable experts is here to assist you at every step. Whether you're a seasoned collector or a first-time buyer, we provide insights, advice, and a seamless shopping experience to make your selection process memorable.

Secure Transactions:
Your trust and satisfaction are our top priorities. WristAssessories ensures secure transactions, authenticity guarantees, and worldwide shipping, allowing you to indulge in the luxury of a Rolex watch with confidence.

More Than a Timepiece:
WristAssessories is more than a marketplace – it's a celebration of style and sophistication. Explore our blog for insightful articles on watch care, styling tips, and the fascinating history behind Rolex, creating a community where enthusiasts can share their passion for horology.

Join us at WristAssessories, where every Rolex is not just a watch but a statement of enduring elegance. Elevate your style, mark your success, and embark on a journey of timeless sophistication with WristAssessories – your destination for exquisite Rolex timepieces.</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <marquee className='marquee'>
  {watchData[0].collections.map((collections, index) => (
   <span  className='span01' key={index}>  {collections}</span>
  ))}
</marquee>

      )}
    </div>
  );
};

export default FirstApi;
