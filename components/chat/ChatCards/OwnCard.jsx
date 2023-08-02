import styles from '../../chat/Chat.module.css'
import Image from 'next/image'
export default function OwnCard({ data }) {

  return (
    <div className={styles.my_card_container}>
      <div className={styles.my_card}>
        <p>{data.message}</p>
      </div>
      <p>12:44pm <span className={styles.show}>
        <Image src='/assets/icons/delivered.svg'
          alt='delivered'
          width={12}
          height={12}
        />
      </span></p>
    </div>
  )
}
