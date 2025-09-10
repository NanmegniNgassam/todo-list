const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        @Copyrights { currentYear }. All rights reserved to 
        <a target="_blank" href="https://gilles-ngassam.pisoftlite.com/"> Gilles NGASSAM </a>
      </p>
    </footer>
  );
}
 
export default Footer;