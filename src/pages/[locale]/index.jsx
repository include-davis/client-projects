import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/pages/Home.module.scss";
import Link from 'next/link'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    Home
    <Link href="/about" locale="en">
      English
    </Link>
    <br/>
    <Link href="/about" locale="zh">
      Chinese
    </Link>
    </>
  );
}
