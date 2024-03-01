import styles from "./styles.module.css";

const svgList = [
  {
    title: 'discord',
    Svg: require('../../static/icons/discord.svg').default,
    link: 'https://discord.com/invite/BFkPKMsfuZ',
  },
  // {
  // title: 'linkedin',
  // Svg: require('../../static/icons/linkedin.svg').default,
  // color: 'black',
  // link: 'https://www.linkedin.com/groups/14232119/',
  // },
  {
    title: 'whats-app',
    Svg: require('../../static/icons/whatsapp.svg').default,
    color: 'black',
    link: 'https://whatsapp.com/channel/0029VaBbYitJUM2aOYiCd83O',
  },
  {
    title: 'slack',
    Svg: require('../../static/icons/slack.svg').default,
    color: '#2979ff',
    link: 'https://join.slack.com/t/codemastermindhq/shared_invite/zt-23wom4i3m-FOFl4BLtceOdeVOXQKxfLw',
  },
  {
    title: 'stackoverflow',
    Svg: require('../../static/icons/stack-overflow.svg').default,
    color: '#2979ff',
    link: 'https://stackoverflow.com/users/18530900/ajay-dhangar',
  },
];

const SvgImg = ({Svg, color, link}) => {
  return (
    <a href={link} target="_blank">
      <Svg className={styles.svg} style={{fill: color}} />
    </a>
  );
};



export default function HomepageHero() {
  return (
    <section className={styles.hero_section}>
      <div className={styles.myHeroContainer}>
        <div className={styles.leftContainer}>
          <h1 className={styles.leftContainer_h1}>Code Mastery</h1>
          <p className={styles.leftContainer_p}>
            Welcome to CodeMastermindHQ. Where innovation meets elegance in web
            development.
            <br />
            Join us for the future of coding excellence
          </p>

          <div className={styles.svgContainer}>
            <a
              href="/"
              className="header-github-link"
            />
            {svgList.map((item, index) => {
              return <SvgImg {...item} key={index} />;
            })}
          </div>
        </div>

        <div className={styles.rightContainer}>
          <img
            src="img/Hero.jpg"
            alt="HeroImg"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
    </section>
  );
}
