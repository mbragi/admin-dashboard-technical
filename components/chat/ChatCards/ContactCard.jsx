import styles from '@/components/chat/Chat.module.css'
import Image from 'next/image'
export default function ContactCard({data}) {
  return (
   <div className={styles.text_card_container}>
   <div className={styles.text_card}>
     <p>{data.message}</p>
   </div>
   <p>12:44pm <span className={styles.hide}>
    <Image src='/assets/icons/delivered.svg'
    alt='delivered'
    width={12}
    height={10}
    />
    </span></p>
  </div> 
  )
}
