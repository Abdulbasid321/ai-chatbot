


import Head from "next/head";
import ChatWindow from "../app/components/ChatWindow";

export default function Home() {
  return (
    <>
      <Head>
        <title>School Chatbot</title>
      </Head>
      <main className="bg-white h-full">
        <ChatWindow />
      </main>
    </>
  );
}

