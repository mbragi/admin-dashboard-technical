'use client'
import { Row, Col, Grid} from 'antd'
const { useBreakpoint } = Grid;
import { useState, useEffect } from 'react'
import styles from './Chat.module.css'
import Image from 'next/image'
import {
 usePathname,
 useSearchParams,
 useParams,
 useRouter,
} from "next/navigation"
import { contactListData } from '@/utils/mockdata';
import ProductCard from './ChatCards/ProductCard';
import OwnCard from './ChatCards/OwnCard';
import ContactCard from './ChatCards/ContactCard';
import Day from './ChatCards/Day';

function Chat() {
 const screens = useBreakpoint()
 const [displayChat, setDisplayChat] = useState(false)
 const [openChat, setOpenChat] = useState(0)
 // console.log(openChat)
 return (
   <>
   {/* if breakpoint is less than md then show contact list alone and hide the chat section till the user clicks on a contact */}
   {screens.md ? (
   <Row justify={'space-between'} gutter={[5,15]} className={styles.chat_container} >
   <Col md={8} lg={6}>
    {/* contacts list  */}
    <ContactList setChatWith={setOpenChat} setDisplayChat={setDisplayChat} displayChat={displayChat}/>
   </Col>
    <Col md={16} lg={16}>
     {/* chat section  */}
       <ChatCard activeChat={openChat} setDisplayChat={setDisplayChat} displayChat={displayChat}/>
    </Col>
   </Row>
   )
   : (
    <MobileChat />
    )
   }
   </>
  )
 }

 function ContactList({setChatWith, setDisplayChat, displayChat}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(contactListData);
  const [activeContact, setActiveContact] = useState(0);
  
    // Handle search input change
    const handleSearchInputChange = (event) => {
     const query = event.target.value.toLowerCase();
     setSearchQuery(query);
     filterContacts(query);
   };
   
    // Get the last message for each contact
  const getLastMessagesForContacts = () => {
   const lastMessages = [];

   filteredContacts.forEach((contact) => {
     const { message } = contact;
     if (Array.isArray(message) && message.length > 0) {
       const lastMessage = message[message.length - 1];
       lastMessages.push({ ...contact, lastMessage });
     }
   });

   return lastMessages;
 };

   // Filter contacts based on the search query
   const filterContacts = (query) => {
     const filteredContacts = contactListData.filter((contact) =>
       contact.name.toLowerCase().includes(query)
     );
     setFilteredContacts(filteredContacts);
   };
  return (
   <div className={styles.contacts_list}>
     {/* header and search */}
     <div className={styles.contacts_list_header_container}>
      <div className={styles.contacts_list_header}>
      <h3 style={{color:'#2C2D33'}}>Contacts</h3>
      <h3 style={{color:'#A6A8B1'}}>{filteredContacts.length}</h3>
      </div>
      <div className={styles.search_container}>
       <Image
        src="/assets/icons/Search.svg"
        alt="search"
        width={20}
        height={20}

       />
       <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchInputChange}
       />
      </div>
    </div>
    {/* contacts list  container*/}
     <div className={styles.contacts_list_container}>
      {/* contact  */}
      {getLastMessagesForContacts().map((contact, index) => (
      
     <div className={index === activeContact ? styles.is_active: styles.contact_card} key={index} onClick={()=>{setActiveContact(index); setChatWith(index); setDisplayChat(!displayChat)}} >
      <div className={styles.contact_card_avatar}>
       <Image
        src={contact.avatar}
        alt="profile"
        width={42}
        height={42}
        style={{objectFit:'cover', height:'100%'}}
       />
      {contact.onlineStatus ? (  <Image
           src='/assets/icons/online.svg'
           alt='online'
           width={12}
           height={12}
           style={{position: 'absolute',top:'0', right:'0px'}}
         />) :   <Image
         src='/assets/icons/offline.svg'
         alt='offline'
         width={12}
         height={12}
         style={{position: 'absolute',top:'0', right:'0px'}}
       />}
      </div>
       <div className={styles.contact_card_details}>
        <div className={styles.card_details_upper}>
          <p>{contact.name}</p>
          {contact.status && 
          <span>{contact.status}</span>
          }
        </div>
        <p style={{ fontSize: '14px', fontWeight: '400' }}>
                {contact.lastMessage?.messages[contact.lastMessage.messages.length - 1].message}
              </p>
       </div>
     </div>
       )
      )}

     </div>
    </div>
  )
 }

 function MobileChat() {
 const [displayChat, setDisplayChat] = useState(false)
 const [openChat, setOpenChat] = useState(0)
 // console.log(openChat)
  return (
   <Row className={styles.chat_container} justify={'center'} align={'middle'} gutter={[10,15]}>
    {!displayChat ? (
     <Col xs={24} sm={24}>
      <ContactList setChatWith={setOpenChat} setDisplayChat={setDisplayChat} displayChat={displayChat}/>
     </Col>
    ) : (
     <Col xs={24} sm={24}>
      <ChatCard activeChat={openChat} setDisplayChat={setDisplayChat} displayChat={displayChat}/>
     </Col>
    )}
    </Row>
  )
}

