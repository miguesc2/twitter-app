import React from 'react'

function Footer() {
  const arr = [ "About",  "Help Center",  "Terms of Service",  "Privacy Policy",  "Cookies polic",  "Ad information",  "Blog",  "Condition",  "Jobs",  "Brand Resources",  "Adversiting",  "Marketing",  "Twitter for business",  "Developers",  "Guide",  "Setting",  "© 2021 Twitter, Inc." ]
  
  return (
    <footer className="register__container--footer mt-2">
      <ul className="register__container_list--footer">
        { arr.map( texto => {
          return (
            <li key={ texto }> <small> <a href="#x"> { texto } </a> </small> </li>
          )
        })}
      </ul>
    </footer>
  )
}

export default Footer
