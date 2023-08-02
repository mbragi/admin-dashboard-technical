import React from 'react'
import styles from '../../chat/Chat.module.css'
import Image from 'next/image'


export default function ProductCard({ data }) {
  return (
    <div className={styles.text_card_container}>
      <div className={styles.product_card}>
        <Image
          src='/assets/product.png'
          alt='product'
          width={46}
          height={46}
        />
        <div className={styles.product_details}>
          <p className={styles.productName}>{data.productName}</p>
          <div className={styles.product_details_inner}>
            <p className={styles.productPrice}>{data.productPrice}</p>
            <p className={styles.productAvail}><span>{data.available}</span> in stock</p>
          </div>
        </div>
      </div>
    </div>
  )
}