function ChatCard({activeChat,setDisplayChat,displayChat}) {
 const [chatData, setChatData] = useState(contactListData[0].message)
 const [profileData,setProfileData] = useState(contactListData[0])
 const [data,setData] = useState()
 useEffect(()=>{
  setChatData(contactListData[activeChat].message)
  setProfileData(contactListData[activeChat])
 },[activeChat])
// let messages = {
// }
function handleTypeMessageInput(e){
 let {value}= e.target
 let message = {}
 message['message'] = value;
 setData(message)
}
 return (
  <div className={styles.chat_card_container}>
  {/* chat header  */}
  <div className={styles.chat_card_header}>
   <div className={styles.chat_card_header_avatar} onClick={()=>setDisplayChat(!displayChat)}>
    <Image
     src={profileData?.avatar}
     alt="profile"
     width={60}
     height={60}
     style={{objectFit:'cover', height:'100%'}}
    />
    </div>
    <div className={styles.chat_card_header_details}>
     <div className={styles.chat_card_header_details_top}>
       <h3>{profileData?.name}</h3>
       <div className={styles.card_header_links}>
        <span>new customer</span>
        <p>view profile</p>
       </div>
     </div>
      <div className={styles.chat_card_header_details_bottom}>
       <div className={styles.chat_card_status}>
        <span>
        {profileData?.onlineStatus?
         <Image
          src='/assets/icons/online.svg'
          alt='online'
          width={12}
          height={12}
          />:  <Image
          src='/assets/icons/offline.svg'
          alt='offline'
          width={12}
          height={12}
          />}
        </span>
        <p>{profileData?.onlineStatus ? "Online":" Offline"}</p>
        <p>{profileData?.time}</p>
       </div>
       <div className={styles.additional_info}>
        <Image
         src="/assets/icons/Bag.svg"
         alt="bag"
         width={20}
         height={20}
        />
        <p>0 orders</p>
      </div>
     </div>
  </div>
  </div>
  {/* chat body  */}
  <div className={styles.contacts_list_container}>

  {chatData?.map((dayData, index) => (
     <div key={index} style={{width: '100%'}}>
       <Day data={dayData.day} />
       {dayData.messages.map((message) => {
         if(message.name === "ad"){
          return <ProductCard data={message}/>
         }else if(message.name === 'contact'){
          return <ContactCard data={message}/>
         }else{
          return <OwnCard data={message}/>
         }
      }) }
     </div>
   ))}
  
  </div>
  {/* Type a Message  */}
  <div className={styles.type_a_message}>
   <span className={styles.span}>
    <Image
     src='/assets/icons/plus.svg'
     alt='plus'
     width={16}
     height={16}
     />
   </span>
    <input type="text" placeholder='Type a message' onChange={handleTypeMessageInput}/>
     <Image
      src='/assets/icons/emoji.svg'
      alt='emoji'
      width={12}
      height={12}
      />
     <button className={styles.send_button} >
       send
       <span>
        <Image
         src='/assets/icons/Send.svg'
         alt='send'
         width={16}
         height={16}
         />
       </span>
     </button>
  </div>
 </div>
 )
}
export default Chat