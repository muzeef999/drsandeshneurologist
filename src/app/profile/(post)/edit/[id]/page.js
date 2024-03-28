import React from "react";
import style from "@/app/profile/post.module.css";

const page = () => {
  return (
    <div>
      <h1>Update text</h1>

      <div>
        <form>
          <input
            className={style.userInput}
            id="text"
            type="text"
            placeholder="title"
          />
          <input
            className={style.userInput}
            id="text"
            type="text"
            placeholder="desc"
          />
          <input
            className={style.userInput}
            id="text"
            type="text"
            placeholder="content"
          />
          <input
            className={style.userInput}
            id="text"
            type="text"
            placeholder="Username"
          />
          <input
            className={style.userInput}
            id="text"
            type="text"
            placeholder="img"
          />
          <button>Update button</button>
        </form>
      </div>
    </div>
  );
};

export default page;
