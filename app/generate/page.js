"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const GenerateContent = () => {
  const searchParams = useSearchParams();
  const [handle, sethandle] = useState(searchParams.get("handle"));
  // const [text, settext] = useState("");
  // const [link, setlink] = useState("");
  const [links, setlinks] = useState([{ text: "", link: "" }]);
  const [pic, setpic] = useState("");
  const [desc, setdesc] = useState("");
  const handleLink = (index, link, text) => {
    setlinks((initialLinks) => {
      return initialLinks.map((item, i) => {
        if (i == index) {
          return { text, link };
        } else {
          return item;
        }
      });
    });
  };
  const addLink = () => {
    setlinks(links.concat([{ text: "", link: "" }]));
  };
  const submitLink = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      handle: handle,
      // linktext: text,
      // linkurl: link,
      links: links,
      picture: pic,
      description: desc,
      action: "add",
    });
    console.log(raw);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const r = await fetch("/api/generate", requestOptions);
    const res = await r.json();
    if (res.success) {
      toast.success(res.message);
      sethandle("");
      setlinks([{ text: "", link: "" }]);
      setpic("");
      setdesc("");
    } else {
      toast.error(res.message);
    }
    // toast(res.message);
    // .then((response) => response.text())
    // .then((result) => console.log(result))
    // .catch((error) => console.error(error));
    // sethandle("");
    // settext("");
    // setlink("");
    // setpic("");
  };
  return (
    <>
      <ToastContainer></ToastContainer>
      <div className="bg-white min-h-screen grid grid-cols-2">
        {/* generate */}
        <div className="column-1 flex flex-col items-center justify-center">
          <h1 className="font-extrabold text-4xl">join linktree</h1>
          <p className="text-[#676b5f]">sign up for free!</p>
          <div className="flex flex-col gap-5 my-10">
            {/* <input
              className="bg-[#f6f7f5] p-4 px-4 py-2 bg-white focus:outline-black rounded-2xl font-light"
              type="text"
              name=""
              id=""
              placeholder="email"
            /> */}
            <div className="item">
              <h2 className="font-semibold text-2xl">1 : claim your handle</h2>
              <div className="mx-4 flex flex-col">
                <input
                  value={handle || ""}
                  onChange={(e) => sethandle(e.target.value)}
                  className="bg-[#f6f7f5] p-4 px-4 py-2 bg-white focus:outline-black rounded-2xl font-light"
                  type="text"
                  name=""
                  id=""
                  placeholder="choose a handle"
                />
              </div>
            </div>
            <div className="item">
              <h2 className="font-semibold text-2xl">2 : add your links</h2>
              {links &&
                links.map((item, index) => {
                  return (
                    <div key={index} className="mx-4 flex flex-col">
                      <input
                        value={item.text || ""}
                        onChange={(e) =>
                          handleLink(index, item.link, e.target.value)
                        }
                        className="bg-[#f6f7f5] p-4 px-4 py-2 bg-white focus:outline-black rounded-2xl font-light mx-2 my-1"
                        type="text"
                        name=""
                        id=""
                        placeholder="enter link text"
                      />
                      <input
                        value={item.link || ""}
                        onChange={(e) =>
                          handleLink(index, e.target.value, item.text)
                        }
                        className="bg-[#f6f7f5] p-4 px-4 py-2 bg-white focus:outline-black rounded-2xl font-light mx-2 my-1"
                        type="text"
                        name=""
                        id=""
                        placeholder="enter link"
                      />
                    </div>
                  );
                })}
              <button
                onClick={() => addLink()}
                className="bg-[#e9c0e9] text-[#676b5f] p-4 px-4 mx-2 py-2 focus:outline-black rounded-2xl font-semibold w-fit"
              >
                + add link
              </button>
            </div>
            <div className="item">
              <h2 className="font-semibold text-2xl">
                3 : edit your profile-picture and finalize a description
              </h2>
              <div className="mx-4 flex flex-col">
                <input
                  value={pic || ""}
                  onChange={(e) => setpic(e.target.value)}
                  className="bg-[#f6f7f5] p-4 px-4 py-2 bg-white focus:outline-black rounded-2xl font-light mx-2 my-1"
                  type="text"
                  name=""
                  id=""
                  placeholder="enter link to your picture"
                />
                <input
                  value={desc || ""}
                  onChange={(e) => setdesc(e.target.value)}
                  className="bg-[#f6f7f5] p-4 px-4 py-2 bg-white focus:outline-black rounded-2xl font-light mx-2 my-1"
                  type="text"
                  name=""
                  id=""
                  placeholder="enter description to your profile"
                />
              </div>
            </div>
            <button
              disabled={handle == "" || links[0].text == "" || pic == ""}
              onClick={() => {
                submitLink();
              }}
              className="disabled:bg-slate-300 bg-[#e9e9e9] text-[#676b5f] p-4 px-2 mx-2 py-2 my-2 focus:outline-black rounded-2xl font-semibold"
            >
              continue
            </button>
          </div>
        </div>
        <div className="column-2">
          {/* h-full h-screen */}
          <img
            className="bg-[#e9c0e9] object-contain w-full"
            src="/generate.png"
            alt="generate-your-links"
          />
        </div>
      </div>
    </>
  );
};

export default function Generate() {
  return (
    <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center font-bold">Loading...</div>}>
      <GenerateContent />
    </React.Suspense>
  );
}
