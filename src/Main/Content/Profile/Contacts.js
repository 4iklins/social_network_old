import './Contacts.scss'

function Contacts (props) {
  let contacts = []
  for(let contact in props.contacts){
    if(props.contacts[contact]){
      contacts.push(<a className={`contact__${contact}`} href={`https://${props.contacts[contact].split('https://').join('')}`} key={contact}></a>)
    }
  }
  return contacts
}

export default Contacts