import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import CardPanel from "@/components/CardPanel";
import InfoCard from "@/components/InfoCard";
import { notoSansThai } from "../utils/fonts";
import { PromoteCard } from "@/components/Promotecard";

export default function Home() {
  return (
    <main>
      <Banner />
      <PromoteCard></PromoteCard>
    </main>
  );
}
