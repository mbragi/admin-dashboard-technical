'use client'
import Image from 'next/image'
import  styles from './page.module.css'
import  reuse from '@/app/conversations/page.module.css'
import {Col, Row, Breadcrumb} from  'antd'
import { usePathname } from 'next/navigation'
import {  Orders  } from '../utils/orderData'
import SideBar from '../components/SideBar/SideBar'
export default function Home() {
  const pathName = usePathname()
  let status = {
    pending: <span className={styles.pending}>Pending</span>,
    completed: <span className={styles.completed}>Completed</span>
  }
  return (
    <div style={{display:'flex',width: '100vw'}}>
      <SideBar/>
      <section className={ styles.main}>
        <Col span={24} style={{background: '#ffffff', width:'100%'}}>
          <Row className={ reuse.top_nav_upper_section}>
            <Col span={12}>
              <h3 style={{fontWeight:'500'}}>Dashboard</h3>
            </Col>
            <Col span={12}>
              <div className={ reuse.top_nav_drop_down_container}>
                <div className={ reuse.drop_down_link}>
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
          <Row className={ reuse.top_nav_bottom_section}>
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
        <div className={styles.wrapper}>
          <Row className={styles.summary_card_container} gutter={[20,15]}  align={'middle'}>
          <Col span={24} lg={6} >
                <div className={styles.summary_card}>
                  {/* card icon and dropdown icon division  */}
                    <div className={styles.summary_card_top}>
                      <div className={styles.summary_card_top_start}>
                        {/* card icon  */}
                        <Image
                        src='/assets/icon.png'
                        alt='cardicon'
                        width={20}
                        height={20}
                        />
                      </div>
                      <div className={styles.summary_card_top_end}>
                      <p>This year 
                        <span>
                          <Image
                          src="/assets/icons/arrowdown.svg"
                            alt="arrow"
                          width={16}
                          height={16}
                        />
                      </span>
                      </p>
                      </div>
                    </div>
                  {/* Card details section */}
                    <div className={styles.summary_card_bottom}>
                      <div className={styles.summary_card_upper_bottom}>
                        <p>Sales</p>
                        <h3>₦4,000,000.00</h3>
                      </div>
                    
                      <div className={styles.summary_card_lower_bottom}>
                        <p>Volume</p>
                        <h3>450{' '}<span>+20.00%</span></h3>
                      </div>
                    </div>
                </div>
  
              </Col>
               <Col span={24} lg={6} >
                <div className={styles.summary_card}>
                  {/* card icon and dropdown icon division  */}
                    <div className={styles.summary_card_top}>
                      <div className={styles.summary_card_top_start_user}>
                        {/* card icon  */}
                        <Image
                        src='/assets/icons/User.svg'
                        alt='cardicon'
                        width={20}
                        height={20}
                        />
                      </div>
                      <div className={styles.summary_card_top_end}>
                      <p>This year 
                        <span>
                          <Image
                          src="/assets/icons/arrowdown.svg"
                            alt="arrow"
                          width={16}
                          height={16}
                        />
                      </span>
                      </p>
                      </div>
                    </div>
                  {/* Card details section */}
                    <div className={styles.summary_card_bottom}>
                      <div className={styles.summary_card_upper_bottom}>
                        <p>Customers</p>
                        <h3>1,250{' '} <span>+15.80%</span></h3>
                      </div>
                    
                      <div className={styles.summary_card_lower_bottom}>
                        <p>Active</p>
                        <h3>1,180{' '}<span>+85%</span></h3>
                      </div>
                    </div>
                </div>
  
              </Col>
               <Col span={24} lg={10} >
                <div className={styles.summary_card}>
                  {/* card icon and dropdown icon division  */}
                    <div className={styles.summary_card_top}>
                      <div className={styles.summary_card_top_start_user}>
                        {/* card icon  */}
                        <Image
                        src='/assets/icons/Bag.svg'
                        alt='cardicon'
                        width={20}
                        height={20}
                        />
                      </div>
                      <div className={styles.summary_card_top_end}>
                      <p>This year 
                        <span>
                          <Image
                          src="/assets/icons/arrowdown.svg"
                            alt="arrow"
                          width={16}
                          height={16}
                        />
                      </span>
                      </p>
                      </div>
                    </div>
                  {/* Card details section */}
                    <div className={styles.summary_card_bottom}>
                      <div className={styles.summary_card_upper_bottom}>
                        <p>All Orders</p>
                        <h3>450</h3>
                      </div>
                      <div className={styles.summary_card_upper_bottom}>
                        <p>Pending</p>
                        <h3>5</h3>
                      </div>
                      <div className={styles.summary_card_lower_bottom}>
                        <p>Completed</p>
                        <h3>455</h3>
                      </div>
                    </div>
                </div>
  
              </Col>
             
          </Row>
          <Row className={styles.summary_card_container} gutter={[20,15]} align={'middle'}>
            <Col span={24} lg={14} order={1} className={styles.mobile_second}>
              <Row style={{width: '95%'}}>
                <Col span={24} lg={10}>
                  <div>

                  </div>
                </Col>
                <Col span={24} lg={10}>

                </Col>
              </Row>
              {/* N.B: this is not an optimal way to display a chart as library like chartjs exist for such purpose */}
              <Row className={styles.Bottom} align={'middle'}>
                  {/* using the image instead due to time constraint  */}
                  <Image
                  src='/assets/bottom.png'
                  alt='bottom'
                  width={300}
                  height={200}
                  className={styles.Bottom}
                  />
              </Row>
            </Col>
            <Col span={24} lg={10} order={2} className={styles.mobile_first}>
              <div className={styles.recent_order_container}>
                <p>Recent Orders</p>
                <div className={styles.inner_order_wrapper}>
                  {
                    Orders.map((item,index)=>{
                      return(
                        <div className={styles.product_card} style={{borderBottom:' 1px solid  #F1F3F9'}} key={index}>
                  <Image
                    src={item.avatar}
                    alt='product'
                    width={46}
                    height={46}
                    />
                    <div className={styles.product_details}>
                      <div className={styles.product_upper}>
                        <p className={styles.productName}>{item.name}</p>
                        <p className={styles.timestamp}>{item.time}</p>
                      </div>
                      <div className={styles.product_details_inner}>
                        <p className={styles.productPrice}>{item.price}</p>
                        <p>{status[item.status]}</p>
                      </div>
                    </div>
                  </div>
                      )
                    })
                  }
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
    )
}
//  Submission due  date: "1 Aug 2023", @mbragi .