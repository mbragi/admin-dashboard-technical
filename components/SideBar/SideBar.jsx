'use client'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import styles from './sidebar.module.css'
export default function SideBar() {
  const pathName = usePathname()
  return (
    <nav>
       {/* If the path is /, then show the expanded sidebar */}
      {!['/conversations'].some((url)=> pathName.includes(url))  ? 
      <div className={styles.main_container_expanded}>
            <div className={styles.upper_container}>
              <div className={styles.logo_container}>
                <Image 
                  src="/assets/logo.svg"
                  alt="logo"
                  width={52}
                  height={53}
                />
                <h3>Metrix</h3>
              </div>
            
              <ul className={styles.nav_list}>
                <li className={['/conversation'].some(url => pathName.includes(url)) ? styles.nav_item : styles.active}>
                  <Image
                    src="/assets/icons/dashboard.svg"
                    alt="dashboard"
                    width={24}
                    height={24}
                  />
                  <a href="/">Dashboard</a>
                </li>
                <li className={styles.nav_item}>
                  <Image
                    src="/assets/icons/orders.svg"
                    alt="orders"
                    width={24}
                    height={24}
                  />
                  <a href="#">Orders <span>3</span></a>
                </li>
                <li className={styles.nav_item}>
                  <Image
                    src="/assets/icons/User.svg"
                    alt="customers"
                    width={24}
                    height={24}
                  />
                  <a href="#">Customers</a>
                </li>
                <li className={styles.nav_item}>
                  <Image
                    src="/assets/icons/inventory.svg"
                    alt="inventory"
                    width={24}
                    height={24}
                  />
                  <a href="#">Inventory</a>
                </li>
                <li className={styles.nav_item}>
                  <Image
                    src="/assets/icons/conversations.svg"
                    alt="conversations"
                    width={24}
                    height={24}
                  />
                  <a href="/conversations">Conversations <span>3</span></a>
                </li>
                <li className={styles.nav_item}>
                  <Image
                    src="/assets/icons/settings.svg"
                    alt="settings"
                    width={24}
                    height={24}
                  />
                  <a href="#">Settings</a>
                </li>
                </ul>
            
            </div>
        <div className={styles.lower_container}>
          <ul>
            <li className={styles.nav_contact}>
              <Image
                src="/assets/icons/phone.svg"
                alt="phone"
                width={24}
                height={24}
              />
              <a href="+2347065277686">Contact Us</a>
            </li>
            <li className={styles.nav_gift}>
              <div>
                <Image
                  src="/assets/icons/giftbox.svg"
                  alt="giftbox"
                  width={24}
                  height={24}
                />
                <a href="#">Free Gifts Await You</a>
              </div>
             <Link href='#' className={styles.link}>
              <p>Upgrade account 
                <span>
                  <Image
                    src="/assets/icons/arrow.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                  />
                </span>
              </p>
             </Link>
            </li>
            <a href='#' className={styles.nav_logout}>
              <Image
                src="/assets/icons/logout.svg"
                alt="logout"
                width={24}
                height={24}
              />
              <p>Logout</p>
            </a >
          </ul>
        </div>
      </div> :
       <>
        {/* If the path is not /, then show the collapsed sidebar */}
        <div className={styles.main_container_collapsed}>
        <div className={styles.upper_container}>
              <div className={styles.mobile_logo_container}>
                <Image 
                  src="/assets/logo.svg"
                  alt="logo"
                  width={52}
                  height={53}
                />
              </div>
            
              <ul className={styles.nav_list}>
                <Link href='/' className={['/conversation'].some(url => pathName.includes(url)) ? styles.mobile_nav_item : styles.mobile_active}>
                  <Image
                    src="/assets/Category.png"
                    alt="dashboard"
                    width={24}
                    height={24}
                  />
                </Link>
                <a href='#' className={styles.mobile_nav_item}>
                  <Image
                    src="/assets/icons/orders.svg"
                    alt="orders"
                    width={24}
                    height={24}
                  />
                </a>
                <a href='#' className={styles.mobile_nav_item}>
                  <Image
                    src="/assets/icons/User.svg"
                    alt="customers"
                    width={24}
                    height={24}
                  />
                </a>
                <a href='#' className={styles.mobile_nav_item}>
                  <Image
                    src="/assets/icons/inventory.svg"
                    alt="inventory"
                    width={24}
                    height={24}
                  />
                </a>
                <a  href='/conversations' className={['/conversation'].some(url => pathName.includes(url)) ? styles.mobile_active : styles.mobile_nav_item}>
                  <Image
                    src="/assets/Chat.png"
                    alt="conversations"
                    width={24}
                    height={24}
                  />
                </a>
                <a href='#' className={styles.mobile_nav_item}>
                  <Image
                    src="/assets/icons/settings.svg"
                    alt="settings"
                    width={24}
                    height={24}
                  />
                </a>
                </ul>

            </div>
            <div className={styles.lower_container}>
          <ul>
            <li className={styles.mobile_nav_contact}>
              <Image
                src="/assets/icons/phone.svg"
                alt="phone"
                width={24}
                height={24}
              />
            </li>
            <li className={styles.mobile_nav_gift}>
                <Image
                  src="/assets/icons/giftbox.svg"
                  alt="giftbox"
                  width={24}
                  height={24}
                />
            </li>
            <a href='#' className={styles.mobile_nav_logout}>
              <Image
                src="/assets/icons/logout.svg"
                alt="logout"
                width={24}
                height={24}
              />
            </a >
          </ul>
            </div>
        </div>
      </>}
    </nav>
  )
}
