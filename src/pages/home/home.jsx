import styles from "./home.module.scss";
import card1 from '../../assets/img/pr-Card-Img1.png'
import card2 from '../../assets/img/pr-Card-Img2.png'
import card3 from '../../assets/img/pr-Card-Img3.png'
import blog1 from '../../assets/img/home-BlogsImg1.png'
import blog2 from '../../assets/img/home-BlogsImg2.png'
import blog3 from '../../assets/img/home-BlogsImg3.png'
import blog4 from '../../assets/img/home-BlogsImg4.png'
import rasm1 from '../../assets/img/home-advertasingImg1.png'
import rasm2 from '../../assets/img/home-advertasingImg2.png'
import rasm3 from '../../assets/img/home-advertasingImg3.png'
import rasm4 from '../../assets/img/home-advertasingImg4.png'
import rasm5 from '../../assets/img/home-advertasingImg5.png'
import rasm6 from '../../assets/img/home-advertasingImg6.png'
import rasm7 from '../../assets/img/home-advertasingImg7.png'
import { LoveBoxIcon } from './../../assets/icon/loveBox-icon';
import { MessegaIcon } from './../../assets/icon/messega-icon';
import { LoveAboutIcon } from './../../assets/icon/loveAbout3-icon';
import { PhoneIcon } from './../../assets/icon/phone-icon';
import { ToMessageIcon } from './../../assets/icon/toMessage-icon';
import { InstagramColorIcon } from './../../assets/icon/instagramColor-icon';

