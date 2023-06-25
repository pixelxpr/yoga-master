// Global components
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useState, useEffect } from "react";

// Local components
import { db } from "../firebase/initFirebase";

// Styles
import styles from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  const [footerText, setFooter] = useState("");

  useEffect(() => {
    const collectionRef = collection(db, "footer");
    const q = query(collectionRef);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setFooter(querySnapshot.docs.map((doc) => doc.data()));
    });

    return unsubscribe;
  }, []);

  return (
    <div className={styles.footer}>
      <div>{footerText ? footerText?.map((item) => item.copyright) : ""}</div>
      <div>
        Developed by
        <Link href="mailto:pixelxpr@gmail.com">
          <a target="_blank" rel="noopener noreferrer" className="link-item">
            Pixelxpr
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
