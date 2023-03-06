import React from "react";
import Images from "./Image";
import FAQ from "./FAQ";
import Footer from "./Footer";

function App() {
  return (
    <>
      <main className="container">
        <div className="flex-cont">
          <Images />
          <section className="faq-sec">
            <h1>faq</h1>
            <FAQ />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
