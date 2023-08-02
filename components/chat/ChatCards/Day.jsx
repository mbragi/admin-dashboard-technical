import styles from '../../components/chat/Chat.module.css'
function Day({data}) {
  return (
   <div className={styles.text_card_container}>
   <div className={styles.Day}><span>{data}</span></div>
  </div>
  )
}

export default Day