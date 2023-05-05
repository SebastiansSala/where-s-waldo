import React from "react";

const Home = () => {
  const boards = [
    { img: "", id: 0, target: ["", "", ""] },
    { img: "", id: 1, target: ["", "", ""] },
    { img: "", id: 2, target: ["", "", ""] },
    { img: "", id: 3, target: ["", "", ""] },
    { img: "", id: 4, target: ["", "", ""] },
    { img: "", id: 5, target: ["", "", ""] },
    { img: "", id: 6, target: ["", "", ""] },
    { img: "", id: 7, target: ["", "", ""] },
  ];

  const handleRouter = (index) => {

  }

  return (
    <div className="flex flex-wrap gap-40">
      {boards.map((board, index) => {
        return (
          <div
            className="h-96 w-40 bg-slate-700 hover:shadow-xl transition-all duration-300"
            key={index}
            onClick={() => handleRouter(index)}
          >
          </div>
        );
      })}
    </div>
  );
};

export default Home;
