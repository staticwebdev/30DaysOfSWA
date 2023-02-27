import React from 'react';
import styles from "./styles.module.css";

// Import Image
import Image from '@theme/IdealImage';

function RowCardItem({ img, title, description, link }) {
  return (
    <div className="row margin-vert--lg shadow--md">
      <div className="col col--4">
        <a href={link} target="_blank">
          <div className="text--center">
            <Image className={styles.colImg} img={img} />  
          </div>
        </a>
      </div>
      <div className="col margin-vert--xs">
        <div className={styles.colText}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function ListRowCard({ itemList }) {
  return (
    <section className={styles.features}>
      <div className="container">
        {itemList.map((props, idx) => (
          <RowCardItem key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
