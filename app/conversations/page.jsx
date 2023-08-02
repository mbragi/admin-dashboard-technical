'use client'
import { Row, Col, Button} from 'antd'
import { Breadcrumb } from 'antd';
import React from 'react';
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Chat from '../../components/chat/Chat'
import styles from './page.module.css'
import SideBar from '../../components/SideBar/SideBar';
// import {ReactComponent as HomeIcon} from '../../public/assets/icons/Home.svg'

export default function Conversations() {
  const pathName = usePathname()
  return (
    <div style={{display:'flex',width: '100vw'}}>
      <SideBar/>
      <div className={styles.conversations_main_container}>
        <Col span={24} style={{background: '#ffffff', width:'100%'}}>
          <Row className={styles.top_nav_upper_section}>
            <Col span={12}>
              <h3 style={{fontWeight:'500'}}>Conversations</h3>
            </Col>
            <Col span={12}>
              <div className={styles.top_nav_drop_down_container}>
                <div className={styles.drop_down_link}>
                  <p>Nancy shop 
                    <span>
                      <Image
                        src="/assets/icons/arrowdown.svg"
                        alt="arrow"
                        width={20}
                        height={20}
                      />
                    </span>
                  </p>
                </div>
                {/* notifications image  */}
                <Image
                src="/assets/icons/Notification.svg"
                  alt="notifications"
                  width={20}
                  height={20}
                />
                {/* Profile Avater  */}
                <Image
                  src="/assets/my_profile.png"
                  alt="profile"
                  width={32}
                  height={32}
                />
              </div>
            </Col>
          </Row >
          <Row className={styles.top_nav_bottom_section}>
            <Col span={24}>
                <Breadcrumb
                  items={[
                    {
                      href: '/',
                      title: <Image src="/assets/icons/Home.svg" alt="home" width={12} height={13} />,
                    },
                    {
                      href: '',
                      title: (
                        <>
                          {pathName.split('/')[1]}
                        </>
                      ),
                    },
                  ]}
                />
            </Col>
          </Row>
        </Col>
        {/* conversations section  */}
      <Col span={24} className={styles.conversations_container}>
            {/* conversation header  */}
          <Row className={styles.conversations_header} justify={'space-between'}>
            <Col span={8}>
              <p>conversation with customers</p>
            </Col>
            <Col span={8} >
              <div className={styles.top_nav_drop_down_container}>
              <Button type='primary' style={{borderRadius:'8px'}}>
                  New Message
              </Button>
              </div>
            </Col>
          </Row>
        </Col> 
          {/* conversation body  */}
            <Chat/>
      </div>
    </div>
  )
}