export const Home = () => {
  return (
    <div>
        <div className={styles.bgImage}>
          <div className={styles.headerDiv}>
              <h1 className={styles.headerDiv_h1}>Discover summer promotions</h1>
              <h6 className={styles.headerDiv_h6}>Free sample and free shipping when you spend $50</h6>
              <div className={styles.headerBtn}>
                  <button className={styles.skincare}>Skincare</button>
                  <button className={styles.shopall}>Shop All</button>
              </div>
          </div>
      </div>
            <div className={styles.sectionDiv}>
              <h1 className={styles.sectionDiv_h1}>Our bestsellers</h1>
              <div className={styles.sectionDivcart}>
                  {/* <ArrowLeft/> */}
                  <div className={styles.sectionDivcartInner}>
                      <img src={card1} />
                      <h6 className={styles.sectionDivcartInner_h6}>Facial Balancing Gel</h6>
                      <p className={styles.sectionDivcartInner_p}>$ 45.00 - $ 99.00</p>
                  </div>
                  <div className={styles.sectionDivcartInner}>
                      <img src={card2} />
                      <h6 className={styles.sectionDivcartInner_h6}>Post-Shave Lotion</h6>
                      <p className={styles.sectionDivcartInner_p}>$ 45.00 - $ 99.00</p>
                  </div>
                  <div className={styles.sectionDivcartInner}>
                      <img src={card3} />
                      <h6 className={styles.sectionDivcartInner_h6}>Facial Balancing Gel</h6>
                      <p className={styles.sectionDivcartInner_p}>$ 45.00 - $ 99.00</p>
                  </div>
                  <div className={styles.sectionDivcartInner}>
                      <img src={card2} />
                      <h6 className={styles.sectionDivcartInner_h6}>Post-Shave Lotion</h6>
                      <p className={styles.sectionDivcartInner_p}>$ 45.00 - $ 99.00</p>
                  </div>
                  {/* <ArrowRight/> */}
              </div>
              <button className={styles.sectionDivcartInner_btn}>Shop All</button>
          </div>
          <div className={styles.EthicalBusiness}>
            <div className={styles.EthicalBusiness2}>
                <div className={styles.businessCart}>
                    <LoveBoxIcon/>
                    <h6 className={styles.businessCart_h6}>Ethical business</h6>
                    <p className={styles.businessCart_p}>Only green beauty products.</p>
                </div>
                <div className={styles.businessCart}>
                  <LoveBoxIcon/>
                    <h6 className={styles.businessCart_h6}>Shipped free & with love</h6>
                    <p className={styles.businessCart_p}>On orders abouve $50.</p>
                </div>
                <div className={styles.businessCart}>
                    <LoveAboutIcon/>
                    <h6 className={styles.businessCart_h6}>Delivered in 1-3 days</h6>
                    <p className={styles.businessCart_p}>And packaged with love.</p>
                </div>
                <div className={styles.businessCart}>
                  <MessegaIcon/>
                    <h6 className={styles.businessCart_h6}>Personalized experience</h6>
                    <p className={styles.businessCart_p}>Free consultations via email.</p>
                </div>
            </div>
          </div>
          <div className={styles.blog}>
            <h1 className={styles.blog_h1}>Blogs</h1>
            <div className={styles.blogs}>
                {/* <ArrowLeft/> */}
                <div className={styles.blogCart}>
                    <img src={blog1} />
                    <h6 className={styles.blogCart_h6}>Beauty  May 2, 2021</h6>
                    <p className={styles.blogCart_p}>Some beaty secrets from our editor in chief</p>
                </div>
                <div className={styles.blogCart}>
                    <img src={blog2} />
                    <h6 className={styles.blogCart_h6}>Fragrance  May 2, 2021</h6>
                    <p className={styles.blogCart_p}>Morning beauty routine: our main rules</p>
                </div>
                <div className={styles.blogCart}>
                    <img src={blog3} />
                    <h6 className={styles.blogCart_h6}> Beauty May 2, 2021</h6>
                    <p className={styles.blogCart_p}>Organic ingredients: do they even work?</p>
                </div>
                <div className={styles.blogCart}>
                    <img src={blog4} />
                    <h6 className={styles.blogCart_h6}>Makeup  May 2, 2021</h6>
                    <p className={styles.blogCart_p}>The best cosmetic products</p>
                </div>
                {/* <ArrowRight/> */}
            </div>
            <button className={styles.blogCartBtn}>View All Posts</button>
        </div>
        <div className={styles.help}>
                <h2 className={styles.help_h2}>How can we help?</h2>
            <div className={styles.helpDiv}>
                <div className={styles.helpCards}>
                  <MessegaIcon/>
                    <h6 className={styles.helpCards_h6}>Frequently asked questions</h6>
                    <p className={styles.helpCards_p}>If you have questions about products, orders or  account info, you may find answer in our FAQ.</p>
                    <button>View FAQ  </button>
                </div>
                <div className={styles.helpCards}>
                    <PhoneIcon/>
                    <h6 className={styles.helpCards_h6}>Give us a call</h6>
                    <p className={styles.helpCards_p}>You can always give us a call: Mon  to Fri from 9 am till 7 pm EST.</p>
                    <p className={styles.helpCards_h6}>+44 678 94830</p>
                </div>
                <div className={styles.helpCards}>
                    <ToMessageIcon/>
                    <h6 className={styles.helpCards_h6}>Drop us a line</h6>
                    <p className={styles.helpCards_p}>Drop us a line and we will get back to  you as soon as possible.</p>
                    <p className={styles.helpCards_h6}>hello@example.com</p>
                </div>
            </div>
          </div>
            <div className={styles.instagram}>
                <div className={styles.instagramFlex}><InstagramColorIcon/> <h4 className={styles.instagramFlex_h4}>Instagram</h4></div>
                <div className={styles.insta}>
                    <div className={styles.insta40}>
                        <img src={rasm1} className={styles.instaImg} />
                    </div>
                    <div className={styles.insta20}>
                        <img src={rasm2}  />
                        <img src={rasm3}  />
                    </div>
                    <div className={styles.insta20}>
                        <img src={rasm4}  />
                        <img src={rasm5}  />
                    </div>
                    <div className={styles.insta20}>
                        <img src={rasm6}  />
                        <img src={rasm7}  />
                    </div>
                </div>
              <button className={styles.instaBtn}>Follow Us @beautyshop</button>
          </div>
    </div>
  )
}

